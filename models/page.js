var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://ritikrustagi:ritik27@cluster0.rod2ljb.mongodb.net/?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })

// Page schema 
const PageSchema=new Schema({

        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
         content:{
            type:String,
            required:true,
            trim: true
        },
        sorting:{
            type:Number,
            trim: true,
            default: 100
        }

});
module.exports = PageSchema;

// var Page=mongoose.exports=mongoose.model('Page',PageSchema);