(function(){
    var modules={
        "panel-main-asteroid":    			 {url:"$H/m/elig-questions-data.html",Table:"asteroid-partb-screening",form_module:"elig-questions-form"},
        "elig-questions-form":    			 {url:"$H/m/elig-questions-form.html",Table:"asteroid-partb-screening"},
        "panel-main-asteroid-eligible":      {url:"$H/m/elig-questions-eligible-data.html",Table:"asteroid-partb-screening",form_module:"panel-main-asteroid-eligible-form"},
        "panel-main-asteroid-eligible-form":		    {url:"$H/m/elig-questions-eligible-form.html",Table:"asteroid-partb-screening"},
        "panel-main-asteroid-non-eligible":  {url:"$H/m/elig-questions-non-eligible-data.html",Table:"asteroid-partb-screening"},
        "panel-main-asteroid-eligible-full": {url:"$H/m/elig-questions-eligible-full-data.html",Table:"asteroid-partb-screening"},
        "panel-main-asteroid-dsa":      {url:"$H/m/dsa-data.html",Table:"asteroid-dsa-partb-record",form_module:"panel-main-asteroid-dsa-form"},
        "panel-main-asteroid-dsa-form":		    {url:"$H/m/dsa-form.html",Table:"asteroid-dsa-partb-record"},
        "panel-main-asteroid-ess":      {url:"$H/m/ess-data.html",Table:"asteroid-ess-partb-record",form_module:"panel-main-asteroid-ess-form"},
        "panel-main-asteroid-ess-form":		    {url:"$H/m/ess-form.html",Table:"asteroid-ess-partb-record"},
        "panel-main-asteroid-psqi":      {url:"$H/m/psqi-data.html",Table:"asteroid-psqi-partb-record",form_module:"panel-main-asteroid-psqi-form"},
        "panel-main-asteroid-psqi-form":		    {url:"$H/m/psqi-form.html",Table:"asteroid-psqi-partb-record"},
        "not_elig":                             {url:"$H/m/not_elig.html"},
        "questionnaires":                       {url:"$H/m/oq-panel.html"},
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
