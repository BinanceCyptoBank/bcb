class PayPin extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- PAYMENT PIN STRUCTURE -->
            <div class="pay-pin-page-display">
                <!-- -------------------- -------------------- RECEIVE PAGE PARENT CONTAINER -------------------- -------------------- -->
                <div class="receive-parent-wrap" style="padding-bottom: 2.5vh">
                    
                    <div>
                        <!-- -------------------- Header container -------------------- -->
                        <div class="help-header-wrap dark-color">
                            <div class="container">
                                <div class="help-header-container">
                                    <!-- Left container-->
                                    <div class="help-left-container">
                                        <div class="help-header-img btn-display" onclick="TokenToReceive()">
                                            <img src="img/arrow-left.png" class="img-fluid">
                                        </div>
                                        <span class="help-header-txt">Deposit to Account</span>
                                    </div>
                                    <!-- Right container-->
                                    <div class="help-header-img">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                        
                        <div class="container">
                            
                            <div class="rulespolicy-txt">How to Deposit</div>
                            <p class="line-height-zero rulepolicy-lg-txt">1.Choose a payment method</p>
                            <p class="rulespolicy-sm-txt">Click on any of the payment method preferred by you. this action will navigate to customer care</p>
                            <p class="line-height-zero rulepolicy-lg-txt">2.Follow the instructions of the customer care.</p>
                            <p class="rulepolicy-lg-txt">3.Note to screenshot your payment, or better, keep your payment receipt safe.</p>
                            



                            <div class="rulespolicy-txt" style="padding-top: 2.5vh">Available Payment Options</div>
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/cashapp.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Cash App</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/paypal.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">PayPal</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/zelle.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Zelle</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/applepay.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Apple Pay</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/venmo.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Venmo</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/chime.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Chime</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/wellsfargo.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Wells Fargo</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/moneygram.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Money Gram</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/westernunion.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Western Union</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/america.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Bank of America</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pay-send-link-btn-wrap" onclick="document.location.href='./js/support.html'">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/citi.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Citi Bank</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img" style="transform: rotate(180deg)">
                                                <img src="img/chevron.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("pay-pin-page", PayPin);