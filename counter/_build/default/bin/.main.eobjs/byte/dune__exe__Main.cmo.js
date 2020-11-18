(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Dune_exe_Main=caml_string_of_jsbytes("Dune__exe__Main"),
     cst_app=caml_string_of_jsbytes("app"),
     cst_Dune_exe_Main$0=caml_string_of_jsbytes("Dune__exe__Main"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Incr_dom_counter_example_lib_A=
      global_data.Incr_dom_counter_example_lib__App,
     Incr_dom_Start_app=global_data.Incr_dom__Start_app;
    caml_call1(Ppx_module_timer_runtime[4],cst_Dune_exe_Main);
    caml_call5
     (Incr_dom_Start_app[1],
      0,
      0,
      cst_app,
      Incr_dom_counter_example_lib_A[6],
      [0,
       [0,Incr_dom_counter_example_lib_A[1][3]],
       Incr_dom_counter_example_lib_A[2],
       Incr_dom_counter_example_lib_A[3],
       Incr_dom_counter_example_lib_A[4],
       Incr_dom_counter_example_lib_A[5]]);
    caml_call1(Ppx_module_timer_runtime[5],cst_Dune_exe_Main$0);
    var Dune_exe_Main=[0];
    runtime.caml_register_global(6,Dune_exe_Main,"Dune__exe__Main");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fTWFpbi5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ3dlaWp1bi9WU1Byb2plY3QvaW5jci1leGFtcGxlL2NvdW50ZXIvX2J1aWxkL2RlZmF1bHQvYmluL21haW4ubWwiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPRTs7Ozs7Ozs7Ozs7Ozs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuISBDb3JlX2tlcm5lbFxub3BlbiEgSW5jcl9kb21cbm9wZW4hIEpzX29mX29jYW1sXG5cbm1vZHVsZSBBcHAgPSBJbmNyX2RvbV9jb3VudGVyX2V4YW1wbGVfbGliLkFwcFxuXG5sZXQgKCkgPVxuICBTdGFydF9hcHAuc3RhcnRcbiAgICAobW9kdWxlIEFwcClcbiAgICB+YmluZF90b19lbGVtZW50X3dpdGhfaWQ6XCJhcHBcIlxuICAgIH5pbml0aWFsX21vZGVsOiBBcHAuaW5pdGlhbF9tb2RlbFxuOzsiXX0=
