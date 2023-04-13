import React,{useState,useEffect} from 'react';
import'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus}from'@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Side from "./res.png";
import"./login.css"

export function Login(){
    return(
        <>
           <div className="container-fluid">
                        <div className="row  pt-5">
                            <div className="col-lg-7">
                                    <img src={Side} alt="No image" className="log_img" height="500px" />
                            </div>

                            <div classNameName="my-5   col-lg-5 ">
                                <div className='col-lg-2'></div>
                                <div className='col-lg-8 text-center bor_log'>
                                    <h2 className='text-center'>Sign in to JioMart</h2>
                                       <p>to access your Addresses, Orders & Wishlist.</p>
                            
                                     <div className="log_4 mt-5 ">
                                     +91<input type="number" id="num" name="numb" value="" className="otp" placeholder="- Enter your phone number" classNameName="otp_in"/>
                                    </div>
                                
                                    <div className="pt-5">
                                    <input type="button" id="btn" name="btn" value="GET OTP" className="otp_btn bt pt mr-5" />
                                    <p className="mt-2">By continuing, you agree to our <span className="log_sp">Terms of Service</span> and <span className="log_sp"> Privacy & Legal Policy </span></p>
                        
                                    </div>
                                 </div>   
                                 \<div className='col-lg-2'></div>

                            </div>

                        </div>
                    </div>
        </>
    );
}






