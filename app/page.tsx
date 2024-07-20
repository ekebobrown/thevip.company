'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"
import { Montserrat, Oswald, Poppins, Ubuntu } from "next/font/google";
import { useEffect } from 'react';

import { Newsletter } from "@/components/forms";

const header_font = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const body_font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, [])

  return (
    <main className={`justify-content-center`} >
      <div className='vh-100 d-flex flex-column flex-md-row justify-content-center'>
        <div className='d-flex flex-column align-items-center justify-content-center col-12 col-md-6 order-md-1 p-5'>
          {/*<Image
            className={styles.logo}
            src="/logo.png"
            alt="The Visual Identify Partners Logo"
            width={210}
            height={60}
            priority
          />*/}
          <p className="fs-4 fw-normal">Coming Soon..</p><p className="fw-medium text-center fs-6 px-md-5 mb-5 text-dark-emphasis">We are working on something magnificient and we will like you to be the first to experience it. Submit your e-mail so we can reserve you a seat in the front row.</p>
          <Newsletter/>
          <div className="d-flex flex-row mt-3 gap-2 justify-content-center">
            <em className="align-middle">Follow us:</em>
            <Link href="/#" className="text-reset"><i className="fa-brands fa-facebook fs-4"></i></Link>
            <Link href="/#" className="text-reset"><i className="fa-brands fa-twitter fs-4"></i></Link>
            <Link href="/#" className="text-reset"><i className="fa-brands fa-linkedin fs-4"></i></Link>
          </div>
        </div>
        <div className="d-flex flex-column position-relative col-12 col-md-6 flex-grow-1 order-md-0 justify-content-center" style={{background: "url('cyber-blackout.jpg')"}}>
          <div className="flex-fill bg-black" style={{opacity:0.8}}>
          </div>
          <div className={`${header_font.className} position-absolute start-0 top-50 translate-middle-y text-white text-center p-4 w-100`}>
            <div className="d-flex flex-column text-uppercase display-1 lh-1">The <div>Visual <span className="text-secondary border border-1 text-info-emphasis">&nbsp;Identity&nbsp;</span> </div>Partner</div>
            <span className={`${body_font.className} fs-6 text-secondary`}>Copyright &copy; 2024 - theVIP.company</span>
          </div>
        </div>
      </div>
      {/*<div className="d-flex flex-row justify-content-center gap-1">Powered by <Image src="/vercel.svg" width={60} height={20} alt="Vercel Logo"/></div>*/}
    </main>
  );
}
