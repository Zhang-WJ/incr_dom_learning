(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_update_dummy=runtime.caml_update_dummy;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Incr_map_Incr_map_intf=
      caml_string_of_jsbytes("Incr_map__Incr_map_intf"),
     cst_incr_map=caml_string_of_jsbytes("incr_map"),
     cst_src_incr_map_intf_ml=caml_string_of_jsbytes("src/incr_map_intf.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_incr_map$0=caml_string_of_jsbytes("incr_map"),
     cst_incr_map$1=caml_string_of_jsbytes("incr_map"),
     cst_Incr_map_Incr_map_intf$0=
      caml_string_of_jsbytes("Incr_map__Incr_map_intf"),
     cst_Invalid_indices=caml_string_of_jsbytes("Invalid indices"),
     cst_BUG_Hit_supposedly_impossi=
      caml_string_of_jsbytes
       ("BUG: Hit supposedly impossible case in Incr_map.index_by"),
     cst_impossible_case_BUG_in_inc=
      caml_string_of_jsbytes("impossible case: BUG in incr_map.ml subrange"),
     cst_Incr_map=caml_string_of_jsbytes("Incr_map"),
     cst_incr_map$2=caml_string_of_jsbytes("incr_map"),
     cst_src_incr_map_ml=caml_string_of_jsbytes("src/incr_map.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_incr_map$3=caml_string_of_jsbytes("incr_map"),
     cst_incr_map$4=caml_string_of_jsbytes("incr_map"),
     cst_Incr_map$0=caml_string_of_jsbytes("Incr_map"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Core_kernel=global_data.Core_kernel,
     Incremental=global_data.Incremental,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Info=global_data.Core_kernel__Info,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Bool=global_data.Core_kernel__Bool,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Maybe_bound=global_data.Core_kernel__Maybe_bound,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Tuple=global_data.Core_kernel__Tuple,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Core_kernel_Lazy=global_data.Core_kernel__Lazy,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Incr_map=[0];
    caml_register_global(41,Incr_map,"Incr_map__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_map_Incr_map_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_map);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_map_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_map$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_map$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_map_Incr_map_intf$0);
    var Incr_map_Incr_map_intf=[0];
    caml_register_global(46,Incr_map_Incr_map_intf,"Incr_map__Incr_map_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_map);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_map$2);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_map_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_map$3,cst$0);
    var
     _v_=[0,caml_string_of_jsbytes("entries")],
     _w_=[0,caml_string_of_jsbytes("actual_value")],
     _x_=[0,caml_string_of_jsbytes("key")],
     _q_=[0,caml_string_of_jsbytes("node_is_unnecessary")],
     _r_=[0,caml_string_of_jsbytes("node_is_invalid")],
     _s_=[0,caml_string_of_jsbytes("node_is_const")],
     _t_=[0,caml_string_of_jsbytes("node_info")],
     _u_=[0,caml_string_of_jsbytes("saved_value")],
     _p_=[0,caml_string_of_jsbytes("src/incr_map.ml"),805,8],
     _o_=[0,caml_string_of_jsbytes("src/incr_map.ml"),805,8],
     _n_=[0,caml_string_of_jsbytes("src/incr_map.ml"),799,8],
     _m_=[0,caml_string_of_jsbytes("src/incr_map.ml"),799,8],
     _l_=[0,caml_string_of_jsbytes("src/incr_map.ml"),790,8],
     _k_=[0,caml_string_of_jsbytes("src/incr_map.ml"),790,8],
     _j_=[0,caml_string_of_jsbytes("src/incr_map.ml"),790,8],
     _i_=[0,caml_string_of_jsbytes("src/incr_map.ml"),790,8],
     _g_=[0,caml_string_of_jsbytes("src/incr_map.ml"),787,6],
     _h_=[0,[0,0,0]],
     _b_=[0,caml_string_of_jsbytes("to_")],
     _c_=[0,caml_string_of_jsbytes("from")],
     _d_=[0,0,0],
     _f_=[0,caml_string_of_jsbytes("src/incr_map.ml"),771,10],
     _e_=[0,caml_string_of_jsbytes("src/incr_map.ml"),772,10],
     _a_=[0,caml_string_of_jsbytes("src/incr_map.ml"),208,12];
    function with_old(i,f)
     {var old=[0,0];
      function _cQ_(a)
       {var b=caml_call2(f,old[1],a);old[1] = [0,[0,a,b]];return b}
      return caml_call2(Incremental[74][3][5],i,_cQ_)}
    function unordered_fold
     (opt,update,specialized_initial,map,init,add,remove)
     {if(opt)
       var sth=opt[1],data_equal=sth;
      else
       var data_equal=Core_kernel[231];
      function default$0(key,old_data,new_data,acc)
       {return caml_call3
                (add,key,new_data,caml_call3(remove,key,old_data,acc))}
      var update$0=caml_call2(Core_kernel_Option[49],update,default$0);
      return with_old
              (map,
               function(old,new_in)
                {if(old)
                  {var
                    match=old[1],
                    old_out=match[2],
                    old_in=match[1],
                    _cO_=
                     function(acc,param)
                      {var change=param[2],key=param[1],_cP_=change[1];
                       if(847852583 === _cP_)
                        {var old=change[2];return caml_call3(remove,key,old,acc)}
                       if(1013247643 <= _cP_)
                        {var match=change[2],new$0=match[2],old$0=match[1];
                         return caml_call4(update$0,key,old$0,new$0,acc)}
                       var new$1=change[2];
                       return caml_call3(add,key,new$1,acc)};
                   return caml_call5
                           (Core_kernel_Map[76],old_in,new_in,data_equal,old_out,_cO_)}
                 if(specialized_initial)
                  {var initial=specialized_initial[1];
                   return caml_call2(initial,init,new_in)}
                 return caml_call3(Core_kernel_Map[51],new_in,init,add)})}
    function unordered_fold_nested_maps(opt,update,incr_map,init,add,remove)
     {if(opt)
       var sth=opt[1],data_equal=sth;
      else
       var data_equal=Core_kernel[231];
      if(update)
       var update$0=update[1],update$1=update$0;
      else
       var
        update$1=
         function(outer_key,inner_key,old_data,new_data,acc)
          {return caml_call4
                   (add,
                    outer_key,
                    inner_key,
                    new_data,
                    caml_call4(remove,outer_key,inner_key,old_data,acc))};
      function _cH_(outer_key,inner_map,acc)
       {function _cN_(inner_key,data,acc)
         {return caml_call4(remove,outer_key,inner_key,data,acc)}
        return caml_call3(Core_kernel_Map[51],inner_map,acc,_cN_)}
      function _cI_(outer_key,inner_map,acc)
       {function _cM_(inner_key,data,acc)
         {return caml_call4(add,outer_key,inner_key,data,acc)}
        return caml_call3(Core_kernel_Map[51],inner_map,acc,_cM_)}
      var _cJ_=0;
      return unordered_fold
              (0,
               [0,
                function(outer_key,old_inner_map,new_inner_map,acc)
                 {function _cK_(acc,param)
                   {var diff=param[2],inner_key=param[1],_cL_=diff[1];
                    if(847852583 === _cL_)
                     {var data_removed=diff[2];
                      return caml_call4
                              (remove,outer_key,inner_key,data_removed,acc)}
                    if(1013247643 <= _cL_)
                     {var match=diff[2],new_data=match[2],old_data=match[1];
                      return caml_call5
                              (update$1,outer_key,inner_key,old_data,new_data,acc)}
                    var data_added=diff[2];
                    return caml_call4(add,outer_key,inner_key,data_added,acc)}
                  return caml_call2
                          (caml_call3
                            (Core_kernel_Map[76],old_inner_map,new_inner_map,data_equal),
                           acc,
                           _cK_)}],
               _cJ_,
               incr_map,
               init,
               _cI_,
               _cH_)}
    function with_comparator(get_comparator,x,f)
     {var
       _cF_=caml_call2(Incremental[10],x,get_comparator),
       _cG_=caml_call2(Incremental[34],0,_cF_);
      return caml_call2(Incremental[26],_cG_,f)}
    function with_comparator$0(map,f)
     {return with_comparator(Core_kernel_Map[2],map,f)}
    function of_set(set)
     {function _cA_(comparator)
       {var
         old_input=[0,caml_call1(Core_kernel_Set[3][1],comparator)],
         old_output=[0,caml_call1(Core_kernel_Map[104][1],comparator)];
        function _cB_(new_input)
         {function _cC_(output,param)
           {if(0 === param[0])
             {var k=param[1];return caml_call2(Core_kernel_Map[40],output,k)}
            var k$0=param[1];
            return caml_call3(Core_kernel_Map[30],output,k$0,0)}
          var
           _cD_=old_output[1],
           _cE_=caml_call2(Core_kernel_Set[17],old_input[1],new_input),
           new_output=caml_call3(Core_kernel_Sequence[18],_cE_,_cD_,_cC_);
          old_input[1] = new_input;
          old_output[1] = new_output;
          return new_output}
        return caml_call2(Incremental[10],set,_cB_)}
      return with_comparator(Core_kernel_Set[5],set,_cA_)}
    function generic_mapi(witness,opt,map,f)
     {if(opt)
       var sth=opt[1],data_equal=sth;
      else
       var data_equal=Core_kernel[231];
      return with_old
              (map,
               function(old,input)
                {if(old)
                  {var
                    match=old[1],
                    old_output=match[2],
                    old_input=match[1],
                    _cy_=
                     function(output,param)
                      {var change=param[2],key=param[1],_cz_=change[1];
                       if(847852583 === _cz_)
                        return caml_call2(Core_kernel_Map[40],output,key);
                       var
                        new_data=1013247643 <= _cz_?change[2][2]:change[2],
                        res=caml_call2(f,key,new_data);
                       if(witness)
                        {if(res)
                          {var output_data=res[1];
                           return caml_call3
                                   (Core_kernel_Map[31],output,key,output_data)}
                         return caml_call2(Core_kernel_Map[40],output,key)}
                       return caml_call3(Core_kernel_Map[31],output,key,res)};
                   return caml_call5
                           (Core_kernel_Map[76],
                            old_input,
                            input,
                            data_equal,
                            old_output,
                            _cy_)}
                 return witness
                         ?caml_call2(Core_kernel_Map[58],input,f)
                         :caml_call2(Core_kernel_Map[50],input,f)})}
    function mapi(data_equal,map,f){return generic_mapi(0,data_equal,map,f)}
    function filter_mapi(data_equal,map,f)
     {return generic_mapi(1,data_equal,map,f)}
    function with_old2(i1,i2,f)
     {var old=[0,0];
      function _cx_(a1,a2)
       {var b=caml_call3(f,old[1],a1,a2);old[1] = [0,[0,a1,a2,b]];return b}
      return caml_call3(Incremental[12],i1,i2,_cx_)}
    function merge(opt,_co_,left_map,right_map,f)
     {if(opt)
       var sth=opt[1],data_equal_left=sth;
      else
       var data_equal_left=Core_kernel[231];
      if(_co_)
       var sth$0=_co_[1],data_equal_right=sth$0;
      else
       var data_equal_right=Core_kernel[231];
      return with_old2
              (left_map,
               right_map,
               function(old,new_left_map,new_right_map)
                {var comparator=caml_call1(Core_kernel_Map[2],new_left_map);
                 if(old)
                  var
                   x=old[1],
                   old_output=x[3],
                   old_right_map=x[2],
                   old_left_map=x[1];
                 else
                  var
                   empty=caml_call1(Core_kernel_Map[104][1],comparator),
                   old_output=empty,
                   old_right_map=empty,
                   old_left_map=empty;
                 var
                  left_diff=
                   caml_call3
                    (Core_kernel_Map[75],
                     old_left_map,
                     new_left_map,
                     data_equal_left),
                  right_diff=
                   caml_call3
                    (Core_kernel_Map[75],
                     old_right_map,
                     new_right_map,
                     data_equal_right);
                 function _cp_(output,diff_element)
                  {if(2 === diff_element[0])
                    {var
                      right_key=diff_element[2][1],
                      match$3=diff_element[1],
                      left_key=match$3[1],
                      _cv_=caml_call2(comparator[1],left_key,right_key);
                     if(! caml_call2(Core_kernel[87],_cv_,0))
                      throw [0,Assert_failure,_a_];
                     var key$0=left_key}
                   else
                    var match=diff_element[1],key=match[1],key$0=key;
                   function new_data(param)
                    {var _cw_=param[1];
                     if(847852583 === _cw_)return 0;
                     var x=1013247643 <= _cw_?param[2][2]:param[2];
                     return [0,x]}
                   switch(diff_element[0])
                    {case 0:
                      var
                       match$0=diff_element[1],
                       left_diff=match$0[2],
                       right_data_opt=
                        caml_call2(Core_kernel_Map[37],new_right_map,key$0),
                       right_data_opt$0=right_data_opt,
                       left_data_opt=new_data(left_diff);
                      break;
                     case 1:
                      var
                       match$1=diff_element[1],
                       right_diff=match$1[2],
                       right_data_opt$1=new_data(right_diff),
                       right_data_opt$0=right_data_opt$1,
                       left_data_opt=
                        caml_call2(Core_kernel_Map[37],new_left_map,key$0);
                      break;
                     default:
                      var
                       right_diff$0=diff_element[2][2],
                       match$2=diff_element[1],
                       left_diff$0=match$2[2],
                       right_data_opt$2=new_data(right_diff$0),
                       left_data_opt$0=new_data(left_diff$0),
                       right_data_opt$0=right_data_opt$2,
                       left_data_opt=left_data_opt$0}
                   if(left_data_opt)
                    {var _ct_=left_data_opt[1];
                     if(right_data_opt$0)
                      var
                       y=right_data_opt$0[1],
                       _cu_=caml_call2(f,key$0,[0,737457313,[0,_ct_,y]]);
                     else
                      var _cu_=caml_call2(f,key$0,[0,847852583,_ct_]);
                     var output_data_opt=_cu_}
                   else
                    if(right_data_opt$0)
                     var
                      y$0=right_data_opt$0[1],
                      output_data_opt=caml_call2(f,key$0,[0,-57574468,y$0]);
                    else
                     var output_data_opt=0;
                   if(output_data_opt)
                    {var data=output_data_opt[1];
                     return caml_call3(Core_kernel_Map[31],output,key$0,data)}
                   return caml_call2(Core_kernel_Map[40],output,key$0)}
                 function _cq_(param,_cs_)
                  {var right_key=_cs_[1],left_key=param[1];
                   return caml_call2(comparator[1],left_key,right_key)}
                 var
                  _cr_=
                   caml_call3
                    (Core_kernel_Sequence[60],left_diff,right_diff,_cq_);
                 return caml_call3
                         (Core_kernel_Sequence[18],_cr_,old_output,_cp_)})}
    function generic_mapi_with_comparator(witness,cutoff,opt,lhs,comparator,f)
     {if(opt)
       var sth=opt[1],data_equal=sth;
      else
       var data_equal=Core_kernel[231];
      var
       incremental_state=caml_call1(Incremental[4],lhs),
       empty_map=caml_call1(Core_kernel_Map[104][1],comparator),
       prev_map=[0,empty_map],
       prev_nodes=[0,empty_map],
       acc=[0,empty_map];
      function _b__(param){return acc[1]}
      var
       result=caml_call3(Incremental[77][2][2],incremental_state,0,_b__),
       on_inner_change=
        witness
         ?function(key,opt)
           {var old=acc[1];
            if(opt)
             var
              data=opt[1],
              _cn_=caml_call3(Core_kernel_Map[31],old,key,data);
            else
             var
              _cn_=
               caml_call2(Core_kernel_Map[41],old,key)
                ?caml_call2(Core_kernel_Map[40],old,key)
                :old;
            acc[1] = _cn_;
            return 0}
         :function(key,data)
           {acc[1] = caml_call3(Core_kernel_Map[31],acc[1],key,data);return 0},
       lhs_change=[];
      caml_update_dummy
       (lhs_change,
        [246,
         function(_cb_)
          {function _cc_(map)
            {function _cd_(nodes,param)
              {var changed=param[2],key=param[1],_ce_=changed[1];
               if(847852583 === _ce_)
                {var
                  match=caml_call2(Core_kernel_Map[38],nodes,key),
                  dep=match[2],
                  node=match[1],
                  nodes$0=caml_call2(Core_kernel_Map[40],nodes,key);
                 caml_call2(Incremental[77][2][7],result,dep);
                 acc[1] = caml_call2(Core_kernel_Map[40],acc[1],key);
                 caml_call1(Incremental[77][2][5],node);
                 return nodes$0}
               if(1013247643 <= _ce_)
                {var
                  match$0=caml_call2(Core_kernel_Map[38],nodes,key),
                  node$0=match$0[1];
                 caml_call1(Incremental[77][2][4],node$0);
                 return nodes}
               function _cf_(param)
                {return caml_call2(Core_kernel_Map[38],prev_map[1],key)}
               var
                node$1=
                 caml_call3(Incremental[77][2][2],incremental_state,0,_cf_);
               function _cg_(c)
                {var _cm_=caml_call1(Incremental[77][2][3],node$1);
                 return caml_call2(Incremental[59],_cm_,c)}
               caml_call2(Core_kernel_Option[19],cutoff,_cg_);
               var
                _ch_=caml_call1(Core_kernel[222],lhs_change),
                _ci_=caml_call2(Incremental[77][1][2],0,_ch_);
               caml_call2(Incremental[77][2][6],node$1,_ci_);
               var
                _cj_=
                 caml_call2(f,key,caml_call1(Incremental[77][2][3],node$1)),
                _ck_=[0,function(_cl_){return on_inner_change(key,_cl_)}],
                user_function_dep=caml_call2(Incremental[77][1][2],_ck_,_cj_);
               caml_call2(Incremental[77][2][6],result,user_function_dep);
               return caml_call3
                       (Core_kernel_Map[31],nodes,key,[0,node$1,user_function_dep])}
             var
              new_nodes=
               caml_call5
                (Core_kernel_Map[76],
                 prev_map[1],
                 map,
                 data_equal,
                 prev_nodes[1],
                 _cd_);
             prev_nodes[1] = new_nodes;
             prev_map[1] = map;
             return 0}
           return caml_call2(Incremental[10],lhs,_cc_)}]);
      var
       _b$_=caml_call1(Core_kernel[222],lhs_change),
       _ca_=caml_call2(Incremental[77][1][2],0,_b$_);
      caml_call2(Incremental[77][2][6],result,_ca_);
      return caml_call1(Incremental[77][2][3],result)}
    function filter_mapi$0(cutoff,data_equal,map,f)
     {return with_comparator$0
              (map,
               function(comparator)
                {return generic_mapi_with_comparator
                         (1,cutoff,data_equal,map,comparator,f)})}
    function mapi$0(cutoff,data_equal,map,f)
     {return with_comparator$0
              (map,
               function(comparator)
                {return generic_mapi_with_comparator
                         (0,cutoff,data_equal,map,comparator,f)})}
    function keys(map)
     {return with_comparator$0
              (map,
               function(comparator)
                {function add(key,param,acc)
                  {return caml_call2(Core_kernel_Set[11],acc,key)}
                 function remove(key,param,acc)
                  {return caml_call2(Core_kernel_Set[12],acc,key)}
                 function data_equal(param,_b9_){return 1}
                 return unordered_fold
                         ([0,data_equal],
                          0,
                          0,
                          map,
                          caml_call1(Core_kernel_Set[3][1],comparator),
                          add,
                          remove)})}
    function flatten(state,map)
     {var
       _b4_=caml_call1(Core_kernel_Map[2],map),
       result=[0,caml_call1(Core_kernel_Map[104][1],_b4_)];
      function _b5_(param){return result[1]}
      var node=caml_call3(Incremental[77][2][2],state,0,_b5_);
      function _b6_(key,incr)
       {var
         _b7_=
          [0,
           function(a)
            {result[1] = caml_call3(Core_kernel_Map[31],result[1],key,a);
             return 0}],
         _b8_=caml_call2(Incremental[77][1][2],_b7_,incr);
        return caml_call2(Incremental[77][2][6],node,_b8_)}
      caml_call2(Core_kernel_Map[44],map,_b6_);
      return caml_call1(Incremental[77][2][3],node)}
    function join(map_incr)
     {return with_comparator$0
              (map_incr,
               function(comparator)
                {var
                  incremental_state=caml_call1(Incremental[4],map_incr),
                  empty_map=caml_call1(Core_kernel_Map[104][1],comparator),
                  result_map=[0,empty_map],
                  old_map_of_incrs=[0,empty_map],
                  current_dependencies=[0,empty_map];
                 function _bY_(param){return result_map[1]}
                 var
                  result=
                   caml_call3(Incremental[77][2][2],incremental_state,0,_bY_);
                 function add_subnode(current_dependencies,key,data_node)
                  {var
                    _b3_=
                     [0,
                      function(data)
                       {result_map[1]
                        =
                        caml_call3(Core_kernel_Map[31],result_map[1],key,data);
                        return 0}],
                    new_dep=caml_call2(Incremental[77][1][2],_b3_,data_node);
                   caml_call2(Incremental[77][2][6],result,new_dep);
                   return caml_call3
                           (Core_kernel_Map[31],current_dependencies,key,new_dep)}
                 function remove_subnode(current_dependencies,key)
                  {var
                    dep=
                     caml_call2(Core_kernel_Map[38],current_dependencies,key);
                   caml_call2(Incremental[77][2][7],result,dep);
                   result_map[1]
                   =
                   caml_call2(Core_kernel_Map[40],result_map[1],key);
                   return caml_call2
                           (Core_kernel_Map[40],current_dependencies,key)}
                 function _bZ_(map_of_incrs)
                  {function _b1_(current_dependencies,param)
                    {var diff=param[2],key=param[1],_b2_=diff[1];
                     if(847852583 === _b2_)
                      return remove_subnode(current_dependencies,key);
                     if(1013247643 <= _b2_)
                      {var match=diff[2],data_node=match[2];
                       return add_subnode
                               (remove_subnode(current_dependencies,key),key,data_node)}
                     var data_node$0=diff[2];
                     return add_subnode(current_dependencies,key,data_node$0)}
                   var
                    new_dependency_map=
                     caml_call5
                      (Core_kernel_Map[76],
                       old_map_of_incrs[1],
                       map_of_incrs,
                       Core_kernel[231],
                       current_dependencies[1],
                       _b1_);
                   current_dependencies[1] = new_dependency_map;
                   old_map_of_incrs[1] = map_of_incrs;
                   return 0}
                 var
                  lhs_change=caml_call2(Incremental[10],map_incr,_bZ_),
                  _b0_=caml_call2(Incremental[77][1][2],0,lhs_change);
                 caml_call2(Incremental[77][2][6],result,_b0_);
                 return caml_call1(Incremental[77][2][3],result)})}
    function separate(input_map,data_equal)
     {var state=caml_call1(Incremental[4],input_map);
      return with_comparator$0
              (input_map,
               function(comparator)
                {var
                  empty=caml_call1(Core_kernel_Map[104][1],comparator),
                  state$0=[0,empty,empty,empty];
                 function _bM_(param){return state$0[3]}
                 var
                  output_map_node=
                   caml_call3(Incremental[77][2][2],state,0,_bM_);
                 function make_node_depend_on_input_map_
                  (node,input_map_changed)
                  {var
                    _bX_=caml_call1(Core_kernel_Lazy[28],input_map_changed),
                    dependency=caml_call2(Incremental[77][1][2],0,_bX_);
                   return caml_call2(Incremental[77][2][6],node,dependency)}
                 var input_map_changed=[];
                 caml_update_dummy
                  (input_map_changed,
                   [246,
                    function(_bN_)
                     {function _bO_(input_map)
                       {var prev_input_map=state$0[1];
                        function _bP_(param,_bR_)
                         {var
                           change=_bR_[2],
                           key=_bR_[1],
                           output_map=param[2],
                           expert_nodes=param[1],
                           _bS_=change[1];
                          if(847852583 === _bS_)
                           {var
                             old_node=
                              caml_call2(Core_kernel_Map[38],expert_nodes,key);
                            caml_call1(Incremental[77][2][5],old_node);
                            caml_call1(Incremental[77][2][4],output_map_node);
                            var _bT_=caml_call2(Core_kernel_Map[40],output_map,key);
                            return [0,
                                    caml_call2(Core_kernel_Map[40],expert_nodes,key),
                                    _bT_]}
                          if(1013247643 <= _bS_)
                           {var _bU_=caml_call2(Core_kernel_Map[38],expert_nodes,key);
                            caml_call1(Incremental[77][2][4],_bU_);
                            return [0,expert_nodes,output_map]}
                          function _bQ_(param)
                           {return caml_call2(Core_kernel_Map[38],state$0[1],key)}
                          var node=caml_call3(Incremental[77][2][2],state,0,_bQ_);
                          make_node_depend_on_input_map_(node,input_map_changed);
                          caml_call1(Incremental[77][2][4],output_map_node);
                          var
                           _bV_=caml_call1(Incremental[77][2][3],node),
                           _bW_=caml_call3(Core_kernel_Map[30],output_map,key,_bV_);
                          return [0,
                                  caml_call3(Core_kernel_Map[30],expert_nodes,key,node),
                                  _bW_]}
                        var
                         match=
                          caml_call5
                           (Core_kernel_Map[76],
                            prev_input_map,
                            input_map,
                            data_equal,
                            [0,state$0[2],state$0[3]],
                            _bP_),
                         output_map=match[2],
                         expert_nodes=match[1];
                        state$0[1] = input_map;
                        state$0[2] = expert_nodes;
                        state$0[3] = output_map;
                        return 0}
                      return caml_call2(Incremental[10],input_map,_bO_)}]);
                 make_node_depend_on_input_map_
                  (output_map_node,input_map_changed);
                 return caml_call1(Incremental[77][2][3],output_map_node)})}
    function subrange(opt,map_incr,range)
     {if(opt)
       var sth=opt[1],data_equal=sth;
      else
       var data_equal=Core_kernel[231];
      return with_old2
              (map_incr,
               range,
               function(old,map,range)
                {var compare=caml_call1(Core_kernel_Map[2],map)[1];
                 function cmp_a(l,r)
                  {var _bL_=caml_call2(compare,l,r);
                   return caml_call2(Core_kernel[87],_bL_,0)}
                 function maybe_bound_equal(a_001,match)
                  {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 1;
                   if(typeof a_001 === "number")
                    {if(typeof match === "number")
                      return 1;
                     else
                      if(1 === match[0])return 0}
                   else
                    {if(0 === a_001[0])
                      {var _bJ_=a_001[1];
                       if(typeof match !== "number" && 0 === match[0])
                        {var b_004=match[1];return cmp_a(_bJ_,b_004)}
                       return 0}
                     var _bK_=a_001[1];
                     if(typeof match === "number")
                      return 0;
                     else
                      if(0 !== match[0])
                       {var b_006=match[1];return cmp_a(_bK_,b_006)}}
                   return 0}
                 function range_is_empty(min,max)
                  {var switch$0=0;
                   if(typeof min !== "number")
                    if(0 === min[0])
                     {var _bH_=min[1];
                      if(typeof max !== "number")
                       {if(0 === max[0])
                         {var max$0=max[1],_bF_=caml_call2(compare,_bH_,max$0);
                          return caml_call2(Core_kernel[88],_bF_,0)}
                        var max$1=max[1],min$0=_bH_;
                        switch$0 = 1}}
                    else
                     {var _bI_=min[1];
                      if(typeof max !== "number")
                       {var max$1=max[1],min$0=_bI_;switch$0 = 1}}
                   if(switch$0)
                    {var _bG_=caml_call2(compare,min$0,max$1);
                     return caml_call2(Core_kernel[85],_bG_,0)}
                   return 0}
                 function range_includes(min,max,key)
                  {var
                    _bE_=
                     caml_call3(Core_kernel_Maybe_bound[13],min,key,compare);
                   return _bE_
                           ?caml_call3(Core_kernel_Maybe_bound[14],max,key,compare)
                           :_bE_}
                 if(range)
                  {var
                    range$0=range[1],
                    max=range$0[2],
                    min=range$0[1],
                    from_scratch=
                     function(param)
                      {return caml_call3(Core_kernel_Map[89],map,min,max)};
                   if(old)
                    {var _bt_=old[1],_bu_=_bt_[2];
                     if(_bu_)
                      {var
                        old_range=_bu_[1],
                        old_min=old_range[1],
                        old_map=_bt_[1],
                        old_max=old_range[2];
                       if
                        (!
                         range_is_empty(old_min,old_max)
                         &&
                         !
                         range_is_empty(min,old_max)
                         &&
                         !
                         range_is_empty(old_min,max))
                        {var
                          old_res=_bt_[3],
                          old_max$0=old_range[2],
                          _bv_=
                           function(param)
                            {function apply_diff_in_intersection(param$0,_bB_)
                              {var
                                data=_bB_[2],
                                key=_bB_[1],
                                map=param$0[2],
                                outside=param$0[1],
                                _bA_=range_includes(min,max,key),
                                _bC_=_bA_?range_includes(old_min,old_max$0,key):_bA_;
                               if(_bC_)
                                {var _bD_=data[1];
                                 if(847852583 === _bD_)
                                  return [0,outside,caml_call2(Core_kernel_Map[40],map,key)];
                                 var data$0=1013247643 <= _bD_?data[2][2]:data[2];
                                 return [0,
                                         outside,
                                         caml_call3(Core_kernel_Map[31],map,key,data$0)]}
                               var outside$0=outside - 1 | 0;
                               return caml_call2(Core_kernel_Int[74][11],outside$0,0)
                                       ?caml_call1(param,from_scratch(0))
                                       :[0,outside$0,caml_call2(Core_kernel_Map[40],map,key)]}
                             var
                              outside_cutoff=
                               caml_call1(Core_kernel_Map[28],old_res)
                               /
                               4
                               |
                               0,
                              with_updated_values_in_interse=
                               caml_call5
                                 (Core_kernel_Map[76],
                                  old_map,
                                  map,
                                  data_equal,
                                  [0,outside_cutoff,old_res],
                                  apply_diff_in_intersection)
                                [2];
                             if
                              (caml_call4
                                (Core_kernel_Tuple[1][10],
                                 maybe_bound_equal,
                                 maybe_bound_equal,
                                 old_range,
                                 range$0))
                              return with_updated_values_in_interse;
                             var
                              without_keys_out_of_range=
                               caml_call3
                                (Core_kernel_Map[89],with_updated_values_in_interse,min,max);
                             function map_append_exn(lower_part,upper_part)
                              {var
                                match=
                                 caml_call2(Core_kernel_Map[88],lower_part,upper_part);
                               if(typeof match === "number")
                                return caml_call1
                                        (Core_kernel[3],cst_impossible_case_BUG_in_inc);
                               var map=match[2];
                               return map}
                             if(typeof old_min === "number")
                              var
                               _bx_=caml_call1(Core_kernel_Map[2],map),
                               _by_=caml_call1(Core_kernel_Map[104][1],_bx_);
                             else
                              if(0 === old_min[0])
                               var
                                old_min$0=old_min[1],
                                _by_=caml_call3(Core_kernel_Map[89],map,min,[1,old_min$0]);
                              else
                               var
                                old_min$1=old_min[1],
                                _by_=caml_call3(Core_kernel_Map[89],map,min,[0,old_min$1]);
                             if(typeof old_max$0 === "number")
                              var
                               _bz_=caml_call1(Core_kernel_Map[2],map),
                               upper_part=caml_call1(Core_kernel_Map[104][1],_bz_);
                             else
                              if(0 === old_max$0[0])
                               var
                                old_max=old_max$0[1],
                                upper_part=
                                 caml_call3(Core_kernel_Map[89],map,[1,old_max],max);
                              else
                               var
                                old_max$1=old_max$0[1],
                                upper_part=
                                 caml_call3(Core_kernel_Map[89],map,[0,old_max$1],max);
                             var
                              with_new_keys_now_in_range=
                               map_append_exn
                                (_by_,map_append_exn(without_keys_out_of_range,upper_part));
                             return with_new_keys_now_in_range};
                         return caml_call1(Core_kernel[244],_bv_)}
                       return from_scratch(0)}}
                   return from_scratch(0)}
                 var _bw_=caml_call1(Core_kernel_Map[2],map);
                 return caml_call1(Core_kernel_Map[104][1],_bw_)})}
    function index_by(map_incr,outer_comparator,index)
     {return with_comparator$0
              (map_incr,
               function(inner_comparator)
                {function _bp_(inner_key,data,outer_map)
                  {var match=caml_call1(index,data);
                   if(match)
                    {var
                      outer_key=match[1],
                      _bs_=
                       function(param)
                        {if(param)
                          {var
                            inner_map=param[1],
                            inner_map$0=
                             caml_call2(Core_kernel_Map[40],inner_map,inner_key);
                           return caml_call1(Core_kernel_Map[27],inner_map$0)
                                   ?0
                                   :[0,inner_map$0]}
                         return caml_call1
                                 (Core_kernel[3],cst_BUG_Hit_supposedly_impossi)};
                     return caml_call3
                             (Core_kernel_Map[35],outer_map,outer_key,_bs_)}
                   return outer_map}
                 function _bq_(inner_key,data,outer_map)
                  {var match=caml_call1(index,data);
                   if(match)
                    {var
                      outer_key=match[1],
                      _br_=
                       function(param)
                        {if(param)
                          {var inner_map=param[1];
                           return caml_call3
                                   (Core_kernel_Map[30],inner_map,inner_key,data)}
                         return caml_call3
                                 (Core_kernel_Map[104][2],inner_comparator,inner_key,data)};
                     return caml_call3
                             (Core_kernel_Map[36],outer_map,outer_key,_br_)}
                   return outer_map}
                 return unordered_fold
                         (0,
                          0,
                          0,
                          map_incr,
                          caml_call1(Core_kernel_Map[4],outer_comparator),
                          _bq_,
                          _bp_)})}
    function is_known(param)
     {if(typeof param === "number" && param)return 0;return 1}
    function to_option(param)
     {if(typeof param === "number")return 0;var k=param[1];return [0,k]}
    function find_key_range_linear(from,to,map)
     {var
       len=caml_call1(Core_kernel_Map[28],map),
       begin_key=caml_call2(Core_kernel_Int[105],from,len)?0:1,
       end_key=caml_call2(Core_kernel_Int[105],to,len)?0:1;
      function find_keys(fold,start_pos,advance_pos)
       {function _bn_(param)
         {return caml_call3
                  (fold,
                   map,
                   [0,begin_key,end_key,start_pos],
                   function(key,param$0,_bo_)
                    {var
                      pos=_bo_[3],
                      end_key=_bo_[2],
                      begin_key=_bo_[1],
                      begin_key$0=
                       caml_call2(Core_kernel_Int[107],pos,from)?[0,key]:begin_key,
                      end_key$0=
                       caml_call2(Core_kernel_Int[107],pos,to)?[0,key]:end_key;
                     if(is_known(begin_key$0) && is_known(end_key$0))
                      return caml_call1(param,[0,begin_key$0,end_key$0,pos]);
                     return [0,begin_key$0,end_key$0,caml_call1(advance_pos,pos)]})}
        return caml_call1(Core_kernel[244],_bn_)}
      if(caml_call2(Core_kernel[89],to,len - from | 0))
       var
        _bj_=function(pos){return pos + 1 | 0},
        match=find_keys(Core_kernel_Map[51],0,_bj_);
      else
       var
        _bm_=function(pos){return pos - 1 | 0},
        match=find_keys(Core_kernel_Map[52],len - 1 | 0,_bm_);
      var end_key$0=match[2],begin_key$0=match[1];
      function _bk_(begin_key){return [0,begin_key,to_option(end_key$0)]}
      var _bl_=to_option(begin_key$0);
      return caml_call2(Core_kernel_Option[39],_bl_,_bk_)}
    function subrange_by_rank(data_equal,map,range)
     {function find_key_range(range)
       {return with_old2
                (map,
                 range,
                 function(old,map,param)
                  {var
                    to=param[2],
                    from=param[1],
                    _a1_=caml_call2(Core_kernel_Int[109],to,from),
                    _a2_=_a1_ || caml_call2(Core_kernel_Int[109],from,0);
                   if(_a2_)
                    {var
                      _a3_=[0,[1,[0,_b_,[0,caml_call1(Core_kernel[340],to),0]]],0],
                      _a4_=
                       [0,[1,[0,_c_,[0,caml_call1(Core_kernel[340],from),0]]],_a3_],
                      _a5_=
                       [1,
                        [0,
                         caml_call1(Sexplib0_Sexp_conv[7],cst_Invalid_indices),
                         _a4_]];
                     caml_call1(Core_kernel[238],_a5_)}
                   if(old)
                    {var _a6_=old[1],_a7_=_a6_[3];
                     if(_a7_)
                      {var
                        _a8_=_a7_[1],
                        end_key_opt$0=_a8_[2],
                        begin_key=_a8_[1],
                        match=_a6_[2],
                        old_to=match[2],
                        old_from=match[1],
                        old_map=_a6_[1],
                        _a9_=caml_call1(Core_kernel_Map[2],map)[1],
                        find_offset=
                         function(key,changed_key,change)
                          {var _bh_=caml_call2(_a9_,changed_key,key);
                           if(caml_call2(Core_kernel_Int[109],_bh_,0))
                            {if(typeof change !== "number")
                              {var _bi_=change[1];
                               if(-57574468 === _bi_)return -1;
                               if(847852583 === _bi_)return 1}
                             return 0}
                           return 0},
                        range_offset_begin=from - old_from | 0,
                        range_offset_end=to - old_to | 0,
                        adjust_and_offset=
                         function(by$1,key$1)
                          {var switch$0=0;
                           if
                            (caml_call2(Core_kernel[85],by$1,0)
                             &&
                             !
                             caml_call2(Core_kernel_Map[41],map,key$1))
                            {var _bg_=1;switch$0 = 1}
                           if(! switch$0)var _bg_=0;
                           var by$2=by$1 + _bg_ | 0,key=key$1,by=by$2;
                           for(;;)
                            {if(caml_call2(Core_kernel_Int[107],by,0))return [0,key];
                             if(caml_call2(Core_kernel_Int[109],by,0))
                              var add=1,closest_dir=-640801497;
                             else
                              var add=-1,closest_dir=-779285466;
                             var
                              match=
                               caml_call3(Core_kernel_Map[92],map,closest_dir,key);
                             if(match)
                              {var
                                match$0=match[1],
                                key$0=match$0[1],
                                by$0=by + add | 0,
                                key=key$0,
                                by=by$0;
                               continue}
                             return 0}},
                        diff=
                         function(init,f)
                          {function _be_(param,_bf_){return 1}
                           return caml_call5
                                   (Core_kernel_Map[76],old_map,map,_be_,init,f)};
                       if(end_key_opt$0)
                        var
                         end_key=end_key_opt$0[1],
                         match$0=
                          diff
                           (_d_,
                            function(param,_bb_)
                             {var
                               change=_bb_[2],
                               key=_bb_[1],
                               offset_end=param[2],
                               offset_begin=param[1],
                               _bc_=offset_end + find_offset(end_key,key,change) | 0;
                              return [0,
                                      offset_begin + find_offset(begin_key,key,change) | 0,
                                      _bc_]}),
                         map_offset_end=match$0[2],
                         map_offset_begin=match$0[1],
                         end_key_opt$1=
                          adjust_and_offset
                           (map_offset_end + range_offset_end | 0,end_key),
                         end_key_opt$2=end_key_opt$1,
                         begin_key_opt=
                          adjust_and_offset
                           (map_offset_begin + range_offset_begin | 0,begin_key);
                       else
                        var
                         map_offset_begin$0=
                          diff
                           (0,
                            function(offset_begin,param)
                             {var change=param[2],key=param[1];
                              return offset_begin + find_offset(begin_key,key,change) | 0}),
                         _aZ_=function(_bd_){return _bd_[1]},
                         _a0_=find_key_range_linear(to,to,map),
                         end_key_opt=caml_call2(Core_kernel_Option[39],_a0_,_aZ_),
                         begin_key_opt$0=
                          adjust_and_offset
                           (map_offset_begin$0 + range_offset_begin | 0,begin_key),
                         end_key_opt$2=end_key_opt,
                         begin_key_opt=begin_key_opt$0;
                       var _a__=caml_call1(Core_kernel_Map[41],map);
                       if(caml_call2(Core_kernel_Option[24],begin_key_opt,_a__))
                        {var _a$_=caml_call1(Core_kernel_Map[41],map);
                         if(caml_call2(Core_kernel_Option[24],end_key_opt$2,_a$_))
                          {var
                            _ba_=
                             function(begin_key){return [0,begin_key,end_key_opt$2]};
                           return caml_call2(Core_kernel_Option[39],begin_key_opt,_ba_)}
                         throw [0,Assert_failure,_e_]}
                       throw [0,Assert_failure,_f_]}}
                   return find_key_range_linear(from,to,map)})}
      function symbol(new$0,bound)
       {function _aY_(param){return new$0}
        return caml_call2(Core_kernel_Maybe_bound[12],bound,_aY_)}
      var
       _ar_=caml_call1(Incremental[4],map),
       return$0=caml_call1(Incremental[9],_ar_);
      function _as_(param)
       {if(3 < param >>> 0)throw [0,Assert_failure,_g_];
        switch(param)
         {case 0:return caml_call1(return$0,_h_);
          case 1:
           var
            _av_=
             function(param)
              {var _aU_=param[1];
               if(typeof _aU_ !== "number")
                {var _aV_=_aU_[1];if(typeof param[2] !== "number")return _aV_}
               throw [0,Assert_failure,_i_]},
            l=caml_call2(Incremental[74][3][5],range,_av_),
            _aw_=
             function(param)
              {var _aT_=param[1];
               if(typeof _aT_ !== "number" && typeof param[2] !== "number")
                return _aT_;
               throw [0,Assert_failure,_j_]},
            let_syntax_008=caml_call2(Incremental[74][3][5],range,_aw_),
            _ax_=
             function(param)
              {if(typeof param[1] !== "number")
                {var _aS_=param[2];
                 if(typeof _aS_ !== "number")
                  {var pattern_syntax_u=_aS_[1];return pattern_syntax_u}}
               throw [0,Assert_failure,_k_]},
            u=caml_call2(Incremental[74][3][5],range,_ax_),
            _ay_=
             function(param)
              {if(typeof param[1] !== "number")
                {var _aR_=param[2];if(typeof _aR_ !== "number")return _aR_}
               throw [0,Assert_failure,_l_]},
            let_syntax_009=caml_call2(Incremental[74][3][5],range,_ay_),
            let_syntax_007=find_key_range(caml_call2(Incremental[40],l,u)),
            _az_=
             function(param)
              {var match=param[2],ub=match[2],lb=match[1],key_range=param[1];
               if(key_range)
                {var _aN_=key_range[1],_aO_=_aN_[2],_aP_=_aN_[1];
                 if(_aO_)
                  {var end_key=_aO_[1],_aQ_=symbol(end_key,ub);
                   return [0,[0,symbol(_aP_,lb),_aQ_]]}
                 return [0,[0,symbol(_aP_,lb),0]]}
               return 0},
            _aA_=
             caml_call2(Incremental[74][3][20],let_syntax_008,let_syntax_009),
            _aB_=caml_call2(Incremental[74][3][20],let_syntax_007,_aA_);
           return caml_call2(Incremental[74][3][5],_aB_,_az_);
          case 2:
           var
            _aC_=
             function(param)
              {var _aL_=param[1];
               if(typeof _aL_ !== "number")
                {var _aM_=_aL_[1];if(typeof param[2] === "number")return _aM_}
               throw [0,Assert_failure,_m_]},
            l$0=caml_call2(Incremental[74][3][5],range,_aC_),
            _aD_=
             function(param)
              {var _aK_=param[1];
               if(typeof _aK_ !== "number" && typeof param[2] === "number")
                return _aK_;
               throw [0,Assert_failure,_n_]},
            lb=caml_call2(Incremental[74][3][5],range,_aD_),
            let_syntax_010=find_key_range(caml_call2(Incremental[40],l$0,l$0)),
            _aE_=
             function(param)
              {var lb=param[2],key_range=param[1];
               if(key_range)
                {var match=key_range[1],key=match[1];
                 return [0,[0,symbol(key,lb),0]]}
               return 0},
            _aF_=caml_call2(Incremental[74][3][20],let_syntax_010,lb);
           return caml_call2(Incremental[74][3][5],_aF_,_aE_);
          default:
           var
            _aG_=
             function(param)
              {if(typeof param[1] === "number")
                {var _aX_=param[2];
                 if(typeof _aX_ !== "number")
                  {var pattern_syntax_u=_aX_[1];return pattern_syntax_u}}
               throw [0,Assert_failure,_o_]},
            u$0=caml_call2(Incremental[74][3][5],range,_aG_),
            _aH_=
             function(param)
              {if(typeof param[1] === "number")
                {var _aW_=param[2];if(typeof _aW_ !== "number")return _aW_}
               throw [0,Assert_failure,_p_]},
            ub=caml_call2(Incremental[74][3][5],range,_aH_),
            let_syntax_012=find_key_range(caml_call2(Incremental[40],u$0,u$0)),
            _aI_=
             function(param)
              {var ub=param[2],key_range=param[1];
               if(key_range)
                {var match=key_range[1],key=match[1];
                 return [0,[0,0,symbol(key,ub)]]}
               return 0},
            _aJ_=caml_call2(Incremental[74][3][20],let_syntax_012,ub);
           return caml_call2(Incremental[74][3][5],_aJ_,_aI_)}}
      function _at_(param)
       {return typeof param[1] === "number"
                ?typeof param[2] === "number"?0:3
                :typeof param[2] === "number"?2:1}
      var
       _au_=caml_call2(Incremental[74][3][5],range,_at_),
       key_range=caml_call2(Incremental[74][3][1],_au_,_as_);
      return subrange(data_equal,map,key_range)}
    function transpose(opt,k2_comparator,m)
     {if(opt)
       var sth=opt[1],data_equal=sth;
      else
       var data_equal=Core_kernel[231];
      return with_comparator$0
              (m,
               function(k1_comparator)
                {function update(k1,old_data,new_data,acc)
                  {function _al_(acc,param)
                    {var diff=param[2],k2=param[1],_am_=diff[1];
                     if(847852583 === _am_)
                      var value=0;
                     else
                      var x=1013247643 <= _am_?diff[2][2]:diff[2],value=[0,x];
                     function _an_(acc_inner)
                      {function _ao_(param){return value}
                       var
                        _ap_=caml_call1(Core_kernel_Map[104][1],k1_comparator),
                        _aq_=caml_call2(Core_kernel_Option[49],acc_inner,_ap_),
                        acc_inner$0=caml_call3(Core_kernel_Map[35],_aq_,k1,_ao_);
                       return caml_call1(Core_kernel_Map[27],acc_inner$0)
                               ?0
                               :[0,acc_inner$0]}
                     return caml_call3(Core_kernel_Map[35],acc,k2,_an_)}
                   return caml_call5
                           (Core_kernel_Map[76],old_data,new_data,data_equal,acc,_al_)}
                 function add(key,data)
                  {var _aj_=caml_call1(Core_kernel_Map[4],k2_comparator);
                   return function(_ak_){return update(key,_aj_,data,_ak_)}}
                 function remove(key,data)
                  {var _ah_=caml_call1(Core_kernel_Map[4],k2_comparator);
                   return function(_ai_){return update(key,data,_ah_,_ai_)}}
                 return unordered_fold
                         (0,
                          [0,update],
                          0,
                          m,
                          caml_call1(Core_kernel_Map[4],k2_comparator),
                          add,
                          remove)})}
    var For_testing=[0,find_key_range_linear];
    function M(K){return [0]}
    function create(opt,input_map,comparator)
     {if(opt)
       var sth=opt[1],data_equal=sth;
      else
       var data_equal=Core_kernel[231];
      var self=[];
      caml_update_dummy
       (self,
        [246,
         function(___)
          {function _$_(input_map)
            {var
              _ab_=caml_obj_tag(self),
              self$0=
               250 === _ab_
                ?self[1]
                :246 === _ab_?caml_call1(CamlinternalLazy[2],self):self;
             function _ac_(param,_ad_)
              {var
                changed_value=_ad_[2],
                key=_ad_[1],
                entries=caml_call2(Core_kernel_Map[34],self$0[2],key);
               function _ae_(entry)
                {var _af_=changed_value[1];
                 if(847852583 === _af_)
                  var _ag_=0;
                 else
                  var
                   new_value=
                    1013247643 <= _af_?changed_value[2][2]:changed_value[2],
                   _ag_=[0,new_value];
                 entry[1] = _ag_;
                 return caml_call1(Incremental[77][2][4],entry[2])}
               return caml_call2(Core_kernel_List[9],entries,_ae_)}
             caml_call5
              (Core_kernel_Map[76],self$0[1],input_map,data_equal,0,_ac_);
             self$0[1] = input_map;
             return 0}
           var
            updater_node=caml_call2(Incremental[10],input_map,_$_),
            empty_map=caml_call1(Core_kernel_Map[104][1],comparator),
            _aa_=caml_call1(Incremental[4],input_map);
           return [0,
                   empty_map,
                   empty_map,
                   updater_node,
                   caml_call2(Incremental[50][2],_aa_,0)]}]);
      var _Z_=caml_obj_tag(self);
      return 250 === _Z_
              ?self[1]
              :246 === _Z_?caml_call1(CamlinternalLazy[2],self):self}
    function find(t,key)
     {var match=caml_call2(Core_kernel_Map[34],t[2],key);
      if(match)
       {var entry=match[1];return caml_call1(Incremental[77][2][3],entry[2])}
      var incremental_state=caml_call1(Incremental[4],t[3]);
      function _M_(param)
       {var entry=[];
        caml_update_dummy
         (entry,
          [246,
           function(_P_)
            {function _Q_(param){return caml_call1(Core_kernel[222],entry)[1]}
             var
              _R_=
               [0,
                function(is_now_observable)
                 {var
                   _T_=caml_obj_tag(entry),
                   entry$0=
                    250 === _T_
                     ?entry[1]
                     :246 === _T_?caml_call1(CamlinternalLazy[2],entry):entry,
                   current_entries=caml_call2(Core_kernel_Map[34],t[2],key),
                   _U_=caml_call1(Core_kernel[231],entry$0),
                   is_linked=
                    caml_call2(Core_kernel_List[13],current_entries,_U_);
                  if
                   (caml_call2
                     (Core_kernel_Bool[27],is_linked,is_now_observable))
                   return 0;
                  if(is_now_observable)
                   {var
                     _V_=
                      function(param)
                       {if(param)
                         {var _Y_=param[1];
                          if(_Y_)
                           {var other_entry=_Y_[1];
                            entry$0[1] = other_entry[1];
                            return [0,entry$0,_Y_]}}
                        entry$0[1] = caml_call2(Core_kernel_Map[37],t[1],key);
                        return [0,entry$0,0]};
                    t[2] = caml_call3(Core_kernel_Map[36],t[2],key,_V_);
                    return 0}
                  function _W_(x)
                   {return 1 - caml_call2(Core_kernel[231],entry$0,x)}
                  var
                   new_entries=
                    caml_call2(Core_kernel_List[50],current_entries,_W_),
                   _X_=
                    caml_call1(Core_kernel_List[8],new_entries)
                     ?caml_call2(Core_kernel_Map[40],t[2],key)
                     :caml_call3(Core_kernel_Map[31],t[2],key,new_entries);
                  t[2] = _X_;
                  return 0}],
              _S_=caml_call3(Incremental[77][2][2],incremental_state,_R_,_Q_);
             return [0,caml_call2(Core_kernel_Map[37],t[1],key),_S_]}]);
        var
         _N_=caml_obj_tag(entry),
         entry$0=
          250 === _N_
           ?entry[1]
           :246 === _N_?caml_call1(CamlinternalLazy[2],entry):entry,
         _O_=caml_call2(Incremental[77][1][2],0,t[3]);
        caml_call2(Incremental[77][2][6],entry$0[2],_O_);
        return caml_call1(Incremental[77][2][3],entry$0[2])}
      return caml_call3(Incremental[50][3],incremental_state,t[4],_M_)}
    function sexp_of_t(sexp_of_key,sexp_of_value,t)
     {function _y_(key,data)
       {var _z_=data[1];
        if(737457313 === _z_)
         var
          match=data[2],
          y=match[2],
          x=match[1],
          actual_value=[0,x],
          entries=y,
          actual_value$0=actual_value;
        else
         if(847852583 <= _z_)
          var x$0=data[2],entries=0,actual_value$0=[0,x$0];
         else
          var y$0=data[2],entries=y$0,actual_value$0=0;
        var _A_=0,_B_=0;
        function _C_(entry)
         {var
           saved_value=entry[1],
           node=entry[2],
           node$0=caml_call1(Incremental[77][2][3],node),
           match=caml_call1(Incremental[67],node$0),
           _E_=caml_call1(Incremental[5],node$0),
           match$0=caml_call2(Core_kernel_Option[54],_E_,0),
           _F_=1 - caml_call1(Incremental[6],node$0),
           match$1=caml_call2(Core_kernel_Option[54],_F_,0),
           _G_=1 - caml_call1(Incremental[7],node$0),
           _H_=caml_call2(Core_kernel_Option[54],_G_,0),
           match$2=0;
          if(_H_)
           var
            v=_H_[1],
            _I_=[0,[1,[0,_q_,[0,caml_call1(Core_kernel[502],v),0]]],match$2];
          else
           var _I_=match$2;
          if(match$1)
           var
            v$0=match$1[1],
            _J_=[0,[1,[0,_r_,[0,caml_call1(Core_kernel[502],v$0),0]]],_I_];
          else
           var _J_=_I_;
          if(match$0)
           var
            v$1=match$0[1],
            _K_=[0,[1,[0,_s_,[0,caml_call1(Core_kernel[502],v$1),0]]],_J_];
          else
           var _K_=_J_;
          if(match)
           var
            v$2=match[1],
            _L_=[0,[1,[0,_t_,[0,caml_call1(Core_kernel_Info[6],v$2),0]]],_K_];
          else
           var _L_=_K_;
          return [1,
                  [0,
                   [1,
                    [0,
                     _u_,
                     [0,caml_call2(Core_kernel[438],sexp_of_value,saved_value),0]]],
                   _L_]]}
        var
         match$0=
          [0,[1,[0,_v_,[0,caml_call2(Core_kernel[405],_C_,entries),_B_]]],_A_];
        if(actual_value$0)
         var
          v=actual_value$0[1],
          _D_=[0,[1,[0,_w_,[0,caml_call1(sexp_of_value,v),0]]],match$0];
        else
         var _D_=match$0;
        return [0,[1,[0,[1,[0,_x_,[0,caml_call1(sexp_of_key,key),0]]],_D_]]]}
      var info_per_key=caml_call3(Core_kernel_Map[72],t[1],t[2],_y_);
      return [1,caml_call1(Core_kernel_Map[68],info_per_key)]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_map$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_map$0);
    var
     Incr_map$0=
      [0,
       of_set,
       filter_mapi,
       mapi,
       filter_mapi$0,
       mapi$0,
       unordered_fold,
       merge,
       flatten,
       join,
       separate,
       keys,
       subrange,
       subrange_by_rank,
       index_by,
       unordered_fold_nested_maps,
       transpose,
       [0,create,find,M,[0,sexp_of_t]],
       For_testing,
       function(Incr)
        {function flatten$0(x){return flatten(Incr[2][3],x)}
         function M(K){return [0]}
         return [0,
                 of_set,
                 filter_mapi,
                 mapi,
                 filter_mapi$0,
                 mapi$0,
                 unordered_fold,
                 merge,
                 flatten$0,
                 join,
                 separate,
                 keys,
                 subrange,
                 subrange_by_rank,
                 index_by,
                 unordered_fold_nested_maps,
                 transpose,
                 [0,create,find,M,[0,sexp_of_t]],
                 For_testing]}];
    caml_register_global(64,Incr_map$0,"Incr_map");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyX21hcC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
