/// <reference types="cypress"/>

import { DemoIFST } from "./pages/DemoIFST"

const ObjIFST = new DemoIFST();

//old

//login section
before('Login to IFST oomi', function () {
    ObjIFST.login()
})


describe('Add Contact', function () {

    //navigate to contact page
    before('Navigate to contact page', function () {
        ObjIFST.navToContact()
    })

    //ad new contactS
    it('Add new contact', function () {

        ObjIFST.addNewContact()
        ObjIFST.saveAndViewContact()
    })
})




