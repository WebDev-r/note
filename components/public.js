const express=require('express');
const getData=require('../controller/getData')
const postData=require('../controller/postData')
const public=express();
public.post('/getData',getData)
public.post('/postData',postData)
module.exports=public;