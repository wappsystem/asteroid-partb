(function(){
    var modules={
        "panel-main-asteroid":    			 {url:"$H/m/elig-questions-data.html",Table:"asteroid-partb-record",form_module:"elig-questions-form"},
        "elig-questions-form":    			 {url:"$H/m/elig-questions-form.html",Table:"asteroid-partb-record"},
        "panel-main-asteroid-eligible":      {url:"$H/m/elig-questions-eligible-data.html",Table:"asteroid-partb-record",form_module:"panel-main-asteroid-eligible-form"},
        "panel-main-asteroid-eligible-form":		    {url:"$H/m/elig-questions-eligible-form.html",Table:"asteroid-partb-record"},
        "panel-main-asteroid-non-eligible":  {url:"$H/m/elig-questions-non-eligible-data.html",Table:"asteroid-partb-record"},
        "panel-main-asteroid-eligible-full": {url:"$H/m/elig-questions-eligible-full-data.html",Table:"asteroid-partb-record"},
        "panel-main-asteroid-dsa":      {url:"$H/m/dsa-data.html",Table:"asteroid-dsa-partb-record",form_module:"panel-main-asteroid-dsa-form"},
        "panel-main-asteroid-dsa-form":		    {url:"$H/m/dsa-form.html",Table:"asteroid-dsa-partb-record"},
    }
    //for(m in modules){$vm.module_list[m]=modules[m];}


    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
