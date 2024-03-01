class Account extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ACCOUNT STRUCTURE -->
            <div class="account-page-display">
            
                <!-- -------------------- Header container -------------------- -->
                <div class="help-header-wrap dark-color" style="margin-bottom:1em;">
                    <div class="container">
                        <div class="help-header-container">
                            <!-- Left container-->
                            <div class="help-left-container" id="transact-main-left-container">
                                <div class="help-header-img btn-display" id="notify-back-btn">
                                    <img src="img/arrow-left.png" class="img-fluid">
                                </div>
                                <span class="help-header-txt">Notification</span>
                            </div>
                            <!-- Right container-->
                            <div class="help-header-img"></div>
                        </div>
                    </div>
                </div>
                <!-- -------------------- -------------------- -------------------- -->
                <!-- -------------------- -------------------- -------------------- -->


                <!-- Message Panel -->
                <div class="notification-panel" id="notification-message-panel">
                    
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("account-page", Account);