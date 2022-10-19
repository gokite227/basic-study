import React from "react";
import "resources/css/loginform.css";
import "resources/css/style.css";


const Home= () => {
    return (
        <div style={{width: "99vw",
            height: "100vh",
            backgroundColor:"#d3cbb4"}}>
            <section class="bg-light" >
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div class="col-12 col-lg-5">
                            <h2 class="display-4 lh-1 mb-4">Pit - a - pet</h2>
                            <p class="lead fw-normal text-muted mb-5 mb-lg-0">
                                "반려동물과 함께 더 오랜 시간을 함께하고 싶다.<br/> 반려동물의 질병으로 인한 이별이 빨리 오지 않았으면 좋겠다"<br/><br/>생각하여 만든 반려동물 헬스 케어 서비스입니다.
                            </p>
                        </div>
                        <div class="col-sm-8 col-md-6">
                            <div class="px-5 px-sm-0">
                                <img src="resources/imgs/cat_main.png" style= {{width:"90%", height:"90%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <aside class="text-center bg-gradient-primary-to-secondary">
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-xl-8">
                            <div class="h2 fs-1 text-white mb-4">"We want all our pets to live longer with <br/>our children!"</div>
                        </div>
                    </div>
                </div>
            </aside>
            <div id="features" style={{backgroundColor:"#EDE9DE"}}>
                <div class="container px-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div class="container-fluid px-5">
                                <div class="row gx-5">
                                    <div class="col-md-6 mb-5">
                                        <div class="text-center">
                                            <i class="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                            <h3 class="font-alt">반려동물의 심박수 측정</h3><br/>
                                            <p class="text-muted mb-0">반려동물의 심장 박동을 측정하여 심장병을 예방하고 초기에 발견할 수 있습니다.<br/><br/>
                                                특히 반려동물에게서 높은 확률로 발병하는 심근 비대증은 심장박동수를 수시로 체크하는 것만으로도 충분히 예방할 수 있습니다.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-5">
                                        
                                        <div class="text-center">
                                            <i class="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                            <h3 class="font-alt">반려동물의 건강을 기록</h3><br/>
                                            <p class="text-muted mb-0">매일 음수량, 식사량, 투약 기록, 이상 증상을 기록해 체계적인 관리를 시작해 보세요.<br/><br/>
                                                만성 질병에 걸려도 적절한 관리를 통해서 반려동물의 삶의 질을 높일 수 있습니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 order-lg-0">
                            <div class="features-device-mockup">
                                <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop class="gradient-start-color" offset="0%"></stop>
                                            <stop class="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle></svg>
                                <svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                                <svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                <div class="device-wrapper">
                                    <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                        <div class="screen bg-black">
                                            <video muted="muted" autoplay="" loop="" style={{maxWidth: "100%", height: "100%"}}>
                                                <source src="resources/assets/img/dog_run.mp4" type="video/mp4" /></video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header class="masthead">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6">
                    
                            <div class="mb-5 mb-lg-0 text-center text-lg-start">
                                <h1 class="display-1 lh-1 mb-3">Download the app!</h1>
                                <p class="lead fw-normal text-muted mb-5">앱을 다운로드하여 반려동물의 심박수와 건강을 기록해 보세요.</p>
                                <div class="d-flex flex-column flex-lg-row align-items-center">
                                    <a class="me-lg-3 mb-4 mb-lg-0" href="#!"><img class="app-badge" src="resources/assets/img/google-play-badge.svg" alt="..." /></a>
                                    <a href="#!"><img class="app-badge" src="resources/assets/img/app-store-badge.svg" alt="..." /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            
                            <div class="masthead-device-mockup">
                                <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop class="gradient-start-color" offset="0%"></stop>
                                            <stop class="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle></svg>
                                <svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                                <svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                                <div class="device-wrapper">
                                    <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                        <div class="screen bg-black">
                                            
                                            <video muted="muted" autoplay="" loop="" style={{maxWidth: "100%", height: "100%"}}><source src="resources/assets/img/demo-screen.mp4" type="video/mp4" /></video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section class="cta">
                <div class="cta-content">
                    <div class="container px-5">
                        <h2 class="text-white display-1 lh-1 mb-4">
                            Stop waiting.
                            <br />
                            Start recording.
                        </h2>
                        <a class="btn btn-outline-light py-3 px-4 rounded-pill" href="https://startbootstrap.com/theme/new-age" target="_blank">기록하러 가기</a>
                    </div>
                </div>
            </section>
            <section class="bg-gradient-primary-to-secondary" id="download">
                <div class="container px-5">
                    <h2 class="text-center text-white font-alt mb-4">Get the app now!</h2>
                    <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <a class="me-lg-3 mb-4 mb-lg-0" href="#!"><img class="app-badge" src="resources/assets/img/google-play-badge.svg" alt="..." /></a>
                        <a href="#!"><img class="app-badge" src="resources/assets/img/app-store-badge.svg" alt="..." /></a>
                    </div>
                </div>
            </section>
            <footer class="bg-black text-center py-5">
                <div class="container px-5">
                    <div class="text-white-50 small">
                        <div class="mb-2">&copy; Your Website 2022. All Rights Reserved.</div>
                        <a href="#!">Privacy</a>
                        <span class="mx-1">&middot;</span>
                        <a href="#!">Terms</a>
                        <span class="mx-1">&middot;</span>
                        <a href="#!">FAQ</a>
                    </div>
                </div>
            </footer>

        <div class="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-gradient-primary-to-secondary p-4">
                        <h5 class="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                        <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-0 p-4">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>

                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>

                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            
                            <div class="d-grid"><button class="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Home;