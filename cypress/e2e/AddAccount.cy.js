/// <reference types="cypress"/>

import { DemoIFST } from "./pages/DemoIFST"

const ObjIFST = new DemoIFST();

//old

    //login section
    before('Login to IFST oomi', function(){
        ObjIFST.login()
    })
    

describe('Add Account', function(){

        //navigate to account page
        before('Navigate to account page', function(){
            ObjIFST.navToAccount()
        })
    
        //ad new contact
        it('Add new contact', function(){
            ObjIFST.addNewAccount()
            ObjIFST.saveAndViewAccount()
        })
})