const express = require('express');
const router = express.Router();

//company
const companyController = require('./controller/company.controller');

// router.get('/getcompanydata', async (req,res)=>{
//     res.status=200;
//     let comdata = await companyController.get_all_company(); 

// });

router.get('/download',async function(req,res){
   
    
    let allcompanies = await  companyController.get_all_company(); 
    let x =await companyController.createCsv(allcompanies);

   setTimeout(
    ()=>{
        res.download(__dirname+'/company.csv');
    },500
   );
   
});
module.exports = router
 