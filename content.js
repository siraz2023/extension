(function () {
  const darkModeCSS = `
    body {
      background-color: black !important;
      color: #ffffff !important;
    }
    a {
      color: green !important;
      font-weight:600;
    }
    .dark-mode-toggle {
      display: none !important;
    }
    html, body, body *:not(a):not(h1):not(h2):not(h3):not(h4):not(h5):not([class*="title"]):not([id*="title"]) {
      color: var(--text-color) !important;
    }
    html *:not(body):not(span):not(a):not([style*=background-image]):not([style*=background-color]):not([style*=url]):not(figure):not(svg):not(img):not([class*=dialog]):not([id*=dialog]):not([class*=Dialog]):not([id*=Dialog]):not([role*=dialog]):not([class*=sub-items]):not([class=sbsb_b]):not(input):not(select):not(textarea):not(option):not([style*=background-position]):not([class*=menu]):not([class*=logo]):not([class*=Menu]):not([class*=Header]):not([class*=header]):not([role*=menuitem]):not([aria-labelledby*=menu]):not([class*=msg-overlay]):not([class*=dropdown-options]):not([class*=rsdc-dual-month]):not([class*=popup]):not([class*=bui-calendar__content]):not([class*=tooltip]):not(header):not([class*=playControls__control]):not([class*=playControls__elements]):not([class=now-playing-bar-container]):not([class*=flowtip-flyout-modal]):not([data-tl-id=FeaturedTopNav-FeaturedTopNavFlyout]):not([for*=variant-swatcher-item-]):not([class*=masthead]):not([class*=fbDockChatTabFlyout]):not([role=banner]):not([class*=Footer_graphikFont_2aDKW]):not([class=css-kp204g]):not([class=nova-c-dropdown__body]):not([class*=nova-c-card__body]):not([class*=StoreNavDropdown--fullWidthLifestyleImgs]):not(dd):not([class*=jfk-radiobutton-radio]):not([class*=jfk-checkbox-checkmark]):not([class*=nova-c-modal__body]):not([class*=repeatControl]):not([class*=playbackTimeline__progressBackground]):not([class*=playbackTimeline__progressBar]):not([class=trb_nh_un_ulw]):not([class=trb_nh_uw]):not([class=trb_nh_lw]):not([class=trb_nh_sf]):not([class=uc-corpNav-flyout]):not([class*=js_global-nav-wrap]):not([class=container__3tWa1zW_F3ZU29BQPEWw9Q]):not([class*=ms-bg-color-white]):not([class=h-c-header__bar]):not([class=h-c-header__nested-nav-list]):not([class=glue-c-zippy__content-container]):not([class=fixed-tabs]):not([class*=nova-c-modal__footer--spacing-inherit]):not([class*=bigsearch-area]):not([id=hplogo]):not([class*=user-form-overlay]):not([class*=modal-overlay]):not([class*=rapid-nonanchor-lt]):not([class*=JPdR6b]):not([class*=wds-dropdown-level-2__content]):not([class*=wds-dropdown__content]):not([class*=wds-global-navigation]):not([class*=wds-global-navigation-wrapper]):not(artdeco-typeahead-deprecated-results-container):not([class*=dropdownMenu]):not([class*=search-result]):not([class*=dropdown]):not([class*=Dropdown]):not([role=navigation]):not([class=clearfix]):not([class*=navigation]):not([class*=Navigation]):not([class*=cookie]):not([class*=fixed]):not([class*=drop-]):not([class=variant-swatch]):not([class=level-one-list]):not([class*=sc-hd-ms-panel]):not([class*=sc-hd-ms-hover]):not([class*=sc-hd-panel]):not([class*=sc-hd-ms-full-ver]):not([class*=networknav__hovernav-wrapper]):not([class=icbu-simple-shopping-cart-panel]):not([class*=_icon]):not([class*=hamburger__bar]):not([class*=j-select-opts]):not([class*=J-search-suggest]):not([class=aside-floating]):not([class*=floating-account]):not([class=floating-w]):not([class=desktop-categoryContainer]):not([class=desktop-userActions]):not([class*=gws-flights-widgets-]):not([class*=ReactModal__Content--after-open]):not([class=nav-background-static]):not([role='img']):not([class*="planGrid__planLabel"]):not([class*="nf-loading-spinner"]):not([class=aajZCb]):not([class="sitemap screen-only"]) {
      border-color: rgba(255, 255, 255, 0.1) !important;
      outline: none !important;
      box-shadow: none !important;
      background-image: none !important;
      background: none !important;
      background-color: rgba(0, 0, 0, 0) !important;
      color: #ffffff !important;
    }
    .Link--primary {
    color: #ffffff !important;
    }
  `;

  const styleElement = document.createElement("style");
  styleElement.classList.add("dark-mode-style");
  styleElement.textContent = darkModeCSS;

  const existingStyleElement = document.querySelector(".dark-mode-style");

  if (existingStyleElement) {
    existingStyleElement.remove();
  } else {
    document.head.appendChild(styleElement);
  }
})();
