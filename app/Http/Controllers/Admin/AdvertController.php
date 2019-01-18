<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class AdvertController extends Controller
{
    
    //广告模快
    
    public function advert_add(){


       return view('admin.advert');
    }

    
    //广告显示
    public function advert_show(){


      return view('admin.advert_show');
    }
    //广告删除
    public function advert_delete(){



    }

    //获取表单
    
    public function advert_get(Request $request){
      $all = $request->all();
        $header = $request->headers();
        var_dump($header);
      /*  $name = $request->input('advert');

        $url = $request->input('url');
        *//*
       var_dump($all);enctype="multipart/form-data*/

         $file = $request->file('images');
         var_dump($file);



       // $head =$request->all();
        //var_dump($head);


        
    }


}
