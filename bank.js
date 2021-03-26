       // login button event handler
        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function () {
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";           //same css a display:none; JS display = "none"; a 
            const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block";
        })

        // single page deposit button event handle

        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function () {
            // const depositAmount = document.getElementById("depositAmount").value;
            // const depositNumber = parseFloat(depositAmount);
            const depositNumber = getInputNumber("depositAmount");   /// function er vetorer function diye kora.

            // const currentDeposit = document.getElementById("currentDeposit").innerText;
            // const currentDepositNumber = parseFloat(currentDeposit);
            // const totalDeposit = depositNumber + currentDepositNumber;
            // document.getElementById("currentDeposit").innerText = totalDeposit ;

            // const currentBalance = document.getElementById("currentBalance").innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBalance = depositNumber + currentBalanceNumber;
            // document.getElementById("currentBalance").innerText = totalBalance ;

            if (depositNumber < 0) {
                alert("Deposit number cannot be negative");

            }
            else {
                document.getElementById("depositAmount").value = "";

                updateSpanText("currentDeposit", depositNumber);    // short coding

                updateSpanText("currentBalance", depositNumber);    // short coding

            }



        })

        // Withdraw button events  handler ::::
        const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function () {
            // const withdrawAmount = document.getElementById("withdrawAmount").value;
            // const withdrawNumber = parseFloat(withdrawAmount);
            const withdrawNumber = getInputNumber("withdrawAmount");

            updateSpanText("currentWithdraw", withdrawNumber);
            updateSpanText("currentBalance", -1 * withdrawNumber)     // negative korar jonno -1 * jekono songkhake ke gon korle - hobe

            document.getElementById("withdrawAmount").value = "";
        })



        function getInputNumber(id) {
            const amount = document.getElementById(id).value;       /// maining full korar jonno withdrawAmmount ke amount korar holo
            const amountNumber = parseFloat(amount);               /// r withdrawNumber ke amountNumber deya holow
            return amountNumber;
        }




        function updateSpanText(id, depositNumber) {
            const currentBalance = document.getElementById(id).innerText;           //shortcut coding current deposit er sobgola    
            const currentBalanceNumber = parseFloat(currentBalance);
            const totalBalance = depositNumber + currentBalanceNumber;
            document.getElementById(id).innerText = totalBalance;
        }
