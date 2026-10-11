package in.org.bengaliculturalsociety.katolroadpujo;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.provider.Browser;
import android.view.ViewGroup;
import android.webkit.DownloadListener;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends Activity {
    private static final String START_URL = "file:///android_asset/www/index.html";
    private static final String LOCATION_URL = "https://maps.app.goo.gl/8EA5eTDX1d6P9J738";
    private static final String LOCATION_TEXT =
            "Katol Road Durga Pujo 2026\n"
                    + "CPWD Ground, opposite Police Line Takli, Seminary Hills, Nagpur\n"
                    + LOCATION_URL;

    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(255, 248, 233));
        webView.setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setLoadsImagesAutomatically(true);
        settings.setMediaPlaybackRequiresUserGesture(true);
        settings.setSupportMultipleWindows(false);
        settings.setUserAgentString(settings.getUserAgentString() + " KatolRoadPujoAndroid/1.0");

        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);
        webView.setWebViewClient(new PujoWebViewClient());
        webView.setWebChromeClient(new WebChromeClient());
        webView.setDownloadListener(downloadListener);

        setContentView(webView);

        if (savedInstanceState == null) {
            webView.loadUrl(START_URL);
        } else {
            webView.restoreState(savedInstanceState);
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) {
            webView.onResume();
        }
    }

    @Override
    protected void onPause() {
        if (webView != null) {
            webView.onPause();
        }
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.stopLoading();
            webView.setWebChromeClient(null);
            webView.setWebViewClient(null);
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }

    private final DownloadListener downloadListener = (url, userAgent, contentDisposition, mimetype, contentLength) ->
            openExternal(Uri.parse(url));

    private void shareLocation() {
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_SUBJECT, "Katol Road Durga Pujo 2026");
        intent.putExtra(Intent.EXTRA_TEXT, LOCATION_TEXT);
        startActivity(Intent.createChooser(intent, "Share pujo location"));
    }

    private boolean handleNavigation(Uri uri) {
        String scheme = uri.getScheme();
        if (scheme == null || scheme.equals("file") || scheme.equals("about") || scheme.equals("data")) {
            return false;
        }

        if (scheme.equals("pujo") && "share-location".equals(uri.getHost())) {
            shareLocation();
            return true;
        }

        if (scheme.equals("tel")) {
            openIntent(new Intent(Intent.ACTION_DIAL, uri));
            return true;
        }

        if (scheme.equals("intent")) {
            try {
                Intent intent = Intent.parseUri(uri.toString(), Intent.URI_INTENT_SCHEME);
                openIntent(intent);
            } catch (Exception error) {
                Toast.makeText(this, "Unable to open this link", Toast.LENGTH_SHORT).show();
            }
            return true;
        }

        if (scheme.equals("http") || scheme.equals("https") || scheme.equals("mailto") || scheme.equals("geo")) {
            openExternal(uri);
            return true;
        }

        return false;
    }

    private void openExternal(Uri uri) {
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        intent.putExtra(Browser.EXTRA_APPLICATION_ID, getPackageName());
        openIntent(intent);
    }

    private void openIntent(Intent intent) {
        try {
            startActivity(intent);
        } catch (ActivityNotFoundException error) {
            Toast.makeText(this, "No app is available to open this link", Toast.LENGTH_SHORT).show();
        }
    }

    private class PujoWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            if (!request.isForMainFrame()) {
                return false;
            }
            return handleNavigation(request.getUrl());
        }

        @Override
        @SuppressWarnings("deprecation")
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            return handleNavigation(Uri.parse(url));
        }
    }
}
