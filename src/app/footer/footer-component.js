import React from 'react'

import './footer.scss';

function SocialHandler({ href, src }) {
    return (
        <a href={href} target='_blank'>
            <img src={src} height='35px' width='35px' />
        </a>
    )
}

export default function FooterComponent() {
    return (
        <footer className="footer-container">
            <div className='footer-name'>IAMDEEPAK</div>
            <div className='footer-email'>deepak311997@gmail.com</div>
            <div className='footer-handlers'>
                <SocialHandler href='https://www.linkedin.com/in/deepak-v-3519a2125/' src='assets/img/linkedin.svg' />
                <SocialHandler href='https://github.com/deepak311997' src='assets/img/github.svg' />
                <SocialHandler href='https://www.behance.net/jesstan' src='assets/img/instagram.svg' />
            </div>
            <div className="footer-signature">
                <div className="footer-signature__left">Made with</div>
                <div className="footer-signature__heart">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 92 72"
                        enableBackground="new 0 0 92 72"
                        aria-labelledby="heartTitle"
                        role="img"
                    >
                        <title id="heartTitle">A Heart Full of Love</title>
                        <path
                            fill="#ff005d"
                            d="M82.32,7.888c-8.359-7.671-21.91-7.671-30.271,0l-5.676,5.21l-5.678-5.21c-8.357-7.671-21.91-7.671-30.27,0 c-9.404,8.631-9.404,22.624,0,31.255l35.947,32.991L82.32,39.144C91.724,30.512,91.724,16.52,82.32,7.888z"
                        />
                    </svg>
                </div>
                <div className="footer-signature__right">
                    by&nbsp;@iamdeepak
                </div>
            </div>
        </footer>
    );
}
