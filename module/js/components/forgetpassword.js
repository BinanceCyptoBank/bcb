class ForgetPassword extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- FORGET PASSWORD STRUCTURE -->
            <div class="forget-password-page-display">
                <!-- -------------------- Header container -------------------- -->
                <div class="help-header-wrap dark-color">
                    <div class="container">
                        <div class="help-header-container">
                            <!-- Left container-->
                            <div class="help-left-container">
                                <div class="help-header-img btn-display" onclick="BackToCommunity()">
                                    <img src="svg/arrowleft.svg" class="img-fluid">
                                </div>
                                <span class="help-header-txt" id="send-sss-header-txt">Community</span>
                            </div>
                            <!-- Right container-->
                            <div id="community-header-img"></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->




                <!-- -------------------- Header container -------------------- -->
                <div class="bio-main-wrap">
                    <div class="comment-main-con" style="padding-bottom: 1.5em">
                        
                        <div class="container">
                            <!-- -------------------- Founder Image container -------------------- -->
                            <div class="community-detail-wrap">
                                <div class="community-img-wrap">
                                    <div class="community-img">
                                        <img src="svg/binance.svg" class="img-fluid">
                                    </div>
                                </div>
                                <!---->
                                <div class="community-name">Binance CryptoBank Community</div>
                                <div class="community-status"><span id="forgot-member-num">0</span> · Members</div>
                            </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                        </div>
                        
                        
                        <div class="community-btn-wrap">
                            <!-- Button -->
                            <div class="community-btn-con" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="community-btn">
                                        <div class="receive-send-link-btn one-line">Contact Community Admin</div>
                                        <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                            <img src="svg/chevron.svg" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <!-- Members container -->
                        <div class="member-list-container" id="owner-member-list-container"></div>
                        <div class="member-list-container" id="member-list-container"></div>
                        
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("forget-password-page", ForgetPassword);