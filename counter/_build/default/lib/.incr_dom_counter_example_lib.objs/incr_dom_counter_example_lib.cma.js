(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_counter=caml_string_of_jsbytes("counter"),
     cst_counter$0=caml_string_of_jsbytes("counter"),
     cst_Incr_dom_counter_example_l=
      caml_string_of_jsbytes("Incr_dom_counter_example_lib__App"),
     cst_incr_dom_counter_example_l=
      caml_string_of_jsbytes("incr_dom_counter_example_lib"),
     cst_lib_app_ml=caml_string_of_jsbytes("lib/app.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_incr_dom_counter_example_l$0=
      caml_string_of_jsbytes("incr_dom_counter_example_lib"),
     tp_loc=caml_string_of_jsbytes("lib/app.ml.Model.t"),
     initial_model=[0,0],
     cst_incr_dom_counter_example_l$1=
      caml_string_of_jsbytes("incr_dom_counter_example_lib"),
     cst_Incr_dom_counter_example_l$0=
      caml_string_of_jsbytes("Incr_dom_counter_example_lib__App"),
     Incr_dom_Component=global_data.Incr_dom__Component,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Virtual_dom_Node=global_data.Virtual_dom__Node,
     Incr_dom_Incr=global_data.Incr_dom__Incr,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Async_kernel=global_data.Async_kernel,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Core_kernel=global_data.Core_kernel,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Incr_dom_counter_example_lib=[0];
    caml_register_global
     (17,Incr_dom_counter_example_lib,"Incr_dom_counter_example_lib");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_dom_counter_example_l);
    caml_call1
     (Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_dom_counter_example_l);
    caml_call1(Expect_test_collector[4][1],cst_lib_app_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incr_dom_counter_example_l$0,cst);
    var
     _c_=[0,caml_string_of_jsbytes("Increment")],
     _b_=[0,caml_string_of_jsbytes("counter")],
     _a_=[0,caml_string_of_jsbytes("lib/app.ml"),6,2];
    function counter(r){return r[1]}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       counter_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _t_=param[1];
          if(1 === _t_[0])
           {var _u_=_t_[1];
            if(_u_)
             {var _v_=_u_[1];
              if(0 === _v_[0])
               {var _w_=_u_[2],_x_=_v_[1],switch$0=0;
                if(! _w_ || ! _w_[2])switch$0 = 1;
                if(switch$0)
                 {var tail=param[2];
                  if(runtime.caml_string_notequal(_x_,cst_counter))
                   {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_x_,extra[1]]}
                  else
                   if(counter_field[1])
                    duplicates[1] = [0,_x_,duplicates[1]];
                   else
                    {if(_w_)
                      {if(_w_[2])throw [0,Assert_failure,_a_];
                       var x=_w_[1],field_sexp=x}
                     else
                      var
                       field_sexp=
                        caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp);
                     var fvalue=caml_call1(Core_kernel[341],field_sexp);
                     counter_field[1] = [0,fvalue]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_t_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var _y_=counter_field[1];
        if(_y_){var counter_value=_y_[1];return [0,counter_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,[0,0 === counter_field[1]?1:0,cst_counter$0],0])}}
    function sexp_of_t(param)
     {var
       v_counter=param[1],
       arg=caml_call1(Core_kernel[340],v_counter),
       bnds=[0,[1,[0,_b_,[0,arg,0]]],0];
      return [1,bnds]}
    function cutoff(x_003,x_004)
     {var
       match=
        caml_call2(Ppx_compare_lib[1],x_003,x_004)
         ?0
         :caml_call2(Core_kernel[336],x_003[1],x_004[1]);
      return 0 === match?1:0}
    var State=[0];
    function sexp_of_t$0(param){return _c_}
    var Action=[0,sexp_of_t$0];
    function on_startup(schedule_action,modle)
     {function _r_(param){return caml_call1(schedule_action,0)}
      var _s_=caml_call1(Core_kernel_Time_ns[1][80],1.);
      caml_call5(Async_kernel[7],0,0,0,_s_,_r_);
      return Async_kernel_Deferred[18]}
    function create(model,param,_d_)
     {function _e_(counter,param,_q_,_p_){return [0,counter + 1 | 0]}
      var
       _f_=caml_call2(Incr_dom_Incr[76][2],model,counter),
       let_syntax_007=caml_call2(Incr_dom_Incr[76][4][5],_f_,_e_);
      function _g_(counter)
       {return caml_call3(Virtual_dom_Node[7],0,0,[0,counter,0])}
      function _h_(counter)
       {var
         _n_=caml_call1(Core_kernel_Int[103],counter),
         _o_=[0,caml_call1(Virtual_dom_Node[4],_n_),0];
        return caml_call3(Virtual_dom_Node[10],0,0,_o_)}
      var
       _i_=caml_call2(Incr_dom_Incr[76][2],model,counter),
       _j_=caml_call2(Incr_dom_Incr[76][4][5],_i_,_h_),
       let_syntax_008=caml_call2(Incr_dom_Incr[76][4][5],_j_,_g_);
      function _k_(param)
       {var match=param[2],model=match[2],view=match[1],apply_action=param[1];
        return caml_call5
                (Incr_dom_Component[6],[0,apply_action],0,0,model,view)}
      var
       _l_=caml_call2(Incr_dom_Incr[76][4][20],let_syntax_008,model),
       _m_=caml_call2(Incr_dom_Incr[76][4][20],let_syntax_007,_l_);
      return caml_call2(Incr_dom_Incr[76][4][5],_m_,_k_)}
    caml_call1
     (Ppx_inline_test_lib_Runtime[3],cst_incr_dom_counter_example_l$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_dom_counter_example_l$0);
    var
     Incr_dom_counter_example_lib_A=
      [0,
       [0,t_of_sexp,sexp_of_t,cutoff],
       Action,
       State,
       on_startup,
       create,
       initial_model];
    caml_register_global
     (35,Incr_dom_counter_example_lib_A,"Incr_dom_counter_example_lib__App");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuaW5jcl9kb21fY291bnRlcl9leGFtcGxlX2xpYi5vYmpzL2luY3JfZG9tX2NvdW50ZXJfZXhhbXBsZV9saWIuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInRwX2xvYyIsImluaXRpYWxfbW9kZWwiLCJjb3VudGVyIiwiciIsInRfb2Zfc2V4cCIsInNleHAiLCJmaWVsZF9zZXhwcyIsImNvdW50ZXJfZmllbGQiLCJkdXBsaWNhdGVzIiwiZXh0cmEiLCJ0YWlsIiwieCIsImZpZWxkX3NleHAiLCJmdmFsdWUiLCJjb3VudGVyX3ZhbHVlIiwic2V4cF9vZl90Iiwidl9jb3VudGVyIiwiYXJnIiwiYm5kcyIsImN1dG9mZiIsInhfMDAzIiwieF8wMDQiLCJzZXhwX29mX3QkMCIsIm9uX3N0YXJ0dXAiLCJzY2hlZHVsZV9hY3Rpb24iLCJtb2RsZSIsImNyZWF0ZSIsIm1vZGVsIiwibGV0X3N5bnRheF8wMDciLCJsZXRfc3ludGF4XzAwOCIsInZpZXciLCJhcHBseV9hY3Rpb24iXSwic291cmNlcyI6WyIvVXNlcnMvemhhbmd3ZWlqdW4vVlNQcm9qZWN0L2luY3ItZXhhbXBsZS9jb3VudGVyL19idWlsZC9kZWZhdWx0L2xpYi9hcHAubWwiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBS0VBO0tBWUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBakJKOzs7Ozs7O2FBS2FDLHNCQUFPO0lBTHBCLFNBS0VFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBQVc7MkNBQVhJOzs7O29DQUFXSSxXQUFYRDs7O3VCQUFXQzt3QkFBWDtxQkFBVzs7a0JBQVg7Ozs7Ozs7O2dCQUFXTDtRQUFYLFlBQVdPLHFCQUFYLFVBQVdBO1FBQVg7Ozs7NkJBQVdQLHdDQUFrRDtJQUwvRCxTQUtFUTs7O09BQVc7O3FCQUFrRDtJQUwvRCxTQU1NSSxPQUEwQkM7TUFEVDs7c0NBQ1NBOztVQURULDRCQUNTQTs7SUFOaEM7YUFjRUUsbUJBQVMsVUFBUztJQWRwQixjQWNFQTtJQWRGLFNBbUJJQyxXQUFZQyxnQkFBZ0JDO01BQzlCLG9CQUEwQyxrQkFENUJELGtCQUM0RDtNQUFwRTtNQUFOO3NDQUNhO0lBckJmLFNBd0JJRSxPQUFPQztNQUNULGFBRVV6Qix1QkFFTixVQUZNQSxnQkFFeUI7TUFGZjsyQ0FIWHlCLE1BbkJFekI7T0FxQkgwQjttQkFLSTFCO1FBSVIsNkNBSlFBLFdBSXFCO21CQUhuQkE7UUFDMEI7NkNBRDFCQTtTQUNXO3VEQUF1QztNQUR4QzsyQ0FSZnlCLE1BbkJFekI7O09BeUJMMkI7OzJCQU1GRixlQU5FRyxjQUpFQzs7NERBVUpKLE1BTkVHOzs4REFOR0g7K0NBRURDO3dEQVdpQzs7Ozs7Ozs7O1VBaEN6Q3hCLG9CQUNJZTs7O09BYUZJO09BS0FHO09BUEF6Qjs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuIENvcmVfa2VybmVsXG5vcGVuIEFzeW5jX2tlcm5lbFxub3BlbiBJbmNyX2RvbVxuXG5tb2R1bGUgTW9kZWwgPSBzdHJ1Y3RcbiAgdHlwZSB0ID0geyBjb3VudGVyIDogaW50IH0gW0BAZGVyaXZpbmcgZmllbGRzLCBjb21wYXJlLCBzZXhwXVxuICBsZXQgY3V0b2ZmID0gWyVjb21wYXJlLmVxdWFsOiB0XVxuZW5kXG5cbm1vZHVsZSBTdGF0ZSA9IHN0cnVjdFxuICB0eXBlIHQgPSB1bml0XG5lbmRcblxubW9kdWxlIEFjdGlvbiA9IHN0cnVjdFxuICB0eXBlIHQgPSBJbmNyZW1lbnQgW0BAZGVyaXZpbmcgc2V4cF9vZl1cbmVuZFxuXG5sZXQgaW5pdGlhbF9tb2RlbCA9IHsgTW9kZWwuY291bnRlciA9IDAgfVxuXG5sZXQgb25fc3RhcnR1cCB+c2NoZWR1bGVfYWN0aW9uIF9tb2RsZSA9XG4gIGV2ZXJ5IChUaW1lX25zLlNwYW4ub2Zfc2VjIDEuKSAoZnVuICgpIC0+IHNjaGVkdWxlX2FjdGlvbiBBY3Rpb24uSW5jcmVtZW50ICk7XG4gIERlZmVycmVkLnVuaXRcbjs7XG5cbmxldCBjcmVhdGUgbW9kZWwgfm9sZF9tb2RlbDogXyB+aW5qZWN0OiBfID0gXG4gIGxldCBvcGVuIEluY3IuTGV0X3N5bnRheCBpblxuICBsZXQlbWFwIGFwcGx5X2FjdGlvbiA9IFxuICAgIGxldCVtYXAgY291bnRlciA9IG1vZGVsID4+fCBNb2RlbC5jb3VudGVyICBpblxuICAgIGZ1biAoSW5jcmVtZW50OiBBY3Rpb24udCkgXyB+c2NoZWR1bGVfYWN0aW9uOiBfIC0+IFxuICAgICAgeyBNb2RlbC5jb3VudGVyID0gY291bnRlciArIDEgfVxuICAgIGFuZCB2aWV3ID0gXG4gICAgICBsZXQlbWFwIGNvdW50ZXIgPSBcbiAgICAgICAgbGV0JW1hcCBjb3VudGVyID0gbW9kZWwgPj58IE1vZGVsLmNvdW50ZXIgIGluXG4gICAgICAgIFZkb20uTm9kZS5kaXYgW10gWyBWZG9tLk5vZGUudGV4dCAoSW50LnRvX3N0cmluZyBjb3VudGVyKV1cbiAgICAgIGluXG4gICAgICBWZG9tLk5vZGUuYm9keSBbXSBbIGNvdW50ZXIgXVxuICBhbmQgbW9kZWwgPSBtb2RlbCBpblxuICBDb21wb25lbnQuY3JlYXRlIH5hcHBseV9hY3Rpb24gbW9kZWwgdmlld1xuOzsiXX0=
