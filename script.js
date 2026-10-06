// ==========================
// REGISTER
// ==========================

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const mobile =
                document.getElementById("mobile").value;

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;

            const message =
                document.getElementById("message");


            if (password !== confirmPassword) {

                message.innerHTML =
                    "Passwords do not match!";

                message.style.color = "red";

                return;
            }


            localStorage.setItem(
                "userName",
                name
            );

            localStorage.setItem(
                "userEmail",
                email
            );

            localStorage.setItem(
                "userMobile",
                mobile
            );

            localStorage.setItem(
                "userPassword",
                password
            );


            message.innerHTML =
                "Account created successfully!";

            message.style.color = "green";


            setTimeout(function() {

                location.href = "login.html";

            }, 1000);
        }
    );
}


// ==========================
// LOGIN
// ==========================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const email =
                document.getElementById(
                    "loginEmail"
                ).value;

            const password =
                document.getElementById(
                    "loginPassword"
                ).value;

            const savedEmail =
                localStorage.getItem(
                    "userEmail"
                );

            const savedPassword =
                localStorage.getItem(
                    "userPassword"
                );

            const message =
                document.getElementById(
                    "loginMessage"
                );


            if (
                email === savedEmail &&
                password === savedPassword
            ) {

                localStorage.setItem(
                    "loggedIn",
                    "true"
                );

                message.innerHTML =
                    "Login successful!";

                message.style.color =
                    "green";


                setTimeout(function() {

                    location.href =
                        "home.html";

                }, 1000);

            } else {

                message.innerHTML =
                    "Invalid email or password!";

                message.style.color =
                    "red";
            }
        }
    );
}


// ==========================
// PASSPORT APPLICATION
// ==========================

const passportForm =
    document.getElementById("passportForm");

if (passportForm) {

    passportForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "passportName"
                ).value;

            const dob =
                document.getElementById(
                    "dob"
                ).value;

            const gender =
                document.getElementById(
                    "gender"
                ).value;

            const mobile =
                document.getElementById(
                    "passportMobile"
                ).value;

            const email =
                document.getElementById(
                    "passportEmail"
                ).value;

            const address =
                document.getElementById(
                    "address"
                ).value;

            const city =
                document.getElementById(
                    "city"
                ).value;

            const state =
                document.getElementById(
                    "state"
                ).value;

            const pincode =
                document.getElementById(
                    "pincode"
                ).value;


            const applicationId =
                "PASS" +
                Math.floor(
                    100000 +
                    Math.random() * 900000
                );


            const application = {

                id: applicationId,

                name: name,

                dob: dob,

                gender: gender,

                mobile: mobile,

                email: email,

                address: address,

                city: city,

                state: state,

                pincode: pincode,

                status:
                    "Application Submitted"
            };


            localStorage.setItem(
                "passportApplication",
                JSON.stringify(application)
            );


            const result =
                document.getElementById(
                    "result"
                );


            result.style.display =
                "block";


            result.innerHTML = `

                <h3>
                    Application Submitted Successfully!
                </h3>

                <p>
                    <strong>
                        Application ID:
                    </strong>
                    ${applicationId}
                </p>

                <p>
                    <strong>
                        Applicant:
                    </strong>
                    ${name}
                </p>

                <p>
                    <strong>
                        Status:
                    </strong>
                    Application Submitted
                </p>

                <button
                    type="button"
                    onclick="location.href='status.html'"
                >
                    Check Status
                </button>

            `;

        }
    );
}


// ==========================
// STATUS
// ==========================

const statusForm =
    document.getElementById("statusForm");

if (statusForm) {

    statusForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const enteredId =
                document.getElementById(
                    "applicationId"
                ).value.trim();


            const savedApplication =
                localStorage.getItem(
                    "passportApplication"
                );


            const result =
                document.getElementById(
                    "statusResult"
                );


            if (!savedApplication) {

                result.style.display =
                    "block";

                result.innerHTML = `

                    <h3>
                        No Application Found
                    </h3>

                    <p>
                        Please submit an application first.
                    </p>

                `;

                return;
            }


            const application =
                JSON.parse(
                    savedApplication
                );


            if (
                enteredId.toUpperCase() ===
                application.id.toUpperCase()
            ) {

                result.style.display =
                    "block";

                result.innerHTML = `

                    <h3>
                        Application Found
                    </h3>

                    <p>
                        <strong>
                            Application ID:
                        </strong>
                        ${application.id}
                    </p>

                    <p>
                        <strong>
                            Applicant:
                        </strong>
                        ${application.name}
                    </p>

                    <p>
                        <strong>
                            Email:
                        </strong>
                        ${application.email}
                    </p>

                    <p>
                        <strong>
                            Status:
                        </strong>
                        ${application.status}
                    </p>

                    <p>
                        <strong>
                            Next Step:
                        </strong>
                        Document Verification
                    </p>

                `;

            } else {

                result.style.display =
                    "block";

                result.style.background =
                    "#ffebee";

                result.style.borderLeft =
                    "5px solid #c62828";

                result.innerHTML = `

                    <h3 style="color:#c62828;">
                        Application Not Found
                    </h3>

                    <p>
                        Please enter the correct
                        Application ID.
                    </p>

                `;
            }

        }
    );
}


// ==========================
// LOGOUT
// ==========================

function logout() {

    localStorage.removeItem("loggedIn");

    location.href = "login.html";
}
