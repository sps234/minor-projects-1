// Date: 06-07-2024, 19:15-19:50,

import React, { useState } from 'react'


function PwdGenereator() {

    const [pwd, setPwd] = useState("");
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [len, setLen] = useState( 6 );


    const rc = "~!@#$%^&*()_";
    const num = "0123456789";



    function pwdGen() {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let curPwd = "";

        if (numAllowed && charAllowed) {
            str = num + rc;
        }
        else if (charAllowed) {
            str = rc+str;
        }
        else if (numAllowed) {
            str = num+str;
        }
        

        for (let i = 0; i < len; i++) {
            const ind = Math.floor(Math.random() * (str.length - 1));
            // console.log( ind  );
            curPwd = curPwd + str[ind];
        }


        console.log( curPwd );
        setPwd( curPwd );

    }

    function copyPwd() {
        navigator.clipboard.writeText(pwd);
        console.log("Copy Password");
    }


    return (
        <>
            <div className='bg-gray-500 h-screen'>
                <div className='bg-gray-300 ml-3 mr-3 text-center p-3'>

                    <h2>Password Generator </h2>

                    <div >
                        <label> Password : </label>
                        <input type='text' value={pwd} />
                        <button className='bg-green-600 ml-1 pl-2 pr-2 rounded' onClick={ copyPwd }> Copy </button>
                    </div>

                    <div>

                        <div>
                            <input type="range" min={6} max={20} value={ len } onChange={ ( e ) => setLen( e.target.value ) } />
                            <label> Length : ({ len })</label>
                        </div>

                        <div>
                            <input type="checkbox" onClick={ ()=> setNumAllowed( !numAllowed ) } />
                            <label> Numbers </label>
                        </div>

                        <div>
                            <input type="checkbox"  onClick={ ()=> setCharAllowed( !charAllowed )}/>
                            <label> Characters </label>
                        </div>

                    </div>

                    <button className='bg-green-500 rounded' onClick={pwdGen}> Generate Password </button>
                </div>
            </div>
        </>
    )
}

export default PwdGenereator