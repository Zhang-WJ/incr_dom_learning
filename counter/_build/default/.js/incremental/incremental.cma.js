(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_update_dummy=runtime.caml_update_dummy,
     caml_wrap_exception=runtime.caml_wrap_exception;
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    function caml_call10(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {return f.length == 10
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9])}
    function caml_call11(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
     {return f.length == 11
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10])}
    function caml_call12(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
     {return f.length == 12
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11])}
    function caml_call13(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
     {return f.length == 13
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12])}
    function caml_call14(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
     {return f.length == 14
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13])}
    function caml_call15(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)
     {return f.length == 15
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14])}
    function caml_call27
     (f,
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26)
     {return f.length == 27
              ?f
                (a0,
                 a1,
                 a2,
                 a3,
                 a4,
                 a5,
                 a6,
                 a7,
                 a8,
                 a9,
                 a10,
                 a11,
                 a12,
                 a13,
                 a14,
                 a15,
                 a16,
                 a17,
                 a18,
                 a19,
                 a20,
                 a21,
                 a22,
                 a23,
                 a24,
                 a25,
                 a26)
              :runtime.caml_call_gen
                (f,
                 [a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7,
                  a8,
                  a9,
                  a10,
                  a11,
                  a12,
                  a13,
                  a14,
                  a15,
                  a16,
                  a17,
                  a18,
                  a19,
                  a20,
                  a21,
                  a22,
                  a23,
                  a24,
                  a25,
                  a26])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Incremental_Before_or_afte=
      caml_string_of_jsbytes("Incremental__Before_or_after"),
     cst_incremental=caml_string_of_jsbytes("incremental"),
     cst_src_before_or_after_ml=
      caml_string_of_jsbytes("src/before_or_after.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_incremental$0=caml_string_of_jsbytes("incremental"),
     cst_incremental$1=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Before_or_afte$0=
      caml_string_of_jsbytes("Incremental__Before_or_after"),
     cst_Incremental_Import=caml_string_of_jsbytes("Incremental__Import"),
     cst_incremental$2=caml_string_of_jsbytes("incremental"),
     cst_src_import_ml=caml_string_of_jsbytes("src/import.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_incremental$3=caml_string_of_jsbytes("incremental"),
     cst_incremental$4=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Import$0=caml_string_of_jsbytes("Incremental__Import"),
     cst_Incremental_Cutoff=caml_string_of_jsbytes("Incremental__Cutoff"),
     cst_incremental$5=caml_string_of_jsbytes("incremental"),
     cst_src_cutoff_ml=caml_string_of_jsbytes("src/cutoff.ml"),
     cst$1=caml_string_of_jsbytes(""),
     cst_incremental$6=caml_string_of_jsbytes("incremental"),
     cst_incremental$7=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Cutoff$0=caml_string_of_jsbytes("Incremental__Cutoff"),
     cst_Incremental_Node_id=caml_string_of_jsbytes("Incremental__Node_id"),
     cst_incremental$8=caml_string_of_jsbytes("incremental"),
     cst_src_node_id_ml=caml_string_of_jsbytes("src/node_id.ml"),
     cst$2=caml_string_of_jsbytes(""),
     cst_incremental$9=caml_string_of_jsbytes("incremental"),
     cst_incremental$10=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Node_id$0=caml_string_of_jsbytes("Incremental__Node_id"),
     cst_Incremental_Stabilization_=
      caml_string_of_jsbytes("Incremental__Stabilization_num"),
     cst_incremental$11=caml_string_of_jsbytes("incremental"),
     cst_src_stabilization_num_ml=
      caml_string_of_jsbytes("src/stabilization_num.ml"),
     cst$3=caml_string_of_jsbytes(""),
     cst_incremental$12=caml_string_of_jsbytes("incremental"),
     cst_incremental$13=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Stabilization_$0=
      caml_string_of_jsbytes("Incremental__Stabilization_num"),
     cst_Incremental_On_update_hand=
      caml_string_of_jsbytes("Incremental__On_update_handler"),
     cst_incremental$14=caml_string_of_jsbytes("incremental"),
     cst_src_on_update_handler_ml=
      caml_string_of_jsbytes("src/on_update_handler.ml"),
     cst$4=caml_string_of_jsbytes(""),
     cst_incremental$15=caml_string_of_jsbytes("incremental"),
     cst_incremental$16=caml_string_of_jsbytes("incremental"),
     cst_Incremental_On_update_hand$0=
      caml_string_of_jsbytes("Incremental__On_update_handler"),
     cst_Incremental_Raised_exn=
      caml_string_of_jsbytes("Incremental__Raised_exn"),
     cst_incremental$17=caml_string_of_jsbytes("incremental"),
     cst_src_raised_exn_ml=caml_string_of_jsbytes("src/raised_exn.ml"),
     cst$5=caml_string_of_jsbytes(""),
     cst_incremental$18=caml_string_of_jsbytes("incremental"),
     cst_incremental$19=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Raised_exn$0=
      caml_string_of_jsbytes("Incremental__Raised_exn"),
     cst_Top=caml_string_of_jsbytes("Top"),
     cst_n=caml_string_of_jsbytes("n"),
     cst_Incremental_Types=caml_string_of_jsbytes("Incremental__Types"),
     cst_incremental$20=caml_string_of_jsbytes("incremental"),
     cst_src_types_ml=caml_string_of_jsbytes("src/types.ml"),
     cst$6=caml_string_of_jsbytes(""),
     cst_incremental$21=caml_string_of_jsbytes("incremental"),
     cst_incremental$22=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Types$0=caml_string_of_jsbytes("Incremental__Types"),
     cst_Incremental_Var=caml_string_of_jsbytes("Incremental__Var"),
     cst_incremental$23=caml_string_of_jsbytes("incremental"),
     cst_src_var_ml=caml_string_of_jsbytes("src/var.ml"),
     cst$7=caml_string_of_jsbytes(""),
     cst_incremental$24=caml_string_of_jsbytes("incremental"),
     cst_watch=caml_string_of_jsbytes("watch"),
     cst_set_at=caml_string_of_jsbytes("set_at"),
     cst_value_set_during_stabiliza=
      caml_string_of_jsbytes("value_set_during_stabilization"),
     cst_value=caml_string_of_jsbytes("value"),
     cst_incremental$25=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Var$0=caml_string_of_jsbytes("Incremental__Var"),
     cst_Unordered_array_fold_child=
      caml_string_of_jsbytes("[Unordered_array_fold.child_changed] mismatch"),
     pos=caml_string_of_jsbytes("src/unordered_array_fold.ml:58:26"),
     cst_Incremental_Unordered_arra=
      caml_string_of_jsbytes("Incremental__Unordered_array_fold"),
     cst_incremental$26=caml_string_of_jsbytes("incremental"),
     cst_src_unordered_array_fold_m=
      caml_string_of_jsbytes("src/unordered_array_fold.ml"),
     cst$8=caml_string_of_jsbytes(""),
     cst_incremental$27=caml_string_of_jsbytes("incremental"),
     cst_num_changes_since_last_ful=
      caml_string_of_jsbytes("num_changes_since_last_full_compute"),
     cst_fold_value=caml_string_of_jsbytes("fold_value"),
     cst_children=caml_string_of_jsbytes("children"),
     cst_full_compute_every_n_chang=
      caml_string_of_jsbytes("full_compute_every_n_changes"),
     cst_init=caml_string_of_jsbytes("init"),
     cst_main=caml_string_of_jsbytes("main"),
     cst_incremental$28=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Unordered_arra$0=
      caml_string_of_jsbytes("Incremental__Unordered_array_fold"),
     cst_Incremental_Alarm=caml_string_of_jsbytes("Incremental__Alarm"),
     cst_incremental$29=caml_string_of_jsbytes("incremental"),
     cst_src_alarm_ml=caml_string_of_jsbytes("src/alarm.ml"),
     cst$9=caml_string_of_jsbytes(""),
     cst_incremental$30=caml_string_of_jsbytes("incremental"),
     cst_incremental$31=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Alarm$0=caml_string_of_jsbytes("Incremental__Alarm"),
     cst_Incremental_Step_function_=
      caml_string_of_jsbytes("Incremental__Step_function_node"),
     cst_incremental$32=caml_string_of_jsbytes("incremental"),
     cst_src_step_function_node_ml=
      caml_string_of_jsbytes("src/step_function_node.ml"),
     cst$10=caml_string_of_jsbytes(""),
     cst_incremental$33=caml_string_of_jsbytes("incremental"),
     cst_alarm_value=caml_string_of_jsbytes("alarm_value"),
     cst_alarm=caml_string_of_jsbytes("alarm"),
     cst_value$0=caml_string_of_jsbytes("value"),
     cst_main$0=caml_string_of_jsbytes("main"),
     cst_incremental$34=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Step_function_$0=
      caml_string_of_jsbytes("Incremental__Step_function_node"),
     cst_Incremental_Array_fold=
      caml_string_of_jsbytes("Incremental__Array_fold"),
     cst_incremental$35=caml_string_of_jsbytes("incremental"),
     cst_src_array_fold_ml=caml_string_of_jsbytes("src/array_fold.ml"),
     cst$11=caml_string_of_jsbytes(""),
     cst_incremental$36=caml_string_of_jsbytes("incremental"),
     cst_children$0=caml_string_of_jsbytes("children"),
     cst_init$0=caml_string_of_jsbytes("init"),
     cst_incremental$37=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Array_fold$0=
      caml_string_of_jsbytes("Incremental__Array_fold"),
     cst_Incremental_At=caml_string_of_jsbytes("Incremental__At"),
     cst_incremental$38=caml_string_of_jsbytes("incremental"),
     cst_src_at_ml=caml_string_of_jsbytes("src/at.ml"),
     cst$12=caml_string_of_jsbytes(""),
     cst_incremental$39=caml_string_of_jsbytes("incremental"),
     cst_alarm$0=caml_string_of_jsbytes("alarm"),
     cst_main$1=caml_string_of_jsbytes("main"),
     cst_incremental$40=caml_string_of_jsbytes("incremental"),
     cst_Incremental_At$0=caml_string_of_jsbytes("Incremental__At"),
     cst_Incremental_At_intervals=
      caml_string_of_jsbytes("Incremental__At_intervals"),
     cst_incremental$41=caml_string_of_jsbytes("incremental"),
     cst_src_at_intervals_ml=caml_string_of_jsbytes("src/at_intervals.ml"),
     cst$13=caml_string_of_jsbytes(""),
     cst_incremental$42=caml_string_of_jsbytes("incremental"),
     cst_alarm$1=caml_string_of_jsbytes("alarm"),
     cst_interval=caml_string_of_jsbytes("interval"),
     cst_main$2=caml_string_of_jsbytes("main"),
     cst_incremental$43=caml_string_of_jsbytes("incremental"),
     cst_Incremental_At_intervals$0=
      caml_string_of_jsbytes("Incremental__At_intervals"),
     cst_Incremental_Bind=caml_string_of_jsbytes("Incremental__Bind"),
     cst_incremental$44=caml_string_of_jsbytes("incremental"),
     cst_src_bind_ml=caml_string_of_jsbytes("src/bind.ml"),
     cst$14=caml_string_of_jsbytes(""),
     cst_incremental$45=caml_string_of_jsbytes("incremental"),
     cst_all_nodes_created_on_rhs=
      caml_string_of_jsbytes("all_nodes_created_on_rhs"),
     cst_rhs_scope=caml_string_of_jsbytes("rhs_scope"),
     cst_lhs_change=caml_string_of_jsbytes("lhs_change"),
     cst_main$3=caml_string_of_jsbytes("main"),
     cst_incremental$46=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Bind$0=caml_string_of_jsbytes("Incremental__Bind"),
     pos$1=caml_string_of_jsbytes("src/expert.ml:76:19"),
     pos$2=caml_string_of_jsbytes("src/expert.ml:69:22"),
     pos$0=caml_string_of_jsbytes("src/expert.ml:60:21"),
     cst_Incremental_Expert=caml_string_of_jsbytes("Incremental__Expert"),
     cst_incremental$47=caml_string_of_jsbytes("incremental"),
     cst_src_expert_ml=caml_string_of_jsbytes("src/expert.ml"),
     cst$15=caml_string_of_jsbytes(""),
     cst_incremental$48=caml_string_of_jsbytes("incremental"),
     cst_incremental$49=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Expert$0=caml_string_of_jsbytes("Incremental__Expert"),
     cst_Incremental_Sexp_of=caml_string_of_jsbytes("Incremental__Sexp_of"),
     cst_incremental$50=caml_string_of_jsbytes("incremental"),
     cst_src_sexp_of_ml=caml_string_of_jsbytes("src/sexp_of.ml"),
     cst$16=caml_string_of_jsbytes(""),
     cst_incremental$51=caml_string_of_jsbytes("incremental"),
     cst_incremental$52=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Sexp_of$0=caml_string_of_jsbytes("Incremental__Sexp_of"),
     cst_Incremental_Scope=caml_string_of_jsbytes("Incremental__Scope"),
     cst_incremental$53=caml_string_of_jsbytes("incremental"),
     cst_src_scope_ml=caml_string_of_jsbytes("src/scope.ml"),
     cst$17=caml_string_of_jsbytes(""),
     cst_incremental$54=caml_string_of_jsbytes("incremental"),
     cst_incremental$55=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Scope$0=caml_string_of_jsbytes("Incremental__Scope"),
     cst_Incremental_Freeze=caml_string_of_jsbytes("Incremental__Freeze"),
     cst_incremental$56=caml_string_of_jsbytes("incremental"),
     cst_src_freeze_ml=caml_string_of_jsbytes("src/freeze.ml"),
     cst$18=caml_string_of_jsbytes(""),
     cst_incremental$57=caml_string_of_jsbytes("incremental"),
     cst_main$4=caml_string_of_jsbytes("main"),
     cst_incremental$58=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Freeze$0=caml_string_of_jsbytes("Incremental__Freeze"),
     cst_Incremental_If_then_else=
      caml_string_of_jsbytes("Incremental__If_then_else"),
     cst_incremental$59=caml_string_of_jsbytes("incremental"),
     cst_src_if_then_else_ml=caml_string_of_jsbytes("src/if_then_else.ml"),
     cst$19=caml_string_of_jsbytes(""),
     cst_incremental$60=caml_string_of_jsbytes("incremental"),
     cst_current_branch=caml_string_of_jsbytes("current_branch"),
     cst_test_change=caml_string_of_jsbytes("test_change"),
     cst_main$5=caml_string_of_jsbytes("main"),
     cst_incremental$61=caml_string_of_jsbytes("incremental"),
     cst_Incremental_If_then_else$0=
      caml_string_of_jsbytes("Incremental__If_then_else"),
     cst_Incremental_Join=caml_string_of_jsbytes("Incremental__Join"),
     cst_incremental$62=caml_string_of_jsbytes("incremental"),
     cst_src_join_ml=caml_string_of_jsbytes("src/join.ml"),
     cst$20=caml_string_of_jsbytes(""),
     cst_incremental$63=caml_string_of_jsbytes("incremental"),
     cst_lhs_change$0=caml_string_of_jsbytes("lhs_change"),
     cst_main$6=caml_string_of_jsbytes("main"),
     cst_incremental$64=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Join$0=caml_string_of_jsbytes("Incremental__Join"),
     cst_Incremental_Snapshot=caml_string_of_jsbytes("Incremental__Snapshot"),
     cst_incremental$65=caml_string_of_jsbytes("incremental"),
     cst_src_snapshot_ml=caml_string_of_jsbytes("src/snapshot.ml"),
     cst$21=caml_string_of_jsbytes(""),
     cst_incremental$66=caml_string_of_jsbytes("incremental"),
     cst_before=caml_string_of_jsbytes("before"),
     cst_main$7=caml_string_of_jsbytes("main"),
     cst_incremental$67=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Snapshot$0=
      caml_string_of_jsbytes("Incremental__Snapshot"),
     cst_Kind_slow_get_child_got_in=
      caml_string_of_jsbytes("Kind.slow_get_child got invalid index"),
     cst_Invalid=caml_string_of_jsbytes("Invalid"),
     cst_Uninitialized=caml_string_of_jsbytes("Uninitialized"),
     cst_Array_fold=caml_string_of_jsbytes("Array_fold"),
     cst_At=caml_string_of_jsbytes("At"),
     cst_At_intervals=caml_string_of_jsbytes("At_intervals"),
     cst_Bind_lhs_change=caml_string_of_jsbytes("Bind_lhs_change"),
     cst_Bind_main=caml_string_of_jsbytes("Bind_main"),
     cst_Const=caml_string_of_jsbytes("Const"),
     cst_Expert=caml_string_of_jsbytes("Expert"),
     cst_Freeze=caml_string_of_jsbytes("Freeze"),
     cst_If_test_change=caml_string_of_jsbytes("If_test_change"),
     cst_If_then_else=caml_string_of_jsbytes("If_then_else"),
     cst_Join_lhs_change=caml_string_of_jsbytes("Join_lhs_change"),
     cst_Join_main=caml_string_of_jsbytes("Join_main"),
     cst_Map=caml_string_of_jsbytes("Map"),
     cst_Snapshot=caml_string_of_jsbytes("Snapshot"),
     cst_Step_function=caml_string_of_jsbytes("Step_function"),
     cst_Unordered_array_fold=caml_string_of_jsbytes("Unordered_array_fold"),
     cst_Var=caml_string_of_jsbytes("Var"),
     cst_Map2=caml_string_of_jsbytes("Map2"),
     cst_Map3=caml_string_of_jsbytes("Map3"),
     cst_Map4=caml_string_of_jsbytes("Map4"),
     cst_Map5=caml_string_of_jsbytes("Map5"),
     cst_Map6=caml_string_of_jsbytes("Map6"),
     cst_Map7=caml_string_of_jsbytes("Map7"),
     cst_Map8=caml_string_of_jsbytes("Map8"),
     cst_Map9=caml_string_of_jsbytes("Map9"),
     cst_Map10=caml_string_of_jsbytes("Map10"),
     cst_Map11=caml_string_of_jsbytes("Map11"),
     cst_Map12=caml_string_of_jsbytes("Map12"),
     cst_Map13=caml_string_of_jsbytes("Map13"),
     cst_Map14=caml_string_of_jsbytes("Map14"),
     cst_Map15=caml_string_of_jsbytes("Map15"),
     cst_Incremental_Kind=caml_string_of_jsbytes("Incremental__Kind"),
     cst_incremental$68=caml_string_of_jsbytes("incremental"),
     cst_src_kind_ml=caml_string_of_jsbytes("src/kind.ml"),
     cst$22=caml_string_of_jsbytes(""),
     cst_incremental$69=caml_string_of_jsbytes("incremental"),
     cst_incremental$70=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Kind$0=caml_string_of_jsbytes("Incremental__Kind"),
     cst_n$0=caml_string_of_jsbytes("n"),
     cst_attempt_to_get_value_of_an=
      caml_string_of_jsbytes("attempt to get value of an invalid node"),
     pos$8=caml_string_of_jsbytes("src/node.ml:309:27"),
     pos$7=caml_string_of_jsbytes("src/node.ml:321:24"),
     pos$6=caml_string_of_jsbytes("src/node.ml:327:22"),
     pos$5=caml_string_of_jsbytes("src/node.ml:388:29"),
     pos$4=caml_string_of_jsbytes("src/node.ml:402:26"),
     pos$3=caml_string_of_jsbytes("src/node.ml:271:15"),
     cst_Incremental_Node=caml_string_of_jsbytes("Incremental__Node"),
     cst_incremental$71=caml_string_of_jsbytes("incremental"),
     cst_src_node_ml=caml_string_of_jsbytes("src/node.ml"),
     cst$23=caml_string_of_jsbytes(""),
     cst_incremental$72=caml_string_of_jsbytes("incremental"),
     cst_my_child_index_in_parent_a=
      caml_string_of_jsbytes("my_child_index_in_parent_at_index"),
     cst_my_parent_index_in_child_a=
      caml_string_of_jsbytes("my_parent_index_in_child_at_index"),
     cst_observers=caml_string_of_jsbytes("observers"),
     cst_old_value_opt=caml_string_of_jsbytes("old_value_opt"),
     cst_next_in_adjust_heights_hea=
      caml_string_of_jsbytes("next_in_adjust_heights_heap"),
     cst_height_in_adjust_heights_h=
      caml_string_of_jsbytes("height_in_adjust_heights_heap"),
     cst_next_in_recompute_heap=
      caml_string_of_jsbytes("next_in_recompute_heap"),
     cst_prev_in_recompute_heap=
      caml_string_of_jsbytes("prev_in_recompute_heap"),
     cst_height_in_recompute_heap=
      caml_string_of_jsbytes("height_in_recompute_heap"),
     cst_height=caml_string_of_jsbytes("height"),
     cst_next_node_in_same_scope=
      caml_string_of_jsbytes("next_node_in_same_scope"),
     cst_created_in=caml_string_of_jsbytes("created_in"),
     cst_parent0=caml_string_of_jsbytes("parent0"),
     cst_parent1_and_beyond=caml_string_of_jsbytes("parent1_and_beyond"),
     cst_num_parents=caml_string_of_jsbytes("num_parents"),
     cst_num_on_update_handlers=
      caml_string_of_jsbytes("num_on_update_handlers"),
     cst_changed_at=caml_string_of_jsbytes("changed_at"),
     cst_cutoff=caml_string_of_jsbytes("cutoff"),
     cst_kind=caml_string_of_jsbytes("kind"),
     cst_value_opt=caml_string_of_jsbytes("value_opt"),
     cst_recomputed_at=caml_string_of_jsbytes("recomputed_at"),
     cst_id=caml_string_of_jsbytes("id"),
     cst_incremental$73=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Node$0=caml_string_of_jsbytes("Incremental__Node"),
     pos$9=caml_string_of_jsbytes("src/recompute_heap.ml:38:22"),
     cst_Incremental_Recompute_heap=
      caml_string_of_jsbytes("Incremental__Recompute_heap"),
     cst_incremental$74=caml_string_of_jsbytes("incremental"),
     cst_src_recompute_heap_ml=caml_string_of_jsbytes("src/recompute_heap.ml"),
     cst$24=caml_string_of_jsbytes(""),
     cst_incremental$75=caml_string_of_jsbytes("incremental"),
     cst_nodes_by_height=caml_string_of_jsbytes("nodes_by_height"),
     cst_height_lower_bound=caml_string_of_jsbytes("height_lower_bound"),
     cst_length=caml_string_of_jsbytes("length"),
     cst_incremental$76=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Recompute_heap$0=
      caml_string_of_jsbytes("Incremental__Recompute_heap"),
     cst_adding_edge_made_graph_cyc=
      caml_string_of_jsbytes("adding edge made graph cyclic"),
     cst_node_with_too_large_height=
      caml_string_of_jsbytes("node with too large height"),
     cst_cannot_set_max_height_allo=
      caml_string_of_jsbytes
       ("cannot set_max_height_allowed less than the max height already seen"),
     cst_Incremental_Adjust_heights=
      caml_string_of_jsbytes("Incremental__Adjust_heights_heap"),
     cst_incremental$77=caml_string_of_jsbytes("incremental"),
     cst_src_adjust_heights_heap_ml=
      caml_string_of_jsbytes("src/adjust_heights_heap.ml"),
     cst$25=caml_string_of_jsbytes(""),
     cst_incremental$78=caml_string_of_jsbytes("incremental"),
     cst_nodes_by_height$0=caml_string_of_jsbytes("nodes_by_height"),
     cst_max_height_seen=caml_string_of_jsbytes("max_height_seen"),
     cst_height_lower_bound$0=caml_string_of_jsbytes("height_lower_bound"),
     cst_length$0=caml_string_of_jsbytes("length"),
     cst_incremental$79=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Adjust_heights$0=
      caml_string_of_jsbytes("Incremental__Adjust_heights_heap"),
     cst_Incremental_Alarm_value=
      caml_string_of_jsbytes("Incremental__Alarm_value"),
     cst_incremental$80=caml_string_of_jsbytes("incremental"),
     cst_src_alarm_value_ml=caml_string_of_jsbytes("src/alarm_value.ml"),
     cst$26=caml_string_of_jsbytes(""),
     cst_incremental$81=caml_string_of_jsbytes("incremental"),
     cst_action=caml_string_of_jsbytes("action"),
     cst_incremental$82=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Alarm_value$0=
      caml_string_of_jsbytes("Incremental__Alarm_value"),
     cst_Incremental_Config_intf=
      caml_string_of_jsbytes("Incremental__Config_intf"),
     cst_incremental$83=caml_string_of_jsbytes("incremental"),
     cst_src_config_intf_ml=caml_string_of_jsbytes("src/config_intf.ml"),
     cst$27=caml_string_of_jsbytes(""),
     cst_incremental$84=caml_string_of_jsbytes("incremental"),
     cst_incremental$85=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Config_intf$0=
      caml_string_of_jsbytes("Incremental__Config_intf"),
     cst_Incremental_Config=caml_string_of_jsbytes("Incremental__Config"),
     cst_incremental$86=caml_string_of_jsbytes("incremental"),
     cst_src_config_ml=caml_string_of_jsbytes("src/config.ml"),
     cst$28=caml_string_of_jsbytes(""),
     cst_incremental$87=caml_string_of_jsbytes("incremental"),
     cst_incremental$88=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Config$0=caml_string_of_jsbytes("Incremental__Config"),
     cst_on_update_disallowed=caml_string_of_jsbytes("on_update disallowed"),
     cst_Observer_value_exn_called_=
      caml_string_of_jsbytes
       ("Observer.value_exn called after disallow_future_use"),
     cst_Observer_value_exn_called_$0=
      caml_string_of_jsbytes("Observer.value_exn called without stabilizing"),
     cst_attempt_to_get_value_of_an$0=
      caml_string_of_jsbytes("attempt to get value of an invalid node"),
     cst_Incremental_Internal_obser=
      caml_string_of_jsbytes("Incremental__Internal_observer"),
     cst_incremental$89=caml_string_of_jsbytes("incremental"),
     cst_src_internal_observer_ml=
      caml_string_of_jsbytes("src/internal_observer.ml"),
     cst$29=caml_string_of_jsbytes(""),
     cst_incremental$90=caml_string_of_jsbytes("incremental"),
     cst_next_in_observing=caml_string_of_jsbytes("next_in_observing"),
     cst_prev_in_observing=caml_string_of_jsbytes("prev_in_observing"),
     cst_next_in_all=caml_string_of_jsbytes("next_in_all"),
     cst_prev_in_all=caml_string_of_jsbytes("prev_in_all"),
     cst_on_update_handlers=caml_string_of_jsbytes("on_update_handlers"),
     cst_observing=caml_string_of_jsbytes("observing"),
     cst_incremental$91=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Internal_obser$0=
      caml_string_of_jsbytes("Incremental__Internal_observer"),
     cst_Incremental_Observer=caml_string_of_jsbytes("Incremental__Observer"),
     cst_incremental$92=caml_string_of_jsbytes("incremental"),
     cst_src_observer_ml=caml_string_of_jsbytes("src/observer.ml"),
     cst$30=caml_string_of_jsbytes(""),
     cst_incremental$93=caml_string_of_jsbytes("incremental"),
     cst_incremental$94=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Observer$0=
      caml_string_of_jsbytes("Incremental__Observer"),
     cst_Trying_to_make_a_node_nece=
      caml_string_of_jsbytes
       ("Trying to make a node necessary whose defining bind is not necessary"),
     cst_on_children_nodes=caml_string_of_jsbytes(" on children nodes"),
     cst_can_only_call$1=caml_string_of_jsbytes("can only call "),
     cst_on_parent_nodes=caml_string_of_jsbytes(" on parent nodes"),
     cst_can_only_call$0=caml_string_of_jsbytes("can only call "),
     cst_during_stabilization=caml_string_of_jsbytes(" during stabilization"),
     cst_can_only_call=caml_string_of_jsbytes("can only call "),
     cst_unexpected_kind_for_expert=
      caml_string_of_jsbytes("unexpected kind for expert node"),
     cst_advance_clock=caml_string_of_jsbytes("advance_clock"),
     cst_cannot_take_snapshot_in_th=
      caml_string_of_jsbytes("cannot take snapshot in the past"),
     cst_at_intervals_got_too_small=
      caml_string_of_jsbytes("at_intervals got too small interval"),
     cst_unordered_array_fold_got_n=
      caml_string_of_jsbytes
       ("unordered_array_fold got non-positive full_compute_every_n_changes"),
     cst_stabilize=caml_string_of_jsbytes("stabilize"),
     cst_cannot_set_var_stabilizati=
      caml_string_of_jsbytes
       ("cannot set var -- stabilization previously raised"),
     cst_Observer_value_exn_called_$1=
      caml_string_of_jsbytes("Observer.value_exn called during stabilization"),
     cst_Observer_value_exn_called_$2=
      caml_string_of_jsbytes
       ("Observer.value_exn called after stabilize previously raised"),
     cst_attempt_to_run_within_an_i=
      caml_string_of_jsbytes("attempt to run within an invalid scope"),
     cst_set_max_height_allowed=
      caml_string_of_jsbytes("set_max_height_allowed"),
     cst_member_of_all_observers_wi=
      caml_string_of_jsbytes("member of all_observers with unexpected state"),
     cst_cannot_call_am_stabilizing=
      caml_string_of_jsbytes
       ("cannot call am_stabilizing -- stabilize previously raised"),
     cst_max_num_parents=caml_string_of_jsbytes("max_num_parents"),
     cst_percentage_of_nodes_by_num=
      caml_string_of_jsbytes("percentage_of_nodes_by_num_parents"),
     cst_percentage_of_nodes_by_num$0=
      caml_string_of_jsbytes("percentage_of_nodes_by_num_parents"),
     cst_max_num_parents$0=caml_string_of_jsbytes("max_num_parents"),
     cst_Incremental_State=caml_string_of_jsbytes("Incremental__State"),
     cst_incremental$95=caml_string_of_jsbytes("incremental"),
     cst_src_state_ml=caml_string_of_jsbytes("src/state.ml"),
     cst$31=caml_string_of_jsbytes(""),
     cst_incremental$96=caml_string_of_jsbytes("incremental"),
     names=
      [0,
       caml_string_of_jsbytes("currently_running_node"),
       [0,caml_string_of_jsbytes("expert_nodes_created_by_current_node"),0]],
     cst_expert_nodes_created_by_cu=
      caml_string_of_jsbytes("expert_nodes_created_by_current_node"),
     cst_currently_running_node=
      caml_string_of_jsbytes("currently_running_node"),
     names$0=
      caml_list_of_js_array
       ([caml_string_of_jsbytes("status"),
         caml_string_of_jsbytes("bind_lhs_change_should_invalidate_rhs"),
         caml_string_of_jsbytes("stabilization_num"),
         caml_string_of_jsbytes("current_scope"),
         caml_string_of_jsbytes("recompute_heap"),
         caml_string_of_jsbytes("adjust_heights_heap"),
         caml_string_of_jsbytes("propagate_invalidity"),
         caml_string_of_jsbytes("num_active_observers"),
         caml_string_of_jsbytes("all_observers"),
         caml_string_of_jsbytes("finalized_observers"),
         caml_string_of_jsbytes("new_observers"),
         caml_string_of_jsbytes("disallowed_observers"),
         caml_string_of_jsbytes("set_during_stabilization"),
         caml_string_of_jsbytes("handle_after_stabilization"),
         caml_string_of_jsbytes("run_on_update_handlers"),
         caml_string_of_jsbytes("only_in_debug"),
         caml_string_of_jsbytes("weak_hashtbls"),
         caml_string_of_jsbytes("keep_node_creation_backtrace"),
         caml_string_of_jsbytes("num_nodes_became_necessary"),
         caml_string_of_jsbytes("num_nodes_became_unnecessary"),
         caml_string_of_jsbytes("num_nodes_changed"),
         caml_string_of_jsbytes("num_nodes_created"),
         caml_string_of_jsbytes("num_nodes_invalidated"),
         caml_string_of_jsbytes("num_nodes_recomputed"),
         caml_string_of_jsbytes
          ("num_nodes_recomputed_directly_because_one_child"),
         caml_string_of_jsbytes
          ("num_nodes_recomputed_directly_because_min_height"),
         caml_string_of_jsbytes("num_var_sets")]),
     cst_num_var_sets=caml_string_of_jsbytes("num_var_sets"),
     cst_num_nodes_recomputed_direc=
      caml_string_of_jsbytes
       ("num_nodes_recomputed_directly_because_min_height"),
     cst_num_nodes_recomputed_direc$0=
      caml_string_of_jsbytes
       ("num_nodes_recomputed_directly_because_one_child"),
     cst_num_nodes_recomputed=caml_string_of_jsbytes("num_nodes_recomputed"),
     cst_num_nodes_invalidated=caml_string_of_jsbytes("num_nodes_invalidated"),
     cst_num_nodes_created=caml_string_of_jsbytes("num_nodes_created"),
     cst_num_nodes_changed=caml_string_of_jsbytes("num_nodes_changed"),
     cst_num_nodes_became_unnecessa=
      caml_string_of_jsbytes("num_nodes_became_unnecessary"),
     cst_num_nodes_became_necessary=
      caml_string_of_jsbytes("num_nodes_became_necessary"),
     cst_keep_node_creation_backtra=
      caml_string_of_jsbytes("keep_node_creation_backtrace"),
     cst_weak_hashtbls=caml_string_of_jsbytes("weak_hashtbls"),
     cst_only_in_debug=caml_string_of_jsbytes("only_in_debug"),
     cst_run_on_update_handlers=
      caml_string_of_jsbytes("run_on_update_handlers"),
     cst_handle_after_stabilization=
      caml_string_of_jsbytes("handle_after_stabilization"),
     cst_set_during_stabilization=
      caml_string_of_jsbytes("set_during_stabilization"),
     cst_disallowed_observers=caml_string_of_jsbytes("disallowed_observers"),
     cst_new_observers=caml_string_of_jsbytes("new_observers"),
     cst_finalized_observers=caml_string_of_jsbytes("finalized_observers"),
     cst_all_observers=caml_string_of_jsbytes("all_observers"),
     cst_num_active_observers=caml_string_of_jsbytes("num_active_observers"),
     cst_propagate_invalidity=caml_string_of_jsbytes("propagate_invalidity"),
     cst_adjust_heights_heap=caml_string_of_jsbytes("adjust_heights_heap"),
     cst_recompute_heap=caml_string_of_jsbytes("recompute_heap"),
     cst_current_scope=caml_string_of_jsbytes("current_scope"),
     cst_stabilization_num=caml_string_of_jsbytes("stabilization_num"),
     cst_bind_lhs_change_should_inv=
      caml_string_of_jsbytes("bind_lhs_change_should_invalidate_rhs"),
     cst_status=caml_string_of_jsbytes("status"),
     names$1=
      [0,
       caml_string_of_jsbytes("timing_wheel"),
       [0,
        caml_string_of_jsbytes("now"),
        [0,
         caml_string_of_jsbytes("handle_fired"),
         [0,caml_string_of_jsbytes("fired_alarm_values"),0]]]],
     cst_fired_alarm_values=caml_string_of_jsbytes("fired_alarm_values"),
     cst_handle_fired=caml_string_of_jsbytes("handle_fired"),
     cst_now=caml_string_of_jsbytes("now"),
     cst_timing_wheel=caml_string_of_jsbytes("timing_wheel"),
     tp_loc=caml_string_of_jsbytes("src/state.ml.Stats.t"),
     cst_incremental$97=caml_string_of_jsbytes("incremental"),
     cst_Incremental_State$0=caml_string_of_jsbytes("Incremental__State"),
     cst_Incremental_Expert1=caml_string_of_jsbytes("Incremental__Expert1"),
     cst_incremental$98=caml_string_of_jsbytes("incremental"),
     cst_src_expert1_ml=caml_string_of_jsbytes("src/expert1.ml"),
     cst$32=caml_string_of_jsbytes(""),
     cst_incremental$99=caml_string_of_jsbytes("incremental"),
     cst_incremental$100=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Expert1$0=caml_string_of_jsbytes("Incremental__Expert1"),
     cst_Incremental_Reduce_balance=
      caml_string_of_jsbytes("Incremental__Reduce_balanced"),
     cst_incremental$101=caml_string_of_jsbytes("incremental"),
     cst_src_reduce_balanced_ml=
      caml_string_of_jsbytes("src/reduce_balanced.ml"),
     cst$33=caml_string_of_jsbytes(""),
     cst_incremental$102=caml_string_of_jsbytes("incremental"),
     cst_incremental$103=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Reduce_balance$0=
      caml_string_of_jsbytes("Incremental__Reduce_balanced"),
     cst_Incremental_Incremental_in=
      caml_string_of_jsbytes("Incremental__Incremental_intf"),
     cst_incremental$104=caml_string_of_jsbytes("incremental"),
     cst_src_incremental_intf_ml=
      caml_string_of_jsbytes("src/incremental_intf.ml"),
     cst$34=caml_string_of_jsbytes(""),
     cst_incremental$105=caml_string_of_jsbytes("incremental"),
     cst_incremental$106=caml_string_of_jsbytes("incremental"),
     cst_Incremental_Incremental_in$0=
      caml_string_of_jsbytes("Incremental__Incremental_intf"),
     cst_invalid$0=caml_string_of_jsbytes("<invalid>"),
     cst_unnecessary=caml_string_of_jsbytes("<unnecessary>"),
     cst_uncomputed=caml_string_of_jsbytes("<uncomputed>"),
     cst_disallowed=caml_string_of_jsbytes("<disallowed>"),
     cst_unstabilized=caml_string_of_jsbytes("<unstabilized>"),
     cst_invalid=caml_string_of_jsbytes("<invalid>"),
     cst_Incremental_bug_Observer_o=
      caml_string_of_jsbytes
       ("Incremental bug -- Observer.on_update_exn got unexpected update Unnecessary"),
     cst_Incremental=caml_string_of_jsbytes("Incremental"),
     cst_incremental$107=caml_string_of_jsbytes("incremental"),
     cst_src_incremental_ml=caml_string_of_jsbytes("src/incremental.ml"),
     cst$35=caml_string_of_jsbytes(""),
     cst_incremental$108=caml_string_of_jsbytes("incremental"),
     level_bits=[0,14,[0,13,[0,5,0]]],
     cst_incremental$109=caml_string_of_jsbytes("incremental"),
     cst_Incremental$0=caml_string_of_jsbytes("Incremental"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel=global_data.Core_kernel,
     include=global_data.Core_kernel__Int,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     include$0=global_data.Uopt,
     Base_Invariant=global_data.Base__Invariant,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Assert_failure=global_data.Assert_failure,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Base_Backtrace=global_data.Base__Backtrace,
     CamlinternalMod=global_data.CamlinternalMod,
     Base_Field=global_data.Base__Field,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Timing_wheel=global_data.Timing_wheel,
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Incremental_step_function=global_data.Incremental_step_function,
     Core_kernel_Hash_set=global_data.Core_kernel__Hash_set,
     Core_kernel_List=global_data.Core_kernel__List,
     Stdio_Out_channel=global_data.Stdio__Out_channel,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Core_kernel_Stack=global_data.Core_kernel__Stack,
     Weak_hashtbl=global_data.Weak_hashtbl,
     Thread_safe_queue=global_data.Thread_safe_queue,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Core_kernel_Fn=global_data.Core_kernel__Fn,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Lazy=global_data.Core_kernel__Lazy,
     Core_kernel_Gc=global_data.Core_kernel__Gc,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Percent=global_data.Core_kernel__Percent,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Balanced_reducer=global_data.Balanced_reducer,
     Core_kernel_Tuple=global_data.Core_kernel__Tuple,
     Incremental=[0];
    caml_register_global(1255,Incremental,"Incremental__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Before_or_afte);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental);
    caml_call1(Expect_test_collector[4][1],cst_src_before_or_after_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$0,cst);
    var
     _a_=[0,caml_string_of_jsbytes("After")],
     _b_=[0,caml_string_of_jsbytes("Before")],
     _l_=[0,caml_string_of_jsbytes("_")],
     _m_=[0,caml_string_of_jsbytes("src/cutoff.ml"),17,416,438],
     _f_=[0,caml_string_of_jsbytes("Always")],
     _g_=[0,caml_string_of_jsbytes("Never")],
     _h_=[0,caml_string_of_jsbytes("Phys_equal")],
     _i_=[0,caml_string_of_jsbytes("Compare")],
     _j_=[0,caml_string_of_jsbytes("Equal")],
     _k_=[0,caml_string_of_jsbytes("F")],
     _n_=[0,caml_string_of_jsbytes("src/node_id.ml"),5,18],
     _x_=[0,caml_string_of_jsbytes("src/stabilization_num.ml"),5,18],
     _H_=[0,caml_string_of_jsbytes("created_at")],
     _I_=[0,caml_string_of_jsbytes("previous_update_kind")],
     _J_=[0,caml_string_of_jsbytes("f")],
     _D_=[0,caml_string_of_jsbytes("Invalidated")],
     _E_=[0,caml_string_of_jsbytes("Unnecessary")],
     _F_=[0,caml_string_of_jsbytes("Necessary")],
     _G_=[0,caml_string_of_jsbytes("Changed")],
     _y_=[0,caml_string_of_jsbytes("Never_been_updated")],
     _z_=[0,caml_string_of_jsbytes("Necessary")],
     _A_=[0,caml_string_of_jsbytes("Changed")],
     _B_=[0,caml_string_of_jsbytes("Invalidated")],
     _C_=[0,caml_string_of_jsbytes("Unnecessary")],
     _K_=[0,caml_string_of_jsbytes("backtrace")],
     _L_=[0,caml_string_of_jsbytes("exn")],
     _a7_=[0,caml_string_of_jsbytes("_")],
     _a0_=[0,caml_string_of_jsbytes("_")],
     _M_=[0,[0]],
     _N_=[0,caml_string_of_jsbytes("src/types.ml"),22,2],
     _O_=[0,[0]],
     _P_=[0,caml_string_of_jsbytes("src/types.ml"),27,2],
     _Q_=[0,[0,[0,[0]]]],
     _R_=[0,caml_string_of_jsbytes("src/types.ml"),43,2],
     _S_=[0,[0]],
     _T_=[0,caml_string_of_jsbytes("src/types.ml"),52,2],
     _U_=[0,[0]],
     _V_=[0,caml_string_of_jsbytes("src/types.ml"),62,2],
     _W_=[0,[0]],
     _X_=[0,caml_string_of_jsbytes("src/types.ml"),73,2],
     _Y_=[0,[0]],
     _Z_=[0,caml_string_of_jsbytes("src/types.ml"),86,2],
     ___=[0,[0]],
     _$_=[0,caml_string_of_jsbytes("src/types.ml"),96,2],
     _aa_=[0,[0]],
     _ab_=[0,caml_string_of_jsbytes("src/types.ml"),117,2],
     _ac_=[0,[0]],
     _ad_=[0,caml_string_of_jsbytes("src/types.ml"),126,2],
     _ae_=[0,[0]],
     _af_=[0,caml_string_of_jsbytes("src/types.ml"),138,2],
     _ag_=[0,[0,[0,[0]],[0,[0]]]],
     _ah_=[0,caml_string_of_jsbytes("src/types.ml"),165,2],
     _ai_=[0,[0]],
     _aj_=[0,caml_string_of_jsbytes("src/types.ml"),175,2],
     _ak_=[0,[0]],
     _al_=[0,caml_string_of_jsbytes("src/types.ml"),416,2],
     _am_=[0,[0,0,[0,[0,0]],0,0,0]],
     _an_=[0,caml_string_of_jsbytes("src/types.ml"),460,6],
     _ao_=[0,[0]],
     _ap_=[0,caml_string_of_jsbytes("src/types.ml"),519,2],
     _aq_=[0,[0]],
     _ar_=[0,caml_string_of_jsbytes("src/types.ml"),527,2],
     _as_=[0,[0]],
     _at_=[0,caml_string_of_jsbytes("src/types.ml"),532,2],
     _au_=[0,[0]],
     _av_=[0,caml_string_of_jsbytes("src/types.ml"),541,2],
     _aw_=[0,[0]],
     _ax_=[0,caml_string_of_jsbytes("src/types.ml"),546,2],
     _ay_=[0,[0,0]],
     _az_=[0,caml_string_of_jsbytes("src/types.ml"),553,6],
     _aA_=[0,[0]],
     _aB_=[0,caml_string_of_jsbytes("src/types.ml"),573,2],
     _aC_=[0,[0]],
     _aD_=[0,caml_string_of_jsbytes("src/types.ml"),606,2],
     _aE_=[0,[0]],
     _aF_=[0,caml_string_of_jsbytes("src/types.ml"),615,2],
     _aG_=[0,[0]],
     _aH_=[0,caml_string_of_jsbytes("src/types.ml"),629,2],
     _aI_=[0,[0]],
     _aJ_=[0,caml_string_of_jsbytes("src/types.ml"),643,2],
     _aK_=[0,[0,[0,[0]]]],
     _aL_=[0,caml_string_of_jsbytes("src/types.ml"),659,2],
     _aM_=[0,[0]],
     _aN_=[0,[0]],
     _aO_=[0,[0,[0,[0]]]],
     _aP_=[0,[0]],
     _aQ_=[0,[0]],
     _aR_=[0,[0]],
     _aS_=[0,[0]],
     _aT_=[0,[0]],
     _aU_=[0,[0]],
     _aV_=[0,[0]],
     _aW_=[0,[0]],
     _aX_=[0,[0,[0,[0]],[0,[0]]]],
     _aY_=[0,[0]],
     _aZ_=[0,[0]],
     _a1_=[0,[0,0,[0,[0,0]],0,0,0]],
     _a2_=[0,[0]],
     _a3_=[0,[0]],
     _a4_=[0,[0]],
     _a5_=[0,[0]],
     _a6_=[0,[0]],
     _a8_=[0,[0,0]],
     _a9_=[0,[0]],
     _a__=[0,[0]],
     _a$_=[0,[0]],
     _ba_=[0,[0]],
     _bb_=[0,[0]],
     _bc_=[0,[0,[0,[0]]]],
     _bt_=[0,caml_string_of_jsbytes("_")],
     _bu_=[0,caml_string_of_jsbytes("T")],
     _br_=[0,caml_string_of_jsbytes("_")],
     _bq_=[0,caml_string_of_jsbytes("src/var.ml"),32,23],
     _bp_=[0,caml_string_of_jsbytes("src/var.ml"),33,18],
     _bs_=[0,caml_string_of_jsbytes("src/var.ml"),22,920,942],
     _bl_=[0,caml_string_of_jsbytes("watch")],
     _bm_=[0,caml_string_of_jsbytes("set_at")],
     _bn_=[0,caml_string_of_jsbytes("value_set_during_stabilization")],
     _bo_=[0,caml_string_of_jsbytes("value")],
     _b4_=[0,caml_string_of_jsbytes("_")],
     _b3_=[0,caml_string_of_jsbytes("_")],
     _b0_=[0,caml_string_of_jsbytes("_")],
     _b1_=[0,caml_string_of_jsbytes("child")],
     _b2_=[0,caml_string_of_jsbytes("child_index")],
     _b5_=[0,caml_string_of_jsbytes("unordered_array_fold")],
     _bY_=[0,caml_string_of_jsbytes("_")],
     _bX_=[0,caml_string_of_jsbytes("_")],
     _bW_=[0,caml_string_of_jsbytes("src/unordered_array_fold.ml"),43,40],
     _bV_=[0,caml_string_of_jsbytes("src/unordered_array_fold.ml"),44,18],
     _bU_=[0,caml_string_of_jsbytes("src/unordered_array_fold.ml"),70,11],
     _bT_=[0,caml_string_of_jsbytes("src/unordered_array_fold.ml"),54,18],
     _bS_=[0,caml_string_of_jsbytes("src/unordered_array_fold.ml"),65,11],
     _bR_=[0,caml_string_of_jsbytes("src/unordered_array_fold.ml"),66,11],
     _bZ_=[0,caml_string_of_jsbytes("src/unordered_array_fold.ml"),36,923,945],
     _bJ_=[0,caml_string_of_jsbytes("num_changes_since_last_full_compute")],
     _bK_=[0,caml_string_of_jsbytes("fold_value")],
     _bL_=[0,caml_string_of_jsbytes("children")],
     _bM_=[0,caml_string_of_jsbytes("full_compute_every_n_changes")],
     _bN_=[0,caml_string_of_jsbytes("update")],
     _bO_=[0,caml_string_of_jsbytes("f")],
     _bP_=[0,caml_string_of_jsbytes("init")],
     _bQ_=[0,caml_string_of_jsbytes("main")],
     _bv_=[0,caml_string_of_jsbytes("F_inverse")],
     _bw_=[0,caml_string_of_jsbytes("Update")],
     _cp_=[0,caml_string_of_jsbytes("_")],
     _co_=[0,caml_string_of_jsbytes("src/step_function_node.ml"),30,33],
     _cn_=[0,caml_string_of_jsbytes("src/step_function_node.ml"),31,18],
     _cl_=[0,caml_string_of_jsbytes("src/step_function_node.ml"),41,18],
     _cm_=[0,caml_string_of_jsbytes("src/step_function_node.ml"),40,33],
     _cq_=[0,caml_string_of_jsbytes("src/step_function_node.ml"),22,633,655],
     _cd_=[0,caml_string_of_jsbytes("clock")],
     _ce_=[0,caml_string_of_jsbytes("alarm_value")],
     _cf_=[0,caml_string_of_jsbytes("alarm")],
     _cg_=[0,caml_string_of_jsbytes("upcoming_steps")],
     _ch_=[0,caml_string_of_jsbytes("value")],
     _ci_=[0,caml_string_of_jsbytes("extracted_step_function_from_child_at")],
     _cj_=[0,caml_string_of_jsbytes("child")],
     _ck_=[0,caml_string_of_jsbytes("main")],
     _cz_=[0,caml_string_of_jsbytes("_")],
     _cy_=[0,caml_string_of_jsbytes("_")],
     _cA_=[0,caml_string_of_jsbytes("src/array_fold.ml"),13,260,282],
     _cv_=[0,caml_string_of_jsbytes("children")],
     _cw_=[0,caml_string_of_jsbytes("f")],
     _cx_=[0,caml_string_of_jsbytes("init")],
     _cK_=[0,caml_string_of_jsbytes("src/at.ml"),23,22],
     _cJ_=[0,caml_string_of_jsbytes("src/at.ml"),24,18],
     _cL_=[0,caml_string_of_jsbytes("src/at.ml"),15,271,293],
     _cF_=[0,caml_string_of_jsbytes("clock")],
     _cG_=[0,caml_string_of_jsbytes("alarm")],
     _cH_=[0,caml_string_of_jsbytes("at")],
     _cI_=[0,caml_string_of_jsbytes("main")],
     _cZ_=[0,caml_string_of_jsbytes("src/at_intervals.ml"),23,32],
     _cY_=[0,caml_string_of_jsbytes("src/at_intervals.ml"),24,18],
     _cX_=[0,caml_string_of_jsbytes("src/at_intervals.ml"),26,40],
     _c0_=[0,caml_string_of_jsbytes("src/at_intervals.ml"),16,300,322],
     _cS_=[0,caml_string_of_jsbytes("clock")],
     _cT_=[0,caml_string_of_jsbytes("alarm")],
     _cU_=[0,caml_string_of_jsbytes("interval")],
     _cV_=[0,caml_string_of_jsbytes("base")],
     _cW_=[0,caml_string_of_jsbytes("main")],
     _do_=[0,caml_string_of_jsbytes("_")],
     _dn_=[0,caml_string_of_jsbytes("_")],
     _dm_=[0,caml_string_of_jsbytes("src/bind.ml"),52,29],
     _dl_=[0,caml_string_of_jsbytes("src/bind.ml"),53,18],
     _dk_=[0,caml_string_of_jsbytes("src/bind.ml"),58,11],
     _dj_=[0,caml_string_of_jsbytes("src/bind.ml"),61,35],
     _di_=[0,caml_string_of_jsbytes("src/bind.ml"),62,18],
     _dg_=[0,caml_string_of_jsbytes("src/bind.ml"),67,24],
     _dh_=[0,caml_string_of_jsbytes("src/bind.ml"),66,26],
     _df_=[0,caml_string_of_jsbytes("src/bind.ml"),71,13],
     _de_=[0,caml_string_of_jsbytes("src/bind.ml"),73,18],
     _dp_=[0,caml_string_of_jsbytes("src/bind.ml"),45,1445,1467],
     _c9_=[0,caml_string_of_jsbytes("all_nodes_created_on_rhs")],
     _c__=[0,caml_string_of_jsbytes("rhs_scope")],
     _c$_=[0,caml_string_of_jsbytes("rhs")],
     _da_=[0,caml_string_of_jsbytes("lhs_change")],
     _db_=[0,caml_string_of_jsbytes("lhs")],
     _dc_=[0,caml_string_of_jsbytes("f")],
     _dd_=[0,caml_string_of_jsbytes("main")],
     _dF_=[0,caml_string_of_jsbytes("src/expert.ml"),142,2],
     _dE_=[0,caml_string_of_jsbytes("src/expert.ml"),111,2],
     _dC_=[0,caml_string_of_jsbytes("src/expert.ml"),61,15],
     _dD_=[0,caml_string_of_jsbytes("src/expert.ml"),53,2],
     _dv_=[0,caml_string_of_jsbytes("will_fire_all_callbacks")],
     _dw_=[0,caml_string_of_jsbytes("num_invalid_children")],
     _dx_=[0,caml_string_of_jsbytes("force_stale")],
     _dy_=[0,caml_string_of_jsbytes("num_children")],
     _dz_=[0,caml_string_of_jsbytes("children")],
     _dA_=[0,caml_string_of_jsbytes("on_observability_change")],
     _dB_=[0,caml_string_of_jsbytes("f")],
     _dt_=[0,caml_string_of_jsbytes("_")],
     _du_=[0,caml_string_of_jsbytes("E")],
     _dq_=[0,caml_string_of_jsbytes("index")],
     _dr_=[0,caml_string_of_jsbytes("on_change")],
     _ds_=[0,caml_string_of_jsbytes("child")],
     _dG_=[0,caml_string_of_jsbytes("src/scope.ml"),37,2],
     _dP_=[0,caml_string_of_jsbytes("_")],
     _dO_=[0,caml_string_of_jsbytes("src/freeze.ml"),19,11],
     _dN_=[0,caml_string_of_jsbytes("src/freeze.ml"),23,26],
     _dM_=[0,caml_string_of_jsbytes("src/freeze.ml"),24,18],
     _dQ_=[0,caml_string_of_jsbytes("src/freeze.ml"),14,246,268],
     _dJ_=[0,caml_string_of_jsbytes("only_freeze_when")],
     _dK_=[0,caml_string_of_jsbytes("child")],
     _dL_=[0,caml_string_of_jsbytes("main")],
     _d7_=[0,caml_string_of_jsbytes("_")],
     _d6_=[0,caml_string_of_jsbytes("src/if_then_else.ml"),26,32],
     _d5_=[0,caml_string_of_jsbytes("src/if_then_else.ml"),33,34],
     _d4_=[0,caml_string_of_jsbytes("src/if_then_else.ml"),34,18],
     _d3_=[0,caml_string_of_jsbytes("src/if_then_else.ml"),40,13],
     _d8_=[0,caml_string_of_jsbytes("src/if_then_else.ml"),19,389,411],
     _dX_=[0,caml_string_of_jsbytes("else_")],
     _dY_=[0,caml_string_of_jsbytes("then_")],
     _dZ_=[0,caml_string_of_jsbytes("current_branch")],
     _d0_=[0,caml_string_of_jsbytes("test_change")],
     _d1_=[0,caml_string_of_jsbytes("test")],
     _d2_=[0,caml_string_of_jsbytes("main")],
     _ej_=[0,caml_string_of_jsbytes("_")],
     _ei_=[0,caml_string_of_jsbytes("src/join.ml"),24,29],
     _eh_=[0,caml_string_of_jsbytes("src/join.ml"),25,18],
     _eg_=[0,caml_string_of_jsbytes("src/join.ml"),31,35],
     _ef_=[0,caml_string_of_jsbytes("src/join.ml"),32,18],
     _ek_=[0,caml_string_of_jsbytes("src/join.ml"),17,329,351],
     _eb_=[0,caml_string_of_jsbytes("rhs")],
     _ec_=[0,caml_string_of_jsbytes("lhs_change")],
     _ed_=[0,caml_string_of_jsbytes("lhs")],
     _ee_=[0,caml_string_of_jsbytes("main")],
     _ex_=[0,caml_string_of_jsbytes("_")],
     _ew_=[0,caml_string_of_jsbytes("src/snapshot.ml"),21,11],
     _ev_=[0,caml_string_of_jsbytes("src/snapshot.ml"),25,28],
     _eu_=[0,caml_string_of_jsbytes("src/snapshot.ml"),26,18],
     _ey_=[0,caml_string_of_jsbytes("src/snapshot.ml"),16,293,315],
     _ep_=[0,caml_string_of_jsbytes("clock")],
     _eq_=[0,caml_string_of_jsbytes("value_at")],
     _er_=[0,caml_string_of_jsbytes("before")],
     _es_=[0,caml_string_of_jsbytes("at")],
     _et_=[0,caml_string_of_jsbytes("main")],
     _g5_=[0,caml_string_of_jsbytes("_")],
     _g6_=[0,caml_string_of_jsbytes("src/kind.ml"),607,14358,14372],
     _g3_=[0,caml_string_of_jsbytes("_")],
     _g2_=[0,caml_string_of_jsbytes("_")],
     _g1_=[0,caml_string_of_jsbytes("_")],
     _g0_=[0,caml_string_of_jsbytes("_")],
     _gZ_=[0,caml_string_of_jsbytes("_")],
     _gY_=[0,caml_string_of_jsbytes("_")],
     _gX_=[0,caml_string_of_jsbytes("_")],
     _gW_=[0,caml_string_of_jsbytes("_")],
     _gV_=[0,caml_string_of_jsbytes("_")],
     _gU_=[0,caml_string_of_jsbytes("_")],
     _gT_=[0,caml_string_of_jsbytes("_")],
     _gS_=[0,caml_string_of_jsbytes("_")],
     _gR_=[0,caml_string_of_jsbytes("_")],
     _gQ_=[0,caml_string_of_jsbytes("_")],
     _gP_=[0,caml_string_of_jsbytes("_")],
     _gN_=[0,caml_string_of_jsbytes("_")],
     _gM_=[0,caml_string_of_jsbytes("_")],
     _gL_=[0,caml_string_of_jsbytes("_")],
     _gK_=[0,caml_string_of_jsbytes("_")],
     _gJ_=[0,caml_string_of_jsbytes("_")],
     _gI_=[0,caml_string_of_jsbytes("_")],
     _gH_=[0,caml_string_of_jsbytes("_")],
     _gG_=[0,caml_string_of_jsbytes("_")],
     _gF_=[0,caml_string_of_jsbytes("_")],
     _gE_=[0,caml_string_of_jsbytes("_")],
     _gD_=[0,caml_string_of_jsbytes("_")],
     _gC_=[0,caml_string_of_jsbytes("_")],
     _gB_=[0,caml_string_of_jsbytes("_")],
     _gA_=[0,caml_string_of_jsbytes("_")],
     _gy_=[0,caml_string_of_jsbytes("_")],
     _gx_=[0,caml_string_of_jsbytes("_")],
     _gw_=[0,caml_string_of_jsbytes("_")],
     _gv_=[0,caml_string_of_jsbytes("_")],
     _gu_=[0,caml_string_of_jsbytes("_")],
     _gt_=[0,caml_string_of_jsbytes("_")],
     _gs_=[0,caml_string_of_jsbytes("_")],
     _gr_=[0,caml_string_of_jsbytes("_")],
     _gq_=[0,caml_string_of_jsbytes("_")],
     _gp_=[0,caml_string_of_jsbytes("_")],
     _go_=[0,caml_string_of_jsbytes("_")],
     _gn_=[0,caml_string_of_jsbytes("_")],
     _gm_=[0,caml_string_of_jsbytes("_")],
     _gk_=[0,caml_string_of_jsbytes("_")],
     _gj_=[0,caml_string_of_jsbytes("_")],
     _gi_=[0,caml_string_of_jsbytes("_")],
     _gh_=[0,caml_string_of_jsbytes("_")],
     _gg_=[0,caml_string_of_jsbytes("_")],
     _gf_=[0,caml_string_of_jsbytes("_")],
     _ge_=[0,caml_string_of_jsbytes("_")],
     _gd_=[0,caml_string_of_jsbytes("_")],
     _gc_=[0,caml_string_of_jsbytes("_")],
     _gb_=[0,caml_string_of_jsbytes("_")],
     _ga_=[0,caml_string_of_jsbytes("_")],
     _f$_=[0,caml_string_of_jsbytes("_")],
     _f9_=[0,caml_string_of_jsbytes("_")],
     _f8_=[0,caml_string_of_jsbytes("_")],
     _f7_=[0,caml_string_of_jsbytes("_")],
     _f6_=[0,caml_string_of_jsbytes("_")],
     _f5_=[0,caml_string_of_jsbytes("_")],
     _f4_=[0,caml_string_of_jsbytes("_")],
     _f3_=[0,caml_string_of_jsbytes("_")],
     _f2_=[0,caml_string_of_jsbytes("_")],
     _f1_=[0,caml_string_of_jsbytes("_")],
     _f0_=[0,caml_string_of_jsbytes("_")],
     _fZ_=[0,caml_string_of_jsbytes("_")],
     _fX_=[0,caml_string_of_jsbytes("_")],
     _fW_=[0,caml_string_of_jsbytes("_")],
     _fV_=[0,caml_string_of_jsbytes("_")],
     _fU_=[0,caml_string_of_jsbytes("_")],
     _fT_=[0,caml_string_of_jsbytes("_")],
     _fS_=[0,caml_string_of_jsbytes("_")],
     _fR_=[0,caml_string_of_jsbytes("_")],
     _fQ_=[0,caml_string_of_jsbytes("_")],
     _fP_=[0,caml_string_of_jsbytes("_")],
     _fO_=[0,caml_string_of_jsbytes("_")],
     _fM_=[0,caml_string_of_jsbytes("_")],
     _fL_=[0,caml_string_of_jsbytes("_")],
     _fK_=[0,caml_string_of_jsbytes("_")],
     _fJ_=[0,caml_string_of_jsbytes("_")],
     _fI_=[0,caml_string_of_jsbytes("_")],
     _fH_=[0,caml_string_of_jsbytes("_")],
     _fG_=[0,caml_string_of_jsbytes("_")],
     _fF_=[0,caml_string_of_jsbytes("_")],
     _fE_=[0,caml_string_of_jsbytes("_")],
     _fC_=[0,caml_string_of_jsbytes("_")],
     _fB_=[0,caml_string_of_jsbytes("_")],
     _fA_=[0,caml_string_of_jsbytes("_")],
     _fz_=[0,caml_string_of_jsbytes("_")],
     _fy_=[0,caml_string_of_jsbytes("_")],
     _fx_=[0,caml_string_of_jsbytes("_")],
     _fw_=[0,caml_string_of_jsbytes("_")],
     _fv_=[0,caml_string_of_jsbytes("_")],
     _ft_=[0,caml_string_of_jsbytes("_")],
     _fs_=[0,caml_string_of_jsbytes("_")],
     _fr_=[0,caml_string_of_jsbytes("_")],
     _fq_=[0,caml_string_of_jsbytes("_")],
     _fp_=[0,caml_string_of_jsbytes("_")],
     _fo_=[0,caml_string_of_jsbytes("_")],
     _fn_=[0,caml_string_of_jsbytes("_")],
     _fl_=[0,caml_string_of_jsbytes("_")],
     _fk_=[0,caml_string_of_jsbytes("_")],
     _fj_=[0,caml_string_of_jsbytes("_")],
     _fi_=[0,caml_string_of_jsbytes("_")],
     _fh_=[0,caml_string_of_jsbytes("_")],
     _fg_=[0,caml_string_of_jsbytes("_")],
     _fe_=[0,caml_string_of_jsbytes("_")],
     _fd_=[0,caml_string_of_jsbytes("_")],
     _fc_=[0,caml_string_of_jsbytes("_")],
     _fb_=[0,caml_string_of_jsbytes("_")],
     _fa_=[0,caml_string_of_jsbytes("_")],
     _e__=[0,caml_string_of_jsbytes("_")],
     _e9_=[0,caml_string_of_jsbytes("_")],
     _e8_=[0,caml_string_of_jsbytes("_")],
     _e7_=[0,caml_string_of_jsbytes("_")],
     _e5_=[0,caml_string_of_jsbytes("_")],
     _e4_=[0,caml_string_of_jsbytes("_")],
     _e3_=[0,caml_string_of_jsbytes("_")],
     _e1_=[0,caml_string_of_jsbytes("_")],
     _e0_=[0,caml_string_of_jsbytes("_")],
     _eX_=[0,caml_string_of_jsbytes("_")],
     _eT_=[0,caml_string_of_jsbytes("_")],
     _eQ_=[0,caml_string_of_jsbytes("_")],
     _eN_=[0,caml_string_of_jsbytes("_")],
     _eI_=[0,caml_string_of_jsbytes("_")],
     _eG_=[0,caml_string_of_jsbytes("_")],
     _eF_=[0,caml_string_of_jsbytes("_")],
     _eB_=[0,caml_string_of_jsbytes("_")],
     _ez_=[0,caml_string_of_jsbytes("Invalid")],
     _eA_=[0,caml_string_of_jsbytes("Uninitialized")],
     _eC_=[0,caml_string_of_jsbytes("Array_fold")],
     _eD_=[0,caml_string_of_jsbytes("At")],
     _eE_=[0,caml_string_of_jsbytes("At_intervals")],
     _eH_=[0,caml_string_of_jsbytes("Bind_lhs_change")],
     _eJ_=[0,caml_string_of_jsbytes("Bind_main")],
     _eK_=[0,caml_string_of_jsbytes("Const")],
     _eL_=[0,caml_string_of_jsbytes("Expert")],
     _eM_=[0,caml_string_of_jsbytes("Freeze")],
     _eO_=[0,caml_string_of_jsbytes("If_test_change")],
     _eP_=[0,caml_string_of_jsbytes("If_then_else")],
     _eR_=[0,caml_string_of_jsbytes("Join_lhs_change")],
     _eS_=[0,caml_string_of_jsbytes("Join_main")],
     _eU_=[0,caml_string_of_jsbytes("Map")],
     _eV_=[0,caml_string_of_jsbytes("Snapshot")],
     _eW_=[0,caml_string_of_jsbytes("Step_function")],
     _eY_=[0,caml_string_of_jsbytes("Unordered_array_fold")],
     _eZ_=[0,caml_string_of_jsbytes("Var")],
     _e2_=[0,caml_string_of_jsbytes("Map2")],
     _e6_=[0,caml_string_of_jsbytes("Map3")],
     _e$_=[0,caml_string_of_jsbytes("Map4")],
     _ff_=[0,caml_string_of_jsbytes("Map5")],
     _fm_=[0,caml_string_of_jsbytes("Map6")],
     _fu_=[0,caml_string_of_jsbytes("Map7")],
     _fD_=[0,caml_string_of_jsbytes("Map8")],
     _fN_=[0,caml_string_of_jsbytes("Map9")],
     _fY_=[0,caml_string_of_jsbytes("Map10")],
     _f__=[0,caml_string_of_jsbytes("Map11")],
     _gl_=[0,caml_string_of_jsbytes("Map12")],
     _gz_=[0,caml_string_of_jsbytes("Map13")],
     _gO_=[0,caml_string_of_jsbytes("Map14")],
     _g4_=[0,caml_string_of_jsbytes("Map15")],
     _iV_=
      [0,
       [11,
        caml_string_of_jsbytes("  "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" -> "),
          [2,0,[11,caml_string_of_jsbytes(" [style=dashed]\n"),0]]]]],
       caml_string_of_jsbytes("  %s -> %s [style=dashed]\n")],
     _iU_=
      [0,
       [11,
        caml_string_of_jsbytes("  "),
        [2,0,[11,caml_string_of_jsbytes(" -> "),[2,0,[12,10,0]]]]],
       caml_string_of_jsbytes("  %s -> %s\n")],
     _iT_=
      [0,
       [11,
        caml_string_of_jsbytes("  "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(' [label="'),
          [2,
           0,
           [12,
            32,
            [2,
             0,
             [11,
              caml_string_of_jsbytes("\\nheight = "),
              [4,0,0,0,[11,caml_string_of_jsbytes('"]\n'),0]]]]]]]]],
       caml_string_of_jsbytes('  %s [label="%s %s\\nheight = %d"]\n')],
     _iR_=
      [0,
       [11,caml_string_of_jsbytes("digraph G {\n"),0],
       caml_string_of_jsbytes("digraph G {\n")],
     _iS_=
      [0,
       [11,caml_string_of_jsbytes("  rankdir = BT\n"),0],
       caml_string_of_jsbytes("  rankdir = BT\n")],
     _iW_=
      [0,
       [11,caml_string_of_jsbytes("}\n"),[10,0]],
       caml_string_of_jsbytes("}\n%!")],
     _iQ_=[0,caml_string_of_jsbytes("_")],
     _iP_=[0,caml_string_of_jsbytes("src/node.ml"),443,12],
     _iN_=[0,caml_string_of_jsbytes("src/node.ml"),462,33],
     _iO_=[0,caml_string_of_jsbytes("src/node.ml"),455,14],
     _iL_=[0,caml_string_of_jsbytes("_")],
     _iM_=[0,caml_string_of_jsbytes("src/node.ml"),422,17889,17909],
     _iJ_=[0,caml_string_of_jsbytes("_")],
     _iH_=[0,caml_string_of_jsbytes("src/node.ml"),290,50],
     _iG_=[0,caml_string_of_jsbytes("src/node.ml"),306,16],
     _iF_=[0,caml_string_of_jsbytes("src/node.ml"),316,11],
     _iE_=[0,caml_string_of_jsbytes("src/node.ml"),317,11],
     _iD_=[0,caml_string_of_jsbytes("src/node.ml"),332,16],
     _iB_=[0,caml_string_of_jsbytes("src/node.ml"),335,34],
     _iC_=[0,caml_string_of_jsbytes("src/node.ml"),335,60],
     _iA_=[0,caml_string_of_jsbytes("src/node.ml"),338,11],
     _iz_=[0,caml_string_of_jsbytes("src/node.ml"),339,11],
     _iy_=[0,caml_string_of_jsbytes("src/node.ml"),343,16],
     _ix_=[0,caml_string_of_jsbytes("src/node.ml"),347,13],
     _iw_=[0,caml_string_of_jsbytes("src/node.ml"),348,13],
     _iv_=[0,caml_string_of_jsbytes("src/node.ml"),352,16],
     _iu_=[0,caml_string_of_jsbytes("src/node.ml"),356,13],
     _it_=[0,caml_string_of_jsbytes("src/node.ml"),357,13],
     _is_=[0,caml_string_of_jsbytes("src/node.ml"),361,16],
     _ir_=[0,caml_string_of_jsbytes("src/node.ml"),365,16],
     _iq_=[0,caml_string_of_jsbytes("src/node.ml"),369,13],
     _ip_=[0,caml_string_of_jsbytes("src/node.ml"),370,13],
     _io_=[0,caml_string_of_jsbytes("src/node.ml"),376,13],
     _in_=[0,caml_string_of_jsbytes("src/node.ml"),379,37],
     _im_=[0,caml_string_of_jsbytes("src/node.ml"),394,15],
     _il_=[0,caml_string_of_jsbytes("src/node.ml"),406,13],
     _ik_=[0,caml_string_of_jsbytes("src/node.ml"),280,6],
     _ij_=[0,caml_string_of_jsbytes("src/node.ml"),281,6],
     _ii_=[0,caml_string_of_jsbytes("src/node.ml"),282,6],
     _ig_=[0,caml_string_of_jsbytes("src/node.ml"),276,8],
     _if_=[0,caml_string_of_jsbytes("src/node.ml"),277,8],
     _iI_=[0,caml_string_of_jsbytes("src/node.ml"),274,6],
     _ih_=[0,caml_string_of_jsbytes("src/node.ml"),278,6],
     _iK_=[0,caml_string_of_jsbytes("src/node.ml"),270,11337,11359],
     _ie_=[0,caml_string_of_jsbytes("src/node.ml"),213,21],
     _id_=[0,caml_string_of_jsbytes("src/node.ml"),124,21],
     _hN_=[0,caml_string_of_jsbytes("creation_backtrace")],
     _hO_=[0,caml_string_of_jsbytes("user_info")],
     _hP_=[0,caml_string_of_jsbytes("force_necessary")],
     _hQ_=[0,caml_string_of_jsbytes("my_child_index_in_parent_at_index")],
     _hR_=[0,caml_string_of_jsbytes("my_parent_index_in_child_at_index")],
     _hS_=[0,caml_string_of_jsbytes("on_update_handlers")],
     _hT_=[0,caml_string_of_jsbytes("is_in_handle_after_stabilization")],
     _hU_=[0,caml_string_of_jsbytes("observers")],
     _hV_=[0,caml_string_of_jsbytes("old_value_opt")],
     _hW_=[0,caml_string_of_jsbytes("next_in_adjust_heights_heap")],
     _hX_=[0,caml_string_of_jsbytes("height_in_adjust_heights_heap")],
     _hY_=[0,caml_string_of_jsbytes("next_in_recompute_heap")],
     _hZ_=[0,caml_string_of_jsbytes("prev_in_recompute_heap")],
     _h0_=[0,caml_string_of_jsbytes("height_in_recompute_heap")],
     _h1_=[0,caml_string_of_jsbytes("height")],
     _h2_=[0,caml_string_of_jsbytes("next_node_in_same_scope")],
     _h3_=[0,caml_string_of_jsbytes("created_in")],
     _h4_=[0,caml_string_of_jsbytes("parent0")],
     _h5_=[0,caml_string_of_jsbytes("parent1_and_beyond")],
     _h6_=[0,caml_string_of_jsbytes("num_parents")],
     _h7_=[0,caml_string_of_jsbytes("num_on_update_handlers")],
     _h8_=[0,caml_string_of_jsbytes("changed_at")],
     _h9_=[0,caml_string_of_jsbytes("cutoff")],
     _h__=[0,caml_string_of_jsbytes("kind")],
     _h$_=[0,caml_string_of_jsbytes("value_opt")],
     _ia_=[0,caml_string_of_jsbytes("recomputed_at")],
     _ib_=[0,caml_string_of_jsbytes("state")],
     _ic_=[0,caml_string_of_jsbytes("id")],
     _i__=[0,caml_string_of_jsbytes("src/recompute_heap.ml"),41,11],
     _i9_=[0,caml_string_of_jsbytes("src/recompute_heap.ml"),42,11],
     _i8_=[0,caml_string_of_jsbytes("src/recompute_heap.ml"),44,13],
     _i7_=[0,caml_string_of_jsbytes("src/recompute_heap.ml"),50,15],
     _i6_=[0,caml_string_of_jsbytes("src/recompute_heap.ml"),51,15],
     _i$_=[0,caml_string_of_jsbytes("src/recompute_heap.ml"),30,848,870],
     _i3_=[0,caml_string_of_jsbytes("nodes_by_height")],
     _i4_=[0,caml_string_of_jsbytes("height_lower_bound")],
     _i5_=[0,caml_string_of_jsbytes("length")],
     _jE_=[0,caml_string_of_jsbytes("_")],
     _jC_=[0,caml_string_of_jsbytes("_")],
     _jD_=[0,caml_string_of_jsbytes("child")],
     _jF_=[0,caml_string_of_jsbytes("parent")],
     _jG_=
      [0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),149,4985,4997],
     _jz_=[0,caml_string_of_jsbytes("Height")],
     _jA_=[0,caml_string_of_jsbytes("Max")],
     _jB_=
      [0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),136,4544,4558],
     _jx_=[0,caml_string_of_jsbytes("max_height_seen")],
     _jy_=
      [0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),84,2687,2699],
     _jv_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),57,11],
     _ju_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),60,11],
     _jt_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),61,11],
     _js_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),63,13],
     _jr_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),67,11],
     _jq_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),68,11],
     _jw_=
      [0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),52,1590,1612],
     _jm_=[0,caml_string_of_jsbytes("nodes_by_height")],
     _jn_=[0,caml_string_of_jsbytes("max_height_seen")],
     _jo_=[0,caml_string_of_jsbytes("height_lower_bound")],
     _jp_=[0,caml_string_of_jsbytes("length")],
     _jc_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),23,10],
     _jb_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),24,10],
     _ja_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),27,12],
     _jd_=[0,caml_string_of_jsbytes("src/adjust_heights_heap.ml"),19,521,545],
     _jR_=[0,caml_string_of_jsbytes("src/alarm_value.ml"),30,827,849],
     _jP_=[0,caml_string_of_jsbytes("next_fired")],
     _jQ_=[0,caml_string_of_jsbytes("action")],
     _jL_=[0,caml_string_of_jsbytes("_")],
     _jJ_=[0,caml_string_of_jsbytes("_")],
     _jH_=[0,caml_string_of_jsbytes("At")],
     _jI_=[0,caml_string_of_jsbytes("At_intervals")],
     _jK_=[0,caml_string_of_jsbytes("Snapshot")],
     _jM_=[0,caml_string_of_jsbytes("Step_function")],
     _ky_=[0,caml_string_of_jsbytes("_")],
     _kv_=[0,caml_string_of_jsbytes("_")],
     _kw_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),146,4501,4521],
     _kx_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),150,32],
     _kp_=[0,caml_string_of_jsbytes("_")],
     _kt_=[0,caml_string_of_jsbytes("_")],
     _kr_=[0,caml_string_of_jsbytes("_")],
     _ks_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),131,4091,4103],
     _ku_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),125,3944,3956],
     _kq_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),139,4289,4311],
     _kn_=[0,caml_string_of_jsbytes("_")],
     _km_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),70,25],
     _kl_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),75,36],
     _kk_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),78,13],
     _kj_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),87,36],
     _ki_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),90,13],
     _kh_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),99,36],
     _kg_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),102,13],
     _kf_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),111,36],
     _ke_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),114,13],
     _ko_=[0,caml_string_of_jsbytes("src/internal_observer.ml"),61,1694,1716],
     _j9_=[0,caml_string_of_jsbytes("next_in_observing")],
     _j__=[0,caml_string_of_jsbytes("prev_in_observing")],
     _j$_=[0,caml_string_of_jsbytes("next_in_all")],
     _ka_=[0,caml_string_of_jsbytes("prev_in_all")],
     _kb_=[0,caml_string_of_jsbytes("on_update_handlers")],
     _kc_=[0,caml_string_of_jsbytes("observing")],
     _kd_=[0,caml_string_of_jsbytes("state")],
     _jT_=[0,caml_string_of_jsbytes("Created")],
     _jU_=[0,caml_string_of_jsbytes("In_use")],
     _jV_=[0,caml_string_of_jsbytes("Disallowed")],
     _jW_=[0,caml_string_of_jsbytes("Unlinked")],
     _jS_=[0,caml_string_of_jsbytes("_")],
     _mM_=[0,caml_string_of_jsbytes("_")],
     _mN_=[0,caml_string_of_jsbytes("src/state.ml"),574,26010,26022],
     _mP_=[0,caml_string_of_jsbytes("src/state.ml"),772,4],
     _mQ_=[0,caml_string_of_jsbytes("src/state.ml"),821,21],
     _mS_=[0,caml_string_of_jsbytes("src/state.ml"),1074,29],
     _mT_=[0,caml_string_of_jsbytes("src/state.ml"),1076,20],
     _mU_=[0,caml_string_of_jsbytes("src/state.ml"),1077,30],
     _mR_=[0,caml_string_of_jsbytes("src/state.ml"),1078,54],
     _nb_=[0,caml_string_of_jsbytes("src/state.ml"),2047,6],
     _m$_=[0,caml_string_of_jsbytes("_")],
     _m9_=[0,caml_string_of_jsbytes("_")],
     _m__=[0,caml_string_of_jsbytes("current.kind")],
     _na_=[0,caml_string_of_jsbytes("node.kind")],
     _m7_=[0,caml_string_of_jsbytes("_")],
     _m5_=[0,caml_string_of_jsbytes("_")],
     _m6_=[0,caml_string_of_jsbytes("current.kind")],
     _m8_=[0,caml_string_of_jsbytes("node.kind")],
     _m4_=[0,caml_string_of_jsbytes("_")],
     _m3_=[5,1],
     _m2_=[0,caml_string_of_jsbytes("src/state.ml"),1762,68072,68084],
     _m1_=[0,0],
     _m0_=[0,caml_string_of_jsbytes("src/state.ml"),1631,64509,64521],
     _mZ_=[0,caml_string_of_jsbytes("src/state.ml"),1318,53947,53959],
     _mW_=[0,caml_string_of_jsbytes("_")],
     _mX_=[0,caml_string_of_jsbytes("src/state.ml"),1275,52592,52604],
     _mY_=[0,caml_string_of_jsbytes("src/state.ml"),1269,52423,52435],
     _mV_=[0,caml_string_of_jsbytes("src/state.ml"),1232,29],
     _mO_=[0,caml_string_of_jsbytes("src/state.ml"),650,28955,28978],
     _mF_=
      [0,
       [11,
        caml_string_of_jsbytes("cannot "),
        [2,0,[11,caml_string_of_jsbytes(" during stabilization"),0]]],
       caml_string_of_jsbytes("cannot %s during stabilization")],
     _mG_=[0,caml_string_of_jsbytes("src/state.ml"),349,15347,15359],
     _mH_=
      [0,
       [11,
        caml_string_of_jsbytes("cannot "),
        [2,0,[11,caml_string_of_jsbytes(" during on-update handlers"),0]]],
       caml_string_of_jsbytes("cannot %s during on-update handlers")],
     _mI_=[0,caml_string_of_jsbytes("src/state.ml"),335,14881,14895],
     _mJ_=
      [0,
       [11,
        caml_string_of_jsbytes("cannot "),
        [2,0,[11,caml_string_of_jsbytes(" -- stabilize previously raised"),0]]],
       caml_string_of_jsbytes("cannot %s -- stabilize previously raised")],
     _mK_=[0,caml_string_of_jsbytes("src/state.ml"),342,15115,15127],
     _mC_=[0,caml_string_of_jsbytes("src/state.ml"),265,39],
     _mB_=[0,caml_string_of_jsbytes("src/state.ml"),269,13],
     _mA_=[0,caml_string_of_jsbytes("src/state.ml"),273,13],
     _mz_=[0,caml_string_of_jsbytes("src/state.ml"),275,46],
     _my_=[0,caml_string_of_jsbytes("src/state.ml"),290,41],
     _mx_=[0,caml_string_of_jsbytes("src/state.ml"),298,49],
     _mv_=[0,caml_string_of_jsbytes("src/state.ml"),308,20],
     _mu_=[0,caml_string_of_jsbytes("src/state.ml"),304,15],
     _mw_=[0,caml_string_of_jsbytes("src/state.ml"),302,48],
     _mt_=[0,caml_string_of_jsbytes("src/state.ml"),254,39],
     _ms_=[0,caml_string_of_jsbytes("src/state.ml"),255,8],
     _mq_=[0,caml_string_of_jsbytes("_")],
     _mr_=[0,caml_string_of_jsbytes("src/state.ml"),247,10772,10791],
     _mD_=[0,caml_string_of_jsbytes("src/state.ml"),257,6],
     _mE_=[0,caml_string_of_jsbytes("src/state.ml"),240,10473,10497],
     _mp_=[0,caml_string_of_jsbytes("src/state.ml"),230,10189,10201],
     _mn_=[0,caml_string_of_jsbytes("percentage_of_nodes_by_num_parents")],
     _mo_=[0,caml_string_of_jsbytes("max_num_parents")],
     _mm_=[0,caml_string_of_jsbytes("src/state.ml"),195,2],
     _mk_=[0,caml_string_of_jsbytes("src/state.ml"),156,13],
     _mj_=[0,caml_string_of_jsbytes("src/state.ml"),159,44],
     _ml_=[0,caml_string_of_jsbytes("src/state.ml"),151,7506,7530],
     _mf_=[0,caml_string_of_jsbytes("fired_alarm_values")],
     _mg_=[0,caml_string_of_jsbytes("handle_fired")],
     _mh_=[0,caml_string_of_jsbytes("now")],
     _mi_=[0,caml_string_of_jsbytes("timing_wheel")],
     _lI_=[0,caml_string_of_jsbytes("num_var_sets")],
     _lJ_=
      [0,
       caml_string_of_jsbytes
        ("num_nodes_recomputed_directly_because_min_height")],
     _lK_=
      [0,
       caml_string_of_jsbytes
        ("num_nodes_recomputed_directly_because_one_child")],
     _lL_=[0,caml_string_of_jsbytes("num_nodes_recomputed")],
     _lM_=[0,caml_string_of_jsbytes("num_nodes_invalidated")],
     _lN_=[0,caml_string_of_jsbytes("num_nodes_created")],
     _lO_=[0,caml_string_of_jsbytes("num_nodes_changed")],
     _lP_=[0,caml_string_of_jsbytes("num_nodes_became_unnecessary")],
     _lQ_=[0,caml_string_of_jsbytes("num_nodes_became_necessary")],
     _lR_=[0,caml_string_of_jsbytes("keep_node_creation_backtrace")],
     _lS_=[0,caml_string_of_jsbytes("weak_hashtbls")],
     _lT_=[0,caml_string_of_jsbytes("only_in_debug")],
     _lU_=[0,caml_string_of_jsbytes("run_on_update_handlers")],
     _lV_=[0,caml_string_of_jsbytes("handle_after_stabilization")],
     _lW_=[0,caml_string_of_jsbytes("set_during_stabilization")],
     _lX_=[0,caml_string_of_jsbytes("disallowed_observers")],
     _lY_=[0,caml_string_of_jsbytes("new_observers")],
     _lZ_=[0,caml_string_of_jsbytes("finalized_observers")],
     _l0_=[0,caml_string_of_jsbytes("all_observers")],
     _l1_=[0,caml_string_of_jsbytes("num_active_observers")],
     _l2_=[0,caml_string_of_jsbytes("propagate_invalidity")],
     _l3_=[0,caml_string_of_jsbytes("adjust_heights_heap")],
     _l4_=[0,caml_string_of_jsbytes("recompute_heap")],
     _l5_=[0,caml_string_of_jsbytes("current_scope")],
     _l6_=[0,caml_string_of_jsbytes("stabilization_num")],
     _l7_=[0,caml_string_of_jsbytes("bind_lhs_change_should_invalidate_rhs")],
     _l8_=[0,caml_string_of_jsbytes("status")],
     _kQ_=[0,caml_string_of_jsbytes("_")],
     _kP_=[0,caml_string_of_jsbytes("_")],
     _kR_=[0,caml_string_of_jsbytes("T")],
     _kO_=[0,caml_string_of_jsbytes("src/state.ml"),38,1156,1180],
     _kM_=[0,caml_string_of_jsbytes("expert_nodes_created_by_current_node")],
     _kN_=[0,caml_string_of_jsbytes("currently_running_node")],
     _kH_=[0,caml_string_of_jsbytes("src/state.ml"),25,722,746],
     _kF_=[0,caml_string_of_jsbytes("_")],
     _kE_=[0,caml_string_of_jsbytes("_")],
     _kG_=[0,caml_string_of_jsbytes("T")],
     _kA_=[0,caml_string_of_jsbytes("Stabilizing")],
     _kB_=[0,caml_string_of_jsbytes("Running_on_update_handlers")],
     _kC_=[0,caml_string_of_jsbytes("Not_stabilizing")],
     _kD_=[0,caml_string_of_jsbytes("Stabilize_previously_raised")],
     _nn_=[0,caml_string_of_jsbytes("src/incremental.ml"),280,2],
     _nk_=[0,caml_string_of_jsbytes("Invalid")],
     _nl_=[0,caml_string_of_jsbytes("Necessary_maybe_stale")],
     _nm_=[0,caml_string_of_jsbytes("Unnecessary_maybe_stale")],
     _ng_=[0,caml_string_of_jsbytes("_")],
     _nh_=[0,caml_string_of_jsbytes("src/incremental.ml"),142,3657,3675],
     _nd_=[0,caml_string_of_jsbytes("Invalidated")],
     _ne_=[0,caml_string_of_jsbytes("Initialized")],
     _nf_=[0,caml_string_of_jsbytes("Changed")],
     _nc_=[0,caml_string_of_jsbytes("src/incremental.ml"),30,8],
     _ni_=[0,1];
    function sexp_of_t(param){return param?_a_:_b_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Before_or_afte$0);
    var Incremental_Before_or_after=[0,sexp_of_t];
    caml_register_global
     (1260,Incremental_Before_or_after,"Incremental__Before_or_after");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Import);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$2);
    caml_call1(Expect_test_collector[4][1],cst_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$3,cst$0);
    var
     _c_=include[123],
     symbol=_c_[1],
     symbol$0=_c_[2],
     symbol$1=_c_[3],
     symbol$2=_c_[4],
     symbol$3=_c_[5],
     symbol$4=_c_[6],
     min=_c_[9],
     max=_c_[10],
     concat=Core_kernel_String[26],
     _d_=_c_[7],
     _e_=_c_[8],
     debug=0;
    function tag(v0,v1,sexp_of_a)
     {var v0$0=caml_call1(Core_kernel[455],v0),v1$0=caml_call1(sexp_of_a,v1);
      return [1,[0,v0$0,[0,v1$0,0]]]}
    var
     Span=Core_kernel_Time_ns[1],
     Ofday=Core_kernel_Time_ns[2],
     hash_fold_t=Core_kernel_Time_ns[3],
     hash=Core_kernel_Time_ns[4],
     typerep_of_t=Core_kernel_Time_ns[5],
     typename_of_t=Core_kernel_Time_ns[6],
     bin_size_t=Core_kernel_Time_ns[7],
     bin_write_t=Core_kernel_Time_ns[8],
     bin_read_t=Core_kernel_Time_ns[9],
     bin_read_t$0=Core_kernel_Time_ns[10],
     bin_shape_t=Core_kernel_Time_ns[11],
     bin_writer_t=Core_kernel_Time_ns[12],
     bin_reader_t=Core_kernel_Time_ns[13],
     bin_t=Core_kernel_Time_ns[14],
     symbol$5=Core_kernel_Time_ns[15],
     symbol$6=Core_kernel_Time_ns[16],
     symbol$7=Core_kernel_Time_ns[17],
     symbol$8=Core_kernel_Time_ns[18],
     symbol$9=Core_kernel_Time_ns[19],
     symbol$10=Core_kernel_Time_ns[20],
     equal=Core_kernel_Time_ns[21],
     compare=Core_kernel_Time_ns[22],
     min$0=Core_kernel_Time_ns[23],
     max$0=Core_kernel_Time_ns[24],
     Alternate_sexp=Core_kernel_Time_ns[25],
     quickcheck_generator=Core_kernel_Time_ns[26],
     quickcheck_observer=Core_kernel_Time_ns[27],
     quickcheck_shrinker=Core_kernel_Time_ns[28],
     gen_incl=Core_kernel_Time_ns[29],
     gen_uniform_incl=Core_kernel_Time_ns[30],
     is_earlier=Core_kernel_Time_ns[31],
     is_later=Core_kernel_Time_ns[32],
     of_date_ofday=Core_kernel_Time_ns[33],
     of_date_ofday_precise=Core_kernel_Time_ns[34],
     to_date_ofday=Core_kernel_Time_ns[35],
     to_date_ofday_precise=Core_kernel_Time_ns[36],
     to_date=Core_kernel_Time_ns[37],
     to_ofday=Core_kernel_Time_ns[38],
     reset_date_cache=Core_kernel_Time_ns[39],
     convert=Core_kernel_Time_ns[40],
     utc_offset=Core_kernel_Time_ns[41],
     of_string=Core_kernel_Time_ns[42],
     to_string=Core_kernel_Time_ns[43],
     to_filename_string=Core_kernel_Time_ns[44],
     of_filename_string=Core_kernel_Time_ns[45],
     to_string_abs=Core_kernel_Time_ns[46],
     to_string_abs_trimmed=Core_kernel_Time_ns[47],
     to_string_abs_parts=Core_kernel_Time_ns[48],
     to_string_trimmed=Core_kernel_Time_ns[49],
     to_sec_string=Core_kernel_Time_ns[50],
     of_localized_string=Core_kernel_Time_ns[51],
     of_string_gen=Core_kernel_Time_ns[52],
     to_string_iso8601_basic=Core_kernel_Time_ns[53],
     occurrence=Core_kernel_Time_ns[54],
     epoch=Core_kernel_Time_ns[55],
     min_value_representable=Core_kernel_Time_ns[56],
     max_value_representable=Core_kernel_Time_ns[57],
     min_value_for_1us_rounding=Core_kernel_Time_ns[58],
     max_value_for_1us_rounding=Core_kernel_Time_ns[59],
     min_value=Core_kernel_Time_ns[60],
     max_value=Core_kernel_Time_ns[61],
     now=Core_kernel_Time_ns[62],
     add=Core_kernel_Time_ns[63],
     add_saturating=Core_kernel_Time_ns[64],
     sub_saturating=Core_kernel_Time_ns[65],
     sub=Core_kernel_Time_ns[66],
     next=Core_kernel_Time_ns[67],
     prev=Core_kernel_Time_ns[68],
     diff=Core_kernel_Time_ns[69],
     abs_diff=Core_kernel_Time_ns[70],
     to_span_since_epoch=Core_kernel_Time_ns[71],
     of_span_since_epoch=Core_kernel_Time_ns[72],
     to_int63_ns_since_epoch=Core_kernel_Time_ns[73],
     of_int63_ns_since_epoch=Core_kernel_Time_ns[74],
     to_int_ns_since_epoch=Core_kernel_Time_ns[75],
     of_int_ns_since_epoch=Core_kernel_Time_ns[76],
     next_multiple=Core_kernel_Time_ns[77],
     prev_multiple=Core_kernel_Time_ns[78],
     random=Core_kernel_Time_ns[79],
     of_time=Core_kernel_Time_ns[80],
     to_time=Core_kernel_Time_ns[81],
     to_time_float_round_nearest=Core_kernel_Time_ns[82],
     to_time_float_round_nearest_mi=Core_kernel_Time_ns[83],
     of_time_float_round_nearest=Core_kernel_Time_ns[84],
     of_time_float_round_nearest_mi=Core_kernel_Time_ns[85],
     Utc=Core_kernel_Time_ns[86],
     Stable=Core_kernel_Time_ns[87],
     sexp_of_t$0=Core_kernel_Time_ns[25][2],
     Time_ns=
      [0,
       Span,
       Ofday,
       hash_fold_t,
       hash,
       typerep_of_t,
       typename_of_t,
       bin_size_t,
       bin_write_t,
       bin_read_t,
       bin_read_t$0,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal,
       compare,
       min$0,
       max$0,
       Alternate_sexp,
       quickcheck_generator,
       quickcheck_observer,
       quickcheck_shrinker,
       gen_incl,
       gen_uniform_incl,
       is_earlier,
       is_later,
       of_date_ofday,
       of_date_ofday_precise,
       to_date_ofday,
       to_date_ofday_precise,
       to_date,
       to_ofday,
       reset_date_cache,
       convert,
       utc_offset,
       of_string,
       to_string,
       to_filename_string,
       of_filename_string,
       to_string_abs,
       to_string_abs_trimmed,
       to_string_abs_parts,
       to_string_trimmed,
       to_sec_string,
       of_localized_string,
       of_string_gen,
       to_string_iso8601_basic,
       occurrence,
       epoch,
       min_value_representable,
       max_value_representable,
       min_value_for_1us_rounding,
       max_value_for_1us_rounding,
       min_value,
       max_value,
       now,
       add,
       add_saturating,
       sub_saturating,
       sub,
       next,
       prev,
       diff,
       abs_diff,
       to_span_since_epoch,
       of_span_since_epoch,
       to_int63_ns_since_epoch,
       of_int63_ns_since_epoch,
       to_int_ns_since_epoch,
       of_int_ns_since_epoch,
       next_multiple,
       prev_multiple,
       random,
       of_time,
       to_time,
       to_time_float_round_nearest,
       to_time_float_round_nearest_mi,
       of_time_float_round_nearest,
       of_time_float_round_nearest_mi,
       Utc,
       Stable,
       sexp_of_t$0],
     bin_shape_t$0=Core_kernel_Array[1],
     bin_size_t$0=Core_kernel_Array[2],
     bin_write_t$0=Core_kernel_Array[3],
     bin_read_t$1=Core_kernel_Array[4],
     bin_read_t$2=Core_kernel_Array[5],
     bin_writer_t$0=Core_kernel_Array[6],
     bin_reader_t$0=Core_kernel_Array[7],
     bin_t$0=Core_kernel_Array[8],
     typerep_of_t$0=Core_kernel_Array[9],
     typename_of_t$0=Core_kernel_Array[10],
     compare$0=Core_kernel_Array[11],
     t_of_sexp=Core_kernel_Array[12],
     sexp_of_t$1=Core_kernel_Array[13],
     t_sexp_grammar=Core_kernel_Array[14],
     binary_search=Core_kernel_Array[15],
     binary_search_segmented=Core_kernel_Array[16],
     mem=Core_kernel_Array[17],
     length=Core_kernel_Array[18],
     is_empty=Core_kernel_Array[19],
     iter=Core_kernel_Array[20],
     fold=Core_kernel_Array[21],
     fold_result=Core_kernel_Array[22],
     fold_until=Core_kernel_Array[23],
     exists=Core_kernel_Array[24],
     for_all=Core_kernel_Array[25],
     count=Core_kernel_Array[26],
     sum=Core_kernel_Array[27],
     find=Core_kernel_Array[28],
     find_map=Core_kernel_Array[29],
     to_list=Core_kernel_Array[30],
     to_array=Core_kernel_Array[31],
     min_elt=Core_kernel_Array[32],
     max_elt=Core_kernel_Array[33],
     invariant=Core_kernel_Array[34],
     max_length=Core_kernel_Array[35],
     create=Core_kernel_Array[36],
     init=Core_kernel_Array[37],
     make_matrix=Core_kernel_Array[38],
     append=Core_kernel_Array[39],
     concat$0=Core_kernel_Array[40],
     copy=Core_kernel_Array[41],
     fill=Core_kernel_Array[42],
     blit=Core_kernel_Array[43],
     blito=Core_kernel_Array[44],
     unsafe_blit=Core_kernel_Array[45],
     sub$0=Core_kernel_Array[46],
     subo=Core_kernel_Array[47],
     of_list=Core_kernel_Array[48],
     map=Core_kernel_Array[49],
     folding_map=Core_kernel_Array[50],
     folding_mapi=Core_kernel_Array[51],
     fold_map=Core_kernel_Array[52],
     fold_mapi=Core_kernel_Array[53],
     iteri=Core_kernel_Array[54],
     mapi=Core_kernel_Array[55],
     foldi=Core_kernel_Array[56],
     fold_right=Core_kernel_Array[57],
     sort=Core_kernel_Array[58],
     stable_sort=Core_kernel_Array[59],
     is_sorted=Core_kernel_Array[60],
     is_sorted_strictly=Core_kernel_Array[61],
     concat_map=Core_kernel_Array[62],
     concat_mapi=Core_kernel_Array[63],
     partition_tf=Core_kernel_Array[64],
     partitioni_tf=Core_kernel_Array[65],
     cartesian_product=Core_kernel_Array[66],
     transpose=Core_kernel_Array[67],
     transpose_exn=Core_kernel_Array[68],
     filter_opt=Core_kernel_Array[69],
     filter_map=Core_kernel_Array[70],
     filter_mapi=Core_kernel_Array[71],
     for_alli=Core_kernel_Array[72],
     existsi=Core_kernel_Array[73],
     counti=Core_kernel_Array[74],
     iter2_exn=Core_kernel_Array[75],
     map2_exn=Core_kernel_Array[76],
     fold2_exn=Core_kernel_Array[77],
     for_all2_exn=Core_kernel_Array[78],
     exists2_exn=Core_kernel_Array[79],
     filter=Core_kernel_Array[80],
     filteri=Core_kernel_Array[81],
     swap=Core_kernel_Array[82],
     rev_inplace=Core_kernel_Array[83],
     of_list_rev=Core_kernel_Array[84],
     of_list_map=Core_kernel_Array[85],
     of_list_mapi=Core_kernel_Array[86],
     of_list_rev_map=Core_kernel_Array[87],
     of_list_rev_mapi=Core_kernel_Array[88],
     map_inplace=Core_kernel_Array[89],
     find_exn=Core_kernel_Array[90],
     find_map_exn=Core_kernel_Array[91],
     findi=Core_kernel_Array[92],
     findi_exn=Core_kernel_Array[93],
     find_mapi=Core_kernel_Array[94],
     find_mapi_exn=Core_kernel_Array[95],
     find_consecutive_duplicate=Core_kernel_Array[96],
     reduce=Core_kernel_Array[97],
     reduce_exn=Core_kernel_Array[98],
     permute=Core_kernel_Array[99],
     random_element=Core_kernel_Array[100],
     random_element_exn=Core_kernel_Array[101],
     zip=Core_kernel_Array[102],
     zip_exn=Core_kernel_Array[103],
     unzip=Core_kernel_Array[104],
     sorted_copy=Core_kernel_Array[105],
     last=Core_kernel_Array[106],
     equal$0=Core_kernel_Array[107],
     to_sequence=Core_kernel_Array[108],
     to_sequence_mutable=Core_kernel_Array[109],
     Int=Core_kernel_Array[110],
     Float=Core_kernel_Array[111],
     normalize=Core_kernel_Array[112],
     slice=Core_kernel_Array[113],
     nget=Core_kernel_Array[114],
     nset=Core_kernel_Array[115],
     Permissioned=Core_kernel_Array[116];
    function realloc(t,len,a)
     {var new_t=caml_call2(create,len,a),_GY_=caml_call1(length,t);
      caml_call5(Core_kernel_Array[43],t,0,new_t,0,_GY_);
      return new_t}
    var
     Array=
      [0,
       bin_shape_t$0,
       bin_size_t$0,
       bin_write_t$0,
       bin_read_t$1,
       bin_read_t$2,
       bin_writer_t$0,
       bin_reader_t$0,
       bin_t$0,
       typerep_of_t$0,
       typename_of_t$0,
       compare$0,
       t_of_sexp,
       sexp_of_t$1,
       t_sexp_grammar,
       binary_search,
       binary_search_segmented,
       mem,
       length,
       is_empty,
       iter,
       fold,
       fold_result,
       fold_until,
       exists,
       for_all,
       count,
       sum,
       find,
       find_map,
       to_list,
       to_array,
       min_elt,
       max_elt,
       invariant,
       max_length,
       create,
       init,
       make_matrix,
       append,
       concat$0,
       copy,
       fill,
       blit,
       blito,
       unsafe_blit,
       sub$0,
       subo,
       of_list,
       map,
       folding_map,
       folding_mapi,
       fold_map,
       fold_mapi,
       iteri,
       mapi,
       foldi,
       fold_right,
       sort,
       stable_sort,
       is_sorted,
       is_sorted_strictly,
       concat_map,
       concat_mapi,
       partition_tf,
       partitioni_tf,
       cartesian_product,
       transpose,
       transpose_exn,
       filter_opt,
       filter_map,
       filter_mapi,
       for_alli,
       existsi,
       counti,
       iter2_exn,
       map2_exn,
       fold2_exn,
       for_all2_exn,
       exists2_exn,
       filter,
       filteri,
       swap,
       rev_inplace,
       of_list_rev,
       of_list_map,
       of_list_mapi,
       of_list_rev_map,
       of_list_rev_mapi,
       map_inplace,
       find_exn,
       find_map_exn,
       findi,
       findi_exn,
       find_mapi,
       find_mapi_exn,
       find_consecutive_duplicate,
       reduce,
       reduce_exn,
       permute,
       random_element,
       random_element_exn,
       zip,
       zip_exn,
       unzip,
       sorted_copy,
       last,
       equal$0,
       to_sequence,
       to_sequence_mutable,
       Int,
       Float,
       normalize,
       slice,
       nget,
       nset,
       Permissioned,
       realloc],
     Uopt=
      [0,
       include$0[1],
       include$0[2],
       include$0[3],
       include$0[4],
       include$0[5],
       include$0[6],
       include$0[7],
       include$0[9],
       include$0[10],
       include$0[11],
       include$0[8]];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Import$0);
    var
     Incremental_Import=
      [0,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       _d_,
       _e_,
       min,
       max,
       debug,
       concat,
       tag,
       Time_ns,
       Array,
       Uopt];
    caml_register_global(1267,Incremental_Import,"Incremental__Import");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Cutoff);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$5);
    caml_call1(Expect_test_collector[4][1],cst_src_cutoff_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$6,cst$1);
    function sexp_of_t$2(of_a,param)
     {if(typeof param === "number")
       switch(param){case 0:return _f_;case 1:return _g_;default:return _h_}
      else
       switch(param[0])
        {case 0:
          var
           _GS_=function(_GW_){return 0},
           v0=caml_call1(Sexplib0_Sexp_conv[24],_GS_);
          return [1,[0,_i_,[0,v0,0]]];
         case 1:
          var
           _GT_=function(_GV_){return 0},
           v0$0=caml_call1(Sexplib0_Sexp_conv[24],_GT_);
          return [1,[0,_j_,[0,v0$0,0]]];
         default:
          var
           _GU_=function(_GX_){return 0},
           v0$1=caml_call1(Sexplib0_Sexp_conv[24],_GU_);
          return [1,[0,_k_,[0,v0$1,0]]]}}
    function invariant$0(param,t)
     {function _GO_(param){return 0}
      function _GP_(param){return _l_}
      function _GQ_(_GR_){return sexp_of_t$2(_GP_,_GR_)}
      return caml_call4(Base_Invariant[1],_m_,t,_GQ_,_GO_)}
    function create$0(f){return [2,f]}
    function of_compare(f){return [0,f]}
    function of_equal(f){return [1,f]}
    var poly_equal=[1,runtime.caml_equal],never=1,always=0;
    function should_cutoff(t,old_value,new_value)
     {if(typeof t === "number")
       switch(t)
        {case 0:return 1;
         case 1:return 0;
         default:return caml_call2(Core_kernel[231],old_value,new_value)}
      else
       switch(t[0])
        {case 0:
          var f=t[1];
          return caml_call2(symbol$1,caml_call2(f,old_value,new_value),0);
         case 1:var f$0=t[1];return caml_call2(f$0,old_value,new_value);
         default:var f$1=t[1];return caml_call2(f$1,old_value,new_value)}}
    function equal$1(t1,match)
     {if(typeof t1 === "number")
       switch(t1)
        {case 0:if(typeof match === "number" && ! match)return 1;return 0;
         case 1:if(typeof match === "number" && 1 === match)return 1;return 0;
         default:if(typeof match === "number" && 2 <= match)return 1;return 0}
      else
       switch(t1[0])
        {case 0:
          var _GL_=t1[1];
          if(typeof match !== "number" && 0 === match[0])
           {var f2=match[1];return caml_call2(Core_kernel[231],_GL_,f2)}
          return 0;
         case 1:
          var _GM_=t1[1];
          if(typeof match !== "number" && 1 === match[0])
           {var f2$0=match[1];return caml_call2(Core_kernel[231],_GM_,f2$0)}
          return 0;
         default:
          var _GN_=t1[1];
          if(typeof match !== "number" && 2 === match[0])
           {var f2$1=match[1];return caml_call2(Core_kernel[231],_GN_,f2$1)}
          return 0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Cutoff$0);
    var
     Incremental_Cutoff=
      [0,
       sexp_of_t$2,
       invariant$0,
       create$0,
       of_compare,
       of_equal,
       always,
       never,
       2,
       poly_equal,
       equal$1,
       should_cutoff];
    caml_register_global(1270,Incremental_Cutoff,"Incremental__Cutoff");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Node_id);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$8);
    caml_call1(Expect_test_collector[4][1],cst_src_node_id_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$9,cst$2);
    var
     incr=include[54],
     sexp_of_t$3=include[101],
     to_string$0=include[103],
     symbol$11=include[105],
     compare$1=include[112],
     hash_fold_t$0=include[127],
     hash$0=include[128],
     hashable=include[129],
     Table=include[130],
     Hash_set=include[131],
     Hash_queue=include[132],
     phys_equal=2;
    function invariant$1(t)
     {if(caml_call2(symbol$11,t,1))return 0;throw [0,Assert_failure,_n_]}
    var r=[0,0];
    function next$0(param){caml_call1(incr,r);return r[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Node_id$0);
    var
     _o_=
      [0,
       Hash_set[1],
       Hash_set[2],
       Hash_set[3],
       Hash_set[4],
       Hash_set[5],
       Hash_set[6]],
     Incremental_Node_id=
      [0,
       sexp_of_t$3,
       compare$1,
       hash_fold_t$0,
       hash$0,
       hashable,
       [0,
        Table[1],
        Table[2],
        Table[3],
        Table[4],
        Table[5],
        Table[6],
        Table[7],
        Table[8],
        Table[9],
        Table[10],
        Table[11],
        Table[12],
        Table[13],
        Table[14],
        Table[15],
        Table[16],
        Table[17],
        Table[18],
        Table[19],
        Table[20],
        Table[21],
        Table[22],
        Table[23],
        Table[24],
        Table[25],
        Table[26],
        Table[27],
        Table[28],
        Table[29],
        Table[30],
        Table[31],
        Table[32],
        Table[33],
        Table[34],
        Table[35],
        Table[36],
        Table[37],
        Table[38],
        Table[39],
        Table[40],
        Table[41],
        Table[42],
        Table[43],
        Table[44],
        Table[45],
        Table[46],
        Table[47],
        Table[48],
        Table[49],
        Table[50],
        Table[51],
        Table[52],
        Table[53],
        Table[54],
        Table[55],
        Table[56],
        Table[57],
        Table[58],
        Table[59],
        Table[60],
        Table[61],
        Table[62],
        Table[63],
        Table[64],
        Table[65],
        Table[66],
        Table[67],
        Table[68],
        Table[69],
        Table[70],
        Table[71],
        Table[72],
        Table[73],
        Table[74],
        Table[75],
        Table[76],
        Table[77],
        Table[78],
        Table[79],
        Table[80],
        Table[81],
        Table[82],
        Table[83]],
       _o_,
       Hash_queue,
       invariant$1,
       next$0,
       to_string$0];
    caml_register_global(1272,Incremental_Node_id,"Incremental__Node_id");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Stabilization_);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$11);
    caml_call1(Expect_test_collector[4][1],cst_src_stabilization_num_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$12,cst$3);
    var
     _p_=include[17],
     _r_=include[77],
     _s_=include[101],
     _t_=include[105],
     _v_=include[111],
     _w_=include[112],
     _q_=include[20],
     _u_=include[107];
    function invariant$2(t)
     {if(caml_call2(_t_,t,-1))return 0;throw [0,Assert_failure,_x_]}
    var none=-1;
    function is_none(t){return caml_call2(_u_,t,none)}
    function is_some(t){return caml_call2(_t_,t,0)}
    function add1(t){return caml_call2(_q_,t,1)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Stabilization_$0);
    var
     Incremental_Stabilization_num=
      [0,_w_,_s_,_v_,invariant$2,none,_p_,is_none,is_some,add1,_r_];
    caml_register_global
     (1273,Incremental_Stabilization_num,"Incremental__Stabilization_num");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_On_update_hand);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$14);
    caml_call1(Expect_test_collector[4][1],cst_src_on_update_handler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$15,cst$4);
    function compare$2(cmp_a,a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      var switch$0=0;
      if(typeof a_001 === "number")
       {if(0 === a_001)
         {if(typeof match === "number")
           return 0 === match?0:-1;
          else
           if(0 !== match[0])switch$0 = 1}
        else
         if(typeof match === "number")
          return 0 === match?1:0;
         else
          if(0 !== match[0])switch$0 = 1}
      else
       {if(0 === a_001[0])
         {var _GI_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];return caml_call2(cmp_a,_GI_,b_004)}
          return -1}
        var _GJ_=a_001[2],_GK_=a_001[1];
        if(typeof match === "number")
         return -1;
        else
         if(0 !== match[0])
          {var b_008=match[2],b_006=match[1],n=caml_call2(cmp_a,_GK_,b_006);
           return 0 === n?caml_call2(cmp_a,_GJ_,b_008):n}}
      return switch$0?1:1}
    function sexp_of_t$4(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_D_:_E_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_F_,[0,v0$0,0]]]}
        var
         v1=param[2],
         v0$1=param[1],
         v0$2=caml_call1(of_a,v0$1),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,_G_,[0,v0$2,[0,v1$0,0]]]]}}
    var Node_update=[0,compare$2,sexp_of_t$4];
    function sexp_of_t$5(of_a,param)
     {var
       v_previous_update_kind=param[2],
       v_created_at=param[3],
       arg=caml_call1(_s_,v_created_at),
       bnds=[0,[1,[0,_H_,[0,arg,0]]],0];
      switch(v_previous_update_kind)
       {case 0:var arg$0=_y_;break;
        case 1:var arg$0=_z_;break;
        case 2:var arg$0=_A_;break;
        case 3:var arg$0=_B_;break;
        default:var arg$0=_C_}
      var bnds$0=[0,[1,[0,_I_,[0,arg$0,0]]],bnds];
      function _GG_(_GH_){return 0}
      var
       arg$1=caml_call1(Sexplib0_Sexp_conv[24],_GG_),
       bnds$1=[0,[1,[0,_J_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function create$1(f,created_at){return [0,f,0,created_at]}
    function really_run(t,node_update)
     {var
       _GF_=
        typeof node_update === "number"
         ?0 === node_update?3:4
         :0 === node_update[0]?1:2;
      t[2] = _GF_;
      return caml_call1(t[1],node_update)}
    function run(t,node_update,now)
     {var _GE_=caml_call2(symbol$3,caml_call2(_w_,t[3],now),0);
      if(_GE_)
       {var switch$0=0;
        switch(t[2])
         {case 0:
           if(typeof node_update !== "number" && 1 === node_update[0])
            switch$0 = 2;
           break;
          case 1:
           if(typeof node_update !== "number" && 0 === node_update[0])
            switch$0 = 1;
           break;
          case 2:
           if(typeof node_update !== "number" && 0 === node_update[0])
            switch$0 = 1;
           break;
          case 3:return 0;
          default:
           if(typeof node_update === "number")
            {if(1 === node_update)switch$0 = 1}
           else
            if(1 === node_update[0])switch$0 = 2}
        switch(switch$0)
         {case 2:var a=node_update[2];return really_run(t,[0,a]);
          case 1:return 0;
          default:return really_run(t,node_update)}}
      return _GE_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_On_update_hand$0);
    var
     Incremental_On_update_handler=
      [0,Node_update,sexp_of_t$5,create$1,run];
    caml_register_global
     (1275,Incremental_On_update_handler,"Incremental__On_update_handler");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Raised_exn);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$17);
    caml_call1(Expect_test_collector[4][1],cst_src_raised_exn_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$18,cst$5);
    function sexp_of_t$6(param)
     {var
       v_backtrace=param[2],
       v_exn=param[1],
       arg=caml_call1(Base_Backtrace[1],v_backtrace),
       bnds=[0,[1,[0,_K_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[521],v_exn),
       bnds$0=[0,[1,[0,_L_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function create$2(exn){return [0,exn,caml_call1(Base_Backtrace[6][4],0)]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Raised_exn$0);
    var Incremental_Raised_exn=[0,sexp_of_t$6,create$2];
    caml_register_global
     (1277,Incremental_Raised_exn,"Incremental__Raised_exn");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Types);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$20);
    caml_call1(Expect_test_collector[4][1],cst_src_types_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$21,cst$6);
    var
     Adjust_heights_heap=caml_call2(CamlinternalMod[1],_N_,_M_),
     Alarm=caml_call2(CamlinternalMod[1],_P_,_O_),
     Alarm_value=caml_call2(CamlinternalMod[1],_R_,_Q_),
     Array_fold=caml_call2(CamlinternalMod[1],_T_,_S_),
     At=caml_call2(CamlinternalMod[1],_V_,_U_),
     At_intervals=caml_call2(CamlinternalMod[1],_X_,_W_),
     Bind=caml_call2(CamlinternalMod[1],_Z_,_Y_),
     Clock=caml_call2(CamlinternalMod[1],_$_,___),
     Expert=caml_call2(CamlinternalMod[1],_ab_,_aa_),
     Freeze=caml_call2(CamlinternalMod[1],_ad_,_ac_),
     If_then_else=caml_call2(CamlinternalMod[1],_af_,_ae_),
     Internal_observer=caml_call2(CamlinternalMod[1],_ah_,_ag_),
     Join=caml_call2(CamlinternalMod[1],_aj_,_ai_),
     Kind=caml_call2(CamlinternalMod[1],_al_,_ak_),
     Node=caml_call2(CamlinternalMod[1],_an_,_am_),
     Observer=caml_call2(CamlinternalMod[1],_ap_,_ao_),
     Only_in_debug=caml_call2(CamlinternalMod[1],_ar_,_aq_),
     Packed_weak_hashtbl=caml_call2(CamlinternalMod[1],_at_,_as_),
     Recompute_heap=caml_call2(CamlinternalMod[1],_av_,_au_),
     Run_on_update_handlers=caml_call2(CamlinternalMod[1],_ax_,_aw_),
     include$1=caml_call2(CamlinternalMod[1],_az_,_ay_),
     Snapshot=caml_call2(CamlinternalMod[1],_aB_,_aA_),
     State=caml_call2(CamlinternalMod[1],_aD_,_aC_),
     Status=caml_call2(CamlinternalMod[1],_aF_,_aE_),
     Step_function_node=caml_call2(CamlinternalMod[1],_aH_,_aG_),
     Unordered_array_fold=caml_call2(CamlinternalMod[1],_aJ_,_aI_),
     Var=caml_call2(CamlinternalMod[1],_aL_,_aK_);
    caml_call3
     (CamlinternalMod[2],_aM_,Adjust_heights_heap,Adjust_heights_heap);
    caml_call3(CamlinternalMod[2],_aN_,Alarm,Alarm);
    caml_call3(CamlinternalMod[2],_aO_,Alarm_value,Alarm_value);
    caml_call3(CamlinternalMod[2],_aP_,Array_fold,Array_fold);
    caml_call3(CamlinternalMod[2],_aQ_,At,At);
    caml_call3(CamlinternalMod[2],_aR_,At_intervals,At_intervals);
    caml_call3(CamlinternalMod[2],_aS_,Bind,Bind);
    caml_call3(CamlinternalMod[2],_aT_,Clock,Clock);
    caml_call3(CamlinternalMod[2],_aU_,Expert,Expert);
    caml_call3(CamlinternalMod[2],_aV_,Freeze,Freeze);
    caml_call3(CamlinternalMod[2],_aW_,If_then_else,If_then_else);
    caml_call3(CamlinternalMod[2],_aX_,Internal_observer,Internal_observer);
    caml_call3(CamlinternalMod[2],_aY_,Join,Join);
    caml_call3(CamlinternalMod[2],_aZ_,Kind,Kind);
    function sexp_of_node(param,t)
     {var
       _GD_=
        caml_call2(concat,0,[0,cst_n,[0,caml_call1(to_string$0,t[1]),0]]);
      return caml_call1(Core_kernel[455],_GD_)}
    function sexp_of_t$7(param)
     {return sexp_of_node(function(param){return _a0_},param)}
    function is_valid(t)
     {var _GC_=t[5];if(typeof _GC_ === "number" && ! _GC_)return 0;return 1}
    function is_necessary(t)
     {var _Gx_=caml_call2(symbol$2,t[9],0);
      if(_Gx_)
       var _Gy_=_Gx_;
      else
       {var _Gz_=caml_call1(Uopt[6],t[21]);
        if(_Gz_)
         var _Gy_=_Gz_;
        else
         {var switch$0=0,_GA_=t[5];
          if(typeof _GA_ !== "number" && 7 === _GA_[0])
           {var _GB_=1;switch$0 = 1}
          if(! switch$0)var _GB_=0;
          var _Gy_=_GB_ || t[26]}}
      return _Gy_}
    function type_equal_if_phys_same(t1,t2)
     {return caml_call2(Core_kernel[232],t1,t2)?[0,0]:0}
    caml_call3
     (CamlinternalMod[2],
      _a1_,
      Node,
      [0,
       sexp_of_node,
       [0,sexp_of_t$7],
       is_valid,
       is_necessary,
       type_equal_if_phys_same]);
    caml_call3(CamlinternalMod[2],_a2_,Observer,Observer);
    caml_call3(CamlinternalMod[2],_a3_,Only_in_debug,Only_in_debug);
    caml_call3
     (CamlinternalMod[2],_a4_,Packed_weak_hashtbl,Packed_weak_hashtbl);
    caml_call3(CamlinternalMod[2],_a5_,Recompute_heap,Recompute_heap);
    caml_call3
     (CamlinternalMod[2],_a6_,Run_on_update_handlers,Run_on_update_handlers);
    function sexp_of_t$8(param)
     {if(param)
       {var bind=param[1],_Gv_=bind[1],_Gw_=function(param){return _a7_};
        return caml_call1(caml_call1(Node[1],_Gw_),_Gv_)}
      return caml_call1(Core_kernel[455],cst_Top)}
    caml_call3(CamlinternalMod[2],_a8_,include$1,[0,sexp_of_t$8]);
    caml_call3(CamlinternalMod[2],_a9_,Snapshot,Snapshot);
    caml_call3(CamlinternalMod[2],_a__,State,State);
    caml_call3(CamlinternalMod[2],_a$_,Status,Status);
    caml_call3(CamlinternalMod[2],_ba_,Step_function_node,Step_function_node);
    caml_call3
     (CamlinternalMod[2],_bb_,Unordered_array_fold,Unordered_array_fold);
    caml_call3(CamlinternalMod[2],_bc_,Var,Var);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Types$0);
    var
     Incremental_Types=
      [0,
       Adjust_heights_heap,
       Alarm,
       Alarm_value,
       Array_fold,
       At,
       At_intervals,
       Bind,
       Clock,
       Expert,
       Freeze,
       If_then_else,
       Internal_observer,
       Join,
       Kind,
       Node,
       Observer,
       Only_in_debug,
       Packed_weak_hashtbl,
       Recompute_heap,
       Run_on_update_handlers,
       include$1,
       Snapshot,
       State,
       Status,
       Step_function_node,
       Unordered_array_fold,
       Var];
    caml_register_global(1279,Incremental_Types,"Incremental__Types");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Var);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$23);
    caml_call1(Expect_test_collector[4][1],cst_src_var_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$24,cst$7);
    function watch(r){return r[4]}
    function set_at(r){return r[3]}
    function set_set_at(r,v){r[3] = v;return 0}
    function value_set_during_stabilization(r){return r[2]}
    function set_value_set_during_stabiliza(r,v){r[2] = v;return 0}
    function value(r){return r[1]}
    function set_value(r,v){r[1] = v;return 0}
    function _bd_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _be_=0,
     watch$0=[0,function(param){return 0},cst_watch,_be_,watch,_bd_];
    function _bf_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _bg_=[0,set_set_at],
     set_at$0=[0,function(param){return 0},cst_set_at,_bg_,set_at,_bf_];
    function _bh_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _bi_=[0,set_value_set_during_stabiliza],
     value_set_during_stabilization$0=
      [0,
       function(param){return 0},
       cst_value_set_during_stabiliza,
       _bi_,
       value_set_during_stabilization,
       _bh_];
    function _bj_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _bk_=[0,set_value],
     value$0=[0,function(param){return 0},cst_value,_bk_,value,_bj_];
    function sexp_of_t$9(of_a,param)
     {var
       v_value=param[1],
       v_value_set_during_stabilizati=param[2],
       v_set_at=param[3],
       v_watch=param[4],
       arg=caml_call2(Node[1],of_a,v_watch),
       bnds=[0,[1,[0,_bl_,[0,arg,0]]],0],
       arg$0=caml_call1(_s_,v_set_at),
       bnds$0=[0,[1,[0,_bm_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Uopt[1],of_a,v_value_set_during_stabilizati),
       bnds$1=[0,[1,[0,_bn_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(of_a,v_value),
       bnds$2=[0,[1,[0,_bo_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$3(invariant_a,t)
     {function _Gq_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         watch_fun=
          check
           (function(watch)
             {var _Gu_=watch[5];
              if(typeof _Gu_ === "number")
               {if(0 === _Gu_)return 0}
              else
               if(16 === _Gu_[0])
                {var t$0=_Gu_[1];
                 if(caml_call2(Core_kernel[231],t,t$0))return 0;
                 throw [0,Assert_failure,_bq_]}
              throw [0,Assert_failure,_bp_]}),
         set_at_fun=check(invariant$2),
         value_set_during_stabilization=check(caml_call1(Uopt[2],invariant_a)),
         value_fun=check(invariant_a);
        caml_call1(value_fun,value$0);
        caml_call1
         (value_set_during_stabilization,value_set_during_stabilization$0);
        caml_call1(set_at_fun,set_at$0);
        return caml_call1(watch_fun,watch$0)}
      function _Gr_(param){return _br_}
      function _Gs_(_Gt_){return sexp_of_t$9(_Gr_,_Gt_)}
      return caml_call4(Base_Invariant[1],_bs_,t,_Gs_,_Gq_)}
    function incr_state(t){return t[4][2]}
    function sexp_of_t$10(param)
     {var v0=sexp_of_t$9(function(param){return _bt_},param);
      return [1,[0,_bu_,[0,v0,0]]]}
    function latest_value(t)
     {return caml_call1(Uopt[6],t[2])?caml_call1(Uopt[11],t[2]):t[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Var$0);
    var
     Packed=[0,sexp_of_t$10],
     include$2=[0,invariant$3,sexp_of_t$9,Packed,latest_value,incr_state];
    caml_register_global(1281,include$2,"Incremental__Var");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Unordered_arra);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$26);
    caml_call1(Expect_test_collector[4][1],cst_src_unordered_array_fold_m);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$27,cst$8);
    function sexp_of_t$11(of_a,of_b,param)
     {if(0 === param[0])
       {var
         _Gm_=function(_Gp_){return 0},
         v0=caml_call1(Sexplib0_Sexp_conv[24],_Gm_);
        return [1,[0,_bv_,[0,v0,0]]]}
      function _Gn_(_Go_){return 0}
      var v0$0=caml_call1(Sexplib0_Sexp_conv[24],_Gn_);
      return [1,[0,_bw_,[0,v0$0,0]]]}
    function num_changes_since_last_full_co(r){return r[8]}
    function set_num_changes_since_last_ful(r,v){r[8] = v;return 0}
    function fold_value(r){return r[7]}
    function set_fold_value(r,v){r[7] = v;return 0}
    function children(r){return r[6]}
    function full_compute_every_n_changes(r){return r[5]}
    function init$0(r){return r[2]}
    function main(r){return r[1]}
    function _bx_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v]}
    var
     _by_=[0,set_num_changes_since_last_ful],
     num_changes_since_last_full_co$0=
      [0,
       function(param){return 0},
       cst_num_changes_since_last_ful,
       _by_,
       num_changes_since_last_full_co,
       _bx_];
    function _bz_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8]]}
    var
     _bA_=[0,set_fold_value],
     fold_value$0=
      [0,function(param){return 0},cst_fold_value,_bA_,fold_value,_bz_];
    function _bB_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8]]}
    var
     _bC_=0,
     children$0=[0,function(param){return 0},cst_children,_bC_,children,_bB_];
    function _bD_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8]]}
    var
     _bE_=0,
     full_compute_every_n_changes$0=
      [0,
       function(param){return 0},
       cst_full_compute_every_n_chang,
       _bE_,
       full_compute_every_n_changes,
       _bD_];
    function _bF_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8]]}
    var _bG_=0,init$1=[0,function(param){return 0},cst_init,_bG_,init$0,_bF_];
    function _bH_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8]]}
    var _bI_=0,main$0=[0,function(param){return 0},cst_main,_bI_,main,_bH_];
    function sexp_of_t$12(of_a,of_acc,param)
     {var
       v_children=param[6],
       v_full_compute_every_n_changes=param[5],
       v_init=param[2],
       v_main=param[1],
       v_fold_value=param[7],
       v_num_changes_since_last_full_=param[8],
       arg=caml_call1(Core_kernel[340],v_num_changes_since_last_full_),
       bnds=[0,[1,[0,_bJ_,[0,arg,0]]],0],
       arg$0=caml_call2(Uopt[1],of_acc,v_fold_value),
       bnds$0=[0,[1,[0,_bK_,[0,arg$0,0]]],bnds],
       _Gh_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Core_kernel[272],_Gh_,v_children),
       bnds$1=[0,[1,[0,_bL_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[340],v_full_compute_every_n_changes),
       bnds$2=[0,[1,[0,_bM_,[0,arg$2,0]]],bnds$1];
      function _Gi_(_Gl_){return 0}
      var
       arg$3=caml_call1(Sexplib0_Sexp_conv[24],_Gi_),
       bnds$3=[0,[1,[0,_bN_,[0,arg$3,0]]],bnds$2];
      function _Gj_(_Gk_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_Gj_),
       bnds$4=[0,[1,[0,_bO_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(of_acc,v_init),
       bnds$5=[0,[1,[0,_bP_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call2(Node[1],of_acc,v_main),
       bnds$6=[0,[1,[0,_bQ_,[0,arg$6,0]]],bnds$5];
      return [1,bnds$6]}
    function invariant$4(invariant_a,invariant_acc,t)
     {function _F$_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         num_changes_since_last_full_co=
          check
           (function(num_changes_since_last_full_co)
             {if(caml_call2(symbol,num_changes_since_last_full_co,0))
               {if(caml_call2(symbol$0,num_changes_since_last_full_co,t[5]))
                 return 0;
                throw [0,Assert_failure,_bR_]}
              throw [0,Assert_failure,_bS_]}),
         fold_value_fun=
          check
           (function(fold_value)
             {caml_call2(Uopt[2],invariant_acc,fold_value);
              var
               got=caml_call1(Uopt[6],fold_value),
               expect=caml_call2(symbol$3,t[8],t[5]),
               sexpifier=Core_kernel[289],
               equal=0,
               message=0,
               here=0;
              function comparator(a_001,b_002)
               {return caml_call2(Core_kernel[285],a_001,b_002)}
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos,
                       sexpifier,
                       comparator,
                       here,
                       message,
                       equal,
                       expect,
                       got)}),
         children_fun=
          check
           (function(children)
             {function _Gf_(child)
               {caml_call2(Uopt[2],invariant_a,child[4]);
                var _Gg_=caml_call2(symbol$3,t[8],t[5]);
                if(_Gg_)
                 {if(caml_call1(Uopt[6],child[4]))return 0;
                  throw [0,Assert_failure,_bT_]}
                return _Gg_}
              return caml_call2(Array[20],children,_Gf_)}),
         full_compute_every_n_changes_f=
          check
           (function(full_compute_every_n_changes)
             {if(caml_call2(symbol$2,full_compute_every_n_changes,0))return 0;
              throw [0,Assert_failure,_bU_]}),
         init_fun=check(invariant_acc),
         main_fun=
          check
           (function(main)
             {var _Ge_=main[5];
              if(typeof _Ge_ === "number")
               {if(0 === _Ge_)return 0}
              else
               if(15 === _Ge_[0])
                {var t$0=_Ge_[1];
                 if(caml_call2(Core_kernel[232],t,t$0))return 0;
                 throw [0,Assert_failure,_bW_]}
              throw [0,Assert_failure,_bV_]});
        caml_call1(main_fun,main$0);
        caml_call1(init_fun,init$1);
        caml_call1
         (full_compute_every_n_changes_f,full_compute_every_n_changes$0);
        caml_call1(children_fun,children$0);
        caml_call1(fold_value_fun,fold_value$0);
        return caml_call1
                (num_changes_since_last_full_co,
                 num_changes_since_last_full_co$0)}
      function _Ga_(param){return _bX_}
      function _Gb_(param){return _bY_}
      function _Gc_(_Gd_){return sexp_of_t$12(_Gb_,_Ga_,_Gd_)}
      return caml_call4(Base_Invariant[1],_bZ_,t,_Gc_,_F$_)}
    function create$3
     (init,f,update$0,full_compute_every_n_changes,children,main)
     {var _F9_=Uopt[3];
      if(0 === update$0[0])
       var
        f_inverse=update$0[1],
        _F__=
         function(fold_value,old_value,new_value)
          {return caml_call2
                   (f,caml_call2(f_inverse,fold_value,old_value),new_value)};
      else
       var update=update$0[1],_F__=update;
      return [0,
              main,
              init,
              f,
              _F__,
              full_compute_every_n_changes,
              children,
              _F9_,
              full_compute_every_n_changes]}
    function compute(t)
     {if(caml_call2(symbol$1,t[8],t[5]))
       {t[8] = 0;
        var
         children=t[6],
         f=t[3],
         init=t[2],
         result=[0,init],
         _F6_=caml_call1(Array[18],children) - 1 | 0,
         _F5_=0;
        if(! (_F6_ < 0))
         {var i=_F5_;
          for(;;)
           {var _F7_=caml_call1(Uopt[7],children[1 + i][4]);
            result[1] = caml_call2(f,result[1],_F7_);
            var _F8_=i + 1 | 0;
            if(_F6_ !== i){var i=_F8_;continue}
            break}}
        t[7] = caml_call1(Uopt[4],result[1])}
      return caml_call1(Uopt[7],t[7])}
    function force_full_compute(t){t[7] = Uopt[3];t[8] = t[5];return 0}
    function child_changed(t,child,child_index,old_value_opt,new_value)
     {var
       child_at_index=caml_check_bound(t[6],child_index)[1 + child_index],
       match=caml_call2(Node[5],child,child_at_index);
      if(match)
       {if(caml_call2(symbol$3,t[8],t[5] - 1 | 0))
         {t[8] = t[8] + 1 | 0;
          var
           _FS_=caml_call1(Uopt[7],old_value_opt),
           _FT_=caml_call1(Uopt[7],t[7]),
           _FU_=caml_call3(t[4],_FT_,_FS_,new_value);
          t[7] = caml_call1(Uopt[4],_FU_);
          return 0}
        var _FV_=caml_call2(symbol$3,t[8],t[5]);
        return _FV_?force_full_compute(t):_FV_}
      var _FW_=0,_FX_=0;
      function _FY_(param){return _b0_}
      var
       _FZ_=[0,[1,[0,_b1_,[0,caml_call2(Node[1],_FY_,child),_FX_]]],_FW_],
       _F0_=
        [0,[1,[0,_b2_,[0,caml_call1(Core_kernel[340],child_index),0]]],_FZ_],
       _F1_=0;
      function _F2_(param){return _b3_}
      var
       _F3_=
        [0,
         [1,
          [0,_b5_,[0,sexp_of_t$12(function(param){return _b4_},_F2_,t),_F1_]]],
         _F0_],
       _F4_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_Unordered_array_fold_child),
          _F3_]];
      return caml_call1(Core_kernel[238],_F4_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Unordered_arra$0);
    var
     _b6_=[0,sexp_of_t$11],
     Incremental_Unordered_array_fo=
      [0,
       invariant$4,
       sexp_of_t$12,
       _b6_,
       create$3,
       compute,
       child_changed,
       force_full_compute];
    caml_register_global
     (1283,Incremental_Unordered_array_fo,"Incremental__Unordered_array_fold");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Alarm);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$29);
    caml_call1(Expect_test_collector[4][1],cst_src_alarm_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$30,cst$9);
    function sexp_of_t$13(v)
     {return caml_call2(Timing_wheel[5][1],Sexplib0_Sexp_conv[23],v)}
    function invariant$5(param){return 0}
    var null$0=caml_call1(Timing_wheel[5][2],0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Alarm$0);
    var Incremental_Alarm=[0,sexp_of_t$13,invariant$5,null$0];
    caml_register_global(1285,Incremental_Alarm,"Incremental__Alarm");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Step_function_);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$32);
    caml_call1(Expect_test_collector[4][1],cst_src_step_function_node_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$33,cst$10);
    function alarm_value(r){return r[7]}
    function set_alarm_value(r,v){r[7] = v;return 0}
    function alarm(r){return r[6]}
    function set_alarm(r,v){r[6] = v;return 0}
    function value$1(r){return r[4]}
    function set_value$0(r,v){r[4] = v;return 0}
    function main$1(r){return r[1]}
    function _b7_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8]]}
    var
     _b8_=[0,set_alarm_value],
     alarm_value$0=
      [0,function(param){return 0},cst_alarm_value,_b8_,alarm_value,_b7_];
    function _b9_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8]]}
    var
     _b__=[0,set_alarm],
     alarm$0=[0,function(param){return 0},cst_alarm,_b__,alarm,_b9_];
    function _b$_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8]]}
    var
     _ca_=[0,set_value$0],
     value$2=[0,function(param){return 0},cst_value$0,_ca_,value$1,_b$_];
    function _cb_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8]]}
    var
     _cc_=0,
     main$2=[0,function(param){return 0},cst_main$0,_cc_,main$1,_cb_];
    function sexp_of_t$14(of_a,param)
     {var
       v_main=param[1],
       v_child=param[2],
       v_extracted_step_function_from=param[3],
       v_value=param[4],
       v_upcoming_steps=param[5],
       v_alarm=param[6],
       v_alarm_value=param[7],
       v_clock=param[8],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_cd_,[0,arg,0]]],0],
       arg$0=caml_call1(Sexplib0_Sexp_conv[23],v_alarm_value),
       bnds$0=[0,[1,[0,_ce_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$13(v_alarm),
       bnds$1=[0,[1,[0,_cf_,[0,arg$1,0]]],bnds$0];
      function _FP_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Time_ns[88],v0),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$2=caml_call2(Core_kernel_Sequence[13],_FP_,v_upcoming_steps),
       bnds$2=[0,[1,[0,_cg_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Uopt[1],of_a,v_value),
       bnds$3=[0,[1,[0,_ch_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(_s_,v_extracted_step_function_from),
       bnds$4=[0,[1,[0,_ci_,[0,arg$4,0]]],bnds$3],
       _FQ_=caml_call1(Incremental_step_function[1],of_a),
       _FR_=caml_call1(Node[1],_FQ_),
       arg$5=caml_call2(Uopt[1],_FR_,v_child),
       bnds$5=[0,[1,[0,_cj_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call2(Node[1],of_a,v_main),
       bnds$6=[0,[1,[0,_ck_,[0,arg$6,0]]],bnds$5];
      return [1,bnds$6]}
    function invariant$6(invariant_a,t)
     {function _FJ_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_value_fun=
          check
           (function(alarm_value)
             {var _FO_=alarm_value[1];
              if(3 === _FO_[0])
               {var t2=_FO_[1];
                if(caml_call2(Core_kernel[232],t,t2))return 0;
                throw [0,Assert_failure,_cm_]}
              throw [0,Assert_failure,_cl_]}),
         alarm_fun=check(invariant$5),
         value_fun=check(caml_call1(Uopt[2],invariant_a)),
         main_fun=
          check
           (function(main)
             {var _FN_=main[5];
              if(typeof _FN_ === "number")
               {if(0 === _FN_)return 0}
              else
               switch(_FN_[0])
                {case 5:return 0;
                 case 14:
                  var t$0=_FN_[1];
                  if(caml_call2(Core_kernel[231],t,t$0))return 0;
                  throw [0,Assert_failure,_co_]
                 }
              throw [0,Assert_failure,_cn_]});
        caml_call1(main_fun,main$2);
        caml_call1(value_fun,value$2);
        caml_call1(alarm_fun,alarm$0);
        caml_call1(alarm_value_fun,alarm_value$0);
        return 0}
      function _FK_(param){return _cp_}
      function _FL_(_FM_){return sexp_of_t$14(_FK_,_FM_)}
      return caml_call4(Base_Invariant[1],_cq_,t,_FL_,_FJ_)}
    function advance(t,to)
     {var _FI_=t[5],a1$0=caml_call1(Uopt[7],t[4]),a1=a1$0,steps=_FI_;
      for(;;)
       {var match=caml_call1(Core_kernel_Sequence[47],steps);
        if(match)
         {var
           _FH_=match[1],
           steps2=_FH_[2],
           match$0=_FH_[1],
           a2=match$0[2],
           step_at=match$0[1];
          if(caml_call2(Time_ns[15],to,step_at))
           {var a1=a2,steps=steps2;continue}}
        t[4] = caml_call1(Uopt[4],a1);
        t[5] = steps;
        return 0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Step_function_$0);
    var Incremental_Step_function_node=[0,invariant$6,sexp_of_t$14,advance];
    caml_register_global
     (1288,Incremental_Step_function_node,"Incremental__Step_function_node");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Array_fold);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$35);
    caml_call1(Expect_test_collector[4][1],cst_src_array_fold_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$36,cst$11);
    function children$1(r){return r[3]}
    function init$2(r){return r[1]}
    function _cr_(r,v){return [0,r[1],r[2],v]}
    var
     _cs_=0,
     children$2=
      [0,function(param){return 0},cst_children$0,_cs_,children$1,_cr_];
    function _ct_(r,v){return [0,v,r[2],r[3]]}
    var
     _cu_=0,
     init$3=[0,function(param){return 0},cst_init$0,_cu_,init$2,_ct_];
    function sexp_of_t$15(of_a,of_acc,param)
     {var
       v_children=param[3],
       v_init=param[1],
       _FE_=caml_call1(Node[1],of_a),
       arg=caml_call2(Core_kernel[272],_FE_,v_children),
       bnds=[0,[1,[0,_cv_,[0,arg,0]]],0];
      function _FF_(_FG_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_FF_),
       bnds$0=[0,[1,[0,_cw_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_acc,v_init),
       bnds$1=[0,[1,[0,_cx_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function invariant$7(invariant_a,invariant_acc,t)
     {function _Fy_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         children_fun=
          check
           (function(children)
             {function _FD_(child)
               {return caml_call2(Uopt[2],invariant_a,child[4])}
              return caml_call2(Array[20],children,_FD_)}),
         init_fun=check(invariant_acc);
        caml_call1(init_fun,init$3);
        return caml_call1(children_fun,children$2)}
      function _Fz_(param){return _cy_}
      function _FA_(param){return _cz_}
      function _FB_(_FC_){return sexp_of_t$15(_FA_,_Fz_,_FC_)}
      return caml_call4(Base_Invariant[1],_cA_,t,_FB_,_Fy_)}
    function compute$0(param)
     {var
       children=param[3],
       f=param[2],
       init=param[1],
       result=[0,init],
       _Fv_=caml_call1(Array[18],children) - 1 | 0,
       _Fu_=0;
      if(! (_Fv_ < 0))
       {var i=_Fu_;
        for(;;)
         {var _Fw_=caml_call1(Uopt[7],children[1 + i][4]);
          result[1] = caml_call2(f,result[1],_Fw_);
          var _Fx_=i + 1 | 0;
          if(_Fv_ !== i){var i=_Fx_;continue}
          break}}
      return result[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Array_fold$0);
    var Incremental_Array_fold=[0,sexp_of_t$15,invariant$7,compute$0];
    caml_register_global
     (1289,Incremental_Array_fold,"Incremental__Array_fold");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_At);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$38);
    caml_call1(Expect_test_collector[4][1],cst_src_at_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$39,cst$12);
    function alarm$1(r){return r[3]}
    function set_alarm$0(r,v){r[3] = v;return 0}
    function main$3(r){return r[1]}
    function _cB_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _cC_=[0,set_alarm$0],
     alarm$2=[0,function(param){return 0},cst_alarm$0,_cC_,alarm$1,_cB_];
    function _cD_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _cE_=0,
     main$4=[0,function(param){return 0},cst_main$1,_cE_,main$3,_cD_];
    function sexp_of_t$16(param)
     {var
       v_at=param[2],
       v_main=param[1],
       v_alarm=param[3],
       v_clock=param[4],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_cF_,[0,arg,0]]],0],
       arg$0=sexp_of_t$13(v_alarm),
       bnds$0=[0,[1,[0,_cG_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Time_ns[88],v_at),
       bnds$1=[0,[1,[0,_cH_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Incremental_Before_or_after[1],v_main),
       bnds$2=[0,[1,[0,_cI_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$8(t)
     {function _Fs_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_fun=check(invariant$5),
         main_fun=
          check
           (function(main)
             {var _Ft_=main[5];
              if(typeof _Ft_ === "number")
               {if(0 === _Ft_)return 0}
              else
               switch(_Ft_[0])
                {case 1:
                  var t$0=_Ft_[1];
                  if(caml_call2(Core_kernel[231],t,t$0))return 0;
                  throw [0,Assert_failure,_cK_];
                 case 5:if(_Ft_[1])return 0;break
                 }
              throw [0,Assert_failure,_cJ_]});
        caml_call1(main_fun,main$4);
        caml_call1(alarm_fun,alarm$2);
        return 0}
      return caml_call4(Base_Invariant[1],_cL_,t,sexp_of_t$16,_Fs_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_At$0);
    var Incremental_At=[0,invariant$8,sexp_of_t$16];
    caml_register_global(1290,Incremental_At,"Incremental__At");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_At_intervals);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$41);
    caml_call1(Expect_test_collector[4][1],cst_src_at_intervals_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$42,cst$13);
    function alarm$3(r){return r[4]}
    function set_alarm$1(r,v){r[4] = v;return 0}
    function interval(r){return r[3]}
    function main$5(r){return r[1]}
    function _cM_(r,v){return [0,r[1],r[2],r[3],v,r[5]]}
    var
     _cN_=[0,set_alarm$1],
     alarm$4=[0,function(param){return 0},cst_alarm$1,_cN_,alarm$3,_cM_];
    function _cO_(r,v){return [0,r[1],r[2],v,r[4],r[5]]}
    var
     _cP_=0,
     interval$0=[0,function(param){return 0},cst_interval,_cP_,interval,_cO_];
    function _cQ_(r,v){return [0,v,r[2],r[3],r[4],r[5]]}
    var
     _cR_=0,
     main$6=[0,function(param){return 0},cst_main$2,_cR_,main$5,_cQ_];
    function sexp_of_t$17(param)
     {var
       v_interval=param[3],
       v_base=param[2],
       v_main=param[1],
       v_alarm=param[4],
       v_clock=param[5],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_cS_,[0,arg,0]]],0],
       arg$0=sexp_of_t$13(v_alarm),
       bnds$0=[0,[1,[0,_cT_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Time_ns[1][10],v_interval),
       bnds$1=[0,[1,[0,_cU_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Time_ns[88],v_base),
       bnds$2=[0,[1,[0,_cV_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],Core_kernel[502],v_main),
       bnds$3=[0,[1,[0,_cW_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function invariant$9(t)
     {function _Fq_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_fun=check(invariant$5),
         interval_fun=
          check
           (function(interval)
             {if(caml_call1(Time_ns[1][40],interval))return 0;
              throw [0,Assert_failure,_cX_]}),
         main_fun=
          check
           (function(main)
             {var _Fr_=main[5];
              if(typeof _Fr_ === "number")
               {if(0 === _Fr_)return 0}
              else
               if(2 === _Fr_[0])
                {var t$0=_Fr_[1];
                 if(caml_call2(Core_kernel[231],t,t$0))return 0;
                 throw [0,Assert_failure,_cZ_]}
              throw [0,Assert_failure,_cY_]});
        caml_call1(main_fun,main$6);
        caml_call1(interval_fun,interval$0);
        caml_call1(alarm_fun,alarm$4);
        return 0}
      return caml_call4(Base_Invariant[1],_c0_,t,sexp_of_t$17,_Fq_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_At_intervals$0);
    var Incremental_At_intervals=[0,invariant$9,sexp_of_t$17];
    caml_register_global
     (1291,Incremental_At_intervals,"Incremental__At_intervals");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Bind);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$44);
    caml_call1(Expect_test_collector[4][1],cst_src_bind_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$45,cst$14);
    function all_nodes_created_on_rhs(r){return r[7]}
    function set_all_nodes_created_on_rhs(r,v){r[7] = v;return 0}
    function rhs_scope(r){return r[6]}
    function set_rhs_scope(r,v){r[6] = v;return 0}
    function lhs_change(r){return r[4]}
    function main$7(r){return r[1]}
    function _c1_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _c2_=[0,set_all_nodes_created_on_rhs],
     all_nodes_created_on_rhs$0=
      [0,
       function(param){return 0},
       cst_all_nodes_created_on_rhs,
       _c2_,
       all_nodes_created_on_rhs,
       _c1_];
    function _c3_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _c4_=[0,set_rhs_scope],
     rhs_scope$0=
      [0,function(param){return 0},cst_rhs_scope,_c4_,rhs_scope,_c3_];
    function _c5_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _c6_=0,
     lhs_change$0=
      [0,function(param){return 0},cst_lhs_change,_c6_,lhs_change,_c5_];
    function _c7_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7]]}
    var
     _c8_=0,
     main$8=[0,function(param){return 0},cst_main$3,_c8_,main$7,_c7_];
    function sexp_of_t$18(of_a,of_b,param)
     {var
       v_main=param[1],
       v_lhs_change=param[4],
       v_lhs=param[3],
       v_rhs=param[5],
       v_rhs_scope=param[6],
       v_all_nodes_created_on_rhs=param[7],
       arg=caml_call2(Uopt[1],Node[2][1],v_all_nodes_created_on_rhs),
       bnds=[0,[1,[0,_c9_,[0,arg,0]]],0],
       arg$0=caml_call1(include$1[1],v_rhs_scope),
       bnds$0=[0,[1,[0,_c__,[0,arg$0,0]]],bnds],
       _Fn_=caml_call1(Node[1],of_b),
       arg$1=caml_call2(Uopt[1],_Fn_,v_rhs),
       bnds$1=[0,[1,[0,_c$_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Core_kernel[502],v_lhs_change),
       bnds$2=[0,[1,[0,_da_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],of_a,v_lhs),
       bnds$3=[0,[1,[0,_db_,[0,arg$3,0]]],bnds$2];
      function _Fo_(_Fp_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_Fo_),
       bnds$4=[0,[1,[0,_dc_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call2(Node[1],of_b,v_main),
       bnds$5=[0,[1,[0,_dd_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function same(t1,t2){return caml_call2(Core_kernel[232],t1,t2)}
    function is_valid$0(t)
     {var _Fm_=t[1][5];
      if(typeof _Fm_ === "number" && ! _Fm_)return 0;
      return 1}
    function iter_nodes_created_on_rhs(t,f)
     {var r=[0,t[7]];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var match=caml_call1(Uopt[11],r[1]);
          r[1] = match[13];
          caml_call1(f,match);
          continue}
        return 0}}
    function invariant$10(invariant_a,invariant_b,t)
     {function _Fe_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         all_nodes_created_on_rhs_fun=
          check
           (function(param)
             {return iter_nodes_created_on_rhs
                      (t,
                       function(node)
                        {if(caml_call2(Core_kernel[231],node[12],t[6]))
                          {var _Fl_=caml_call1(Node[4],node);
                           if(_Fl_)
                            {if(caml_call2(symbol$3,t[4][14],node[14]))return 0;
                             throw [0,Assert_failure,_de_]}
                           return _Fl_}
                         throw [0,Assert_failure,_df_]})}),
         rhs_scope_fun=
          check
           (function(param)
             {if(param)
               {var t$0=param[1];
                if(same(t,t$0))return 0;
                throw [0,Assert_failure,_dg_]}
              throw [0,Assert_failure,_dh_]}),
         lhs_change_fun=
          check
           (function(lhs_change)
             {if(caml_call2(Core_kernel[231],lhs_change[12],t[1][12]))
               {var _Fk_=lhs_change[5];
                if(typeof _Fk_ === "number")
                 {if(0 === _Fk_)return 0}
                else
                 if(3 === _Fk_[0])
                  {var t$0=_Fk_[1];
                   if(same(t,t$0))return 0;
                   throw [0,Assert_failure,_dj_]}
                throw [0,Assert_failure,_di_]}
              throw [0,Assert_failure,_dk_]}),
         main_fun=
          check
           (function(main)
             {var _Fj_=main[5];
              if(typeof _Fj_ === "number")
               {if(0 === _Fj_)return 0}
              else
               if(4 === _Fj_[0])
                {var t$0=_Fj_[1];
                 if(same(t,t$0))return 0;
                 throw [0,Assert_failure,_dm_]}
              throw [0,Assert_failure,_dl_]});
        caml_call1(main_fun,main$8);
        caml_call1(lhs_change_fun,lhs_change$0);
        caml_call1(rhs_scope_fun,rhs_scope$0);
        return caml_call1
                (all_nodes_created_on_rhs_fun,all_nodes_created_on_rhs$0)}
      function _Ff_(param){return _dn_}
      function _Fg_(param){return _do_}
      function _Fh_(_Fi_){return sexp_of_t$18(_Fg_,_Ff_,_Fi_)}
      return caml_call4(Base_Invariant[1],_dp_,t,_Fh_,_Fe_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Bind$0);
    var
     Incremental_Bind=
      [0,invariant$10,sexp_of_t$18,is_valid$0,iter_nodes_created_on_rhs];
    caml_register_global(1292,Incremental_Bind,"Incremental__Bind");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Expert);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$47);
    caml_call1(Expect_test_collector[4][1],cst_src_expert_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$48,cst$15);
    function sexp_of_t$19(of_a,param)
     {var
       v_child=param[1],
       v_index=param[3],
       arg=caml_call2(Uopt[1],Core_kernel[340],v_index),
       bnds=[0,[1,[0,_dq_,[0,arg,0]]],0];
      function _Fc_(_Fd_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_Fc_),
       bnds$0=[0,[1,[0,_dr_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Node[1],of_a,v_child),
       bnds$1=[0,[1,[0,_ds_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function sexp_of_packed_edge(param)
     {var v0=sexp_of_t$19(function(param){return _dt_},param);
      return [1,[0,_du_,[0,v0,0]]]}
    function sexp_of_t$20(of_a,param)
     {var
       v_children=param[3],
       v_num_children=param[4],
       v_force_stale=param[5],
       v_num_invalid_children=param[6],
       v_will_fire_all_callbacks=param[7],
       arg=caml_call1(Core_kernel[289],v_will_fire_all_callbacks),
       bnds=[0,[1,[0,_dv_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[340],v_num_invalid_children),
       bnds$0=[0,[1,[0,_dw_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[289],v_force_stale),
       bnds$1=[0,[1,[0,_dx_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[340],v_num_children),
       bnds$2=[0,[1,[0,_dy_,[0,arg$2,0]]],bnds$1],
       _E9_=caml_call1(Uopt[1],sexp_of_packed_edge),
       arg$3=caml_call2(Array[13],_E9_,v_children),
       bnds$3=[0,[1,[0,_dz_,[0,arg$3,0]]],bnds$2];
      function _E__(_Fb_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_E__),
       bnds$4=[0,[1,[0,_dA_,[0,arg$4,0]]],bnds$3];
      function _E$_(_Fa_){return 0}
      var
       arg$5=caml_call1(Sexplib0_Sexp_conv[24],_E$_),
       bnds$5=[0,[1,[0,_dB_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function invariant$11(invariant_a,param)
     {var children=param[3],num_children=param[4];
      if(caml_call2(symbol$0,num_children,caml_call1(Array[18],children)))
       {var
         _E8_=
          function(expect,uopt)
           {var match=caml_call2(symbol$3,expect,num_children);
            if(match)
             {var
               r=caml_call1(Uopt[7],uopt),
               got=caml_call1(Uopt[7],r[3]),
               sexpifier=Core_kernel[340],
               equal=0,
               message=0,
               here=0,
               comparator=
                function(a_001,b_002)
                 {return caml_call2(Core_kernel[336],a_001,b_002)};
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$0,
                       sexpifier,
                       comparator,
                       here,
                       message,
                       equal,
                       expect,
                       got)}
            if(caml_call1(Uopt[5],uopt))return 0;
            throw [0,Assert_failure,_dC_]};
        return caml_call2(Array[54],children,_E8_)}
      throw [0,Assert_failure,_dD_]}
    function invariant_about_num_invalid_ch(param)
     {var
       children=param[3],
       num_children=param[4],
       num_invalid_children=param[6];
      return function(is_necessary)
       {if(is_necessary)
         {var count_invalid_children=[0,0],_E4_=num_children - 1 | 0,_E3_=0;
          if(! (_E4_ < 0))
           {var i=_E3_;
            for(;;)
             {var
               _E6_=caml_check_bound(children,i)[1 + i],
               r=caml_call1(Uopt[7],_E6_);
              if(1 - caml_call1(Node[3],r[1]))count_invalid_children[1]++;
              var _E7_=i + 1 | 0;
              if(_E4_ !== i){var i=_E7_;continue}
              break}}
          var
           sexpifier=Core_kernel[340],
           _E5_=count_invalid_children[1],
           equal=0,
           message=0,
           here=0,
           comparator=
            function(a_005,b_006)
             {return caml_call2(Core_kernel[336],a_005,b_006)};
          return caml_call8
                  (Ppx_assert_lib_Runtime[3],
                   pos$1,
                   sexpifier,
                   comparator,
                   here,
                   message,
                   equal,
                   _E5_,
                   num_invalid_children)}
        var
         sexpifier$0=Core_kernel[340],
         expect=0,
         equal$0=0,
         message$0=0,
         here$0=0;
        function comparator$0(a_003,b_004)
         {return caml_call2(Core_kernel[336],a_003,b_004)}
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$2,
                 sexpifier$0,
                 comparator$0,
                 here$0,
                 message$0,
                 equal$0,
                 expect,
                 num_invalid_children)}}
    function create$4(f,on_observability_change)
     {return [0,f,on_observability_change,[0],0,0,0,1]}
    function make_stale(t){return t[5]?534011858:(t[5] = 1,17724)}
    function incr_invalid_children(t){t[6] = t[6] + 1 | 0;return 0}
    function decr_invalid_children(t){t[6] = t[6] - 1 | 0;return 0}
    function add_child_edge(t,packed_edge)
     {if(caml_call1(Uopt[5],packed_edge[3]))
       {var _E0_=caml_call1(Array[18],t[3]);
        if(caml_call2(symbol,t[4],_E0_))
         {var
           _E1_=2 * caml_call1(Array[18],t[3]) | 0,
           new_max=caml_call2(include[114],2,_E1_);
          t[3] = caml_call3(Array[117],t[3],new_max,Uopt[3])}
        var new_child_index=t[4];
        packed_edge[3] = caml_call1(Uopt[4],new_child_index);
        var _E2_=caml_call1(Uopt[4],packed_edge);
        caml_check_bound(t[3],new_child_index)[1 + new_child_index] = _E2_;
        t[4] = t[4] + 1 | 0;
        t[5] = 1;
        return new_child_index}
      throw [0,Assert_failure,_dE_]}
    function swap_children(t,child_index1,child_index2)
     {var
       _EY_=caml_check_bound(t[3],child_index1)[1 + child_index1],
       edge1=caml_call1(Uopt[7],_EY_),
       _EZ_=caml_check_bound(t[3],child_index2)[1 + child_index2],
       edge2=caml_call1(Uopt[7],_EZ_);
      edge1[3] = caml_call1(Uopt[4],child_index2);
      edge2[3] = caml_call1(Uopt[4],child_index1);
      return caml_call3(Array[82],t[3],child_index1,child_index2)}
    function last_child_edge_exn(t)
     {var
       last_index=t[4] - 1 | 0,
       _EX_=caml_check_bound(t[3],last_index)[1 + last_index];
      return caml_call1(Uopt[7],_EX_)}
    function remove_last_child_edge_exn(t)
     {var
       last_index=t[4] - 1 | 0,
       packed_edge_opt=caml_check_bound(t[3],last_index)[1 + last_index],
       _EW_=Uopt[3];
      caml_check_bound(t[3],last_index)[1 + last_index] = _EW_;
      t[4] = last_index;
      t[5] = 1;
      if(caml_call1(Uopt[6],packed_edge_opt))
       {var match=caml_call1(Uopt[11],packed_edge_opt);
        match[3] = Uopt[3];
        return 0}
      throw [0,Assert_failure,_dF_]}
    function before_main_computation(t)
     {if(caml_call2(symbol$2,t[6],0))return 144245463;
      t[5] = 0;
      var will_fire_all_callbacks=t[7];
      t[7] = 0;
      if(will_fire_all_callbacks)
       {var _ES_=t[4] - 1 | 0,_ER_=0;
        if(! (_ES_ < 0))
         {var i=_ER_;
          for(;;)
           {var
             _ET_=caml_check_bound(t[3],i)[1 + i],
             r=caml_call1(Uopt[7],_ET_),
             _EU_=caml_call1(Uopt[7],r[1][4]);
            caml_call1(r[2],_EU_);
            var _EV_=i + 1 | 0;
            if(_ES_ !== i){var i=_EV_;continue}
            break}}}
      return 17724}
    function observability_change(t,is_now_observable)
     {caml_call1(t[2],is_now_observable);
      var _EP_=1 - is_now_observable,_EQ_=_EP_?(t[7] = 1,t[6] = 0,0):_EP_;
      return _EQ_}
    function run_edge_callback(t,child_index)
     {var _EK_=1 - t[7];
      if(_EK_)
       {var
         _EL_=caml_check_bound(t[3],child_index)[1 + child_index],
         r=caml_call1(Uopt[7],_EL_),
         _EM_=caml_call1(Uopt[6],r[1][4]);
        if(_EM_)
         {var _EN_=caml_call1(Uopt[11],r[1][4]);return caml_call1(r[2],_EN_)}
        var _EO_=_EM_}
      else
       var _EO_=_EK_;
      return _EO_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Expert$0);
    var
     Incremental_Expert=
      [0,
       invariant$11,
       sexp_of_t$20,
       sexp_of_t$19,
       invariant_about_num_invalid_ch,
       create$4,
       make_stale,
       incr_invalid_children,
       decr_invalid_children,
       add_child_edge,
       swap_children,
       last_child_edge_exn,
       remove_last_child_edge_exn,
       before_main_computation,
       observability_change,
       run_edge_callback];
    caml_register_global(1293,Incremental_Expert,"Incremental__Expert");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Sexp_of);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$50);
    caml_call1(Expect_test_collector[4][1],cst_src_sexp_of_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$51,cst$16);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Sexp_of$0);
    var Incremental_Sexp_of=[0];
    caml_register_global(1294,Incremental_Sexp_of,"Incremental__Sexp_of");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Scope);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$53);
    caml_call1(Expect_test_collector[4][1],cst_src_scope_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$54,cst$17);
    var sexp_of_t$21=include$1[1],top=0;
    function is_top(param){return param?0:1}
    function invariant$12(param)
     {if(param)
       {var bind=param[1],_EH_=function(_EJ_){return 0};
        return invariant$10(function(_EI_){return 0},_EH_,bind)}
      return 0}
    function height(param)
     {if(param){var bind=param[1];return bind[4][14]}return -1}
    function is_valid$1(param)
     {if(param){var bind=param[1];return is_valid$0(bind)}return 1}
    function is_necessary$0(param)
     {if(param){var bind=param[1];return caml_call1(Node[4],bind[1])}return 1}
    function add_node(t,node)
     {if(caml_call2(Core_kernel[231],node[12],t))
       {if(t)
         {var bind=t[1];
          node[13] = bind[7];
          bind[7] = caml_call1(Uopt[4],node);
          return 0}
        return 0}
      throw [0,Assert_failure,_dG_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Scope$0);
    var
     include$3=
      [0,
       sexp_of_t$21,
       invariant$12,
       top,
       is_top,
       height,
       is_valid$1,
       is_necessary$0,
       add_node];
    caml_register_global(1295,include$3,"Incremental__Scope");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Freeze);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$56);
    caml_call1(Expect_test_collector[4][1],cst_src_freeze_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$57,cst$18);
    function main$9(r){return r[1]}
    function _dH_(r,v){return [0,v,r[2],r[3]]}
    var
     _dI_=0,
     main$10=[0,function(param){return 0},cst_main$4,_dI_,main$9,_dH_];
    function sexp_of_t$22(of_a,param)
     {var v_child=param[2],v_main=param[1],bnds=0;
      function _EF_(_EG_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_EF_),
       bnds$0=[0,[1,[0,_dJ_,[0,arg,0]]],bnds],
       arg$0=caml_call2(Node[1],of_a,v_child),
       bnds$1=[0,[1,[0,_dK_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_dL_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$13(invariant_a,t)
     {function _EA_(param)
       {function f(main)
         {if(is_top(main[12]))
           {var _EE_=main[5];
            if(typeof _EE_ === "number")
             {if(0 === _EE_)return 0}
            else
             switch(_EE_[0])
              {case 5:return 0;
               case 7:
                var t$0=_EE_[1];
                if(caml_call2(Core_kernel[231],t,t$0))return 0;
                throw [0,Assert_failure,_dN_]
               }
            throw [0,Assert_failure,_dM_]}
          throw [0,Assert_failure,_dO_]}
        var main_fun=caml_call2(Base_Invariant[2],t,f);
        caml_call1(main_fun,main$10);
        return 0}
      function _EB_(param){return _dP_}
      function _EC_(_ED_){return sexp_of_t$22(_EB_,_ED_)}
      return caml_call4(Base_Invariant[1],_dQ_,t,_EC_,_EA_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$58);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Freeze$0);
    var Incremental_Freeze=[0,invariant$13,sexp_of_t$22];
    caml_register_global(1296,Incremental_Freeze,"Incremental__Freeze");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_If_then_else);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$59);
    caml_call1(Expect_test_collector[4][1],cst_src_if_then_else_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$60,cst$19);
    function current_branch(r){return r[4]}
    function set_current_branch(r,v){r[4] = v;return 0}
    function test_change(r){return r[3]}
    function main$11(r){return r[1]}
    function _dR_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _dS_=[0,set_current_branch],
     current_branch$0=
      [0,
       function(param){return 0},
       cst_current_branch,
       _dS_,
       current_branch,
       _dR_];
    function _dT_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _dU_=0,
     test_change$0=
      [0,function(param){return 0},cst_test_change,_dU_,test_change,_dT_];
    function _dV_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _dW_=0,
     main$12=[0,function(param){return 0},cst_main$5,_dW_,main$11,_dV_];
    function sexp_of_t$23(of_a,param)
     {var
       v_test_change=param[3],
       v_test=param[2],
       v_main=param[1],
       v_current_branch=param[4],
       v_else=param[6],
       v_then=param[5],
       arg=caml_call2(Node[1],of_a,v_else),
       bnds=[0,[1,[0,_dX_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],of_a,v_then),
       bnds$0=[0,[1,[0,_dY_,[0,arg$0,0]]],bnds],
       _Ez_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Uopt[1],_Ez_,v_current_branch),
       bnds$1=[0,[1,[0,_dZ_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Core_kernel[502],v_test_change),
       bnds$2=[0,[1,[0,_d0_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],Core_kernel[289],v_test),
       bnds$3=[0,[1,[0,_d1_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call2(Node[1],of_a,v_main),
       bnds$4=[0,[1,[0,_d2_,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function invariant$14(invariant_a,t)
     {function _Es_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         current_branch_fun=
          check
           (function(current_branch)
             {var _Ey_=caml_call1(Uopt[6],current_branch);
              if(_Ey_)
               {var current_branch$0=caml_call1(Uopt[7],current_branch);
                if
                 (!
                  caml_call2(Core_kernel[231],current_branch$0,t[5])
                  &&
                  !
                  caml_call2(Core_kernel[231],current_branch$0,t[6]))
                 throw [0,Assert_failure,_d3_];
                return 0}
              return _Ey_}),
         test_change_fun=
          check
           (function(test_change)
             {var _Ex_=test_change[5];
              if(typeof _Ex_ === "number")
               {if(0 === _Ex_)return 0}
              else
               if(8 === _Ex_[0])
                {var t$0=_Ex_[1];
                 if(caml_call2(Core_kernel[232],t,t$0))return 0;
                 throw [0,Assert_failure,_d5_]}
              throw [0,Assert_failure,_d4_]}),
         main_fun=
          check
           (function(main)
             {var _Ew_=main[5];
              if(typeof _Ew_ === "number")
               {if(0 === _Ew_)return 0}
              else
               if(9 === _Ew_[0])
                {var t$0=_Ew_[1];
                 if(caml_call2(Core_kernel[231],t,t$0))return 0;
                 throw [0,Assert_failure,_d6_]}
              return 0});
        caml_call1(main_fun,main$12);
        caml_call1(test_change_fun,test_change$0);
        caml_call1(current_branch_fun,current_branch$0);
        return 0}
      function _Et_(param){return _d7_}
      function _Eu_(_Ev_){return sexp_of_t$23(_Et_,_Ev_)}
      return caml_call4(Base_Invariant[1],_d8_,t,_Eu_,_Es_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$61);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_If_then_else$0);
    var Incremental_If_then_else=[0,invariant$14,sexp_of_t$23];
    caml_register_global
     (1297,Incremental_If_then_else,"Incremental__If_then_else");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Join);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$62);
    caml_call1(Expect_test_collector[4][1],cst_src_join_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$63,cst$20);
    function lhs_change$1(r){return r[3]}
    function main$13(r){return r[1]}
    function _d9_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _d__=0,
     lhs_change$2=
      [0,function(param){return 0},cst_lhs_change$0,_d__,lhs_change$1,_d9_];
    function _d$_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _ea_=0,
     main$14=[0,function(param){return 0},cst_main$6,_ea_,main$13,_d$_];
    function sexp_of_t$24(of_a,param)
     {var
       v_lhs_change=param[3],
       v_lhs=param[2],
       v_main=param[1],
       v_rhs=param[4],
       _Eq_=caml_call1(Node[1],of_a),
       arg=caml_call2(Uopt[1],_Eq_,v_rhs),
       bnds=[0,[1,[0,_eb_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],Core_kernel[502],v_lhs_change),
       bnds$0=[0,[1,[0,_ec_,[0,arg$0,0]]],bnds],
       _Er_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Node[1],_Er_,v_lhs),
       bnds$1=[0,[1,[0,_ed_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_ee_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function same$0(t1,t2){return caml_call2(Core_kernel[232],t1,t2)}
    function invariant$15(invariant_a,t)
     {function _Ek_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         lhs_change_fun=
          check
           (function(lhs_change)
             {var _Ep_=lhs_change[5];
              if(typeof _Ep_ === "number")
               {if(0 === _Ep_)return 0}
              else
               if(10 === _Ep_[0])
                {var t$0=_Ep_[1];
                 if(same$0(t,t$0))return 0;
                 throw [0,Assert_failure,_eg_]}
              throw [0,Assert_failure,_ef_]}),
         main_fun=
          check
           (function(main)
             {var _Eo_=main[5];
              if(typeof _Eo_ === "number")
               {if(0 === _Eo_)return 0}
              else
               if(11 === _Eo_[0])
                {var t$0=_Eo_[1];
                 if(same$0(t,t$0))return 0;
                 throw [0,Assert_failure,_ei_]}
              throw [0,Assert_failure,_eh_]});
        caml_call1(main_fun,main$14);
        caml_call1(lhs_change_fun,lhs_change$2);
        return 0}
      function _El_(param){return _ej_}
      function _Em_(_En_){return sexp_of_t$24(_El_,_En_)}
      return caml_call4(Base_Invariant[1],_ek_,t,_Em_,_Ek_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$64);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Join$0);
    var Incremental_Join=[0,invariant$15,sexp_of_t$24];
    caml_register_global(1298,Incremental_Join,"Incremental__Join");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Snapshot);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$65);
    caml_call1(Expect_test_collector[4][1],cst_src_snapshot_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$66,cst$21);
    function before(r){return r[3]}
    function main$15(r){return r[1]}
    function _el_(r,v){return [0,r[1],r[2],v,r[4],r[5]]}
    var
     _em_=0,
     before$0=[0,function(param){return 0},cst_before,_em_,before,_el_];
    function _en_(r,v){return [0,v,r[2],r[3],r[4],r[5]]}
    var
     _eo_=0,
     main$16=[0,function(param){return 0},cst_main$7,_eo_,main$15,_en_];
    function sexp_of_t$25(of_a,param)
     {var
       v_clock=param[5],
       v_value_at=param[4],
       v_before=param[3],
       v_at=param[2],
       v_main=param[1],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_clock),
       bnds=[0,[1,[0,_ep_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],of_a,v_value_at),
       bnds$0=[0,[1,[0,_eq_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_a,v_before),
       bnds$1=[0,[1,[0,_er_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Time_ns[88],v_at),
       bnds$2=[0,[1,[0,_es_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],of_a,v_main),
       bnds$3=[0,[1,[0,_et_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function invariant$16(invariant_a,t)
     {function _Ef_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         before_fun=check(invariant_a),
         main_fun=
          check
           (function(main)
             {if(is_top(main[12]))
               {var _Ej_=main[5];
                if(typeof _Ej_ === "number")
                 {if(0 === _Ej_)return 0}
                else
                 switch(_Ej_[0])
                  {case 5:return 0;
                   case 13:
                    var t$0=_Ej_[1];
                    if(caml_call2(Core_kernel[231],t,t$0))return 0;
                    throw [0,Assert_failure,_ev_]
                   }
                throw [0,Assert_failure,_eu_]}
              throw [0,Assert_failure,_ew_]});
        caml_call1(main_fun,main$16);
        caml_call1(before_fun,before$0);
        return 0}
      function _Eg_(param){return _ex_}
      function _Eh_(_Ei_){return sexp_of_t$25(_Eg_,_Ei_)}
      return caml_call4(Base_Invariant[1],_ey_,t,_Eh_,_Ef_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$67);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Snapshot$0);
    var Incremental_Snapshot=[0,invariant$16,sexp_of_t$25];
    caml_register_global(1299,Incremental_Snapshot,"Incremental__Snapshot");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Kind);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$68);
    caml_call1(Expect_test_collector[4][1],cst_src_kind_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$69,cst$22);
    function sexp_of_t$26(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_ez_:_eA_;
      else
       switch(param[0])
        {case 0:
          var
           v0=param[1],
           v0$0=sexp_of_t$15(function(param){return _eB_},of_a,v0);
          return [1,[0,_eC_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=sexp_of_t$16(v0$1);
          return [1,[0,_eD_,[0,v0$2,0]]];
         case 2:
          var v0$3=param[1],v0$4=sexp_of_t$17(v0$3);
          return [1,[0,_eE_,[0,v0$4,0]]];
         case 3:
          var
           v0$5=param[1],
           _BU_=function(param){return _eF_},
           v0$6=sexp_of_t$18(function(param){return _eG_},_BU_,v0$5);
          return [1,[0,_eH_,[0,v0$6,0]]];
         case 4:
          var
           v0$7=param[1],
           v0$8=sexp_of_t$18(function(param){return _eI_},of_a,v0$7);
          return [1,[0,_eJ_,[0,v0$8,0]]];
         case 5:
          var v0$9=param[1],v0$10=caml_call1(of_a,v0$9);
          return [1,[0,_eK_,[0,v0$10,0]]];
         case 6:
          var v0$11=param[1],v0$12=sexp_of_t$20(of_a,v0$11);
          return [1,[0,_eL_,[0,v0$12,0]]];
         case 7:
          var v0$13=param[1],v0$14=sexp_of_t$22(of_a,v0$13);
          return [1,[0,_eM_,[0,v0$14,0]]];
         case 8:
          var
           v0$15=param[1],
           v0$16=sexp_of_t$23(function(param){return _eN_},v0$15);
          return [1,[0,_eO_,[0,v0$16,0]]];
         case 9:
          var v0$17=param[1],v0$18=sexp_of_t$23(of_a,v0$17);
          return [1,[0,_eP_,[0,v0$18,0]]];
         case 10:
          var
           v0$19=param[1],
           v0$20=sexp_of_t$24(function(param){return _eQ_},v0$19);
          return [1,[0,_eR_,[0,v0$20,0]]];
         case 11:
          var v0$21=param[1],v0$22=sexp_of_t$24(of_a,v0$21);
          return [1,[0,_eS_,[0,v0$22,0]]];
         case 12:
          var
           v1=param[2],
           _BV_=function(_Ed_){return 0},
           v0$23=caml_call1(Sexplib0_Sexp_conv[24],_BV_),
           _BW_=function(param){return _eT_},
           v1$0=caml_call2(Node[1],_BW_,v1);
          return [1,[0,_eU_,[0,v0$23,[0,v1$0,0]]]];
         case 13:
          var v0$24=param[1],v0$25=sexp_of_t$25(of_a,v0$24);
          return [1,[0,_eV_,[0,v0$25,0]]];
         case 14:
          var v0$26=param[1],v0$27=sexp_of_t$14(of_a,v0$26);
          return [1,[0,_eW_,[0,v0$27,0]]];
         case 15:
          var
           v0$28=param[1],
           v0$29=sexp_of_t$12(function(param){return _eX_},of_a,v0$28);
          return [1,[0,_eY_,[0,v0$29,0]]];
         case 16:
          var v0$30=param[1],v0$31=sexp_of_t$9(of_a,v0$30);
          return [1,[0,_eZ_,[0,v0$31,0]]];
         case 17:
          var
           v2=param[3],
           v1$1=param[2],
           _BX_=function(_Ec_){return 0},
           v0$32=caml_call1(Sexplib0_Sexp_conv[24],_BX_),
           _BY_=function(param){return _e0_},
           v1$2=caml_call2(Node[1],_BY_,v1$1),
           _BZ_=function(param){return _e1_},
           v2$0=caml_call2(Node[1],_BZ_,v2);
          return [1,[0,_e2_,[0,v0$32,[0,v1$2,[0,v2$0,0]]]]];
         case 18:
          var
           v3=param[4],
           v2$1=param[3],
           v1$3=param[2],
           _B0_=function(_Eb_){return 0},
           v0$33=caml_call1(Sexplib0_Sexp_conv[24],_B0_),
           _B1_=function(param){return _e3_},
           v1$4=caml_call2(Node[1],_B1_,v1$3),
           _B2_=function(param){return _e4_},
           v2$2=caml_call2(Node[1],_B2_,v2$1),
           _B3_=function(param){return _e5_},
           v3$0=caml_call2(Node[1],_B3_,v3);
          return [1,[0,_e6_,[0,v0$33,[0,v1$4,[0,v2$2,[0,v3$0,0]]]]]];
         case 19:
          var
           v4=param[5],
           v3$1=param[4],
           v2$3=param[3],
           v1$5=param[2],
           _B4_=function(_Ea_){return 0},
           v0$34=caml_call1(Sexplib0_Sexp_conv[24],_B4_),
           _B5_=function(param){return _e7_},
           v1$6=caml_call2(Node[1],_B5_,v1$5),
           _B6_=function(param){return _e8_},
           v2$4=caml_call2(Node[1],_B6_,v2$3),
           _B7_=function(param){return _e9_},
           v3$2=caml_call2(Node[1],_B7_,v3$1),
           _B8_=function(param){return _e__},
           v4$0=caml_call2(Node[1],_B8_,v4);
          return [1,[0,_e$_,[0,v0$34,[0,v1$6,[0,v2$4,[0,v3$2,[0,v4$0,0]]]]]]];
         case 20:
          var
           v5=param[6],
           v4$1=param[5],
           v3$3=param[4],
           v2$5=param[3],
           v1$7=param[2],
           _B9_=function(_D$_){return 0},
           v0$35=caml_call1(Sexplib0_Sexp_conv[24],_B9_),
           _B__=function(param){return _fa_},
           v1$8=caml_call2(Node[1],_B__,v1$7),
           _B$_=function(param){return _fb_},
           v2$6=caml_call2(Node[1],_B$_,v2$5),
           _Ca_=function(param){return _fc_},
           v3$4=caml_call2(Node[1],_Ca_,v3$3),
           _Cb_=function(param){return _fd_},
           v4$2=caml_call2(Node[1],_Cb_,v4$1),
           _Cc_=function(param){return _fe_},
           v5$0=caml_call2(Node[1],_Cc_,v5);
          return [1,
                  [0,
                   _ff_,
                   [0,v0$35,[0,v1$8,[0,v2$6,[0,v3$4,[0,v4$2,[0,v5$0,0]]]]]]]];
         case 21:
          var
           v6=param[7],
           v5$1=param[6],
           v4$3=param[5],
           v3$5=param[4],
           v2$7=param[3],
           v1$9=param[2],
           _Cd_=function(_D__){return 0},
           v0$36=caml_call1(Sexplib0_Sexp_conv[24],_Cd_),
           _Ce_=function(param){return _fg_},
           v1$10=caml_call2(Node[1],_Ce_,v1$9),
           _Cf_=function(param){return _fh_},
           v2$8=caml_call2(Node[1],_Cf_,v2$7),
           _Cg_=function(param){return _fi_},
           v3$6=caml_call2(Node[1],_Cg_,v3$5),
           _Ch_=function(param){return _fj_},
           v4$4=caml_call2(Node[1],_Ch_,v4$3),
           _Ci_=function(param){return _fk_},
           v5$2=caml_call2(Node[1],_Ci_,v5$1),
           _Cj_=function(param){return _fl_},
           v6$0=caml_call2(Node[1],_Cj_,v6);
          return [1,
                  [0,
                   _fm_,
                   [0,
                    v0$36,
                    [0,v1$10,[0,v2$8,[0,v3$6,[0,v4$4,[0,v5$2,[0,v6$0,0]]]]]]]]];
         case 22:
          var
           v7=param[8],
           v6$1=param[7],
           v5$3=param[6],
           v4$5=param[5],
           v3$7=param[4],
           v2$9=param[3],
           v1$11=param[2],
           _Ck_=function(_D9_){return 0},
           v0$37=caml_call1(Sexplib0_Sexp_conv[24],_Ck_),
           _Cl_=function(param){return _fn_},
           v1$12=caml_call2(Node[1],_Cl_,v1$11),
           _Cm_=function(param){return _fo_},
           v2$10=caml_call2(Node[1],_Cm_,v2$9),
           _Cn_=function(param){return _fp_},
           v3$8=caml_call2(Node[1],_Cn_,v3$7),
           _Co_=function(param){return _fq_},
           v4$6=caml_call2(Node[1],_Co_,v4$5),
           _Cp_=function(param){return _fr_},
           v5$4=caml_call2(Node[1],_Cp_,v5$3),
           _Cq_=function(param){return _fs_},
           v6$2=caml_call2(Node[1],_Cq_,v6$1),
           _Cr_=function(param){return _ft_},
           v7$0=caml_call2(Node[1],_Cr_,v7);
          return [1,
                  [0,
                   _fu_,
                   [0,
                    v0$37,
                    [0,
                     v1$12,
                     [0,v2$10,[0,v3$8,[0,v4$6,[0,v5$4,[0,v6$2,[0,v7$0,0]]]]]]]]]];
         case 23:
          var
           v8=param[9],
           v7$1=param[8],
           v6$3=param[7],
           v5$5=param[6],
           v4$7=param[5],
           v3$9=param[4],
           v2$11=param[3],
           v1$13=param[2],
           _Cs_=function(_D8_){return 0},
           v0$38=caml_call1(Sexplib0_Sexp_conv[24],_Cs_),
           _Ct_=function(param){return _fv_},
           v1$14=caml_call2(Node[1],_Ct_,v1$13),
           _Cu_=function(param){return _fw_},
           v2$12=caml_call2(Node[1],_Cu_,v2$11),
           _Cv_=function(param){return _fx_},
           v3$10=caml_call2(Node[1],_Cv_,v3$9),
           _Cw_=function(param){return _fy_},
           v4$8=caml_call2(Node[1],_Cw_,v4$7),
           _Cx_=function(param){return _fz_},
           v5$6=caml_call2(Node[1],_Cx_,v5$5),
           _Cy_=function(param){return _fA_},
           v6$4=caml_call2(Node[1],_Cy_,v6$3),
           _Cz_=function(param){return _fB_},
           v7$2=caml_call2(Node[1],_Cz_,v7$1),
           _CA_=function(param){return _fC_},
           v8$0=caml_call2(Node[1],_CA_,v8);
          return [1,
                  [0,
                   _fD_,
                   [0,
                    v0$38,
                    [0,
                     v1$14,
                     [0,
                      v2$12,
                      [0,v3$10,[0,v4$8,[0,v5$6,[0,v6$4,[0,v7$2,[0,v8$0,0]]]]]]]]]]];
         case 24:
          var
           v9=param[10],
           v8$1=param[9],
           v7$3=param[8],
           v6$5=param[7],
           v5$7=param[6],
           v4$9=param[5],
           v3$11=param[4],
           v2$13=param[3],
           v1$15=param[2],
           _CB_=function(_D7_){return 0},
           v0$39=caml_call1(Sexplib0_Sexp_conv[24],_CB_),
           _CC_=function(param){return _fE_},
           v1$16=caml_call2(Node[1],_CC_,v1$15),
           _CD_=function(param){return _fF_},
           v2$14=caml_call2(Node[1],_CD_,v2$13),
           _CE_=function(param){return _fG_},
           v3$12=caml_call2(Node[1],_CE_,v3$11),
           _CF_=function(param){return _fH_},
           v4$10=caml_call2(Node[1],_CF_,v4$9),
           _CG_=function(param){return _fI_},
           v5$8=caml_call2(Node[1],_CG_,v5$7),
           _CH_=function(param){return _fJ_},
           v6$6=caml_call2(Node[1],_CH_,v6$5),
           _CI_=function(param){return _fK_},
           v7$4=caml_call2(Node[1],_CI_,v7$3),
           _CJ_=function(param){return _fL_},
           v8$2=caml_call2(Node[1],_CJ_,v8$1),
           _CK_=function(param){return _fM_},
           v9$0=caml_call2(Node[1],_CK_,v9);
          return [1,
                  [0,
                   _fN_,
                   [0,
                    v0$39,
                    [0,
                     v1$16,
                     [0,
                      v2$14,
                      [0,
                       v3$12,
                       [0,v4$10,[0,v5$8,[0,v6$6,[0,v7$4,[0,v8$2,[0,v9$0,0]]]]]]]]]]]];
         case 25:
          var
           v10=param[11],
           v9$1=param[10],
           v8$3=param[9],
           v7$5=param[8],
           v6$7=param[7],
           v5$9=param[6],
           v4$11=param[5],
           v3$13=param[4],
           v2$15=param[3],
           v1$17=param[2],
           _CL_=function(_D6_){return 0},
           v0$40=caml_call1(Sexplib0_Sexp_conv[24],_CL_),
           _CM_=function(param){return _fO_},
           v1$18=caml_call2(Node[1],_CM_,v1$17),
           _CN_=function(param){return _fP_},
           v2$16=caml_call2(Node[1],_CN_,v2$15),
           _CO_=function(param){return _fQ_},
           v3$14=caml_call2(Node[1],_CO_,v3$13),
           _CP_=function(param){return _fR_},
           v4$12=caml_call2(Node[1],_CP_,v4$11),
           _CQ_=function(param){return _fS_},
           v5$10=caml_call2(Node[1],_CQ_,v5$9),
           _CR_=function(param){return _fT_},
           v6$8=caml_call2(Node[1],_CR_,v6$7),
           _CS_=function(param){return _fU_},
           v7$6=caml_call2(Node[1],_CS_,v7$5),
           _CT_=function(param){return _fV_},
           v8$4=caml_call2(Node[1],_CT_,v8$3),
           _CU_=function(param){return _fW_},
           v9$2=caml_call2(Node[1],_CU_,v9$1),
           _CV_=function(param){return _fX_},
           v10$0=caml_call2(Node[1],_CV_,v10);
          return [1,
                  [0,
                   _fY_,
                   [0,
                    v0$40,
                    [0,
                     v1$18,
                     [0,
                      v2$16,
                      [0,
                       v3$14,
                       [0,
                        v4$12,
                        [0,v5$10,[0,v6$8,[0,v7$6,[0,v8$4,[0,v9$2,[0,v10$0,0]]]]]]]]]]]]];
         case 26:
          var
           v11=param[12],
           v10$1=param[11],
           v9$3=param[10],
           v8$5=param[9],
           v7$7=param[8],
           v6$9=param[7],
           v5$11=param[6],
           v4$13=param[5],
           v3$15=param[4],
           v2$17=param[3],
           v1$19=param[2],
           _CW_=function(_D5_){return 0},
           v0$41=caml_call1(Sexplib0_Sexp_conv[24],_CW_),
           _CX_=function(param){return _fZ_},
           v1$20=caml_call2(Node[1],_CX_,v1$19),
           _CY_=function(param){return _f0_},
           v2$18=caml_call2(Node[1],_CY_,v2$17),
           _CZ_=function(param){return _f1_},
           v3$16=caml_call2(Node[1],_CZ_,v3$15),
           _C0_=function(param){return _f2_},
           v4$14=caml_call2(Node[1],_C0_,v4$13),
           _C1_=function(param){return _f3_},
           v5$12=caml_call2(Node[1],_C1_,v5$11),
           _C2_=function(param){return _f4_},
           v6$10=caml_call2(Node[1],_C2_,v6$9),
           _C3_=function(param){return _f5_},
           v7$8=caml_call2(Node[1],_C3_,v7$7),
           _C4_=function(param){return _f6_},
           v8$6=caml_call2(Node[1],_C4_,v8$5),
           _C5_=function(param){return _f7_},
           v9$4=caml_call2(Node[1],_C5_,v9$3),
           _C6_=function(param){return _f8_},
           v10$2=caml_call2(Node[1],_C6_,v10$1),
           _C7_=function(param){return _f9_},
           v11$0=caml_call2(Node[1],_C7_,v11);
          return [1,
                  [0,
                   _f__,
                   [0,
                    v0$41,
                    [0,
                     v1$20,
                     [0,
                      v2$18,
                      [0,
                       v3$16,
                       [0,
                        v4$14,
                        [0,
                         v5$12,
                         [0,v6$10,[0,v7$8,[0,v8$6,[0,v9$4,[0,v10$2,[0,v11$0,0]]]]]]]]]]]]]];
         case 27:
          var
           v12=param[13],
           v11$1=param[12],
           v10$3=param[11],
           v9$5=param[10],
           v8$7=param[9],
           v7$9=param[8],
           v6$11=param[7],
           v5$13=param[6],
           v4$15=param[5],
           v3$17=param[4],
           v2$19=param[3],
           v1$21=param[2],
           _C8_=function(_D4_){return 0},
           v0$42=caml_call1(Sexplib0_Sexp_conv[24],_C8_),
           _C9_=function(param){return _f$_},
           v1$22=caml_call2(Node[1],_C9_,v1$21),
           _C__=function(param){return _ga_},
           v2$20=caml_call2(Node[1],_C__,v2$19),
           _C$_=function(param){return _gb_},
           v3$18=caml_call2(Node[1],_C$_,v3$17),
           _Da_=function(param){return _gc_},
           v4$16=caml_call2(Node[1],_Da_,v4$15),
           _Db_=function(param){return _gd_},
           v5$14=caml_call2(Node[1],_Db_,v5$13),
           _Dc_=function(param){return _ge_},
           v6$12=caml_call2(Node[1],_Dc_,v6$11),
           _Dd_=function(param){return _gf_},
           v7$10=caml_call2(Node[1],_Dd_,v7$9),
           _De_=function(param){return _gg_},
           v8$8=caml_call2(Node[1],_De_,v8$7),
           _Df_=function(param){return _gh_},
           v9$6=caml_call2(Node[1],_Df_,v9$5),
           _Dg_=function(param){return _gi_},
           v10$4=caml_call2(Node[1],_Dg_,v10$3),
           _Dh_=function(param){return _gj_},
           v11$2=caml_call2(Node[1],_Dh_,v11$1),
           _Di_=function(param){return _gk_},
           v12$0=caml_call2(Node[1],_Di_,v12);
          return [1,
                  [0,
                   _gl_,
                   [0,
                    v0$42,
                    [0,
                     v1$22,
                     [0,
                      v2$20,
                      [0,
                       v3$18,
                       [0,
                        v4$16,
                        [0,
                         v5$14,
                         [0,
                          v6$12,
                          [0,v7$10,[0,v8$8,[0,v9$6,[0,v10$4,[0,v11$2,[0,v12$0,0]]]]]]]]]]]]]]];
         case 28:
          var
           v13=param[14],
           v12$1=param[13],
           v11$3=param[12],
           v10$5=param[11],
           v9$7=param[10],
           v8$9=param[9],
           v7$11=param[8],
           v6$13=param[7],
           v5$15=param[6],
           v4$17=param[5],
           v3$19=param[4],
           v2$21=param[3],
           v1$23=param[2],
           _Dj_=function(_D3_){return 0},
           v0$43=caml_call1(Sexplib0_Sexp_conv[24],_Dj_),
           _Dk_=function(param){return _gm_},
           v1$24=caml_call2(Node[1],_Dk_,v1$23),
           _Dl_=function(param){return _gn_},
           v2$22=caml_call2(Node[1],_Dl_,v2$21),
           _Dm_=function(param){return _go_},
           v3$20=caml_call2(Node[1],_Dm_,v3$19),
           _Dn_=function(param){return _gp_},
           v4$18=caml_call2(Node[1],_Dn_,v4$17),
           _Do_=function(param){return _gq_},
           v5$16=caml_call2(Node[1],_Do_,v5$15),
           _Dp_=function(param){return _gr_},
           v6$14=caml_call2(Node[1],_Dp_,v6$13),
           _Dq_=function(param){return _gs_},
           v7$12=caml_call2(Node[1],_Dq_,v7$11),
           _Dr_=function(param){return _gt_},
           v8$10=caml_call2(Node[1],_Dr_,v8$9),
           _Ds_=function(param){return _gu_},
           v9$8=caml_call2(Node[1],_Ds_,v9$7),
           _Dt_=function(param){return _gv_},
           v10$6=caml_call2(Node[1],_Dt_,v10$5),
           _Du_=function(param){return _gw_},
           v11$4=caml_call2(Node[1],_Du_,v11$3),
           _Dv_=function(param){return _gx_},
           v12$2=caml_call2(Node[1],_Dv_,v12$1),
           _Dw_=function(param){return _gy_},
           v13$0=caml_call2(Node[1],_Dw_,v13);
          return [1,
                  [0,
                   _gz_,
                   [0,
                    v0$43,
                    [0,
                     v1$24,
                     [0,
                      v2$22,
                      [0,
                       v3$20,
                       [0,
                        v4$18,
                        [0,
                         v5$16,
                         [0,
                          v6$14,
                          [0,
                           v7$12,
                           [0,v8$10,[0,v9$8,[0,v10$6,[0,v11$4,[0,v12$2,[0,v13$0,0]]]]]]]]]]]]]]]];
         case 29:
          var
           v14=param[15],
           v13$1=param[14],
           v12$3=param[13],
           v11$5=param[12],
           v10$7=param[11],
           v9$9=param[10],
           v8$11=param[9],
           v7$13=param[8],
           v6$15=param[7],
           v5$17=param[6],
           v4$19=param[5],
           v3$21=param[4],
           v2$23=param[3],
           v1$25=param[2],
           _Dx_=function(_D2_){return 0},
           v0$44=caml_call1(Sexplib0_Sexp_conv[24],_Dx_),
           _Dy_=function(param){return _gA_},
           v1$26=caml_call2(Node[1],_Dy_,v1$25),
           _Dz_=function(param){return _gB_},
           v2$24=caml_call2(Node[1],_Dz_,v2$23),
           _DA_=function(param){return _gC_},
           v3$22=caml_call2(Node[1],_DA_,v3$21),
           _DB_=function(param){return _gD_},
           v4$20=caml_call2(Node[1],_DB_,v4$19),
           _DC_=function(param){return _gE_},
           v5$18=caml_call2(Node[1],_DC_,v5$17),
           _DD_=function(param){return _gF_},
           v6$16=caml_call2(Node[1],_DD_,v6$15),
           _DE_=function(param){return _gG_},
           v7$14=caml_call2(Node[1],_DE_,v7$13),
           _DF_=function(param){return _gH_},
           v8$12=caml_call2(Node[1],_DF_,v8$11),
           _DG_=function(param){return _gI_},
           v9$10=caml_call2(Node[1],_DG_,v9$9),
           _DH_=function(param){return _gJ_},
           v10$8=caml_call2(Node[1],_DH_,v10$7),
           _DI_=function(param){return _gK_},
           v11$6=caml_call2(Node[1],_DI_,v11$5),
           _DJ_=function(param){return _gL_},
           v12$4=caml_call2(Node[1],_DJ_,v12$3),
           _DK_=function(param){return _gM_},
           v13$2=caml_call2(Node[1],_DK_,v13$1),
           _DL_=function(param){return _gN_},
           v14$0=caml_call2(Node[1],_DL_,v14);
          return [1,
                  [0,
                   _gO_,
                   [0,
                    v0$44,
                    [0,
                     v1$26,
                     [0,
                      v2$24,
                      [0,
                       v3$22,
                       [0,
                        v4$20,
                        [0,
                         v5$18,
                         [0,
                          v6$16,
                          [0,
                           v7$14,
                           [0,
                            v8$12,
                            [0,
                             v9$10,
                             [0,v10$8,[0,v11$6,[0,v12$4,[0,v13$2,[0,v14$0,0]]]]]]]]]]]]]]]]];
         default:
          var
           v15=param[16],
           v14$1=param[15],
           v13$3=param[14],
           v12$5=param[13],
           v11$7=param[12],
           v10$9=param[11],
           v9$11=param[10],
           v8$13=param[9],
           v7$15=param[8],
           v6$17=param[7],
           v5$19=param[6],
           v4$21=param[5],
           v3$23=param[4],
           v2$25=param[3],
           v1$27=param[2],
           _DM_=function(_Ee_){return 0},
           v0$45=caml_call1(Sexplib0_Sexp_conv[24],_DM_),
           _DN_=function(param){return _gP_},
           v1$28=caml_call2(Node[1],_DN_,v1$27),
           _DO_=function(param){return _gQ_},
           v2$26=caml_call2(Node[1],_DO_,v2$25),
           _DP_=function(param){return _gR_},
           v3$24=caml_call2(Node[1],_DP_,v3$23),
           _DQ_=function(param){return _gS_},
           v4$22=caml_call2(Node[1],_DQ_,v4$21),
           _DR_=function(param){return _gT_},
           v5$20=caml_call2(Node[1],_DR_,v5$19),
           _DS_=function(param){return _gU_},
           v6$18=caml_call2(Node[1],_DS_,v6$17),
           _DT_=function(param){return _gV_},
           v7$16=caml_call2(Node[1],_DT_,v7$15),
           _DU_=function(param){return _gW_},
           v8$14=caml_call2(Node[1],_DU_,v8$13),
           _DV_=function(param){return _gX_},
           v9$12=caml_call2(Node[1],_DV_,v9$11),
           _DW_=function(param){return _gY_},
           v10$10=caml_call2(Node[1],_DW_,v10$9),
           _DX_=function(param){return _gZ_},
           v11$8=caml_call2(Node[1],_DX_,v11$7),
           _DY_=function(param){return _g0_},
           v12$6=caml_call2(Node[1],_DY_,v12$5),
           _DZ_=function(param){return _g1_},
           v13$4=caml_call2(Node[1],_DZ_,v13$3),
           _D0_=function(param){return _g2_},
           v14$2=caml_call2(Node[1],_D0_,v14$1),
           _D1_=function(param){return _g3_},
           v15$0=caml_call2(Node[1],_D1_,v15);
          return [1,
                  [0,
                   _g4_,
                   [0,
                    v0$45,
                    [0,
                     v1$28,
                     [0,
                      v2$26,
                      [0,
                       v3$24,
                       [0,
                        v4$22,
                        [0,
                         v5$20,
                         [0,
                          v6$18,
                          [0,
                           v7$16,
                           [0,
                            v8$14,
                            [0,
                             v9$12,
                             [0,
                              v10$10,
                              [0,v11$8,[0,v12$6,[0,v13$4,[0,v14$2,[0,v15$0,0]]]]]]]]]]]]]]]]]]}}
    function name(param)
     {if(typeof param === "number")
       return 0 === param?cst_Invalid:cst_Uninitialized;
      else
       switch(param[0])
        {case 0:return cst_Array_fold;
         case 1:return cst_At;
         case 2:return cst_At_intervals;
         case 3:return cst_Bind_lhs_change;
         case 4:return cst_Bind_main;
         case 5:return cst_Const;
         case 6:return cst_Expert;
         case 7:return cst_Freeze;
         case 8:return cst_If_test_change;
         case 9:return cst_If_then_else;
         case 10:return cst_Join_lhs_change;
         case 11:return cst_Join_main;
         case 12:return cst_Map;
         case 13:return cst_Snapshot;
         case 14:return cst_Step_function;
         case 15:return cst_Unordered_array_fold;
         case 16:return cst_Var;
         case 17:return cst_Map2;
         case 18:return cst_Map3;
         case 19:return cst_Map4;
         case 20:return cst_Map5;
         case 21:return cst_Map6;
         case 22:return cst_Map7;
         case 23:return cst_Map8;
         case 24:return cst_Map9;
         case 25:return cst_Map10;
         case 26:return cst_Map11;
         case 27:return cst_Map12;
         case 28:return cst_Map13;
         case 29:return cst_Map14;
         default:return cst_Map15}}
    function invariant$17(invariant_a,t)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var array_fold=t[1];
          return invariant$7(function(_BT_){return 0},invariant_a,array_fold);
         case 1:var at=t[1];return invariant$8(at);
         case 2:var at_intervals=t[1];return invariant$9(at_intervals);
         case 3:
          var bind=t[1],_BL_=function(_BS_){return 0};
          return invariant$10(function(_BR_){return 0},_BL_,bind);
         case 4:
          var bind$0=t[1];
          return invariant$10(function(_BQ_){return 0},invariant_a,bind$0);
         case 5:var a=t[1];return caml_call1(invariant_a,a);
         case 6:var e=t[1];return invariant$11(invariant_a,e);
         case 7:var freeze=t[1];return invariant$13(invariant_a,freeze);
         case 8:
          var if_then_else=t[1];
          return invariant$14(function(_BP_){return 0},if_then_else);
         case 9:
          var if_then_else$0=t[1];
          return invariant$14(invariant_a,if_then_else$0);
         case 10:
          var join=t[1];return invariant$15(function(_BO_){return 0},join);
         case 11:var join$0=t[1];return invariant$15(invariant_a,join$0);
         case 13:var snapshot=t[1];return invariant$16(invariant_a,snapshot);
         case 14:
          var step_function_node=t[1];
          return invariant$6(invariant_a,step_function_node);
         case 15:
          var unordered_array_fold=t[1];
          return invariant$4
                  (function(_BN_){return 0},invariant_a,unordered_array_fold);
         case 16:
          var var$0=t[1];return invariant$3(function(_BM_){return 0},var$0);
         default:return 0}}
    function initial_num_children(t)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var match=t[1],children=match[3];
          return caml_call1(Array[18],children);
         case 1:return 0;
         case 2:return 0;
         case 3:return 1;
         case 4:return 2;
         case 5:return 0;
         case 6:return 0;
         case 7:return 1;
         case 8:return 1;
         case 9:return 2;
         case 10:return 1;
         case 11:return 2;
         case 12:return 1;
         case 13:return 0;
         case 14:return 1;
         case 15:
          var match$0=t[1],children$0=match$0[6];
          return caml_call1(Array[18],children$0);
         case 16:return 0;
         case 17:return 2;
         case 18:return 3;
         case 19:return 4;
         case 20:return 5;
         case 21:return 6;
         case 22:return 7;
         case 23:return 8;
         case 24:return 9;
         case 25:return 10;
         case 26:return 11;
         case 27:return 12;
         case 28:return 13;
         case 29:return 14;
         default:return 15}}
    var
     bind_rhs_child_index=1,
     freeze_child_index=0,
     if_branch_child_index=1,
     join_rhs_child_index=1;
    function iteri_children(t,f)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var
           match=t[1],
           children=match[3],
           _Bz_=caml_call1(Array[18],children) - 1 | 0,
           _By_=0;
          if(! (_Bz_ < 0))
           {var i=_By_;
            for(;;)
             {caml_call2(f,i,children[1 + i]);
              var _BA_=i + 1 | 0;
              if(_Bz_ !== i){var i=_BA_;continue}
              break}}
          return 0;
         case 1:return 0;
         case 2:return 0;
         case 3:var bind=t[1];return caml_call2(f,0,bind[3]);
         case 4:
          var match$0=t[1],lhs_change=match$0[4],rhs=match$0[5];
          caml_call2(f,0,lhs_change);
          var _BB_=caml_call1(Uopt[6],rhs);
          return _BB_?caml_call2(f,1,caml_call1(Uopt[11],rhs)):_BB_;
         case 5:return 0;
         case 6:
          var
           match$1=t[1],
           children$0=match$1[3],
           num_children=match$1[4],
           _BD_=num_children - 1 | 0,
           _BC_=0;
          if(! (_BD_ < 0))
           {var i$0=_BC_;
            for(;;)
             {var r=caml_call1(Uopt[7],children$0[1 + i$0]);
              caml_call2(f,i$0,r[1]);
              var _BE_=i$0 + 1 | 0;
              if(_BD_ !== i$0){var i$0=_BE_;continue}
              break}}
          return 0;
         case 7:
          var match$2=t[1],child=match$2[2];return caml_call2(f,0,child);
         case 8:var match$3=t[1],test=match$3[2];return caml_call2(f,0,test);
         case 9:
          var match$4=t[1],test_change=match$4[3],current_branch=match$4[4];
          caml_call2(f,0,test_change);
          var _BF_=caml_call1(Uopt[6],current_branch);
          return _BF_?caml_call2(f,1,caml_call1(Uopt[11],current_branch)):_BF_;
         case 10:var match$5=t[1],lhs=match$5[2];return caml_call2(f,0,lhs);
         case 11:
          var match$6=t[1],lhs_change$0=match$6[3],rhs$0=match$6[4];
          caml_call2(f,0,lhs_change$0);
          var _BG_=caml_call1(Uopt[6],rhs$0);
          return _BG_?caml_call2(f,1,caml_call1(Uopt[11],rhs$0)):_BG_;
         case 12:var node0=t[2];return caml_call2(f,0,node0);
         case 13:return 0;
         case 14:
          var
           match$7=t[1],
           child$0=match$7[2],
           _BH_=caml_call1(Uopt[6],child$0);
          return _BH_?caml_call2(f,0,caml_call1(Uopt[11],child$0)):_BH_;
         case 15:
          var
           match$8=t[1],
           children$1=match$8[6],
           _BJ_=caml_call1(Array[18],children$1) - 1 | 0,
           _BI_=0;
          if(! (_BJ_ < 0))
           {var i$1=_BI_;
            for(;;)
             {caml_call2(f,i$1,children$1[1 + i$1]);
              var _BK_=i$1 + 1 | 0;
              if(_BJ_ !== i$1){var i$1=_BK_;continue}
              break}}
          return 0;
         case 16:return 0;
         case 17:
          var node1=t[3],node0$0=t[2];
          caml_call2(f,0,node0$0);
          return caml_call2(f,1,node1);
         case 18:
          var node2=t[4],node1$0=t[3],node0$1=t[2];
          caml_call2(f,0,node0$1);
          caml_call2(f,1,node1$0);
          return caml_call2(f,2,node2);
         case 19:
          var node3=t[5],node2$0=t[4],node1$1=t[3],node0$2=t[2];
          caml_call2(f,0,node0$2);
          caml_call2(f,1,node1$1);
          caml_call2(f,2,node2$0);
          return caml_call2(f,3,node3);
         case 20:
          var node4=t[6],node3$0=t[5],node2$1=t[4],node1$2=t[3],node0$3=t[2];
          caml_call2(f,0,node0$3);
          caml_call2(f,1,node1$2);
          caml_call2(f,2,node2$1);
          caml_call2(f,3,node3$0);
          return caml_call2(f,4,node4);
         case 21:
          var
           node5=t[7],
           node4$0=t[6],
           node3$1=t[5],
           node2$2=t[4],
           node1$3=t[3],
           node0$4=t[2];
          caml_call2(f,0,node0$4);
          caml_call2(f,1,node1$3);
          caml_call2(f,2,node2$2);
          caml_call2(f,3,node3$1);
          caml_call2(f,4,node4$0);
          return caml_call2(f,5,node5);
         case 22:
          var
           node6=t[8],
           node5$0=t[7],
           node4$1=t[6],
           node3$2=t[5],
           node2$3=t[4],
           node1$4=t[3],
           node0$5=t[2];
          caml_call2(f,0,node0$5);
          caml_call2(f,1,node1$4);
          caml_call2(f,2,node2$3);
          caml_call2(f,3,node3$2);
          caml_call2(f,4,node4$1);
          caml_call2(f,5,node5$0);
          return caml_call2(f,6,node6);
         case 23:
          var
           node7=t[9],
           node6$0=t[8],
           node5$1=t[7],
           node4$2=t[6],
           node3$3=t[5],
           node2$4=t[4],
           node1$5=t[3],
           node0$6=t[2];
          caml_call2(f,0,node0$6);
          caml_call2(f,1,node1$5);
          caml_call2(f,2,node2$4);
          caml_call2(f,3,node3$3);
          caml_call2(f,4,node4$2);
          caml_call2(f,5,node5$1);
          caml_call2(f,6,node6$0);
          return caml_call2(f,7,node7);
         case 24:
          var
           node8=t[10],
           node7$0=t[9],
           node6$1=t[8],
           node5$2=t[7],
           node4$3=t[6],
           node3$4=t[5],
           node2$5=t[4],
           node1$6=t[3],
           node0$7=t[2];
          caml_call2(f,0,node0$7);
          caml_call2(f,1,node1$6);
          caml_call2(f,2,node2$5);
          caml_call2(f,3,node3$4);
          caml_call2(f,4,node4$3);
          caml_call2(f,5,node5$2);
          caml_call2(f,6,node6$1);
          caml_call2(f,7,node7$0);
          return caml_call2(f,8,node8);
         case 25:
          var
           node9=t[11],
           node8$0=t[10],
           node7$1=t[9],
           node6$2=t[8],
           node5$3=t[7],
           node4$4=t[6],
           node3$5=t[5],
           node2$6=t[4],
           node1$7=t[3],
           node0$8=t[2];
          caml_call2(f,0,node0$8);
          caml_call2(f,1,node1$7);
          caml_call2(f,2,node2$6);
          caml_call2(f,3,node3$5);
          caml_call2(f,4,node4$4);
          caml_call2(f,5,node5$3);
          caml_call2(f,6,node6$2);
          caml_call2(f,7,node7$1);
          caml_call2(f,8,node8$0);
          return caml_call2(f,9,node9);
         case 26:
          var
           node10=t[12],
           node9$0=t[11],
           node8$1=t[10],
           node7$2=t[9],
           node6$3=t[8],
           node5$4=t[7],
           node4$5=t[6],
           node3$6=t[5],
           node2$7=t[4],
           node1$8=t[3],
           node0$9=t[2];
          caml_call2(f,0,node0$9);
          caml_call2(f,1,node1$8);
          caml_call2(f,2,node2$7);
          caml_call2(f,3,node3$6);
          caml_call2(f,4,node4$5);
          caml_call2(f,5,node5$4);
          caml_call2(f,6,node6$3);
          caml_call2(f,7,node7$2);
          caml_call2(f,8,node8$1);
          caml_call2(f,9,node9$0);
          return caml_call2(f,10,node10);
         case 27:
          var
           node11=t[13],
           node10$0=t[12],
           node9$1=t[11],
           node8$2=t[10],
           node7$3=t[9],
           node6$4=t[8],
           node5$5=t[7],
           node4$6=t[6],
           node3$7=t[5],
           node2$8=t[4],
           node1$9=t[3],
           node0$10=t[2];
          caml_call2(f,0,node0$10);
          caml_call2(f,1,node1$9);
          caml_call2(f,2,node2$8);
          caml_call2(f,3,node3$7);
          caml_call2(f,4,node4$6);
          caml_call2(f,5,node5$5);
          caml_call2(f,6,node6$4);
          caml_call2(f,7,node7$3);
          caml_call2(f,8,node8$2);
          caml_call2(f,9,node9$1);
          caml_call2(f,10,node10$0);
          return caml_call2(f,11,node11);
         case 28:
          var
           node12=t[14],
           node11$0=t[13],
           node10$1=t[12],
           node9$2=t[11],
           node8$3=t[10],
           node7$4=t[9],
           node6$5=t[8],
           node5$6=t[7],
           node4$7=t[6],
           node3$8=t[5],
           node2$9=t[4],
           node1$10=t[3],
           node0$11=t[2];
          caml_call2(f,0,node0$11);
          caml_call2(f,1,node1$10);
          caml_call2(f,2,node2$9);
          caml_call2(f,3,node3$8);
          caml_call2(f,4,node4$7);
          caml_call2(f,5,node5$6);
          caml_call2(f,6,node6$5);
          caml_call2(f,7,node7$4);
          caml_call2(f,8,node8$3);
          caml_call2(f,9,node9$2);
          caml_call2(f,10,node10$1);
          caml_call2(f,11,node11$0);
          return caml_call2(f,12,node12);
         case 29:
          var
           node13=t[15],
           node12$0=t[14],
           node11$1=t[13],
           node10$2=t[12],
           node9$3=t[11],
           node8$4=t[10],
           node7$5=t[9],
           node6$6=t[8],
           node5$7=t[7],
           node4$8=t[6],
           node3$9=t[5],
           node2$10=t[4],
           node1$11=t[3],
           node0$12=t[2];
          caml_call2(f,0,node0$12);
          caml_call2(f,1,node1$11);
          caml_call2(f,2,node2$10);
          caml_call2(f,3,node3$9);
          caml_call2(f,4,node4$8);
          caml_call2(f,5,node5$7);
          caml_call2(f,6,node6$6);
          caml_call2(f,7,node7$5);
          caml_call2(f,8,node8$4);
          caml_call2(f,9,node9$3);
          caml_call2(f,10,node10$2);
          caml_call2(f,11,node11$1);
          caml_call2(f,12,node12$0);
          return caml_call2(f,13,node13);
         default:
          var
           node14=t[16],
           node13$0=t[15],
           node12$1=t[14],
           node11$2=t[13],
           node10$3=t[12],
           node9$4=t[11],
           node8$5=t[10],
           node7$6=t[9],
           node6$7=t[8],
           node5$8=t[7],
           node4$9=t[6],
           node3$10=t[5],
           node2$11=t[4],
           node1$12=t[3],
           node0$13=t[2];
          caml_call2(f,0,node0$13);
          caml_call2(f,1,node1$12);
          caml_call2(f,2,node2$11);
          caml_call2(f,3,node3$10);
          caml_call2(f,4,node4$9);
          caml_call2(f,5,node5$8);
          caml_call2(f,6,node6$7);
          caml_call2(f,7,node7$6);
          caml_call2(f,8,node8$5);
          caml_call2(f,9,node9$4);
          caml_call2(f,10,node10$3);
          caml_call2(f,11,node11$2);
          caml_call2(f,12,node12$1);
          caml_call2(f,13,node13$0);
          return caml_call2(f,14,node14)}}
    function slow_get_child(t,index)
     {if(typeof t !== "number")
       switch(t[0])
        {case 0:
          var match=t[1],children=match[3];
          return caml_check_bound(children,index)[1 + index];
         case 6:
          var
           match$0=t[1],
           children$0=match$0[3],
           _Bv_=caml_check_bound(children$0,index)[1 + index],
           match$1=caml_call1(Uopt[7],_Bv_);
          return match$1[1];
         case 15:
          var match$2=t[1],children$1=match$2[6];
          return caml_check_bound(children$1,index)[1 + index]
         }
      function _Bu_(r)
       {iteri_children
         (t,
          function(i,child)
           {var _Bx_=caml_call2(symbol$1,i,index);
            return _Bx_?caml_call1(r,child):_Bx_});
        function _Bw_(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[340],v0),
           v1$0=sexp_of_t$26(function(param){return _g5_},v1);
          return [1,[0,v0$0,[0,v1$0,0]]]}
        return caml_call5
                (Core_kernel[221],
                 0,
                 _g6_,
                 cst_Kind_slow_get_child_got_in,
                 [0,index,t],
                 _Bw_)}
      return caml_call1(Core_kernel[244],_Bu_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$70);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Kind$0);
    var
     Incremental_Kind=
      [0,
       invariant$17,
       sexp_of_t$26,
       name,
       initial_num_children,
       slow_get_child,
       bind_rhs_child_index,
       freeze_child_index,
       if_branch_child_index,
       join_rhs_child_index,
       iteri_children];
    caml_register_global(1300,Incremental_Kind,"Incremental__Kind");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Node);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$71);
    caml_call1(Expect_test_collector[4][1],cst_src_node_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$72,cst$23);
    function user_info(r){return r[27]}
    function my_child_index_in_parent_at_in(r){return r[25]}
    function set_my_child_index_in_parent_a(r,v){r[25] = v;return 0}
    function my_parent_index_in_child_at_in(r){return r[24]}
    function set_my_parent_index_in_child_a(r,v){r[24] = v;return 0}
    function observers(r){return r[21]}
    function set_observers(r,v){r[21] = v;return 0}
    function old_value_opt(r){return r[20]}
    function set_old_value_opt(r,v){r[20] = v;return 0}
    function next_in_adjust_heights_heap(r){return r[19]}
    function set_next_in_adjust_heights_hea(r,v){r[19] = v;return 0}
    function height_in_adjust_heights_heap(r){return r[18]}
    function set_height_in_adjust_heights_h(r,v){r[18] = v;return 0}
    function next_in_recompute_heap(r){return r[17]}
    function set_next_in_recompute_heap(r,v){r[17] = v;return 0}
    function prev_in_recompute_heap(r){return r[16]}
    function set_prev_in_recompute_heap(r,v){r[16] = v;return 0}
    function height_in_recompute_heap(r){return r[15]}
    function set_height_in_recompute_heap(r,v){r[15] = v;return 0}
    function height$0(r){return r[14]}
    function set_height(r,v){r[14] = v;return 0}
    function next_node_in_same_scope(r){return r[13]}
    function set_next_node_in_same_scope(r,v){r[13] = v;return 0}
    function created_in(r){return r[12]}
    function set_created_in(r,v){r[12] = v;return 0}
    function parent0(r){return r[11]}
    function set_parent0(r,v){r[11] = v;return 0}
    function parent1_and_beyond(r){return r[10]}
    function set_parent1_and_beyond(r,v){r[10] = v;return 0}
    function num_parents(r){return r[9]}
    function set_num_parents(r,v){r[9] = v;return 0}
    function num_on_update_handlers(r){return r[8]}
    function set_num_on_update_handlers(r,v){r[8] = v;return 0}
    function changed_at(r){return r[7]}
    function set_changed_at(r,v){r[7] = v;return 0}
    function cutoff(r){return r[6]}
    function set_cutoff(r,v){r[6] = v;return 0}
    function kind(r){return r[5]}
    function set_kind(r,v){r[5] = v;return 0}
    function value_opt(r){return r[4]}
    function set_value_opt(r,v){r[4] = v;return 0}
    function recomputed_at(r){return r[3]}
    function set_recomputed_at(r,v){r[3] = v;return 0}
    function id(r){return r[1]}
    function _g7_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              v,
              r[26],
              r[27],
              r[28]]}
    var
     _g8_=[0,set_my_child_index_in_parent_a],
     my_child_index_in_parent_at_in$0=
      [0,
       function(param){return 0},
       cst_my_child_index_in_parent_a,
       _g8_,
       my_child_index_in_parent_at_in,
       _g7_];
    function _g9_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              v,
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _g__=[0,set_my_parent_index_in_child_a],
     my_parent_index_in_child_at_in$0=
      [0,
       function(param){return 0},
       cst_my_parent_index_in_child_a,
       _g__,
       my_parent_index_in_child_at_in,
       _g9_];
    function _g$_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              v,
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _ha_=[0,set_observers],
     observers$0=
      [0,function(param){return 0},cst_observers,_ha_,observers,_g$_];
    function _hb_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              v,
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hc_=[0,set_old_value_opt],
     old_value_opt$0=
      [0,function(param){return 0},cst_old_value_opt,_hc_,old_value_opt,_hb_];
    function _hd_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              v,
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _he_=[0,set_next_in_adjust_heights_hea],
     next_in_adjust_heights_heap$0=
      [0,
       function(param){return 0},
       cst_next_in_adjust_heights_hea,
       _he_,
       next_in_adjust_heights_heap,
       _hd_];
    function _hf_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              v,
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hg_=[0,set_height_in_adjust_heights_h],
     height_in_adjust_heights_heap$0=
      [0,
       function(param){return 0},
       cst_height_in_adjust_heights_h,
       _hg_,
       height_in_adjust_heights_heap,
       _hf_];
    function _hh_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              v,
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hi_=[0,set_next_in_recompute_heap],
     next_in_recompute_heap$0=
      [0,
       function(param){return 0},
       cst_next_in_recompute_heap,
       _hi_,
       next_in_recompute_heap,
       _hh_];
    function _hj_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v,
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hk_=[0,set_prev_in_recompute_heap],
     prev_in_recompute_heap$0=
      [0,
       function(param){return 0},
       cst_prev_in_recompute_heap,
       _hk_,
       prev_in_recompute_heap,
       _hj_];
    function _hl_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hm_=[0,set_height_in_recompute_heap],
     height_in_recompute_heap$0=
      [0,
       function(param){return 0},
       cst_height_in_recompute_heap,
       _hm_,
       height_in_recompute_heap,
       _hl_];
    function _hn_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _ho_=[0,set_height],
     height$1=[0,function(param){return 0},cst_height,_ho_,height$0,_hn_];
    function _hp_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hq_=[0,set_next_node_in_same_scope],
     next_node_in_same_scope$0=
      [0,
       function(param){return 0},
       cst_next_node_in_same_scope,
       _hq_,
       next_node_in_same_scope,
       _hp_];
    function _hr_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hs_=[0,set_created_in],
     created_in$0=
      [0,function(param){return 0},cst_created_in,_hs_,created_in,_hr_];
    function _ht_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hu_=[0,set_parent0],
     parent0$0=[0,function(param){return 0},cst_parent0,_hu_,parent0,_ht_];
    function _hv_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hw_=[0,set_parent1_and_beyond],
     parent1_and_beyond$0=
      [0,
       function(param){return 0},
       cst_parent1_and_beyond,
       _hw_,
       parent1_and_beyond,
       _hv_];
    function _hx_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hy_=[0,set_num_parents],
     num_parents$0=
      [0,function(param){return 0},cst_num_parents,_hy_,num_parents,_hx_];
    function _hz_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hA_=[0,set_num_on_update_handlers],
     num_on_update_handlers$0=
      [0,
       function(param){return 0},
       cst_num_on_update_handlers,
       _hA_,
       num_on_update_handlers,
       _hz_];
    function _hB_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hC_=[0,set_changed_at],
     changed_at$0=
      [0,function(param){return 0},cst_changed_at,_hC_,changed_at,_hB_];
    function _hD_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hE_=[0,set_cutoff],
     cutoff$0=[0,function(param){return 0},cst_cutoff,_hE_,cutoff,_hD_];
    function _hF_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hG_=[0,set_kind],
     kind$0=[0,function(param){return 0},cst_kind,_hG_,kind,_hF_];
    function _hH_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hI_=[0,set_value_opt],
     value_opt$0=
      [0,function(param){return 0},cst_value_opt,_hI_,value_opt,_hH_];
    function _hJ_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _hK_=[0,set_recomputed_at],
     recomputed_at$0=
      [0,function(param){return 0},cst_recomputed_at,_hK_,recomputed_at,_hJ_];
    function _hL_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var _hM_=0,id$0=[0,function(param){return 0},cst_id,_hM_,id,_hL_];
    function sexp_of_t$27(of_a,param)
     {var
       v_state=param[2],
       v_id=param[1],
       v_recomputed_at=param[3],
       v_value_opt=param[4],
       v_kind=param[5],
       v_cutoff=param[6],
       v_changed_at=param[7],
       v_num_on_update_handlers=param[8],
       v_num_parents=param[9],
       v_parent1_and_beyond=param[10],
       v_parent0=param[11],
       v_created_in=param[12],
       v_next_node_in_same_scope=param[13],
       v_height=param[14],
       v_height_in_recompute_heap=param[15],
       v_prev_in_recompute_heap=param[16],
       v_next_in_recompute_heap=param[17],
       v_height_in_adjust_heights_hea=param[18],
       v_next_in_adjust_heights_heap=param[19],
       v_old_value_opt=param[20],
       v_observers=param[21],
       v_is_in_handle_after_stabiliza=param[22],
       v_on_update_handlers=param[23],
       v_my_parent_index_in_child_at_=param[24],
       v_my_child_index_in_parent_at_=param[25],
       v_force_necessary=param[26],
       v_user_info=param[27],
       v_creation_backtrace=param[28],
       arg=caml_call2(Core_kernel[438],Base_Backtrace[1],v_creation_backtrace),
       bnds=[0,[1,[0,_hN_,[0,arg,0]]],0],
       arg$0=caml_call2(Core_kernel[438],Core_kernel_Info[6],v_user_info),
       bnds$0=[0,[1,[0,_hO_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[289],v_force_necessary),
       bnds$1=[0,[1,[0,_hP_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call2
         (Core_kernel[272],Core_kernel[340],v_my_child_index_in_parent_at_),
       bnds$2=[0,[1,[0,_hQ_,[0,arg$2,0]]],bnds$1],
       arg$3=
        caml_call2
         (Core_kernel[272],Core_kernel[340],v_my_parent_index_in_child_at_),
       bnds$3=[0,[1,[0,_hR_,[0,arg$3,0]]],bnds$2];
      function _Br_(_Bt_){return sexp_of_t$5(of_a,_Bt_)}
      var
       arg$4=caml_call2(Core_kernel[405],_Br_,v_on_update_handlers),
       bnds$4=[0,[1,[0,_hS_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(Core_kernel[289],v_is_in_handle_after_stabiliza),
       bnds$5=[0,[1,[0,_hT_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call2(Uopt[1],Sexplib0_Sexp_conv[23],v_observers),
       bnds$6=[0,[1,[0,_hU_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call2(Uopt[1],of_a,v_old_value_opt),
       bnds$7=[0,[1,[0,_hV_,[0,arg$7,0]]],bnds$6],
       arg$8=caml_call2(Uopt[1],Node[2][1],v_next_in_adjust_heights_heap),
       bnds$8=[0,[1,[0,_hW_,[0,arg$8,0]]],bnds$7],
       arg$9=caml_call1(Core_kernel[340],v_height_in_adjust_heights_hea),
       bnds$9=[0,[1,[0,_hX_,[0,arg$9,0]]],bnds$8],
       arg$10=caml_call2(Uopt[1],Node[2][1],v_next_in_recompute_heap),
       bnds$10=[0,[1,[0,_hY_,[0,arg$10,0]]],bnds$9],
       arg$11=caml_call2(Uopt[1],Node[2][1],v_prev_in_recompute_heap),
       bnds$11=[0,[1,[0,_hZ_,[0,arg$11,0]]],bnds$10],
       arg$12=caml_call1(Core_kernel[340],v_height_in_recompute_heap),
       bnds$12=[0,[1,[0,_h0_,[0,arg$12,0]]],bnds$11],
       arg$13=caml_call1(Core_kernel[340],v_height),
       bnds$13=[0,[1,[0,_h1_,[0,arg$13,0]]],bnds$12],
       arg$14=caml_call2(Uopt[1],Node[2][1],v_next_node_in_same_scope),
       bnds$14=[0,[1,[0,_h2_,[0,arg$14,0]]],bnds$13],
       arg$15=caml_call1(sexp_of_t$21,v_created_in),
       bnds$15=[0,[1,[0,_h3_,[0,arg$15,0]]],bnds$14],
       arg$16=caml_call2(Uopt[1],Node[2][1],v_parent0),
       bnds$16=[0,[1,[0,_h4_,[0,arg$16,0]]],bnds$15],
       _Bs_=caml_call1(Uopt[1],Node[2][1]),
       arg$17=caml_call2(Core_kernel[272],_Bs_,v_parent1_and_beyond),
       bnds$17=[0,[1,[0,_h5_,[0,arg$17,0]]],bnds$16],
       arg$18=caml_call1(Core_kernel[340],v_num_parents),
       bnds$18=[0,[1,[0,_h6_,[0,arg$18,0]]],bnds$17],
       arg$19=caml_call1(Core_kernel[340],v_num_on_update_handlers),
       bnds$19=[0,[1,[0,_h7_,[0,arg$19,0]]],bnds$18],
       arg$20=caml_call1(_s_,v_changed_at),
       bnds$20=[0,[1,[0,_h8_,[0,arg$20,0]]],bnds$19],
       arg$21=sexp_of_t$2(of_a,v_cutoff),
       bnds$21=[0,[1,[0,_h9_,[0,arg$21,0]]],bnds$20],
       arg$22=sexp_of_t$26(of_a,v_kind),
       bnds$22=[0,[1,[0,_h__,[0,arg$22,0]]],bnds$21],
       arg$23=caml_call2(Uopt[1],of_a,v_value_opt),
       bnds$23=[0,[1,[0,_h$_,[0,arg$23,0]]],bnds$22],
       arg$24=caml_call1(_s_,v_recomputed_at),
       bnds$24=[0,[1,[0,_ia_,[0,arg$24,0]]],bnds$23],
       arg$25=caml_call1(Sexplib0_Sexp_conv[23],v_state),
       bnds$25=[0,[1,[0,_ib_,[0,arg$25,0]]],bnds$24],
       arg$26=caml_call1(sexp_of_t$3,v_id),
       bnds$26=[0,[1,[0,_ic_,[0,arg$26,0]]],bnds$25];
      return [1,bnds$26]}
    function same$1(t1,t2){return caml_call2(Core_kernel[232],t1,t2)}
    function packed_same(param,t2){return same$1(param,t2)}
    function set_user_info(t,user_info){t[27] = user_info;return 0}
    var is_necessary$1=Node[4];
    function iteri_children$0(t,f){return iteri_children(t[5],f)}
    var is_valid$2=Node[3],type_equal_if_phys_same$0=Node[5];
    function edge_is_stale(child,parent)
     {return caml_call2(symbol$2,caml_call2(_w_,child[7],parent[3]),0)}
    function is_stale_with_respect_to_a_chi(t)
     {var is_stale=[0,0];
      iteri_children$0
       (t,
        function(param,child)
         {var _Bp_=edge_is_stale(child,t),_Bq_=_Bp_?(is_stale[1] = 1,0):_Bp_;
          return _Bq_});
      return is_stale[1]}
    function is_stale(t)
     {var _Bj_=t[5];
      if(typeof _Bj_ === "number")
       {if(0 === _Bj_)return 0;throw [0,Assert_failure,_id_]}
      else
       switch(_Bj_[0])
        {case 1:return is_none(t[3]);
         case 2:return is_none(t[3]);
         case 3:
          var _Bl_=is_none(t[3]);
          return _Bl_?_Bl_:is_stale_with_respect_to_a_chi(t);
         case 5:return is_none(t[3]);
         case 6:
          var match=_Bj_[1],force_stale=match[5];
          if(force_stale)
           var force_stale$0=force_stale;
          else
           {var _Bm_=is_none(t[3]);
            if(! _Bm_)return is_stale_with_respect_to_a_chi(t);
            var force_stale$0=_Bm_}
          return force_stale$0;
         case 8:
          var _Bn_=is_none(t[3]);
          return _Bn_?_Bn_:is_stale_with_respect_to_a_chi(t);
         case 10:
          var _Bo_=is_none(t[3]);
          return _Bo_?_Bo_:is_stale_with_respect_to_a_chi(t);
         case 13:return is_none(t[3]);
         case 16:
          var match$0=_Bj_[1],set_at=match$0[3];
          return caml_call2(symbol$2,caml_call2(_w_,set_at,t[3]),0);
         default:
          var _Bk_=is_none(t[3]);
          return _Bk_?_Bk_:is_stale_with_respect_to_a_chi(t)}}
    function needs_to_be_computed(t)
     {var _Bi_=caml_call1(is_necessary$1,t);return _Bi_?is_stale(t):_Bi_}
    function is_in_recompute_heap(t){return caml_call2(symbol,t[15],0)}
    function is_in_adjust_heights_heap(t){return caml_call2(symbol,t[18],0)}
    function get_parent(t,index)
     {if(caml_call2(symbol$1,index,0))
       var _Bg_=t[11];
      else
       var _Bh_=index - 1 | 0,_Bg_=caml_check_bound(t[10],_Bh_)[1 + _Bh_];
      return caml_call1(Uopt[7],_Bg_)}
    function iteri_parents(t,f)
     {var _A$_=caml_call2(symbol$2,t[9],0);
      if(_A$_)
       {caml_call2(f,0,caml_call1(Uopt[7],t[11]));
        var _Bb_=t[9] - 1 | 0,_Ba_=1;
        if(! (_Bb_ < 1))
         {var index=_Ba_;
          for(;;)
           {var
             _Bd_=index - 1 | 0,
             _Be_=caml_check_bound(t[10],_Bd_)[1 + _Bd_];
            caml_call2(f,index,caml_call1(Uopt[7],_Be_));
            var _Bf_=index + 1 | 0;
            if(_Bb_ !== index){var index=_Bf_;continue}
            break}}
        var _Bc_=0}
      else
       var _Bc_=_A$_;
      return _Bc_}
    function has_child(t,child)
     {var has=[0,0];
      iteri_children$0
       (t,
        function(param,child$0)
         {var _A9_=has[1],_A__=_A9_ || same$1(child,child$0);
          has[1] = _A__;
          return 0});
      return has[1]}
    function has_parent(t,parent)
     {var has=[0,0];
      iteri_parents
       (t,
        function(param,parent$0)
         {var _A7_=has[1],_A8_=_A7_ || same$1(parent,parent$0);
          has[1] = _A8_;
          return 0});
      return has[1]}
    function should_be_invalidated(t)
     {var _A4_=t[5];
      if(typeof _A4_ === "number")
       {if(0 === _A4_)return 0;throw [0,Assert_failure,_ie_]}
      else
       switch(_A4_[0])
        {case 1:return 0;
         case 2:return 0;
         case 3:
          var match=_A4_[1],lhs=match[3];
          return 1 - caml_call1(is_valid$2,lhs);
         case 4:
          var match$0=_A4_[1],lhs_change=match$0[4];
          return 1 - caml_call1(is_valid$2,lhs_change);
         case 6:return 0;
         case 8:
          var match$1=_A4_[1],test=match$1[2];
          return 1 - caml_call1(is_valid$2,test);
         case 9:
          var match$2=_A4_[1],test_change=match$2[3];
          return 1 - caml_call1(is_valid$2,test_change);
         case 10:
          var match$3=_A4_[1],lhs$0=match$3[2];
          return 1 - caml_call1(is_valid$2,lhs$0);
         case 11:
          var match$4=_A4_[1],lhs_change$0=match$4[3];
          return 1 - caml_call1(is_valid$2,lhs_change$0);
         case 5:
         case 13:
         case 16:return 0;
         default:
          var has=[0,0];
          iteri_children$0
           (t,
            function(param,child)
             {var _A5_=has[1],_A6_=_A5_ || 1 - caml_call1(is_valid$2,child);
              has[1] = _A6_;
              return 0});
          return has[1]}}
    function fold_observers(t,init,f)
     {var r=[0,t[21]],ac=[0,init];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var observer=caml_call1(Uopt[7],r[1]);
          r[1] = observer[7];
          ac[1] = caml_call2(f,ac[1],observer);
          continue}
        return ac[1]}}
    function invariant$18(invariant_a,t)
     {function _AF_(param)
       {var
         t2=is_in_recompute_heap(t),
         t1=needs_to_be_computed(t),
         sexpifier=Core_kernel[289],
         equal=0,
         message=0,
         here=0;
        function comparator(a_001,b_002)
         {return caml_call2(Core_kernel[285],a_001,b_002)}
        caml_call8
         (Ppx_assert_lib_Runtime[2],
          pos$3,
          sexpifier,
          comparator,
          here,
          message,
          equal,
          t1,
          t2);
        if(caml_call1(is_necessary$1,t))
         {var _AJ_=height(t[12]);
          if(! caml_call2(symbol$2,t[14],_AJ_))throw [0,Assert_failure,_iI_];
          iteri_children$0
           (t,
            function(param,child)
             {if(caml_call2(symbol$2,t[14],child[14]))
               {if(has_parent(child,t))return 0;throw [0,Assert_failure,_if_]}
              throw [0,Assert_failure,_ig_]});
          if(should_be_invalidated(t))throw [0,Assert_failure,_ih_]}
        iteri_parents
         (t,
          function(param,parent)
           {if(has_child(parent,t))
             {if(caml_call1(is_necessary$1,parent))
               {if(caml_call2(symbol$3,t[14],parent[14]))return 0;
                throw [0,Assert_failure,_ii_]}
              throw [0,Assert_failure,_ij_]}
            throw [0,Assert_failure,_ik_]});
        function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         my_child_index_in_parent_at_in=
          check
           (function(my_child_index_in_parent_at_in)
             {var
               got=caml_call1(Array[18],my_child_index_in_parent_at_in),
               expect=caml_call1(Array[18],t[10]) + 1 | 0,
               sexpifier=Core_kernel[340],
               equal=0,
               message=0,
               here=0;
              function comparator(a_011,b_012)
               {return caml_call2(Core_kernel[336],a_011,b_012)}
              caml_call8
               (Ppx_assert_lib_Runtime[3],
                pos$4,
                sexpifier,
                comparator,
                here,
                message,
                equal,
                expect,
                got);
              return iteri_parents
                      (t,
                       function(parent_index,parent)
                        {var
                          _A3_=
                           caml_check_bound
                             (my_child_index_in_parent_at_in,parent_index)
                            [1 + parent_index];
                         if(packed_same(t,slow_get_child(parent[5],_A3_)))return 0;
                         throw [0,Assert_failure,_il_]})}),
         my_parent_index_in_child_at_in=
          check
           (function(my_parent_index_in_child_at_in)
             {var switch$0=0,_A1_=t[5];
              if(typeof _A1_ !== "number" && 6 === _A1_[0])switch$0 = 1;
              if(! switch$0)
               {var
                 got=caml_call1(Array[18],my_parent_index_in_child_at_in),
                 expect=initial_num_children(t[5]),
                 sexpifier=Core_kernel[340],
                 equal=0,
                 message=0,
                 here=0,
                 comparator=
                  function(a_009,b_010)
                   {return caml_call2(Core_kernel[336],a_009,b_010)};
                caml_call8
                 (Ppx_assert_lib_Runtime[3],
                  pos$5,
                  sexpifier,
                  comparator,
                  here,
                  message,
                  equal,
                  expect,
                  got)}
              var _A2_=caml_call1(is_necessary$1,t);
              return _A2_
                      ?iteri_children$0
                        (t,
                         function(child_index,child)
                          {if
                            (packed_same
                              (t,
                               get_parent
                                (child,
                                 caml_check_bound(my_parent_index_in_child_at_in,child_index)
                                  [1 + child_index])))
                            return 0;
                           throw [0,Assert_failure,_im_]})
                      :_A2_}),
         observers_fun=
          check
           (function(param)
             {return fold_observers
                      (t,
                       0,
                       function(param$0,param)
                        {var state=param[1],observing=param[2];
                         if(caml_call2(Core_kernel[231],t,observing))
                          {var switcher=state - 1 | 0;
                           if(1 < switcher >>> 0)throw [0,Assert_failure,_in_];
                           return 0}
                         throw [0,Assert_failure,_io_]})}),
         old_value_opt_fun=check(caml_call1(Uopt[2],invariant_a)),
         next_in_adjust_heights_heap_fu=
          check
           (function(next_in_adjust_heights_heap)
             {if(is_in_adjust_heights_heap(t))
               {var _A0_=caml_call1(Uopt[6],next_in_adjust_heights_heap);
                if(_A0_)
                 {var next=caml_call1(Uopt[7],next_in_adjust_heights_heap);
                  if(is_in_adjust_heights_heap(next))
                   {if(caml_call2(symbol$1,t[18],next[18]))return 0;
                    throw [0,Assert_failure,_ip_]}
                  throw [0,Assert_failure,_iq_]}
                return _A0_}
              if(caml_call1(Uopt[5],next_in_adjust_heights_heap))return 0;
              throw [0,Assert_failure,_ir_]}),
         height_in_adjust_heights_heap_=
          check
           (function(height_in_adjust_heights_heap)
             {var _AZ_=caml_call2(symbol,height_in_adjust_heights_heap,0);
              if(_AZ_)
               {if(caml_call2(symbol$3,height_in_adjust_heights_heap,t[14]))
                 return 0;
                throw [0,Assert_failure,_is_]}
              return _AZ_}),
         next_in_recompute_heap_fun=
          check
           (function(next_in_recompute_heap)
             {if
               (1
                -
                is_in_recompute_heap(t)
                &&
                !
                caml_call1(Uopt[5],next_in_recompute_heap))
               throw [0,Assert_failure,_iv_];
              var _AY_=caml_call1(Uopt[6],next_in_recompute_heap);
              if(_AY_)
               {var next=caml_call1(Uopt[7],next_in_recompute_heap);
                if(packed_same(t,caml_call1(Uopt[7],next[16])))
                 {if(caml_call2(symbol$1,t[15],next[15]))return 0;
                  throw [0,Assert_failure,_it_]}
                throw [0,Assert_failure,_iu_]}
              return _AY_}),
         prev_in_recompute_heap_fun=
          check
           (function(prev_in_recompute_heap)
             {if
               (1
                -
                is_in_recompute_heap(t)
                &&
                !
                caml_call1(Uopt[5],prev_in_recompute_heap))
               throw [0,Assert_failure,_iy_];
              var _AX_=caml_call1(Uopt[6],prev_in_recompute_heap);
              if(_AX_)
               {var prev=caml_call1(Uopt[7],prev_in_recompute_heap);
                if(packed_same(t,caml_call1(Uopt[7],prev[17])))
                 {if(caml_call2(symbol$1,t[15],prev[15]))return 0;
                  throw [0,Assert_failure,_iw_]}
                throw [0,Assert_failure,_ix_]}
              return _AX_}),
         height_in_recompute_heap_fun=
          check
           (function(height_in_recompute_heap)
             {if(caml_call2(symbol,height_in_recompute_heap,-1))
               {if(caml_call2(symbol$0,height_in_recompute_heap,t[14]))
                 return 0;
                throw [0,Assert_failure,_iz_]}
              throw [0,Assert_failure,_iA_]}),
         height_fun=
          check
           (function(height)
             {if(caml_call1(is_necessary$1,t))
               {if(caml_call2(symbol,height,0))return 0;
                throw [0,Assert_failure,_iB_]}
              if(caml_call2(symbol$1,height,-1))return 0;
              throw [0,Assert_failure,_iC_]}),
         next_node_in_same_scope_fun=
          check
           (function(next_node_in_same_scope)
             {var
               _AV_=is_top(t[12]),
               _AW_=_AV_ || 1 - caml_call1(is_valid$2,t);
              if(_AW_)
               {if(caml_call1(Uopt[5],next_node_in_same_scope))return 0;
                throw [0,Assert_failure,_iD_]}
              return _AW_}),
         created_in_fun=check(invariant$12),
         parent0_fun=
          check
           (function(parent0)
             {var
               t2=caml_call1(Uopt[6],parent0),
               t1=caml_call2(symbol$2,t[9],0),
               sexpifier=Core_kernel[289],
               equal=0,
               message=0,
               here=0;
              function comparator(a_007,b_008)
               {return caml_call2(Core_kernel[285],a_007,b_008)}
              return caml_call8
                      (Ppx_assert_lib_Runtime[2],
                       pos$6,
                       sexpifier,
                       comparator,
                       here,
                       message,
                       equal,
                       t1,
                       t2)}),
         parent1_and_beyond_fun=
          check
           (function(parent1_and_beyond)
             {var _AR_=caml_call1(Array[18],parent1_and_beyond),_AQ_=1;
              if(! (_AR_ < 1))
               {var parent_index=_AQ_;
                for(;;)
                 {var
                   _AS_=parent_index - 1 | 0,
                   _AT_=caml_check_bound(parent1_and_beyond,_AS_)[1 + _AS_],
                   t2=caml_call1(Uopt[6],_AT_),
                   t1=caml_call2(symbol$3,parent_index,t[9]),
                   sexpifier=Core_kernel[289],
                   equal=0,
                   message=0,
                   here=0,
                   comparator=
                    function(a_005,b_006)
                     {return caml_call2(Core_kernel[285],a_005,b_006)};
                  caml_call8
                   (Ppx_assert_lib_Runtime[2],
                    pos$7,
                    sexpifier,
                    comparator,
                    here,
                    message,
                    equal,
                    t1,
                    t2);
                  var _AU_=parent_index + 1 | 0;
                  if(_AR_ !== parent_index){var parent_index=_AU_;continue}
                  break}}
              return 0}),
         num_parents_fun=
          check
           (function(num_parents)
             {if(caml_call2(symbol,num_parents,0))
               {if
                 (caml_call2
                   (symbol$0,num_parents,1 + caml_call1(Array[18],t[10]) | 0))
                 return 0;
                throw [0,Assert_failure,_iE_]}
              throw [0,Assert_failure,_iF_]}),
         _AK_=
          fold_observers
           (t,
            0,
            function(n,param)
             {var on_update_handlers=param[3];
              return n
                     +
                     caml_call1(Core_kernel_List[7],on_update_handlers)
                     |
                     0}),
         expect=caml_call1(Core_kernel_List[7],t[23]) + _AK_ | 0,
         num_on_update_handlers_fun=
          check
           (function(got)
             {var sexpifier=Core_kernel[340],equal=0,message=0,here=0;
              function comparator(a_003,b_004)
               {return caml_call2(Core_kernel[336],a_003,b_004)}
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$8,
                       sexpifier,
                       comparator,
                       here,
                       message,
                       equal,
                       expect,
                       got)}),
         changed_at_fun=
          check
           (function(changed_at)
             {invariant$2(changed_at);
              var _AP_=is_some(t[3]);
              if(_AP_)
               {if(caml_call2(symbol$0,caml_call2(_w_,changed_at,t[3]),0))
                 return 0;
                throw [0,Assert_failure,_iG_]}
              return _AP_}),
         cutoff_fun=
          check(function(_AO_){return invariant$0(invariant_a,_AO_)}),
         kind_fun=
          check
           (function(kind)
             {invariant$17(invariant_a,kind);
              if(typeof kind !== "number" && 6 === kind[0])
               {var e=kind[1],_AN_=caml_call1(is_necessary$1,t);
                return caml_call1(invariant_about_num_invalid_ch(e),_AN_)}
              return 0}),
         value_opt_fun=
          check
           (function(value_opt)
             {var
               _AL_=caml_call1(is_valid$2,t),
               _AM_=_AL_?1 - is_stale(t):_AL_;
              if(_AM_ && ! caml_call1(Uopt[6],value_opt))
               throw [0,Assert_failure,_iH_];
              return caml_call2(Uopt[2],invariant_a,value_opt)}),
         recomputed_at_fun=check(invariant$2),
         id_fun=check(invariant$1);
        caml_call1(id_fun,id$0);
        caml_call1(recomputed_at_fun,recomputed_at$0);
        caml_call1(value_opt_fun,value_opt$0);
        caml_call1(kind_fun,kind$0);
        caml_call1(cutoff_fun,cutoff$0);
        caml_call1(changed_at_fun,changed_at$0);
        caml_call1(num_on_update_handlers_fun,num_on_update_handlers$0);
        caml_call1(num_parents_fun,num_parents$0);
        caml_call1(parent1_and_beyond_fun,parent1_and_beyond$0);
        caml_call1(parent0_fun,parent0$0);
        caml_call1(created_in_fun,created_in$0);
        caml_call1(next_node_in_same_scope_fun,next_node_in_same_scope$0);
        caml_call1(height_fun,height$1);
        caml_call1(height_in_recompute_heap_fun,height_in_recompute_heap$0);
        caml_call1(prev_in_recompute_heap_fun,prev_in_recompute_heap$0);
        caml_call1(next_in_recompute_heap_fun,next_in_recompute_heap$0);
        caml_call1
         (height_in_adjust_heights_heap_,height_in_adjust_heights_heap$0);
        caml_call1
         (next_in_adjust_heights_heap_fu,next_in_adjust_heights_heap$0);
        caml_call1(old_value_opt_fun,old_value_opt$0);
        caml_call1(observers_fun,observers$0);
        caml_call1
         (my_parent_index_in_child_at_in,my_parent_index_in_child_at_in$0);
        caml_call1
         (my_child_index_in_parent_at_in,my_child_index_in_parent_at_in$0);
        return 0}
      function _AG_(param){return _iJ_}
      function _AH_(_AI_){return sexp_of_t$27(_AG_,_AI_)}
      return caml_call4(Base_Invariant[1],_iK_,t,_AH_,_AF_)}
    function unsafe_value(t){return caml_call1(Uopt[11],t[4])}
    function value_exn(t)
     {if(caml_call1(Uopt[6],t[4]))return caml_call1(Uopt[11],t[4]);
      function _AC_(param){return _iL_}
      function _AD_(_AE_){return sexp_of_t$27(_AC_,_AE_)}
      return caml_call5
              (Core_kernel[221],0,_iM_,cst_attempt_to_get_value_of_an,t,_AD_)}
    function get_cutoff(t){return t[6]}
    function set_cutoff$0(t,cutoff){t[6] = cutoff;return 0}
    function is_const(t)
     {var _AB_=t[5];
      if(typeof _AB_ !== "number" && 5 === _AB_[0])return 1;
      return 0}
    function on_update(t,on_update_handler)
     {t[23] = [0,on_update_handler,t[23]];t[8] = t[8] + 1 | 0;return 0}
    function run_on_update_handlers(t,node_update,now)
     {var r=[0,t[23]];
      for(;;)
       {if(caml_call1(Core_kernel_List[8],r[1]))
         {var r$0=[0,t[21]];
          a:
          for(;;)
           {if(caml_call1(Uopt[6],r$0[1]))
             {var observer=caml_call1(Uopt[7],r$0[1]);
              r$0[1] = observer[7];
              var r$1=[0,observer[3]];
              for(;;)
               {if(caml_call1(Core_kernel_List[8],r$1[1]))continue a;
                var _Ay_=r$1[1];
                if(_Ay_)
                 {var rest=_Ay_[2],on_update_handler=_Ay_[1];
                  r$1[1] = rest;
                  var _Az_=observer[1];
                  if(_Az_)
                   {var switcher=_Az_ - 1 | 0,switch$0=0;
                    switch(switcher)
                     {case 0:run(on_update_handler,node_update,now);break;
                      case 1:break;
                      default:switch$0 = 1}
                    if(! switch$0)continue}
                  throw [0,Assert_failure,_iN_]}
                throw [0,Assert_failure,_iO_]}}
            return 0}}
        var _AA_=r[1];
        if(_AA_)
         {var rest$0=_AA_[2],on_update_handler$0=_AA_[1];
          r[1] = rest$0;
          run(on_update_handler$0,node_update,now);
          continue}
        throw [0,Assert_failure,_iP_]}}
    function set_kind$0(t,kind)
     {t[5] = kind;
      var _Ax_=initial_num_children(kind);
      t[24] = caml_call2(Array[36],_Ax_,-1);
      return 0}
    function create$5(state,created_in,kind)
     {var
       _Am_=state[18]?[0,caml_call2(Base_Backtrace[2],0,0)]:0,
       _An_=initial_num_children(kind),
       _Ao_=caml_call2(Array[36],_An_,-1),
       _Ap_=Uopt[3],
       _Aq_=Uopt[3],
       _Ar_=Uopt[3],
       _As_=Uopt[3],
       _At_=Uopt[3],
       _Au_=Uopt[3],
       _Av_=Uopt[3],
       _Aw_=Uopt[3],
       t=
        [0,
         next$0(0),
         state,
         none,
         _Aw_,
         kind,
         phys_equal,
         none,
         0,
         0,
         [0],
         _Av_,
         created_in,
         _Au_,
         -1,
         -1,
         _At_,
         _As_,
         -1,
         _Ar_,
         _Aq_,
         _Ap_,
         0,
         0,
         _Ao_,
         [0,-1],
         0,
         0,
         _Am_];
      add_node(created_in,t);
      return t}
    function max_num_parents(t){return 1 + caml_call1(Array[18],t[10]) | 0}
    function set_parent(child,parent,parent_index)
     {if(caml_call2(symbol$1,parent_index,0)){child[11] = parent;return 0}
      var _Al_=parent_index - 1 | 0;
      caml_check_bound(child[10],_Al_)[1 + _Al_] = parent;
      return 0}
    function link(child,child_index,parent,parent_index)
     {set_parent(child,caml_call1(Uopt[4],parent),parent_index);
      caml_check_bound(child[25],parent_index)[1 + parent_index]
      =
      child_index;
      caml_check_bound(parent[24],child_index)[1 + child_index]
      =
      parent_index;
      return 0}
    function add_parent(child,parent,child_index)
     {var _Ak_=max_num_parents(child);
      if(caml_call2(symbol$1,child[9],_Ak_))
       {var new_max_num_parents=2 * max_num_parents(child) | 0;
        child[10]
        =
        caml_call3(Array[117],child[10],new_max_num_parents - 1 | 0,Uopt[3]);
        child[25] = caml_call3(Array[117],child[25],new_max_num_parents,-1)}
      var max_num_children=caml_call1(Array[18],parent[24]);
      if(caml_call2(symbol,child_index,max_num_children))
       {var
         new_max_num_children=
          caml_call2(include[114],2,2 * max_num_children | 0);
        parent[24] = caml_call3(Array[117],parent[24],new_max_num_children,-1)}
      link(child,child_index,parent,child[9]);
      child[9] = child[9] + 1 | 0;
      return 0}
    function remove_parent(child,parent,child_index)
     {var
       parent_index=caml_check_bound(parent[24],child_index)[1 + child_index],
       parent_index$0=child[9] - 1 | 0;
      if(caml_call2(symbol$3,parent_index,parent_index$0))
       {var
         _Ai_=parent_index$0 - 1 | 0,
         _Aj_=caml_check_bound(child[10],_Ai_)[1 + _Ai_],
         match=caml_call1(Uopt[7],_Aj_);
        link
         (child,
          caml_check_bound(child[25],parent_index$0)[1 + parent_index$0],
          match,
          parent_index)}
      set_parent(child,Uopt[3],parent_index$0);
      child[9] = child[9] - 1 | 0;
      return 0}
    function swap_children_except_in_kind
     (parent,child1,child_index1,child2,child_index2)
     {var
       index_of_parent_in_child1=
        caml_check_bound(parent[24],child_index1)[1 + child_index1],
       index_of_parent_in_child2=
        caml_check_bound(parent[24],child_index2)[1 + child_index2];
      caml_check_bound(child1[25],index_of_parent_in_child1)
       [1 + index_of_parent_in_child1]
      =
      child_index2;
      caml_check_bound(child2[25],index_of_parent_in_child2)
       [1 + index_of_parent_in_child2]
      =
      child_index1;
      caml_check_bound(parent[24],child_index1)[1 + child_index1]
      =
      index_of_parent_in_child2;
      caml_check_bound(parent[24],child_index2)[1 + child_index2]
      =
      index_of_parent_in_child1;
      return 0}
    function sexp_of_t$28(param)
     {return sexp_of_t$27(function(param){return _iQ_},param)}
    function invariant$19(param)
     {return invariant$18(function(_Ah_){return 0},param)}
    function iter_descendants_internal(ts,f)
     {var seen=caml_call3(_o_[2],0,0,0);
      function iter_descendants(t)
       {var _Ag_=1 - caml_call2(Core_kernel_Hash_set[20],seen,t[1]);
        return _Ag_
                ?(caml_call2(Core_kernel_Hash_set[22],seen,t[1]),
                  caml_call1(f,t),
                  iteri_children$0
                   (t,function(param,t){return iter_descendants(t)}))
                :_Ag_}
      caml_call2(Core_kernel_List[9],ts,iter_descendants);
      return seen}
    function iter_descendants(ts,f){iter_descendants_internal(ts,f);return 0}
    function save_dot(file,ts)
     {function _z8_(out)
       {function node_name(node)
         {var _Af_=caml_call1(to_string$0,node[1]);
          return caml_call2(Core_kernel[15],cst_n$0,_Af_)}
        caml_call2(Core_kernel[223],out,_iR_);
        caml_call2(Core_kernel[223],out,_iS_);
        var
         bind_edges=[0,0],
         seen=
          iter_descendants_internal
           (ts,
            function(t)
             {var name$0=node_name(t),_Ab_=t[14],_Ac_=name(t[5]);
              caml_call6(Core_kernel[223],out,_iT_,name$0,name$0,_Ac_,_Ab_);
              iteri_children$0
               (t,
                function(param,from)
                 {var _Ae_=node_name(from);
                  return caml_call4(Core_kernel[223],out,_iU_,_Ae_,name$0)});
              var _Ad_=t[5];
              if(typeof _Ad_ !== "number" && 3 === _Ad_[0])
               {var bind=_Ad_[1];
                return iter_nodes_created_on_rhs
                        (bind,
                         function(to)
                          {bind_edges[1] = [0,[0,t,to],bind_edges[1]];return 0})}
              return 0});
        function _z9_(param)
         {var
           to=param[2],
           match=param[1],
           _z__=caml_call2(Core_kernel_Hash_set[20],seen,to[1]);
          if(_z__)
           {var _z$_=node_name(to),_Aa_=node_name(match);
            return caml_call4(Core_kernel[223],out,_iV_,_Aa_,_z$_)}
          return _z__}
        caml_call2(Core_kernel_List[9],bind_edges[1],_z9_);
        return caml_call2(Core_kernel[223],out,_iW_)}
      return caml_call6(Stdio_Out_channel[6],0,0,0,0,file,_z8_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$73);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Node$0);
    var
     Packed$0=
      [0,
       sexp_of_t$28,
       invariant$19,
       function(M)
        {function fold(t,init,f)
          {var ac=[0,init],r=[0,t];
           for(;;)
            {if(caml_call1(Uopt[6],r[1]))
              {var packed_node=caml_call1(Uopt[11],r[1]);
               r[1] = caml_call1(M[1],packed_node);
               ac[1] = caml_call2(f,ac[1],packed_node);
               continue}
             return ac[1]}}
         function iter(t,f)
          {return fold(t,0,function(param,n){return caml_call1(f,n)})}
         function invariant(t){return iter(t,invariant$19)}
         function length(t)
          {return fold(t,0,function(n,param){return n + 1 | 0})}
         function sexp_of_t(t)
          {var
            _z6_=fold(t,0,function(ac,n){return [0,n,ac]}),
            _z7_=caml_call1(Core_kernel_List[34],_z6_);
           return caml_call1(caml_call1(Core_kernel[405],Node[2][1]),_z7_)}
         return [0,sexp_of_t,invariant,length,iter]},
       iter_descendants,
       save_dot],
     include$4=
      [0,
       Packed$0,
       sexp_of_t$27,
       type_equal_if_phys_same$0,
       invariant$18,
       create$5,
       set_kind$0,
       same$1,
       iteri_children$0,
       get_parent,
       add_parent,
       remove_parent,
       swap_children_except_in_kind,
       is_const,
       is_in_recompute_heap,
       is_necessary$1,
       is_valid$2,
       should_be_invalidated,
       edge_is_stale,
       is_stale,
       needs_to_be_computed,
       value_exn,
       unsafe_value,
       get_cutoff,
       set_cutoff$0,
       on_update,
       run_on_update_handlers,
       user_info,
       set_user_info,
       has_child,
       has_parent];
    caml_register_global(1305,include$4,"Incremental__Node");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Recompute_heap);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$74);
    caml_call1(Expect_test_collector[4][1],cst_src_recompute_heap_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$75,cst$24);
    function next$1(param){return param[17]}
    var As_recompute_list=caml_call1(Packed$0[3],[0,next$1]);
    function nodes_by_height(r){return r[3]}
    function set_nodes_by_height(r,v){r[3] = v;return 0}
    function height_lower_bound(r){return r[2]}
    function set_height_lower_bound(r,v){r[2] = v;return 0}
    function length$0(r){return r[1]}
    function set_length(r,v){r[1] = v;return 0}
    function _iX_(r,v){return [0,r[1],r[2],v]}
    var
     _iY_=[0,set_nodes_by_height],
     nodes_by_height$0=
      [0,
       function(param){return 0},
       cst_nodes_by_height,
       _iY_,
       nodes_by_height,
       _iX_];
    function _iZ_(r,v){return [0,r[1],v,r[3]]}
    var
     _i0_=[0,set_height_lower_bound],
     height_lower_bound$0=
      [0,
       function(param){return 0},
       cst_height_lower_bound,
       _i0_,
       height_lower_bound,
       _iZ_];
    function _i1_(r,v){return [0,v,r[2],r[3]]}
    var
     _i2_=[0,set_length],
     length$1=[0,function(param){return 0},cst_length,_i2_,length$0,_i1_];
    function sexp_of_t$29(param)
     {var
       v_length=param[1],
       v_height_lower_bound=param[2],
       v_nodes_by_height=param[3],
       max_nonempty_index=[0,-1],
       bnds=0;
      function _z3_(i,l)
       {var
         _z4_=caml_call1(Uopt[6],l),
         _z5_=_z4_?(max_nonempty_index[1] = i,0):_z4_;
        return _z5_}
      caml_call2(Array[54],v_nodes_by_height,_z3_);
      var
       v=
        caml_call3
         (Array[46],v_nodes_by_height,0,max_nonempty_index[1] + 1 | 0),
       arg=caml_call2(Array[13],As_recompute_list[1],v),
       bnds$0=[0,[1,[0,_i3_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[340],v_height_lower_bound),
       bnds$1=[0,[1,[0,_i4_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Core_kernel[340],v_length),
       bnds$2=[0,[1,[0,_i5_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function max_height_allowed(t){return caml_call1(Array[18],t[3]) - 1 | 0}
    function invariant$20(t)
     {function _zT_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         nodes_by_height_fun=
          check
           (function(nodes_by_height)
             {function _z1_(height,node)
               {function _z2_(node)
                 {if(caml_call2(symbol$1,node[15],height))
                   {if(needs_to_be_computed(node))return 0;
                    throw [0,Assert_failure,_i6_]}
                  throw [0,Assert_failure,_i7_]}
                return caml_call2(As_recompute_list[4],node,_z2_)}
              return caml_call2(Array[54],nodes_by_height,_z1_)}),
         height_lower_bound_fun=
          check
           (function(height_lower_bound)
             {if(caml_call2(symbol,height_lower_bound,0))
               {if
                 (caml_call2
                   (symbol$0,height_lower_bound,caml_call1(Array[18],t[3])))
                 {var _zY_=height_lower_bound - 1 | 0,_zX_=0;
                  if(! (_zY_ < 0))
                   {var height=_zX_;
                    for(;;)
                     {var _zZ_=caml_check_bound(t[3],height)[1 + height];
                      if(! caml_call1(Uopt[5],_zZ_))throw [0,Assert_failure,_i8_];
                      var _z0_=height + 1 | 0;
                      if(_zY_ !== height){var height=_z0_;continue}
                      break}}
                  return 0}
                throw [0,Assert_failure,_i9_]}
              throw [0,Assert_failure,_i__]}),
         length_fun=
          check
           (function(t1)
             {var actual_length=[0,0];
              function _zU_(node)
               {var _zW_=caml_call1(As_recompute_list[3],node);
                actual_length[1] = actual_length[1] + _zW_ | 0;
                return 0}
              caml_call2(Array[20],t[3],_zU_);
              var
               sexpifier=Core_kernel[340],
               _zV_=actual_length[1],
               equal=0,
               message=0,
               here=0;
              function comparator(a_001,b_002)
               {return caml_call2(Core_kernel[336],a_001,b_002)}
              return caml_call8
                      (Ppx_assert_lib_Runtime[2],
                       pos$9,
                       sexpifier,
                       comparator,
                       here,
                       message,
                       equal,
                       t1,
                       _zV_)});
        caml_call1(length_fun,length$1);
        caml_call1(height_lower_bound_fun,height_lower_bound$0);
        return caml_call1(nodes_by_height_fun,nodes_by_height$0)}
      return caml_call4(Base_Invariant[1],_i$_,t,sexp_of_t$29,_zT_)}
    function create_nodes_by_height(max_height_allowed)
     {return caml_call2(Array[36],max_height_allowed + 1 | 0,Uopt[3])}
    function set_max_height_allowed(t,max_height_allowed)
     {var
       src=t[3],
       dst=create_nodes_by_height(max_height_allowed),
       _zQ_=caml_call1(Array[18],dst),
       _zR_=caml_call2(min,caml_call1(Array[18],src),_zQ_);
      caml_call5(Array[43],src,0,dst,0,_zR_);
      t[3] = dst;
      var _zS_=caml_call1(Array[18],dst);
      t[2] = caml_call2(min,t[2],_zS_);
      return 0}
    function create$6(max_height_allowed)
     {return [0,
              0,
              max_height_allowed + 1 | 0,
              create_nodes_by_height(max_height_allowed)]}
    function set_prev(next,prev)
     {var _zO_=caml_call1(Uopt[6],next);
      if(_zO_)
       {var match=caml_call1(Uopt[11],next);match[16] = prev;var _zP_=0}
      else
       var _zP_=_zO_;
      return _zP_}
    function link$0(t,node)
     {var height=node[14];
      node[15] = height;
      var next=caml_check_bound(t[3],height)[1 + height];
      node[17] = next;
      set_prev(next,caml_call1(Uopt[4],node));
      var _zN_=caml_call1(Uopt[4],node);
      t[3][1 + height] = _zN_;
      return 0}
    function unlink(t,node)
     {var
       prev=node[16],
       next=node[17],
       _zK_=node[15],
       _zL_=caml_check_bound(t[3],_zK_)[1 + _zK_],
       _zM_=caml_call1(Uopt[4],node);
      if(caml_call2(Core_kernel[232],_zM_,_zL_))t[3][1 + node[15]] = next;
      set_prev(next,prev);
      if(caml_call1(Uopt[6],prev))
       {var match=caml_call1(Uopt[11],prev);match[17] = next}
      node[16] = Uopt[3];
      return 0}
    function add$0(t,node)
     {var height=node[14];
      if(caml_call2(symbol$3,height,t[2]))t[2] = height;
      link$0(t,node);
      t[1] = t[1] + 1 | 0;
      return 0}
    function remove(t,node)
     {unlink(t,node);
      node[17] = Uopt[3];
      node[15] = -1;
      t[1] = t[1] - 1 | 0;
      return 0}
    function increase_height(t,node){unlink(t,node);return link$0(t,node)}
    function min_height(t)
     {if(caml_call2(symbol$1,t[1],0))
       t[2] = caml_call1(Array[18],t[3]);
      else
       {var nodes_by_height=t[3];
        for(;;)
         {var _zI_=t[2],_zJ_=caml_check_bound(nodes_by_height,_zI_)[1 + _zI_];
          if(caml_call1(Uopt[5],_zJ_)){t[2] = t[2] + 1 | 0;continue}
          break}}
      return t[2]}
    function remove_min(t)
     {var
       nodes_by_height=t[3],
       _zF_=t[2],
       node=[0,caml_check_bound(nodes_by_height,_zF_)[1 + _zF_]];
      for(;;)
       {if(caml_call1(Uopt[5],node[1]))
         {t[2] = t[2] + 1 | 0;
          var _zG_=t[2];
          node[1] = caml_check_bound(nodes_by_height,_zG_)[1 + _zG_];
          continue}
        var node$0=caml_call1(Uopt[11],node[1]);
        node$0[15] = -1;
        t[1] = t[1] - 1 | 0;
        var next=node$0[17],_zH_=t[2];
        caml_check_bound(t[3],_zH_)[1 + _zH_] = next;
        set_prev(next,Uopt[3]);
        node$0[17] = Uopt[3];
        return node$0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$76);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Recompute_heap$0);
    var
     Incremental_Recompute_heap=
      [0,
       sexp_of_t$29,
       invariant$20,
       create$6,
       length$0,
       max_height_allowed,
       set_max_height_allowed,
       min_height,
       add$0,
       remove,
       remove_min,
       increase_height];
    caml_register_global
     (1306,Incremental_Recompute_heap,"Incremental__Recompute_heap");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Adjust_heights);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$77);
    caml_call1(Expect_test_collector[4][1],cst_src_adjust_heights_heap_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$78,cst$25);
    function next$2(param){return param[19]}
    var As_adjust_heights_list=caml_call1(Packed$0[3],[0,next$2]);
    function sexp_of_t$30(t)
     {var max_nonempty_index=[0,-1];
      function _zC_(i,l)
       {var
         _zD_=caml_call1(Uopt[6],l),
         _zE_=_zD_?(max_nonempty_index[1] = i,0):_zD_;
        return _zE_}
      caml_call2(Array[54],t,_zC_);
      var v=caml_call3(Array[46],t,0,max_nonempty_index[1] + 1 | 0);
      return caml_call2(Array[13],As_adjust_heights_list[1],v)}
    function invariant$21(t)
     {function _zy_(param)
       {function _zz_(height,nodes)
         {caml_call1(As_adjust_heights_list[2],nodes);
          function _zA_(node)
           {if(caml_call2(symbol$1,node[18],height))
             {if(caml_call2(symbol$2,node[14],node[18]))
               {var _zB_=is_in_recompute_heap(node);
                if(_zB_)
                 {if(caml_call2(symbol$1,node[15],node[18]))return 0;
                  throw [0,Assert_failure,_ja_]}
                return _zB_}
              throw [0,Assert_failure,_jb_]}
            throw [0,Assert_failure,_jc_]}
          return caml_call2(As_adjust_heights_list[4],nodes,_zA_)}
        return caml_call2(Array[54],t,_zz_)}
      return caml_call4(Base_Invariant[1],_jd_,t,sexp_of_t$30,_zy_)}
    function create$7(max_height_allowed)
     {return caml_call2(Array[36],max_height_allowed + 1 | 0,Uopt[3])}
    function nodes_by_height$1(r){return r[4]}
    function set_nodes_by_height$0(r,v){r[4] = v;return 0}
    function max_height_seen(r){return r[3]}
    function set_max_height_seen(r,v){r[3] = v;return 0}
    function height_lower_bound$1(r){return r[2]}
    function set_height_lower_bound$0(r,v){r[2] = v;return 0}
    function length$2(r){return r[1]}
    function set_length$0(r,v){r[1] = v;return 0}
    function _je_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _jf_=[0,set_nodes_by_height$0],
     nodes_by_height$2=
      [0,
       function(param){return 0},
       cst_nodes_by_height$0,
       _jf_,
       nodes_by_height$1,
       _je_];
    function _jg_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _jh_=[0,set_max_height_seen],
     max_height_seen$0=
      [0,
       function(param){return 0},
       cst_max_height_seen,
       _jh_,
       max_height_seen,
       _jg_];
    function _ji_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _jj_=[0,set_height_lower_bound$0],
     height_lower_bound$2=
      [0,
       function(param){return 0},
       cst_height_lower_bound$0,
       _jj_,
       height_lower_bound$1,
       _ji_];
    function _jk_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _jl_=[0,set_length$0],
     length$3=[0,function(param){return 0},cst_length$0,_jl_,length$2,_jk_];
    function sexp_of_t$31(param)
     {var
       v_length=param[1],
       v_height_lower_bound=param[2],
       v_max_height_seen=param[3],
       v_nodes_by_height=param[4],
       arg=sexp_of_t$30(v_nodes_by_height),
       bnds=[0,[1,[0,_jm_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[340],v_max_height_seen),
       bnds$0=[0,[1,[0,_jn_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[340],v_height_lower_bound),
       bnds$1=[0,[1,[0,_jo_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[340],v_length),
       bnds$2=[0,[1,[0,_jp_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function max_height_allowed$0(t)
     {return caml_call1(Array[18],t[4]) - 1 | 0}
    function invariant$22(t)
     {function _zq_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         nodes_by_height_fun=check(invariant$21),
         max_height_seen_fun=
          check
           (function(max_height_seen)
             {if(caml_call2(symbol,max_height_seen,0))
               {if
                 (caml_call2(symbol$0,max_height_seen,max_height_allowed$0(t)))
                 return 0;
                throw [0,Assert_failure,_jq_]}
              throw [0,Assert_failure,_jr_]}),
         height_lower_bound_fun=
          check
           (function(height_lower_bound)
             {if(caml_call2(symbol,height_lower_bound,0))
               {if
                 (caml_call2
                   (symbol$0,height_lower_bound,caml_call1(Array[18],t[4])))
                 {var _zv_=height_lower_bound - 1 | 0,_zu_=0;
                  if(! (_zv_ < 0))
                   {var height=_zu_;
                    for(;;)
                     {var _zw_=caml_check_bound(t[4],height)[1 + height];
                      if(! caml_call1(Uopt[5],_zw_))throw [0,Assert_failure,_js_];
                      var _zx_=height + 1 | 0;
                      if(_zv_ !== height){var height=_zx_;continue}
                      break}}
                  return 0}
                throw [0,Assert_failure,_jt_]}
              throw [0,Assert_failure,_ju_]}),
         length_fun=
          check
           (function(length)
             {var r=[0,0],_zs_=t[4];
              function _zr_(node)
               {var _zt_=caml_call1(As_adjust_heights_list[3],node);
                r[1] = r[1] + _zt_ | 0;
                return 0}
              caml_call2(Array[20],_zs_,_zr_);
              if(caml_call2(symbol$1,length,r[1]))return 0;
              throw [0,Assert_failure,_jv_]});
        caml_call1(length_fun,length$3);
        caml_call1(height_lower_bound_fun,height_lower_bound$2);
        caml_call1(max_height_seen_fun,max_height_seen$0);
        return caml_call1(nodes_by_height_fun,nodes_by_height$2)}
      return caml_call4(Base_Invariant[1],_jw_,t,sexp_of_t$31,_zq_)}
    function create$8(max_height_allowed)
     {return [0,0,max_height_allowed + 1 | 0,0,create$7(max_height_allowed)]}
    function set_max_height_allowed$0(t,max_height_allowed)
     {if(caml_call2(symbol$3,max_height_allowed,t[3]))
       {var
         _zp_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[340],v0),
             v0$1=v1[2],
             v1$0=[1,[0,_jx_,[0,caml_call1(Core_kernel[340],v0$1),0]]];
            return [1,[0,v0$0,[0,v1$0,0]]]};
        caml_call5
         (Core_kernel[221],
          0,
          _jy_,
          cst_cannot_set_max_height_allo,
          [0,max_height_allowed,[0,-794774856,t[3]]],
          _zp_)}
      t[4] = create$7(max_height_allowed);
      return 0}
    function set_height$0(t,node,height)
     {if(caml_call2(symbol$2,height,t[3]))
       {t[3] = height;
        if(caml_call2(symbol$2,height,max_height_allowed$0(t)))
         {var
           _zn_=
            function(param)
             {var
               v1=param[2],
               v0=param[1],
               v0$0=v0[2],
               v0$1=[1,[0,_jz_,[0,caml_call1(Core_kernel[340],v0$0),0]]],
               v0$2=v1[2],
               v1$0=[1,[0,_jA_,[0,caml_call1(Core_kernel[340],v0$2),0]]];
              return [1,[0,v0$1,[0,v1$0,0]]]},
           _zo_=[0,[0,920681479,height],[0,3850884,max_height_allowed$0(t)]];
          caml_call5
           (Core_kernel[221],0,_jB_,cst_node_with_too_large_height,_zo_,_zn_)}}
      node[14] = height;
      return 0}
    function ensure_height_requirement
     (t,original_child,original_parent,child,parent)
     {if(same$1(parent,original_child))
       {var
         _zj_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=v0[2],
             _zl_=0,
             v0$1=
              [1,
               [0,
                _jD_,
                [0,sexp_of_t$27(function(param){return _jC_},v0$0),_zl_]]],
             v0$2=v1[2],
             _zm_=0,
             v1$0=
              [1,
               [0,
                _jF_,
                [0,sexp_of_t$27(function(param){return _jE_},v0$2),_zm_]]];
            return [1,[0,v0$1,[0,v1$0,0]]]};
        caml_call5
         (Core_kernel[221],
          0,
          _jG_,
          cst_adding_edge_made_graph_cyc,
          [0,[0,-977688164,original_child],[0,-310508246,original_parent]],
          _zj_)}
      var _zk_=caml_call2(symbol,child[14],parent[14]);
      if(_zk_)
       {if(caml_call2(symbol$1,parent[18],-1))
         {var height=parent[14];
          parent[18] = height;
          t[1] = t[1] + 1 | 0;
          parent[19] = caml_check_bound(t[4],height)[1 + height];
          var _zi_=caml_call1(Uopt[4],parent);
          t[4][1 + height] = _zi_}
        return set_height$0(t,parent,child[14] + 1 | 0)}
      return _zk_}
    function adjust_heights(t,recompute_heap,original_child,original_parent)
     {t[2] = original_parent[14];
      ensure_height_requirement
       (t,original_child,original_parent,original_child,original_parent);
      b:
      for(;;)
       {if(caml_call2(symbol$2,t[1],0))
         {var r=[0,t[2]];
          for(;;)
           {var _za_=r[1],_zb_=caml_check_bound(t[4],_za_)[1 + _za_];
            if(caml_call1(Uopt[5],_zb_)){r[1]++;continue}
            var height=r[1];
            t[2] = height;
            var child=caml_call1(Uopt[11],t[4][1 + height]);
            child[18] = -1;
            t[1] = t[1] - 1 | 0;
            t[4][1 + height] = child[19];
            child[19] = Uopt[3];
            if(is_in_recompute_heap(child))
             increase_height(recompute_heap,child);
            if(caml_call2(symbol$2,child[9],0))
             {var parent=caml_call1(Uopt[7],child[11]);
              ensure_height_requirement
               (t,original_child,original_parent,child,parent);
              var _zd_=child[9] - 1 | 0,_zc_=1;
              if(! (_zd_ < 1))
               {var parent_index=_zc_;
                for(;;)
                 {var
                   _zf_=parent_index - 1 | 0,
                   _zg_=caml_check_bound(child[10],_zf_)[1 + _zf_],
                   match$0=caml_call1(Uopt[7],_zg_);
                  ensure_height_requirement
                   (t,original_child,original_parent,child,match$0);
                  var _zh_=parent_index + 1 | 0;
                  if(_zd_ !== parent_index){var parent_index=_zh_;continue}
                  break}}}
            var _ze_=child[5],switch$0=0;
            if(typeof _ze_ !== "number" && 3 === _ze_[0])
             {var
               match=_ze_[1],
               all_nodes_created_on_rhs=match[7],
               r$0=[0,all_nodes_created_on_rhs];
              for(;;)
               {if(caml_call1(Uopt[6],r$0[1]))
                 {var node_on_rhs=caml_call1(Uopt[11],r$0[1]);
                  r$0[1] = node_on_rhs[13];
                  if(caml_call1(is_necessary$1,node_on_rhs))
                   ensure_height_requirement
                    (t,original_child,original_parent,child,node_on_rhs);
                  continue}
                switch$0 = 1;
                break}}
            continue b}}
        return debug}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$79);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Adjust_heights$0);
    var
     Incremental_Adjust_heights_hea=
      [0,
       sexp_of_t$31,
       invariant$22,
       create$8,
       length$2,
       max_height_allowed$0,
       set_max_height_allowed$0,
       max_height_seen,
       set_height$0,
       adjust_heights];
    caml_register_global
     (1307,Incremental_Adjust_heights_hea,"Incremental__Adjust_heights_heap");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Alarm_value);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$80);
    caml_call1(Expect_test_collector[4][1],cst_src_alarm_value_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$81,cst$26);
    function f(param)
     {switch(param[0])
       {case 0:var at=param[1];return invariant$8(at);
        case 1:var at_intervals=param[1];return invariant$9(at_intervals);
        case 2:
         var snapshot=param[1];
         return invariant$16(function(_y__){return 0},snapshot);
        default:
         var step_function_node=param[1];
         return invariant$6(function(_y$_){return 0},step_function_node)}}
    function action(r){return r[1]}
    function _jN_(r,v){return [0,v,r[2]]}
    var
     _jO_=0,
     action$0=[0,function(param){return 0},cst_action,_jO_,action,_jN_];
    function sexp_of_t$32(param)
     {var
       v_action=param[1],
       v_next_fired=param[2],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_next_fired),
       bnds=[0,[1,[0,_jP_,[0,arg,0]]],0];
      switch(v_action[0])
       {case 0:
         var
          v0=v_action[1],
          v0$0=sexp_of_t$16(v0),
          arg$0=[1,[0,_jH_,[0,v0$0,0]]];
         break;
        case 1:
         var
          v0$1=v_action[1],
          v0$2=sexp_of_t$17(v0$1),
          arg$0=[1,[0,_jI_,[0,v0$2,0]]];
         break;
        case 2:
         var
          v0$3=v_action[1],
          v0$4=sexp_of_t$25(function(param){return _jJ_},v0$3),
          arg$0=[1,[0,_jK_,[0,v0$4,0]]];
         break;
        default:
         var
          v0$5=v_action[1],
          v0$6=sexp_of_t$14(function(param){return _jL_},v0$5),
          arg$0=[1,[0,_jM_,[0,v0$6,0]]]}
      var bnds$0=[0,[1,[0,_jQ_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$23(t)
     {function _y9_(param)
       {var action_fun=caml_call2(Base_Invariant[2],t,f);
        caml_call1(action_fun,action$0);
        return 0}
      return caml_call4(Base_Invariant[1],_jR_,t,sexp_of_t$32,_y9_)}
    function create$9(action){return [0,action,Uopt[3]]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$82);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Alarm_value$0);
    var Incremental_Alarm_value=[0,[0],invariant$23,sexp_of_t$32,create$9];
    caml_register_global
     (1308,Incremental_Alarm_value,"Incremental__Alarm_value");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Config_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$83);
    caml_call1(Expect_test_collector[4][1],cst_src_config_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$84,cst$27);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$85);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Config_intf$0);
    var Incremental_Config_intf=[0];
    caml_register_global
     (1309,Incremental_Config_intf,"Incremental__Config_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Config);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$86);
    caml_call1(Expect_test_collector[4][1],cst_src_config_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$87,cst$28);
    function Default(symbol){return [0,1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$88);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Config$0);
    var Incremental_Config=[0,Default];
    caml_register_global(1310,Incremental_Config,"Incremental__Config");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Internal_obser);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$89);
    caml_call1(Expect_test_collector[4][1],cst_src_internal_observer_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$90,cst$29);
    function sexp_of_t$33(param)
     {var _y7_=param[2];
      function _y8_(param){return _jS_}
      return caml_call1(caml_call1(Node[1],_y8_),_y7_)}
    function next_in_all(param){return param[5]}
    function set_prev_in_all(param,t2){param[4] = t2;return 0}
    function next_in_observing(r){return r[7]}
    function set_next_in_observing(r,v){r[7] = v;return 0}
    function prev_in_observing(r){return r[6]}
    function set_prev_in_observing(r,v){r[6] = v;return 0}
    function next_in_all$0(r){return r[5]}
    function set_next_in_all(r,v){r[5] = v;return 0}
    function prev_in_all(r){return r[4]}
    function set_prev_in_all$0(r,v){r[4] = v;return 0}
    function on_update_handlers(r){return r[3]}
    function set_on_update_handlers(r,v){r[3] = v;return 0}
    function observing(r){return r[2]}
    function _jX_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _jY_=[0,set_next_in_observing],
     next_in_observing$0=
      [0,
       function(param){return 0},
       cst_next_in_observing,
       _jY_,
       next_in_observing,
       _jX_];
    function _jZ_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _j0_=[0,set_prev_in_observing],
     prev_in_observing$0=
      [0,
       function(param){return 0},
       cst_prev_in_observing,
       _j0_,
       prev_in_observing,
       _jZ_];
    function _j1_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7]]}
    var
     _j2_=[0,set_next_in_all],
     next_in_all$1=
      [0,function(param){return 0},cst_next_in_all,_j2_,next_in_all$0,_j1_];
    function _j3_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _j4_=[0,set_prev_in_all$0],
     prev_in_all$0=
      [0,function(param){return 0},cst_prev_in_all,_j4_,prev_in_all,_j3_];
    function _j5_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7]]}
    var
     _j6_=[0,set_on_update_handlers],
     on_update_handlers$0=
      [0,
       function(param){return 0},
       cst_on_update_handlers,
       _j6_,
       on_update_handlers,
       _j5_];
    function _j7_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7]]}
    var
     _j8_=0,
     observing$0=
      [0,function(param){return 0},cst_observing,_j8_,observing,_j7_];
    function sexp_of_internal_observer(of_a,param)
     {var
       v_state=param[1],
       v_observing=param[2],
       v_on_update_handlers=param[3],
       v_prev_in_all=param[4],
       v_next_in_all=param[5],
       v_prev_in_observing=param[6],
       v_next_in_observing=param[7],
       arg=caml_call2(Uopt[1],Sexplib0_Sexp_conv[23],v_next_in_observing),
       bnds=[0,[1,[0,_j9_,[0,arg,0]]],0],
       arg$0=caml_call2(Uopt[1],Sexplib0_Sexp_conv[23],v_prev_in_observing),
       bnds$0=[0,[1,[0,_j__,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Uopt[1],sexp_of_t$33,v_next_in_all),
       bnds$1=[0,[1,[0,_j$_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Uopt[1],sexp_of_t$33,v_prev_in_all),
       bnds$2=[0,[1,[0,_ka_,[0,arg$2,0]]],bnds$1];
      function _y5_(_y6_){return sexp_of_t$5(of_a,_y6_)}
      var
       arg$3=caml_call2(Core_kernel[405],_y5_,v_on_update_handlers),
       bnds$3=[0,[1,[0,_kb_,[0,arg$3,0]]],bnds$2],
       arg$4=sexp_of_t$27(of_a,v_observing),
       bnds$4=[0,[1,[0,_kc_,[0,arg$4,0]]],bnds$3];
      switch(v_state)
       {case 0:var arg$5=_jT_;break;
        case 1:var arg$5=_jU_;break;
        case 2:var arg$5=_jV_;break;
        default:var arg$5=_jW_}
      var bnds$5=[0,[1,[0,_kd_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function incr_state$0(t){return t[2][2]}
    function use_is_allowed(t){return 2 <= t[1]?0:1}
    function same$2(t1,t2){return caml_call2(Core_kernel[232],t1,t2)}
    function same_as_packed(t1,param){return same$2(t1,param)}
    function invariant$24(invariant_a,t)
     {function _yQ_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         next_in_observing_fun=
          check
           (function(next_in_observing)
             {var switcher=t[1] - 1 | 0;
              if
               (1 < switcher >>> 0 && ! caml_call1(Uopt[5],next_in_observing))
               throw [0,Assert_failure,_kf_];
              var _y2_=caml_call1(Uopt[6],next_in_observing);
              if(_y2_)
               {var
                 _y3_=caml_call1(Uopt[7],next_in_observing)[6],
                 _y4_=caml_call1(Uopt[7],_y3_);
                if(caml_call2(Core_kernel[231],t,_y4_))return 0;
                throw [0,Assert_failure,_ke_]}
              return _y2_}),
         prev_in_observing_fun=
          check
           (function(prev_in_observing)
             {var switcher=t[1] - 1 | 0;
              if
               (1 < switcher >>> 0 && ! caml_call1(Uopt[5],prev_in_observing))
               throw [0,Assert_failure,_kh_];
              var _yZ_=caml_call1(Uopt[6],prev_in_observing);
              if(_yZ_)
               {var
                 _y0_=caml_call1(Uopt[7],prev_in_observing)[7],
                 _y1_=caml_call1(Uopt[7],_y0_);
                if(caml_call2(Core_kernel[231],t,_y1_))return 0;
                throw [0,Assert_failure,_kg_]}
              return _yZ_}),
         next_in_all_fun=
          check
           (function(next_in_all)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0 && ! caml_call1(Uopt[5],next_in_all))
               throw [0,Assert_failure,_kj_];
              var _yX_=caml_call1(Uopt[6],next_in_all);
              if(_yX_)
               {var _yY_=caml_call1(Uopt[7],next_in_all)[4];
                if(same_as_packed(t,caml_call1(Uopt[7],_yY_)))return 0;
                throw [0,Assert_failure,_ki_]}
              return _yX_}),
         prev_in_all_fun=
          check
           (function(prev_in_all)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0 && ! caml_call1(Uopt[5],prev_in_all))
               throw [0,Assert_failure,_kl_];
              var _yV_=caml_call1(Uopt[6],prev_in_all);
              if(_yV_)
               {var _yW_=caml_call1(Uopt[7],prev_in_all)[5];
                if(same_as_packed(t,caml_call1(Uopt[7],_yW_)))return 0;
                throw [0,Assert_failure,_kk_]}
              return _yV_}),
         on_update_handlers_fun=
          check
           (function(on_update_handlers)
             {if(3 <= t[1])
               {if(caml_call1(Core_kernel_List[8],on_update_handlers))
                 return 0;
                throw [0,Assert_failure,_km_]}
              return 0}),
         observing_fun=
          check(function(_yU_){return invariant$18(invariant_a,_yU_)});
        caml_call1(observing_fun,observing$0);
        caml_call1(on_update_handlers_fun,on_update_handlers$0);
        caml_call1(prev_in_all_fun,prev_in_all$0);
        caml_call1(next_in_all_fun,next_in_all$1);
        caml_call1(prev_in_observing_fun,prev_in_observing$0);
        return caml_call1(next_in_observing_fun,next_in_observing$0)}
      function _yR_(param){return _kn_}
      function _yS_(_yT_){return sexp_of_internal_observer(_yR_,_yT_)}
      return caml_call4(Base_Invariant[1],_ko_,t,_yS_,_yQ_)}
    function value_exn$0(t)
     {var _yG_=t[1];
      if(1 === _yG_)
       {var uopt=t[2][4];
        if(caml_call1(Uopt[5],uopt))
         {var
           _yH_=function(param){return _kp_},
           _yI_=function(_yP_){return sexp_of_internal_observer(_yH_,_yP_)};
          caml_call5
           (Core_kernel[221],0,_kq_,cst_attempt_to_get_value_of_an$0,t,_yI_)}
        return caml_call1(Uopt[11],uopt)}
      if(_yG_)
       {var
         _yJ_=function(param){return _kr_},
         _yK_=function(_yO_){return sexp_of_internal_observer(_yJ_,_yO_)};
        return caml_call5
                (Core_kernel[221],
                 0,
                 _ks_,
                 cst_Observer_value_exn_called_,
                 t,
                 _yK_)}
      function _yL_(param){return _kt_}
      function _yM_(_yN_){return sexp_of_internal_observer(_yL_,_yN_)}
      return caml_call5
              (Core_kernel[221],
               0,
               _ku_,
               cst_Observer_value_exn_called_$0,
               t,
               _yM_)}
    function on_update_exn(t,on_update_handler)
     {if(2 <= t[1])
       {var
         _yC_=function(param){return _kv_},
         _yD_=function(_yF_){return sexp_of_internal_observer(_yC_,_yF_)};
        return caml_call5
                (Core_kernel[221],0,_kw_,cst_on_update_disallowed,t,_yD_)}
      t[3] = [0,on_update_handler,t[3]];
      var _yE_=t[1];
      if(1 === _yE_)
       {var observing=t[2];observing[8] = observing[8] + 1 | 0;return 0}
      if(_yE_)throw [0,Assert_failure,_kx_];
      return 0}
    function unlink$0(t)
     {var prev=t[6],next=t[7];
      t[6] = Uopt[3];
      t[7] = Uopt[3];
      if(caml_call1(Uopt[6],next))caml_call1(Uopt[11],next)[6] = prev;
      if(caml_call1(Uopt[6],prev))caml_call1(Uopt[11],prev)[7] = next;
      var observing=t[2],_yz_=caml_call1(Uopt[7],observing[21]);
      if(caml_call2(Core_kernel[231],t,_yz_))observing[21] = next;
      var _yA_=caml_call1(Core_kernel_List[7],t[3]);
      observing[8] = observing[8] - _yA_ | 0;
      t[3] = 0;
      var prev$0=t[4],next$0=t[5];
      t[4] = Uopt[3];
      t[5] = Uopt[3];
      if(caml_call1(Uopt[6],next$0))
       set_prev_in_all(caml_call1(Uopt[11],next$0),prev$0);
      var _yB_=caml_call1(Uopt[6],prev$0);
      if(_yB_)
       {var param=caml_call1(Uopt[11],prev$0);param[5] = next$0;return 0}
      return _yB_}
    function sexp_of_t$34(param)
     {return sexp_of_internal_observer(function(param){return _ky_},param)}
    function invariant$25(param)
     {return invariant$24(function(_yy_){return 0},param)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$91);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Internal_obser$0);
    var
     _kz_=[0,sexp_of_t$34,invariant$25,next_in_all,set_prev_in_all],
     Incremental_Internal_observer=
      [0,
       invariant$24,
       sexp_of_internal_observer,
       same$2,
       observing,
       use_is_allowed,
       value_exn$0,
       on_update_exn,
       unlink$0,
       incr_state$0,
       _kz_];
    caml_register_global
     (1311,Incremental_Internal_observer,"Incremental__Internal_observer");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Observer);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$92);
    caml_call1(Expect_test_collector[4][1],cst_src_observer_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$93,cst$30);
    function sexp_of_t$35(of_a,v)
     {function _yw_(_yx_){return sexp_of_internal_observer(of_a,_yx_)}
      return caml_call2(Core_kernel[485],_yw_,v)}
    function invariant$26(invariant_a,t)
     {return invariant$24(invariant_a,t[1])}
    function observing$1(t){return t[1][2]}
    function use_is_allowed$0(t){return use_is_allowed(t[1])}
    function value_exn$1(t){return value_exn$0(t[1])}
    function incr_state$1(t){return incr_state$0(t[1])}
    function on_update_exn$0(t,on_update_handler)
     {return on_update_exn(t[1],on_update_handler)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$94);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Observer$0);
    var
     include$5=
      [0,
       invariant$26,
       sexp_of_t$35,
       observing$1,
       use_is_allowed$0,
       value_exn$1,
       on_update_exn$0,
       incr_state$1];
    caml_register_global(1312,include$5,"Incremental__Observer");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_State);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$95);
    caml_call1(Expect_test_collector[4][1],cst_src_state_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$96,cst$31);
    function sexp_of_status(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return _kA_;case 1:return _kB_;default:return _kC_}
      var v0=param[1],v0$0=sexp_of_t$6(v0);
      return [1,[0,_kD_,[0,v0$0,0]]]}
    function sexp_of_t$36(param)
     {var
       v1=param[2],
       v0=param[1],
       v0$0=sexp_of_t$27(function(param){return _kE_},v0);
      function _yv_(param){return _kF_}
      var v1$0=caml_call2(Node_update[2],_yv_,v1);
      return [1,[0,_kG_,[0,v0$0,[0,v1$0,0]]]]}
    function invariant$27(t)
     {var node=t[1];
      function _yt_(param){return invariant$18(function(_yu_){return 0},node)}
      return caml_call4(Base_Invariant[1],_kH_,t,sexp_of_t$36,_yt_)}
    var Run_on_update_handlers$0=[0,sexp_of_t$36,invariant$27];
    function expert_nodes_created_by_curren(r){return r[2]}
    function set_expert_nodes_created_by_cu(r,v){r[2] = v;return 0}
    function currently_running_node(r){return r[1]}
    function set_currently_running_node(r,v){r[1] = v;return 0}
    function _kI_(r,v){return [0,r[1],v]}
    var
     _kJ_=[0,set_expert_nodes_created_by_cu],
     expert_nodes_created_by_curren$0=
      [0,
       function(param){return 0},
       cst_expert_nodes_created_by_cu,
       _kJ_,
       expert_nodes_created_by_curren,
       _kI_];
    function _kK_(r,v){return [0,v,r[2]]}
    var
     _kL_=[0,set_currently_running_node],
     currently_running_node$0=
      [0,
       function(param){return 0},
       cst_currently_running_node,
       _kL_,
       currently_running_node,
       _kK_];
    function make_creator
     (currently_running_node_fun,expert_nodes_created_by_curren,compile_acc)
     {var
       match=
        caml_call2
         (currently_running_node_fun,currently_running_node$0,compile_acc),
       compile_acc$0=match[2],
       currently_running_node_gen=match[1],
       match$0=
        caml_call2
         (expert_nodes_created_by_curren,
          expert_nodes_created_by_curren$0,
          compile_acc$0),
       compile_acc$1=match$0[2],
       expert_nodes_created_by_curren$1=match$0[1];
      return [0,
              function(acc)
               {var
                 currently_running_node=
                  caml_call1(currently_running_node_gen,acc),
                 expert_nodes_created_by_curren=
                  caml_call1(expert_nodes_created_by_curren$1,acc);
                return [0,
                        currently_running_node,
                        expert_nodes_created_by_curren]},
              compile_acc$1]}
    function create$10(currently_running_node,expert_nodes_created_by_curren)
     {return [0,currently_running_node,expert_nodes_created_by_curren]}
    function map$0(currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _ys_=
        caml_call1
         (expert_nodes_created_by_curren,expert_nodes_created_by_curren$0);
      return [0,
              caml_call1(currently_running_node_fun,currently_running_node$0),
              _ys_]}
    function iter$0(currently_running_node_fun,expert_nodes_created_by_curren)
     {caml_call1(currently_running_node_fun,currently_running_node$0);
      return caml_call1
              (expert_nodes_created_by_curren,
               expert_nodes_created_by_curren$0)}
    function fold$0
     (init,currently_running_node_fun,expert_nodes_created_by_curren)
     {return caml_call2
              (expert_nodes_created_by_curren,
               caml_call2
                (currently_running_node_fun,init,currently_running_node$0),
               expert_nodes_created_by_curren$0)}
    function map_poly(record)
     {var _yr_=[0,caml_call1(record[1],expert_nodes_created_by_curren$0),0];
      return [0,caml_call1(record[1],currently_running_node$0),_yr_]}
    function for_all$0
     (currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _yq_=
        caml_call1(currently_running_node_fun,currently_running_node$0);
      return _yq_
              ?caml_call1
                (expert_nodes_created_by_curren,
                 expert_nodes_created_by_curren$0)
              :_yq_}
    function exists$0
     (currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _yp_=
        caml_call1(currently_running_node_fun,currently_running_node$0);
      return _yp_
              ?_yp_
              :caml_call1
                (expert_nodes_created_by_curren,
                 expert_nodes_created_by_curren$0)}
    function to_list$0
     (currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _yo_=
        [0,
         caml_call1
          (expert_nodes_created_by_curren,expert_nodes_created_by_curren$0),
         0];
      return [0,
              caml_call1(currently_running_node_fun,currently_running_node$0),
              _yo_]}
    function iter$1
     (record,currently_running_node_fun,expert_nodes_created_by_curren)
     {caml_call3
       (currently_running_node_fun,currently_running_node$0,record,record[1]);
      return caml_call3
              (expert_nodes_created_by_curren,
               expert_nodes_created_by_curren$0,
               record,
               record[2])}
    function fold$1
     (record,init,currently_running_node_fun,expert_nodes_created_by_curren)
     {var _yn_=record[2];
      return caml_call4
              (expert_nodes_created_by_curren,
               caml_call4
                (currently_running_node_fun,
                 init,
                 currently_running_node$0,
                 record,
                 record[1]),
               expert_nodes_created_by_curren$0,
               record,
               _yn_)}
    function for_all$1
     (record,currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _ym_=
        caml_call3
         (currently_running_node_fun,
          currently_running_node$0,
          record,
          record[1]);
      return _ym_
              ?caml_call3
                (expert_nodes_created_by_curren,
                 expert_nodes_created_by_curren$0,
                 record,
                 record[2])
              :_ym_}
    function exists$1
     (record,currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _yl_=
        caml_call3
         (currently_running_node_fun,
          currently_running_node$0,
          record,
          record[1]);
      return _yl_
              ?_yl_
              :caml_call3
                (expert_nodes_created_by_curren,
                 expert_nodes_created_by_curren$0,
                 record,
                 record[2])}
    function to_list$1
     (record,currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _yk_=
        [0,
         caml_call3
          (expert_nodes_created_by_curren,
           expert_nodes_created_by_curren$0,
           record,
           record[2]),
         0];
      return [0,
              caml_call3
               (currently_running_node_fun,
                currently_running_node$0,
                record,
                record[1]),
              _yk_]}
    function map$1
     (record,currently_running_node_fun,expert_nodes_created_by_curren)
     {var
       _yj_=
        caml_call3
         (expert_nodes_created_by_curren,
          expert_nodes_created_by_curren$0,
          record,
          record[2]);
      return [0,
              caml_call3
               (currently_running_node_fun,
                currently_running_node$0,
                record,
                record[1]),
              _yj_]}
    function set_all_mutable_fields
     (record,currently_running_node,expert_nodes_created_by_curren)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = currently_running_node;
      record$0[2] = expert_nodes_created_by_curren;
      return 0}
    var
     Direct=
      [0,
       iter$1,
       fold$1,
       for_all$1,
       exists$1,
       to_list$1,
       map$1,
       set_all_mutable_fields],
     Fields=
      [0,
       names,
       expert_nodes_created_by_curren$0,
       currently_running_node$0,
       make_creator,
       create$10,
       map$0,
       iter$0,
       fold$0,
       map_poly,
       for_all$0,
       exists$0,
       to_list$0,
       Direct];
    function sexp_of_t$37(param)
     {var
       v_currently_running_node=param[1],
       v_expert_nodes_created_by_curr=param[2],
       arg=
        caml_call2
         (Core_kernel[405],Packed$0[1],v_expert_nodes_created_by_curr),
       bnds=[0,[1,[0,_kM_,[0,arg,0]]],0],
       arg$0=caml_call2(Core_kernel[438],Packed$0[1],v_currently_running_node),
       bnds$0=[0,[1,[0,_kN_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$28(t)
     {function _ye_(param)
       {function _yf_(_yi_){return 0}
        function _yg_(_yh_){return 0}
        return caml_call2(Fields[7],_yg_,_yf_)}
      return caml_call4(Base_Invariant[1],_kO_,t,sexp_of_t$37,_ye_)}
    function create$11(param){return [0,0,0]}
    var
     Only_in_debug$0=
      [0,
       expert_nodes_created_by_curren,
       set_expert_nodes_created_by_cu,
       currently_running_node,
       set_currently_running_node,
       Fields,
       sexp_of_t$37,
       invariant$28,
       create$11];
    function sexp_of_t$38(param)
     {var v0=param[1];
      function _yc_(param){return _kP_}
      function _yd_(param){return _kQ_}
      var v0$0=caml_call3(Weak_hashtbl[1],_yd_,_yc_,v0);
      return [1,[0,_kR_,[0,v0$0,0]]]}
    var Packed_weak_hashtbl$0=[0,sexp_of_t$38];
    function num_var_sets(r){return r[27]}
    function set_num_var_sets(r,v){r[27] = v;return 0}
    function num_nodes_recomputed_directly_(r){return r[26]}
    function set_num_nodes_recomputed_direc(r,v){r[26] = v;return 0}
    function num_nodes_recomputed_directly_$0(r){return r[25]}
    function set_num_nodes_recomputed_direc$0(r,v){r[25] = v;return 0}
    function num_nodes_recomputed(r){return r[24]}
    function set_num_nodes_recomputed(r,v){r[24] = v;return 0}
    function num_nodes_invalidated(r){return r[23]}
    function set_num_nodes_invalidated(r,v){r[23] = v;return 0}
    function num_nodes_created(r){return r[22]}
    function set_num_nodes_created(r,v){r[22] = v;return 0}
    function num_nodes_changed(r){return r[21]}
    function set_num_nodes_changed(r,v){r[21] = v;return 0}
    function num_nodes_became_unnecessary(r){return r[20]}
    function set_num_nodes_became_unnecessa(r,v){r[20] = v;return 0}
    function num_nodes_became_necessary(r){return r[19]}
    function set_num_nodes_became_necessary(r,v){r[19] = v;return 0}
    function keep_node_creation_backtrace(r){return r[18]}
    function set_keep_node_creation_backtra(r,v){r[18] = v;return 0}
    function weak_hashtbls(r){return r[17]}
    function only_in_debug(r){return r[16]}
    function set_only_in_debug(r,v){r[16] = v;return 0}
    function run_on_update_handlers$0(r){return r[15]}
    function handle_after_stabilization(r){return r[14]}
    function set_during_stabilization(r){return r[13]}
    function disallowed_observers(r){return r[12]}
    function new_observers(r){return r[11]}
    function finalized_observers(r){return r[10]}
    function all_observers(r){return r[9]}
    function set_all_observers(r,v){r[9] = v;return 0}
    function num_active_observers(r){return r[8]}
    function set_num_active_observers(r,v){r[8] = v;return 0}
    function propagate_invalidity(r){return r[7]}
    function adjust_heights_heap(r){return r[6]}
    function recompute_heap(r){return r[5]}
    function current_scope(r){return r[4]}
    function set_current_scope(r,v){r[4] = v;return 0}
    function stabilization_num(r){return r[3]}
    function set_stabilization_num(r,v){r[3] = v;return 0}
    function bind_lhs_change_should_invalid(r){return r[2]}
    function status(r){return r[1]}
    function set_status(r,v){r[1] = v;return 0}
    function _kS_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              v]}
    var
     _kT_=[0,set_num_var_sets],
     num_var_sets$0=
      [0,function(param){return 0},cst_num_var_sets,_kT_,num_var_sets,_kS_];
    function _kU_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              v,
              r[27]]}
    var
     _kV_=[0,set_num_nodes_recomputed_direc],
     num_nodes_recomputed_directly_$1=
      [0,
       function(param){return 0},
       cst_num_nodes_recomputed_direc,
       _kV_,
       num_nodes_recomputed_directly_,
       _kU_];
    function _kW_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              v,
              r[26],
              r[27]]}
    var
     _kX_=[0,set_num_nodes_recomputed_direc$0],
     num_nodes_recomputed_directly_$2=
      [0,
       function(param){return 0},
       cst_num_nodes_recomputed_direc$0,
       _kX_,
       num_nodes_recomputed_directly_$0,
       _kW_];
    function _kY_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              v,
              r[25],
              r[26],
              r[27]]}
    var
     _kZ_=[0,set_num_nodes_recomputed],
     num_nodes_recomputed$0=
      [0,
       function(param){return 0},
       cst_num_nodes_recomputed,
       _kZ_,
       num_nodes_recomputed,
       _kY_];
    function _k0_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              v,
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _k1_=[0,set_num_nodes_invalidated],
     num_nodes_invalidated$0=
      [0,
       function(param){return 0},
       cst_num_nodes_invalidated,
       _k1_,
       num_nodes_invalidated,
       _k0_];
    function _k2_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              v,
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _k3_=[0,set_num_nodes_created],
     num_nodes_created$0=
      [0,
       function(param){return 0},
       cst_num_nodes_created,
       _k3_,
       num_nodes_created,
       _k2_];
    function _k4_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              v,
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _k5_=[0,set_num_nodes_changed],
     num_nodes_changed$0=
      [0,
       function(param){return 0},
       cst_num_nodes_changed,
       _k5_,
       num_nodes_changed,
       _k4_];
    function _k6_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              v,
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _k7_=[0,set_num_nodes_became_unnecessa],
     num_nodes_became_unnecessary$0=
      [0,
       function(param){return 0},
       cst_num_nodes_became_unnecessa,
       _k7_,
       num_nodes_became_unnecessary,
       _k6_];
    function _k8_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              v,
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _k9_=[0,set_num_nodes_became_necessary],
     num_nodes_became_necessary$0=
      [0,
       function(param){return 0},
       cst_num_nodes_became_necessary,
       _k9_,
       num_nodes_became_necessary,
       _k8_];
    function _k__(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              v,
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _k$_=[0,set_keep_node_creation_backtra],
     keep_node_creation_backtrace$0=
      [0,
       function(param){return 0},
       cst_keep_node_creation_backtra,
       _k$_,
       keep_node_creation_backtrace,
       _k__];
    function _la_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              v,
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lb_=0,
     weak_hashtbls$0=
      [0,function(param){return 0},cst_weak_hashtbls,_lb_,weak_hashtbls,_la_];
    function _lc_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v,
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _ld_=[0,set_only_in_debug],
     only_in_debug$0=
      [0,function(param){return 0},cst_only_in_debug,_ld_,only_in_debug,_lc_];
    function _le_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lf_=0,
     run_on_update_handlers$1=
      [0,
       function(param){return 0},
       cst_run_on_update_handlers,
       _lf_,
       run_on_update_handlers$0,
       _le_];
    function _lg_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lh_=0,
     handle_after_stabilization$0=
      [0,
       function(param){return 0},
       cst_handle_after_stabilization,
       _lh_,
       handle_after_stabilization,
       _lg_];
    function _li_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lj_=0,
     set_during_stabilization$0=
      [0,
       function(param){return 0},
       cst_set_during_stabilization,
       _lj_,
       set_during_stabilization,
       _li_];
    function _lk_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _ll_=0,
     disallowed_observers$0=
      [0,
       function(param){return 0},
       cst_disallowed_observers,
       _ll_,
       disallowed_observers,
       _lk_];
    function _lm_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _ln_=0,
     new_observers$0=
      [0,function(param){return 0},cst_new_observers,_ln_,new_observers,_lm_];
    function _lo_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lp_=0,
     finalized_observers$0=
      [0,
       function(param){return 0},
       cst_finalized_observers,
       _lp_,
       finalized_observers,
       _lo_];
    function _lq_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lr_=[0,set_all_observers],
     all_observers$0=
      [0,function(param){return 0},cst_all_observers,_lr_,all_observers,_lq_];
    function _ls_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lt_=[0,set_num_active_observers],
     num_active_observers$0=
      [0,
       function(param){return 0},
       cst_num_active_observers,
       _lt_,
       num_active_observers,
       _ls_];
    function _lu_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lv_=0,
     propagate_invalidity$0=
      [0,
       function(param){return 0},
       cst_propagate_invalidity,
       _lv_,
       propagate_invalidity,
       _lu_];
    function _lw_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lx_=0,
     adjust_heights_heap$0=
      [0,
       function(param){return 0},
       cst_adjust_heights_heap,
       _lx_,
       adjust_heights_heap,
       _lw_];
    function _ly_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lz_=0,
     recompute_heap$0=
      [0,
       function(param){return 0},
       cst_recompute_heap,
       _lz_,
       recompute_heap,
       _ly_];
    function _lA_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lB_=[0,set_current_scope],
     current_scope$0=
      [0,function(param){return 0},cst_current_scope,_lB_,current_scope,_lA_];
    function _lC_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lD_=[0,set_stabilization_num],
     stabilization_num$0=
      [0,
       function(param){return 0},
       cst_stabilization_num,
       _lD_,
       stabilization_num,
       _lC_];
    function _lE_(r,v)
     {return [0,
              r[1],
              v,
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lF_=0,
     bind_lhs_change_should_invalid$0=
      [0,
       function(param){return 0},
       cst_bind_lhs_change_should_inv,
       _lF_,
       bind_lhs_change_should_invalid,
       _lE_];
    function _lG_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _lH_=[0,set_status],
     status$0=[0,function(param){return 0},cst_status,_lH_,status,_lG_];
    function make_creator$0
     (status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun,
      compile_acc)
     {var
       match=caml_call2(status_fun,status$0,compile_acc),
       compile_acc$0=match[2],
       status_gen=match[1],
       match$0=
        caml_call2
         (bind_lhs_change_should_invalid,
          bind_lhs_change_should_invalid$0,
          compile_acc$0),
       compile_acc$1=match$0[2],
       bind_lhs_change_should_invalid$1=match$0[1],
       match$1=
        caml_call2(stabilization_num_fun,stabilization_num$0,compile_acc$1),
       compile_acc$2=match$1[2],
       stabilization_num_gen=match$1[1],
       match$2=caml_call2(current_scope_fun,current_scope$0,compile_acc$2),
       compile_acc$3=match$2[2],
       current_scope_gen=match$2[1],
       match$3=caml_call2(recompute_heap_fun,recompute_heap$0,compile_acc$3),
       compile_acc$4=match$3[2],
       recompute_heap_gen=match$3[1],
       match$4=
        caml_call2
         (adjust_heights_heap_fun,adjust_heights_heap$0,compile_acc$4),
       compile_acc$5=match$4[2],
       adjust_heights_heap_gen=match$4[1],
       match$5=
        caml_call2
         (propagate_invalidity_fun,propagate_invalidity$0,compile_acc$5),
       compile_acc$6=match$5[2],
       propagate_invalidity_gen=match$5[1],
       match$6=
        caml_call2
         (num_active_observers_fun,num_active_observers$0,compile_acc$6),
       compile_acc$7=match$6[2],
       num_active_observers_gen=match$6[1],
       match$7=caml_call2(all_observers_fun,all_observers$0,compile_acc$7),
       compile_acc$8=match$7[2],
       all_observers_gen=match$7[1],
       match$8=
        caml_call2
         (finalized_observers_fun,finalized_observers$0,compile_acc$8),
       compile_acc$9=match$8[2],
       finalized_observers_gen=match$8[1],
       match$9=caml_call2(new_observers_fun,new_observers$0,compile_acc$9),
       compile_acc$10=match$9[2],
       new_observers_gen=match$9[1],
       match$10=
        caml_call2
         (disallowed_observers_fun,disallowed_observers$0,compile_acc$10),
       compile_acc$11=match$10[2],
       disallowed_observers_gen=match$10[1],
       match$11=
        caml_call2
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          compile_acc$11),
       compile_acc$12=match$11[2],
       set_during_stabilization_gen=match$11[1],
       match$12=
        caml_call2
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          compile_acc$12),
       compile_acc$13=match$12[2],
       handle_after_stabilization_gen=match$12[1],
       match$13=
        caml_call2
         (run_on_update_handlers_fun,run_on_update_handlers$1,compile_acc$13),
       compile_acc$14=match$13[2],
       run_on_update_handlers_gen=match$13[1],
       match$14=caml_call2(only_in_debug_fun,only_in_debug$0,compile_acc$14),
       compile_acc$15=match$14[2],
       only_in_debug_gen=match$14[1],
       match$15=caml_call2(weak_hashtbls_fun,weak_hashtbls$0,compile_acc$15),
       compile_acc$16=match$15[2],
       weak_hashtbls_gen=match$15[1],
       match$16=
        caml_call2
         (keep_node_creation_backtrace_f,
          keep_node_creation_backtrace$0,
          compile_acc$16),
       compile_acc$17=match$16[2],
       keep_node_creation_backtrace_g=match$16[1],
       match$17=
        caml_call2
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          compile_acc$17),
       compile_acc$18=match$17[2],
       num_nodes_became_necessary_gen=match$17[1],
       match$18=
        caml_call2
         (num_nodes_became_unnecessary_f,
          num_nodes_became_unnecessary$0,
          compile_acc$18),
       compile_acc$19=match$18[2],
       num_nodes_became_unnecessary_g=match$18[1],
       match$19=
        caml_call2(num_nodes_changed_fun,num_nodes_changed$0,compile_acc$19),
       compile_acc$20=match$19[2],
       num_nodes_changed_gen=match$19[1],
       match$20=
        caml_call2(num_nodes_created_fun,num_nodes_created$0,compile_acc$20),
       compile_acc$21=match$20[2],
       num_nodes_created_gen=match$20[1],
       match$21=
        caml_call2
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,compile_acc$21),
       compile_acc$22=match$21[2],
       num_nodes_invalidated_gen=match$21[1],
       match$22=
        caml_call2
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,compile_acc$22),
       compile_acc$23=match$22[2],
       num_nodes_recomputed_gen=match$22[1],
       match$23=
        caml_call2
         (num_nodes_recomputed_directly_$0,
          num_nodes_recomputed_directly_$2,
          compile_acc$23),
       compile_acc$24=match$23[2],
       num_nodes_recomputed_directly_$3=match$23[1],
       match$24=
        caml_call2
         (num_nodes_recomputed_directly_,
          num_nodes_recomputed_directly_$1,
          compile_acc$24),
       compile_acc$25=match$24[2],
       num_nodes_recomputed_directly_$4=match$24[1],
       match$25=caml_call2(num_var_sets_fun,num_var_sets$0,compile_acc$25),
       compile_acc$26=match$25[2],
       num_var_sets_gen=match$25[1];
      return [0,
              function(acc)
               {var
                 status=caml_call1(status_gen,acc),
                 bind_lhs_change_should_invalid=
                  caml_call1(bind_lhs_change_should_invalid$1,acc),
                 stabilization_num=caml_call1(stabilization_num_gen,acc),
                 current_scope=caml_call1(current_scope_gen,acc),
                 recompute_heap=caml_call1(recompute_heap_gen,acc),
                 adjust_heights_heap=caml_call1(adjust_heights_heap_gen,acc),
                 propagate_invalidity=caml_call1(propagate_invalidity_gen,acc),
                 num_active_observers=caml_call1(num_active_observers_gen,acc),
                 all_observers=caml_call1(all_observers_gen,acc),
                 finalized_observers=caml_call1(finalized_observers_gen,acc),
                 new_observers=caml_call1(new_observers_gen,acc),
                 disallowed_observers=caml_call1(disallowed_observers_gen,acc),
                 set_during_stabilization=
                  caml_call1(set_during_stabilization_gen,acc),
                 handle_after_stabilization=
                  caml_call1(handle_after_stabilization_gen,acc),
                 run_on_update_handlers=
                  caml_call1(run_on_update_handlers_gen,acc),
                 only_in_debug=caml_call1(only_in_debug_gen,acc),
                 weak_hashtbls=caml_call1(weak_hashtbls_gen,acc),
                 keep_node_creation_backtrace=
                  caml_call1(keep_node_creation_backtrace_g,acc),
                 num_nodes_became_necessary=
                  caml_call1(num_nodes_became_necessary_gen,acc),
                 num_nodes_became_unnecessary=
                  caml_call1(num_nodes_became_unnecessary_g,acc),
                 num_nodes_changed=caml_call1(num_nodes_changed_gen,acc),
                 num_nodes_created=caml_call1(num_nodes_created_gen,acc),
                 num_nodes_invalidated=
                  caml_call1(num_nodes_invalidated_gen,acc),
                 num_nodes_recomputed=caml_call1(num_nodes_recomputed_gen,acc),
                 num_nodes_recomputed_directly_=
                  caml_call1(num_nodes_recomputed_directly_$3,acc),
                 num_nodes_recomputed_directly_$0=
                  caml_call1(num_nodes_recomputed_directly_$4,acc),
                 num_var_sets=caml_call1(num_var_sets_gen,acc);
                return [0,
                        status,
                        bind_lhs_change_should_invalid,
                        stabilization_num,
                        current_scope,
                        recompute_heap,
                        adjust_heights_heap,
                        propagate_invalidity,
                        num_active_observers,
                        all_observers,
                        finalized_observers,
                        new_observers,
                        disallowed_observers,
                        set_during_stabilization,
                        handle_after_stabilization,
                        run_on_update_handlers,
                        only_in_debug,
                        weak_hashtbls,
                        keep_node_creation_backtrace,
                        num_nodes_became_necessary,
                        num_nodes_became_unnecessary,
                        num_nodes_changed,
                        num_nodes_created,
                        num_nodes_invalidated,
                        num_nodes_recomputed,
                        num_nodes_recomputed_directly_,
                        num_nodes_recomputed_directly_$0,
                        num_var_sets]},
              compile_acc$26]}
    function create$12
     (status,
      bind_lhs_change_should_invalid,
      stabilization_num,
      current_scope,
      recompute_heap,
      adjust_heights_heap,
      propagate_invalidity,
      num_active_observers,
      all_observers,
      finalized_observers,
      new_observers,
      disallowed_observers,
      set_during_stabilization,
      handle_after_stabilization,
      run_on_update_handlers,
      only_in_debug,
      weak_hashtbls,
      keep_node_creation_backtrace,
      num_nodes_became_necessary,
      num_nodes_became_unnecessary,
      num_nodes_changed,
      num_nodes_created,
      num_nodes_invalidated,
      num_nodes_recomputed,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets)
     {return [0,
              status,
              bind_lhs_change_should_invalid,
              stabilization_num,
              current_scope,
              recompute_heap,
              adjust_heights_heap,
              propagate_invalidity,
              num_active_observers,
              all_observers,
              finalized_observers,
              new_observers,
              disallowed_observers,
              set_during_stabilization,
              handle_after_stabilization,
              run_on_update_handlers,
              only_in_debug,
              weak_hashtbls,
              keep_node_creation_backtrace,
              num_nodes_became_necessary,
              num_nodes_became_unnecessary,
              num_nodes_changed,
              num_nodes_created,
              num_nodes_invalidated,
              num_nodes_recomputed,
              num_nodes_recomputed_directly_$0,
              num_nodes_recomputed_directly_,
              num_var_sets]}
    function map$2
     (status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _xO_=caml_call1(num_var_sets_fun,num_var_sets$0),
       _xP_=
        caml_call1
         (num_nodes_recomputed_directly_,num_nodes_recomputed_directly_$1),
       _xQ_=
        caml_call1
         (num_nodes_recomputed_directly_$0,num_nodes_recomputed_directly_$2),
       _xR_=caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),
       _xS_=caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),
       _xT_=caml_call1(num_nodes_created_fun,num_nodes_created$0),
       _xU_=caml_call1(num_nodes_changed_fun,num_nodes_changed$0),
       _xV_=
        caml_call1
         (num_nodes_became_unnecessary_f,num_nodes_became_unnecessary$0),
       _xW_=
        caml_call1
         (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
       _xX_=
        caml_call1
         (keep_node_creation_backtrace_f,keep_node_creation_backtrace$0),
       _xY_=caml_call1(weak_hashtbls_fun,weak_hashtbls$0),
       _xZ_=caml_call1(only_in_debug_fun,only_in_debug$0),
       _x0_=caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
       _x1_=
        caml_call1
         (handle_after_stabilization_fun,handle_after_stabilization$0),
       _x2_=
        caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
       _x3_=caml_call1(disallowed_observers_fun,disallowed_observers$0),
       _x4_=caml_call1(new_observers_fun,new_observers$0),
       _x5_=caml_call1(finalized_observers_fun,finalized_observers$0),
       _x6_=caml_call1(all_observers_fun,all_observers$0),
       _x7_=caml_call1(num_active_observers_fun,num_active_observers$0),
       _x8_=caml_call1(propagate_invalidity_fun,propagate_invalidity$0),
       _x9_=caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),
       _x__=caml_call1(recompute_heap_fun,recompute_heap$0),
       _x$_=caml_call1(current_scope_fun,current_scope$0),
       _ya_=caml_call1(stabilization_num_fun,stabilization_num$0),
       _yb_=
        caml_call1
         (bind_lhs_change_should_invalid,bind_lhs_change_should_invalid$0);
      return [0,
              caml_call1(status_fun,status$0),
              _yb_,
              _ya_,
              _x$_,
              _x__,
              _x9_,
              _x8_,
              _x7_,
              _x6_,
              _x5_,
              _x4_,
              _x3_,
              _x2_,
              _x1_,
              _x0_,
              _xZ_,
              _xY_,
              _xX_,
              _xW_,
              _xV_,
              _xU_,
              _xT_,
              _xS_,
              _xR_,
              _xQ_,
              _xP_,
              _xO_]}
    function iter$2
     (status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {caml_call1(status_fun,status$0);
      caml_call1
       (bind_lhs_change_should_invalid,bind_lhs_change_should_invalid$0);
      caml_call1(stabilization_num_fun,stabilization_num$0);
      caml_call1(current_scope_fun,current_scope$0);
      caml_call1(recompute_heap_fun,recompute_heap$0);
      caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0);
      caml_call1(propagate_invalidity_fun,propagate_invalidity$0);
      caml_call1(num_active_observers_fun,num_active_observers$0);
      caml_call1(all_observers_fun,all_observers$0);
      caml_call1(finalized_observers_fun,finalized_observers$0);
      caml_call1(new_observers_fun,new_observers$0);
      caml_call1(disallowed_observers_fun,disallowed_observers$0);
      caml_call1(set_during_stabilization_fun,set_during_stabilization$0);
      caml_call1(handle_after_stabilization_fun,handle_after_stabilization$0);
      caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1);
      caml_call1(only_in_debug_fun,only_in_debug$0);
      caml_call1(weak_hashtbls_fun,weak_hashtbls$0);
      caml_call1
       (keep_node_creation_backtrace_f,keep_node_creation_backtrace$0);
      caml_call1(num_nodes_became_necessary_fun,num_nodes_became_necessary$0);
      caml_call1
       (num_nodes_became_unnecessary_f,num_nodes_became_unnecessary$0);
      caml_call1(num_nodes_changed_fun,num_nodes_changed$0);
      caml_call1(num_nodes_created_fun,num_nodes_created$0);
      caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0);
      caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0);
      caml_call1
       (num_nodes_recomputed_directly_$0,num_nodes_recomputed_directly_$2);
      caml_call1
       (num_nodes_recomputed_directly_,num_nodes_recomputed_directly_$1);
      return caml_call1(num_var_sets_fun,num_var_sets$0)}
    function fold$2
     (init,
      status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {return caml_call2
              (num_var_sets_fun,
               caml_call2
                (num_nodes_recomputed_directly_,
                 caml_call2
                  (num_nodes_recomputed_directly_$0,
                   caml_call2
                    (num_nodes_recomputed_fun,
                     caml_call2
                      (num_nodes_invalidated_fun,
                       caml_call2
                        (num_nodes_created_fun,
                         caml_call2
                          (num_nodes_changed_fun,
                           caml_call2
                            (num_nodes_became_unnecessary_f,
                             caml_call2
                              (num_nodes_became_necessary_fun,
                               caml_call2
                                (keep_node_creation_backtrace_f,
                                 caml_call2
                                  (weak_hashtbls_fun,
                                   caml_call2
                                    (only_in_debug_fun,
                                     caml_call2
                                      (run_on_update_handlers_fun,
                                       caml_call2
                                        (handle_after_stabilization_fun,
                                         caml_call2
                                          (set_during_stabilization_fun,
                                           caml_call2
                                            (disallowed_observers_fun,
                                             caml_call2
                                              (new_observers_fun,
                                               caml_call2
                                                (finalized_observers_fun,
                                                 caml_call2
                                                  (all_observers_fun,
                                                   caml_call2
                                                    (num_active_observers_fun,
                                                     caml_call2
                                                      (propagate_invalidity_fun,
                                                       caml_call2
                                                        (adjust_heights_heap_fun,
                                                         caml_call2
                                                          (recompute_heap_fun,
                                                           caml_call2
                                                            (current_scope_fun,
                                                             caml_call2
                                                              (stabilization_num_fun,
                                                               caml_call2
                                                                (bind_lhs_change_should_invalid,
                                                                 caml_call2(status_fun,init,status$0),
                                                                 bind_lhs_change_should_invalid$0),
                                                               stabilization_num$0),
                                                             current_scope$0),
                                                           recompute_heap$0),
                                                         adjust_heights_heap$0),
                                                       propagate_invalidity$0),
                                                     num_active_observers$0),
                                                   all_observers$0),
                                                 finalized_observers$0),
                                               new_observers$0),
                                             disallowed_observers$0),
                                           set_during_stabilization$0),
                                         handle_after_stabilization$0),
                                       run_on_update_handlers$1),
                                     only_in_debug$0),
                                   weak_hashtbls$0),
                                 keep_node_creation_backtrace$0),
                               num_nodes_became_necessary$0),
                             num_nodes_became_unnecessary$0),
                           num_nodes_changed$0),
                         num_nodes_created$0),
                       num_nodes_invalidated$0),
                     num_nodes_recomputed$0),
                   num_nodes_recomputed_directly_$2),
                 num_nodes_recomputed_directly_$1),
               num_var_sets$0)}
    function map_poly$0(record)
     {var
       _xo_=[0,caml_call1(record[1],num_var_sets$0),0],
       _xp_=[0,caml_call1(record[1],num_nodes_recomputed_directly_$1),_xo_],
       _xq_=[0,caml_call1(record[1],num_nodes_recomputed_directly_$2),_xp_],
       _xr_=[0,caml_call1(record[1],num_nodes_recomputed$0),_xq_],
       _xs_=[0,caml_call1(record[1],num_nodes_invalidated$0),_xr_],
       _xt_=[0,caml_call1(record[1],num_nodes_created$0),_xs_],
       _xu_=[0,caml_call1(record[1],num_nodes_changed$0),_xt_],
       _xv_=[0,caml_call1(record[1],num_nodes_became_unnecessary$0),_xu_],
       _xw_=[0,caml_call1(record[1],num_nodes_became_necessary$0),_xv_],
       _xx_=[0,caml_call1(record[1],keep_node_creation_backtrace$0),_xw_],
       _xy_=[0,caml_call1(record[1],weak_hashtbls$0),_xx_],
       _xz_=[0,caml_call1(record[1],only_in_debug$0),_xy_],
       _xA_=[0,caml_call1(record[1],run_on_update_handlers$1),_xz_],
       _xB_=[0,caml_call1(record[1],handle_after_stabilization$0),_xA_],
       _xC_=[0,caml_call1(record[1],set_during_stabilization$0),_xB_],
       _xD_=[0,caml_call1(record[1],disallowed_observers$0),_xC_],
       _xE_=[0,caml_call1(record[1],new_observers$0),_xD_],
       _xF_=[0,caml_call1(record[1],finalized_observers$0),_xE_],
       _xG_=[0,caml_call1(record[1],all_observers$0),_xF_],
       _xH_=[0,caml_call1(record[1],num_active_observers$0),_xG_],
       _xI_=[0,caml_call1(record[1],propagate_invalidity$0),_xH_],
       _xJ_=[0,caml_call1(record[1],adjust_heights_heap$0),_xI_],
       _xK_=[0,caml_call1(record[1],recompute_heap$0),_xJ_],
       _xL_=[0,caml_call1(record[1],current_scope$0),_xK_],
       _xM_=[0,caml_call1(record[1],stabilization_num$0),_xL_],
       _xN_=[0,caml_call1(record[1],bind_lhs_change_should_invalid$0),_xM_];
      return [0,caml_call1(record[1],status$0),_xN_]}
    function for_all$2
     (status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _w0_=caml_call1(status_fun,status$0),
       _w1_=
        _w0_
         ?caml_call1
           (bind_lhs_change_should_invalid,bind_lhs_change_should_invalid$0)
         :_w0_,
       _w2_=_w1_?caml_call1(stabilization_num_fun,stabilization_num$0):_w1_,
       _w3_=_w2_?caml_call1(current_scope_fun,current_scope$0):_w2_,
       _w4_=_w3_?caml_call1(recompute_heap_fun,recompute_heap$0):_w3_,
       _w5_=
        _w4_?caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0):_w4_,
       _w6_=
        _w5_?caml_call1(propagate_invalidity_fun,propagate_invalidity$0):_w5_,
       _w7_=
        _w6_?caml_call1(num_active_observers_fun,num_active_observers$0):_w6_,
       _w8_=_w7_?caml_call1(all_observers_fun,all_observers$0):_w7_,
       _w9_=
        _w8_?caml_call1(finalized_observers_fun,finalized_observers$0):_w8_,
       _w__=_w9_?caml_call1(new_observers_fun,new_observers$0):_w9_,
       _w$_=
        _w__?caml_call1(disallowed_observers_fun,disallowed_observers$0):_w__,
       _xa_=
        _w$_
         ?caml_call1(set_during_stabilization_fun,set_during_stabilization$0)
         :_w$_,
       _xb_=
        _xa_
         ?caml_call1
           (handle_after_stabilization_fun,handle_after_stabilization$0)
         :_xa_,
       _xc_=
        _xb_
         ?caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1)
         :_xb_,
       _xd_=_xc_?caml_call1(only_in_debug_fun,only_in_debug$0):_xc_,
       _xe_=_xd_?caml_call1(weak_hashtbls_fun,weak_hashtbls$0):_xd_,
       _xf_=
        _xe_
         ?caml_call1
           (keep_node_creation_backtrace_f,keep_node_creation_backtrace$0)
         :_xe_,
       _xg_=
        _xf_
         ?caml_call1
           (num_nodes_became_necessary_fun,num_nodes_became_necessary$0)
         :_xf_,
       _xh_=
        _xg_
         ?caml_call1
           (num_nodes_became_unnecessary_f,num_nodes_became_unnecessary$0)
         :_xg_,
       _xi_=_xh_?caml_call1(num_nodes_changed_fun,num_nodes_changed$0):_xh_,
       _xj_=_xi_?caml_call1(num_nodes_created_fun,num_nodes_created$0):_xi_,
       _xk_=
        _xj_
         ?caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0)
         :_xj_,
       _xl_=
        _xk_?caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0):_xk_,
       _xm_=
        _xl_
         ?caml_call1
           (num_nodes_recomputed_directly_$0,num_nodes_recomputed_directly_$2)
         :_xl_,
       _xn_=
        _xm_
         ?caml_call1
           (num_nodes_recomputed_directly_,num_nodes_recomputed_directly_$1)
         :_xm_;
      return _xn_?caml_call1(num_var_sets_fun,num_var_sets$0):_xn_}
    function exists$2
     (status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _wZ_=caml_call1(status_fun,status$0),
       _wA_=
        _wZ_
        ||
        caml_call1
         (bind_lhs_change_should_invalid,bind_lhs_change_should_invalid$0),
       _wB_=_wA_ || caml_call1(stabilization_num_fun,stabilization_num$0),
       _wC_=_wB_ || caml_call1(current_scope_fun,current_scope$0),
       _wD_=_wC_ || caml_call1(recompute_heap_fun,recompute_heap$0),
       _wE_=_wD_ || caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),
       _wF_=
        _wE_
        ||
        caml_call1(propagate_invalidity_fun,propagate_invalidity$0),
       _wG_=
        _wF_
        ||
        caml_call1(num_active_observers_fun,num_active_observers$0),
       _wH_=_wG_ || caml_call1(all_observers_fun,all_observers$0),
       _wI_=_wH_ || caml_call1(finalized_observers_fun,finalized_observers$0),
       _wJ_=_wI_ || caml_call1(new_observers_fun,new_observers$0),
       _wK_=
        _wJ_
        ||
        caml_call1(disallowed_observers_fun,disallowed_observers$0),
       _wL_=
        _wK_
        ||
        caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
       _wM_=
        _wL_
        ||
        caml_call1
         (handle_after_stabilization_fun,handle_after_stabilization$0),
       _wN_=
        _wM_
        ||
        caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
       _wO_=_wN_ || caml_call1(only_in_debug_fun,only_in_debug$0),
       _wP_=_wO_ || caml_call1(weak_hashtbls_fun,weak_hashtbls$0),
       _wQ_=
        _wP_
        ||
        caml_call1
         (keep_node_creation_backtrace_f,keep_node_creation_backtrace$0),
       _wR_=
        _wQ_
        ||
        caml_call1
         (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
       _wS_=
        _wR_
        ||
        caml_call1
         (num_nodes_became_unnecessary_f,num_nodes_became_unnecessary$0),
       _wT_=_wS_ || caml_call1(num_nodes_changed_fun,num_nodes_changed$0),
       _wU_=_wT_ || caml_call1(num_nodes_created_fun,num_nodes_created$0),
       _wV_=
        _wU_
        ||
        caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),
       _wW_=
        _wV_
        ||
        caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),
       _wX_=
        _wW_
        ||
        caml_call1
         (num_nodes_recomputed_directly_$0,num_nodes_recomputed_directly_$2),
       _wY_=
        _wX_
        ||
        caml_call1
         (num_nodes_recomputed_directly_,num_nodes_recomputed_directly_$1);
      return _wY_?_wY_:caml_call1(num_var_sets_fun,num_var_sets$0)}
    function to_list$2
     (status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _wa_=[0,caml_call1(num_var_sets_fun,num_var_sets$0),0],
       _wb_=
        [0,
         caml_call1
          (num_nodes_recomputed_directly_,num_nodes_recomputed_directly_$1),
         _wa_],
       _wc_=
        [0,
         caml_call1
          (num_nodes_recomputed_directly_$0,num_nodes_recomputed_directly_$2),
         _wb_],
       _wd_=
        [0,caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),_wc_],
       _we_=
        [0,caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),_wd_],
       _wf_=[0,caml_call1(num_nodes_created_fun,num_nodes_created$0),_we_],
       _wg_=[0,caml_call1(num_nodes_changed_fun,num_nodes_changed$0),_wf_],
       _wh_=
        [0,
         caml_call1
          (num_nodes_became_unnecessary_f,num_nodes_became_unnecessary$0),
         _wg_],
       _wi_=
        [0,
         caml_call1
          (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
         _wh_],
       _wj_=
        [0,
         caml_call1
          (keep_node_creation_backtrace_f,keep_node_creation_backtrace$0),
         _wi_],
       _wk_=[0,caml_call1(weak_hashtbls_fun,weak_hashtbls$0),_wj_],
       _wl_=[0,caml_call1(only_in_debug_fun,only_in_debug$0),_wk_],
       _wm_=
        [0,
         caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
         _wl_],
       _wn_=
        [0,
         caml_call1
          (handle_after_stabilization_fun,handle_after_stabilization$0),
         _wm_],
       _wo_=
        [0,
         caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
         _wn_],
       _wp_=
        [0,caml_call1(disallowed_observers_fun,disallowed_observers$0),_wo_],
       _wq_=[0,caml_call1(new_observers_fun,new_observers$0),_wp_],
       _wr_=[0,caml_call1(finalized_observers_fun,finalized_observers$0),_wq_],
       _ws_=[0,caml_call1(all_observers_fun,all_observers$0),_wr_],
       _wt_=
        [0,caml_call1(num_active_observers_fun,num_active_observers$0),_ws_],
       _wu_=
        [0,caml_call1(propagate_invalidity_fun,propagate_invalidity$0),_wt_],
       _wv_=[0,caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),_wu_],
       _ww_=[0,caml_call1(recompute_heap_fun,recompute_heap$0),_wv_],
       _wx_=[0,caml_call1(current_scope_fun,current_scope$0),_ww_],
       _wy_=[0,caml_call1(stabilization_num_fun,stabilization_num$0),_wx_],
       _wz_=
        [0,
         caml_call1
          (bind_lhs_change_should_invalid,bind_lhs_change_should_invalid$0),
         _wy_];
      return [0,caml_call1(status_fun,status$0),_wz_]}
    function iter$3
     (record,
      status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {caml_call3(status_fun,status$0,record,record[1]);
      caml_call3
       (bind_lhs_change_should_invalid,
        bind_lhs_change_should_invalid$0,
        record,
        record[2]);
      caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]);
      caml_call3(current_scope_fun,current_scope$0,record,record[4]);
      caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]);
      caml_call3
       (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]);
      caml_call3
       (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]);
      caml_call3
       (num_active_observers_fun,num_active_observers$0,record,record[8]);
      caml_call3(all_observers_fun,all_observers$0,record,record[9]);
      caml_call3
       (finalized_observers_fun,finalized_observers$0,record,record[10]);
      caml_call3(new_observers_fun,new_observers$0,record,record[11]);
      caml_call3
       (disallowed_observers_fun,disallowed_observers$0,record,record[12]);
      caml_call3
       (set_during_stabilization_fun,
        set_during_stabilization$0,
        record,
        record[13]);
      caml_call3
       (handle_after_stabilization_fun,
        handle_after_stabilization$0,
        record,
        record[14]);
      caml_call3
       (run_on_update_handlers_fun,run_on_update_handlers$1,record,record[15]);
      caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]);
      caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]);
      caml_call3
       (keep_node_creation_backtrace_f,
        keep_node_creation_backtrace$0,
        record,
        record[18]);
      caml_call3
       (num_nodes_became_necessary_fun,
        num_nodes_became_necessary$0,
        record,
        record[19]);
      caml_call3
       (num_nodes_became_unnecessary_f,
        num_nodes_became_unnecessary$0,
        record,
        record[20]);
      caml_call3(num_nodes_changed_fun,num_nodes_changed$0,record,record[21]);
      caml_call3(num_nodes_created_fun,num_nodes_created$0,record,record[22]);
      caml_call3
       (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[23]);
      caml_call3
       (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[24]);
      caml_call3
       (num_nodes_recomputed_directly_$0,
        num_nodes_recomputed_directly_$2,
        record,
        record[25]);
      caml_call3
       (num_nodes_recomputed_directly_,
        num_nodes_recomputed_directly_$1,
        record,
        record[26]);
      return caml_call3(num_var_sets_fun,num_var_sets$0,record,record[27])}
    function fold$3
     (record,
      init,
      status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _vM_=record[27],
       _vN_=record[26],
       _vO_=record[25],
       _vP_=record[24],
       _vQ_=record[23],
       _vR_=record[22],
       _vS_=record[21],
       _vT_=record[20],
       _vU_=record[19],
       _vV_=record[18],
       _vW_=record[17],
       _vX_=record[16],
       _vY_=record[15],
       _vZ_=record[14],
       _v0_=record[13],
       _v1_=record[12],
       _v2_=record[11],
       _v3_=record[10],
       _v4_=record[9],
       _v5_=record[8],
       _v6_=record[7],
       _v7_=record[6],
       _v8_=record[5],
       _v9_=record[4],
       _v__=record[3],
       _v$_=record[2];
      return caml_call4
              (num_var_sets_fun,
               caml_call4
                (num_nodes_recomputed_directly_,
                 caml_call4
                  (num_nodes_recomputed_directly_$0,
                   caml_call4
                    (num_nodes_recomputed_fun,
                     caml_call4
                      (num_nodes_invalidated_fun,
                       caml_call4
                        (num_nodes_created_fun,
                         caml_call4
                          (num_nodes_changed_fun,
                           caml_call4
                            (num_nodes_became_unnecessary_f,
                             caml_call4
                              (num_nodes_became_necessary_fun,
                               caml_call4
                                (keep_node_creation_backtrace_f,
                                 caml_call4
                                  (weak_hashtbls_fun,
                                   caml_call4
                                    (only_in_debug_fun,
                                     caml_call4
                                      (run_on_update_handlers_fun,
                                       caml_call4
                                        (handle_after_stabilization_fun,
                                         caml_call4
                                          (set_during_stabilization_fun,
                                           caml_call4
                                            (disallowed_observers_fun,
                                             caml_call4
                                              (new_observers_fun,
                                               caml_call4
                                                (finalized_observers_fun,
                                                 caml_call4
                                                  (all_observers_fun,
                                                   caml_call4
                                                    (num_active_observers_fun,
                                                     caml_call4
                                                      (propagate_invalidity_fun,
                                                       caml_call4
                                                        (adjust_heights_heap_fun,
                                                         caml_call4
                                                          (recompute_heap_fun,
                                                           caml_call4
                                                            (current_scope_fun,
                                                             caml_call4
                                                              (stabilization_num_fun,
                                                               caml_call4
                                                                (bind_lhs_change_should_invalid,
                                                                 caml_call4(status_fun,init,status$0,record,record[1]),
                                                                 bind_lhs_change_should_invalid$0,
                                                                 record,
                                                                 _v$_),
                                                               stabilization_num$0,
                                                               record,
                                                               _v__),
                                                             current_scope$0,
                                                             record,
                                                             _v9_),
                                                           recompute_heap$0,
                                                           record,
                                                           _v8_),
                                                         adjust_heights_heap$0,
                                                         record,
                                                         _v7_),
                                                       propagate_invalidity$0,
                                                       record,
                                                       _v6_),
                                                     num_active_observers$0,
                                                     record,
                                                     _v5_),
                                                   all_observers$0,
                                                   record,
                                                   _v4_),
                                                 finalized_observers$0,
                                                 record,
                                                 _v3_),
                                               new_observers$0,
                                               record,
                                               _v2_),
                                             disallowed_observers$0,
                                             record,
                                             _v1_),
                                           set_during_stabilization$0,
                                           record,
                                           _v0_),
                                         handle_after_stabilization$0,
                                         record,
                                         _vZ_),
                                       run_on_update_handlers$1,
                                       record,
                                       _vY_),
                                     only_in_debug$0,
                                     record,
                                     _vX_),
                                   weak_hashtbls$0,
                                   record,
                                   _vW_),
                                 keep_node_creation_backtrace$0,
                                 record,
                                 _vV_),
                               num_nodes_became_necessary$0,
                               record,
                               _vU_),
                             num_nodes_became_unnecessary$0,
                             record,
                             _vT_),
                           num_nodes_changed$0,
                           record,
                           _vS_),
                         num_nodes_created$0,
                         record,
                         _vR_),
                       num_nodes_invalidated$0,
                       record,
                       _vQ_),
                     num_nodes_recomputed$0,
                     record,
                     _vP_),
                   num_nodes_recomputed_directly_$2,
                   record,
                   _vO_),
                 num_nodes_recomputed_directly_$1,
                 record,
                 _vN_),
               num_var_sets$0,
               record,
               _vM_)}
    function for_all$3
     (record,
      status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _vm_=caml_call3(status_fun,status$0,record,record[1]),
       _vn_=
        _vm_
         ?caml_call3
           (bind_lhs_change_should_invalid,
            bind_lhs_change_should_invalid$0,
            record,
            record[2])
         :_vm_,
       _vo_=
        _vn_
         ?caml_call3
           (stabilization_num_fun,stabilization_num$0,record,record[3])
         :_vn_,
       _vp_=
        _vo_
         ?caml_call3(current_scope_fun,current_scope$0,record,record[4])
         :_vo_,
       _vq_=
        _vp_
         ?caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5])
         :_vp_,
       _vr_=
        _vq_
         ?caml_call3
           (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6])
         :_vq_,
       _vs_=
        _vr_
         ?caml_call3
           (propagate_invalidity_fun,propagate_invalidity$0,record,record[7])
         :_vr_,
       _vt_=
        _vs_
         ?caml_call3
           (num_active_observers_fun,num_active_observers$0,record,record[8])
         :_vs_,
       _vu_=
        _vt_
         ?caml_call3(all_observers_fun,all_observers$0,record,record[9])
         :_vt_,
       _vv_=
        _vu_
         ?caml_call3
           (finalized_observers_fun,finalized_observers$0,record,record[10])
         :_vu_,
       _vw_=
        _vv_
         ?caml_call3(new_observers_fun,new_observers$0,record,record[11])
         :_vv_,
       _vx_=
        _vw_
         ?caml_call3
           (disallowed_observers_fun,disallowed_observers$0,record,record[12])
         :_vw_,
       _vy_=
        _vx_
         ?caml_call3
           (set_during_stabilization_fun,
            set_during_stabilization$0,
            record,
            record[13])
         :_vx_,
       _vz_=
        _vy_
         ?caml_call3
           (handle_after_stabilization_fun,
            handle_after_stabilization$0,
            record,
            record[14])
         :_vy_,
       _vA_=
        _vz_
         ?caml_call3
           (run_on_update_handlers_fun,
            run_on_update_handlers$1,
            record,
            record[15])
         :_vz_,
       _vB_=
        _vA_
         ?caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16])
         :_vA_,
       _vC_=
        _vB_
         ?caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17])
         :_vB_,
       _vD_=
        _vC_
         ?caml_call3
           (keep_node_creation_backtrace_f,
            keep_node_creation_backtrace$0,
            record,
            record[18])
         :_vC_,
       _vE_=
        _vD_
         ?caml_call3
           (num_nodes_became_necessary_fun,
            num_nodes_became_necessary$0,
            record,
            record[19])
         :_vD_,
       _vF_=
        _vE_
         ?caml_call3
           (num_nodes_became_unnecessary_f,
            num_nodes_became_unnecessary$0,
            record,
            record[20])
         :_vE_,
       _vG_=
        _vF_
         ?caml_call3
           (num_nodes_changed_fun,num_nodes_changed$0,record,record[21])
         :_vF_,
       _vH_=
        _vG_
         ?caml_call3
           (num_nodes_created_fun,num_nodes_created$0,record,record[22])
         :_vG_,
       _vI_=
        _vH_
         ?caml_call3
           (num_nodes_invalidated_fun,
            num_nodes_invalidated$0,
            record,
            record[23])
         :_vH_,
       _vJ_=
        _vI_
         ?caml_call3
           (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[24])
         :_vI_,
       _vK_=
        _vJ_
         ?caml_call3
           (num_nodes_recomputed_directly_$0,
            num_nodes_recomputed_directly_$2,
            record,
            record[25])
         :_vJ_,
       _vL_=
        _vK_
         ?caml_call3
           (num_nodes_recomputed_directly_,
            num_nodes_recomputed_directly_$1,
            record,
            record[26])
         :_vK_;
      return _vL_
              ?caml_call3(num_var_sets_fun,num_var_sets$0,record,record[27])
              :_vL_}
    function exists$3
     (record,
      status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _vl_=caml_call3(status_fun,status$0,record,record[1]),
       _uY_=
        _vl_
        ||
        caml_call3
         (bind_lhs_change_should_invalid,
          bind_lhs_change_should_invalid$0,
          record,
          record[2]),
       _uZ_=
        _uY_
        ||
        caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]),
       _u0_=
        _uZ_
        ||
        caml_call3(current_scope_fun,current_scope$0,record,record[4]),
       _u1_=
        _u0_
        ||
        caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
       _u2_=
        _u1_
        ||
        caml_call3
         (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
       _u3_=
        _u2_
        ||
        caml_call3
         (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
       _u4_=
        _u3_
        ||
        caml_call3
         (num_active_observers_fun,num_active_observers$0,record,record[8]),
       _u5_=
        _u4_
        ||
        caml_call3(all_observers_fun,all_observers$0,record,record[9]),
       _u6_=
        _u5_
        ||
        caml_call3
         (finalized_observers_fun,finalized_observers$0,record,record[10]),
       _u7_=
        _u6_
        ||
        caml_call3(new_observers_fun,new_observers$0,record,record[11]),
       _u8_=
        _u7_
        ||
        caml_call3
         (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
       _u9_=
        _u8_
        ||
        caml_call3
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          record,
          record[13]),
       _u__=
        _u9_
        ||
        caml_call3
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          record,
          record[14]),
       _u$_=
        _u__
        ||
        caml_call3
         (run_on_update_handlers_fun,
          run_on_update_handlers$1,
          record,
          record[15]),
       _va_=
        _u$_
        ||
        caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]),
       _vb_=
        _va_
        ||
        caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]),
       _vc_=
        _vb_
        ||
        caml_call3
         (keep_node_creation_backtrace_f,
          keep_node_creation_backtrace$0,
          record,
          record[18]),
       _vd_=
        _vc_
        ||
        caml_call3
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          record,
          record[19]),
       _ve_=
        _vd_
        ||
        caml_call3
         (num_nodes_became_unnecessary_f,
          num_nodes_became_unnecessary$0,
          record,
          record[20]),
       _vf_=
        _ve_
        ||
        caml_call3
         (num_nodes_changed_fun,num_nodes_changed$0,record,record[21]),
       _vg_=
        _vf_
        ||
        caml_call3
         (num_nodes_created_fun,num_nodes_created$0,record,record[22]),
       _vh_=
        _vg_
        ||
        caml_call3
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[23]),
       _vi_=
        _vh_
        ||
        caml_call3
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[24]),
       _vj_=
        _vi_
        ||
        caml_call3
         (num_nodes_recomputed_directly_$0,
          num_nodes_recomputed_directly_$2,
          record,
          record[25]),
       _vk_=
        _vj_
        ||
        caml_call3
         (num_nodes_recomputed_directly_,
          num_nodes_recomputed_directly_$1,
          record,
          record[26]);
      return _vk_
              ?_vk_
              :caml_call3(num_var_sets_fun,num_var_sets$0,record,record[27])}
    function to_list$3
     (record,
      status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _uy_=
        [0,caml_call3(num_var_sets_fun,num_var_sets$0,record,record[27]),0],
       _uz_=
        [0,
         caml_call3
          (num_nodes_recomputed_directly_,
           num_nodes_recomputed_directly_$1,
           record,
           record[26]),
         _uy_],
       _uA_=
        [0,
         caml_call3
          (num_nodes_recomputed_directly_$0,
           num_nodes_recomputed_directly_$2,
           record,
           record[25]),
         _uz_],
       _uB_=
        [0,
         caml_call3
          (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[24]),
         _uA_],
       _uC_=
        [0,
         caml_call3
          (num_nodes_invalidated_fun,
           num_nodes_invalidated$0,
           record,
           record[23]),
         _uB_],
       _uD_=
        [0,
         caml_call3
          (num_nodes_created_fun,num_nodes_created$0,record,record[22]),
         _uC_],
       _uE_=
        [0,
         caml_call3
          (num_nodes_changed_fun,num_nodes_changed$0,record,record[21]),
         _uD_],
       _uF_=
        [0,
         caml_call3
          (num_nodes_became_unnecessary_f,
           num_nodes_became_unnecessary$0,
           record,
           record[20]),
         _uE_],
       _uG_=
        [0,
         caml_call3
          (num_nodes_became_necessary_fun,
           num_nodes_became_necessary$0,
           record,
           record[19]),
         _uF_],
       _uH_=
        [0,
         caml_call3
          (keep_node_creation_backtrace_f,
           keep_node_creation_backtrace$0,
           record,
           record[18]),
         _uG_],
       _uI_=
        [0,
         caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]),
         _uH_],
       _uJ_=
        [0,
         caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]),
         _uI_],
       _uK_=
        [0,
         caml_call3
          (run_on_update_handlers_fun,
           run_on_update_handlers$1,
           record,
           record[15]),
         _uJ_],
       _uL_=
        [0,
         caml_call3
          (handle_after_stabilization_fun,
           handle_after_stabilization$0,
           record,
           record[14]),
         _uK_],
       _uM_=
        [0,
         caml_call3
          (set_during_stabilization_fun,
           set_during_stabilization$0,
           record,
           record[13]),
         _uL_],
       _uN_=
        [0,
         caml_call3
          (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
         _uM_],
       _uO_=
        [0,
         caml_call3(new_observers_fun,new_observers$0,record,record[11]),
         _uN_],
       _uP_=
        [0,
         caml_call3
          (finalized_observers_fun,finalized_observers$0,record,record[10]),
         _uO_],
       _uQ_=
        [0,
         caml_call3(all_observers_fun,all_observers$0,record,record[9]),
         _uP_],
       _uR_=
        [0,
         caml_call3
          (num_active_observers_fun,num_active_observers$0,record,record[8]),
         _uQ_],
       _uS_=
        [0,
         caml_call3
          (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
         _uR_],
       _uT_=
        [0,
         caml_call3
          (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
         _uS_],
       _uU_=
        [0,
         caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
         _uT_],
       _uV_=
        [0,
         caml_call3(current_scope_fun,current_scope$0,record,record[4]),
         _uU_],
       _uW_=
        [0,
         caml_call3
          (stabilization_num_fun,stabilization_num$0,record,record[3]),
         _uV_],
       _uX_=
        [0,
         caml_call3
          (bind_lhs_change_should_invalid,
           bind_lhs_change_should_invalid$0,
           record,
           record[2]),
         _uW_];
      return [0,caml_call3(status_fun,status$0,record,record[1]),_uX_]}
    function map$3
     (record,
      status_fun,
      bind_lhs_change_should_invalid,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      only_in_debug_fun,
      weak_hashtbls_fun,
      keep_node_creation_backtrace_f,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_f,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets_fun)
     {var
       _t__=caml_call3(num_var_sets_fun,num_var_sets$0,record,record[27]),
       _t$_=
        caml_call3
         (num_nodes_recomputed_directly_,
          num_nodes_recomputed_directly_$1,
          record,
          record[26]),
       _ua_=
        caml_call3
         (num_nodes_recomputed_directly_$0,
          num_nodes_recomputed_directly_$2,
          record,
          record[25]),
       _ub_=
        caml_call3
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[24]),
       _uc_=
        caml_call3
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[23]),
       _ud_=
        caml_call3
         (num_nodes_created_fun,num_nodes_created$0,record,record[22]),
       _ue_=
        caml_call3
         (num_nodes_changed_fun,num_nodes_changed$0,record,record[21]),
       _uf_=
        caml_call3
         (num_nodes_became_unnecessary_f,
          num_nodes_became_unnecessary$0,
          record,
          record[20]),
       _ug_=
        caml_call3
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          record,
          record[19]),
       _uh_=
        caml_call3
         (keep_node_creation_backtrace_f,
          keep_node_creation_backtrace$0,
          record,
          record[18]),
       _ui_=caml_call3(weak_hashtbls_fun,weak_hashtbls$0,record,record[17]),
       _uj_=caml_call3(only_in_debug_fun,only_in_debug$0,record,record[16]),
       _uk_=
        caml_call3
         (run_on_update_handlers_fun,
          run_on_update_handlers$1,
          record,
          record[15]),
       _ul_=
        caml_call3
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          record,
          record[14]),
       _um_=
        caml_call3
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          record,
          record[13]),
       _un_=
        caml_call3
         (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
       _uo_=caml_call3(new_observers_fun,new_observers$0,record,record[11]),
       _up_=
        caml_call3
         (finalized_observers_fun,finalized_observers$0,record,record[10]),
       _uq_=caml_call3(all_observers_fun,all_observers$0,record,record[9]),
       _ur_=
        caml_call3
         (num_active_observers_fun,num_active_observers$0,record,record[8]),
       _us_=
        caml_call3
         (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
       _ut_=
        caml_call3
         (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
       _uu_=caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
       _uv_=caml_call3(current_scope_fun,current_scope$0,record,record[4]),
       _uw_=
        caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]),
       _ux_=
        caml_call3
         (bind_lhs_change_should_invalid,
          bind_lhs_change_should_invalid$0,
          record,
          record[2]);
      return [0,
              caml_call3(status_fun,status$0,record,record[1]),
              _ux_,
              _uw_,
              _uv_,
              _uu_,
              _ut_,
              _us_,
              _ur_,
              _uq_,
              _up_,
              _uo_,
              _un_,
              _um_,
              _ul_,
              _uk_,
              _uj_,
              _ui_,
              _uh_,
              _ug_,
              _uf_,
              _ue_,
              _ud_,
              _uc_,
              _ub_,
              _ua_,
              _t$_,
              _t__]}
    function set_all_mutable_fields$0
     (record,
      status,
      stabilization_num,
      current_scope,
      num_active_observers,
      all_observers,
      only_in_debug,
      keep_node_creation_backtrace,
      num_nodes_became_necessary,
      num_nodes_became_unnecessary,
      num_nodes_changed,
      num_nodes_created,
      num_nodes_invalidated,
      num_nodes_recomputed,
      num_nodes_recomputed_directly_$0,
      num_nodes_recomputed_directly_,
      num_var_sets)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = status;
      record$0[3] = stabilization_num;
      record$0[4] = current_scope;
      record$0[8] = num_active_observers;
      record$0[9] = all_observers;
      record$0[16] = only_in_debug;
      record$0[18] = keep_node_creation_backtrace;
      record$0[19] = num_nodes_became_necessary;
      record$0[20] = num_nodes_became_unnecessary;
      record$0[21] = num_nodes_changed;
      record$0[22] = num_nodes_created;
      record$0[23] = num_nodes_invalidated;
      record$0[24] = num_nodes_recomputed;
      record$0[25] = num_nodes_recomputed_directly_$0;
      record$0[26] = num_nodes_recomputed_directly_;
      record$0[27] = num_var_sets;
      return 0}
    var
     Direct$0=
      [0,
       iter$3,
       fold$3,
       for_all$3,
       exists$3,
       to_list$3,
       map$3,
       set_all_mutable_fields$0],
     Fields$0=
      [0,
       names$0,
       num_var_sets$0,
       num_nodes_recomputed_directly_$1,
       num_nodes_recomputed_directly_$2,
       num_nodes_recomputed$0,
       num_nodes_invalidated$0,
       num_nodes_created$0,
       num_nodes_changed$0,
       num_nodes_became_unnecessary$0,
       num_nodes_became_necessary$0,
       keep_node_creation_backtrace$0,
       weak_hashtbls$0,
       only_in_debug$0,
       run_on_update_handlers$1,
       handle_after_stabilization$0,
       set_during_stabilization$0,
       disallowed_observers$0,
       new_observers$0,
       finalized_observers$0,
       all_observers$0,
       num_active_observers$0,
       propagate_invalidity$0,
       adjust_heights_heap$0,
       recompute_heap$0,
       current_scope$0,
       stabilization_num$0,
       bind_lhs_change_should_invalid$0,
       status$0,
       make_creator$0,
       create$12,
       map$2,
       iter$2,
       fold$2,
       map_poly$0,
       for_all$2,
       exists$2,
       to_list$2,
       Direct$0];
    function sexp_of_t$39(param)
     {var
       v_status=param[1],
       v_bind_lhs_change_should_inval=param[2],
       v_stabilization_num=param[3],
       v_current_scope=param[4],
       v_propagate_invalidity=param[7],
       v_adjust_heights_heap=param[6],
       v_recompute_heap=param[5],
       v_num_active_observers=param[8],
       v_all_observers=param[9],
       v_run_on_update_handlers=param[15],
       v_handle_after_stabilization=param[14],
       v_set_during_stabilization=param[13],
       v_disallowed_observers=param[12],
       v_new_observers=param[11],
       v_finalized_observers=param[10],
       v_only_in_debug=param[16],
       v_weak_hashtbls=param[17],
       v_keep_node_creation_backtrace=param[18],
       v_num_nodes_became_necessary=param[19],
       v_num_nodes_became_unnecessary=param[20],
       v_num_nodes_changed=param[21],
       v_num_nodes_created=param[22],
       v_num_nodes_invalidated=param[23],
       v_num_nodes_recomputed=param[24],
       v_num_nodes_recomputed_directl=param[25],
       v_num_nodes_recomputed_directl$0=param[26],
       v_num_var_sets=param[27],
       arg=caml_call1(Core_kernel[340],v_num_var_sets),
       bnds=[0,[1,[0,_lI_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[340],v_num_nodes_recomputed_directl$0),
       bnds$0=[0,[1,[0,_lJ_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[340],v_num_nodes_recomputed_directl),
       bnds$1=[0,[1,[0,_lK_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[340],v_num_nodes_recomputed),
       bnds$2=[0,[1,[0,_lL_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel[340],v_num_nodes_invalidated),
       bnds$3=[0,[1,[0,_lM_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[340],v_num_nodes_created),
       bnds$4=[0,[1,[0,_lN_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(Core_kernel[340],v_num_nodes_changed),
       bnds$5=[0,[1,[0,_lO_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call1(Core_kernel[340],v_num_nodes_became_unnecessary),
       bnds$6=[0,[1,[0,_lP_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Core_kernel[340],v_num_nodes_became_necessary),
       bnds$7=[0,[1,[0,_lQ_,[0,arg$7,0]]],bnds$6],
       arg$8=caml_call1(Core_kernel[289],v_keep_node_creation_backtrace),
       bnds$8=[0,[1,[0,_lR_,[0,arg$8,0]]],bnds$7],
       arg$9=
        caml_call2
         (Thread_safe_queue[1],Packed_weak_hashtbl$0[1],v_weak_hashtbls),
       bnds$9=[0,[1,[0,_lS_,[0,arg$9,0]]],bnds$8],
       arg$10=caml_call1(Only_in_debug$0[6],v_only_in_debug),
       bnds$10=[0,[1,[0,_lT_,[0,arg$10,0]]],bnds$9],
       arg$11=
        caml_call2
         (Core_kernel_Stack[2],
          Run_on_update_handlers$0[1],
          v_run_on_update_handlers),
       bnds$11=[0,[1,[0,_lU_,[0,arg$11,0]]],bnds$10],
       arg$12=
        caml_call2
         (Core_kernel_Stack[2],Packed$0[1],v_handle_after_stabilization),
       bnds$12=[0,[1,[0,_lV_,[0,arg$12,0]]],bnds$11],
       arg$13=
        caml_call2(Core_kernel_Stack[2],Packed[1],v_set_during_stabilization),
       bnds$13=[0,[1,[0,_lW_,[0,arg$13,0]]],bnds$12],
       arg$14=caml_call2(Core_kernel_Stack[2],_kz_[1],v_disallowed_observers),
       bnds$14=[0,[1,[0,_lX_,[0,arg$14,0]]],bnds$13],
       arg$15=caml_call2(Core_kernel_Stack[2],_kz_[1],v_new_observers),
       bnds$15=[0,[1,[0,_lY_,[0,arg$15,0]]],bnds$14],
       arg$16=caml_call2(Thread_safe_queue[1],_kz_[1],v_finalized_observers),
       bnds$16=[0,[1,[0,_lZ_,[0,arg$16,0]]],bnds$15],
       arg$17=caml_call2(Uopt[1],_kz_[1],v_all_observers),
       bnds$17=[0,[1,[0,_l0_,[0,arg$17,0]]],bnds$16],
       arg$18=caml_call1(Core_kernel[340],v_num_active_observers),
       bnds$18=[0,[1,[0,_l1_,[0,arg$18,0]]],bnds$17],
       arg$19=
        caml_call2(Core_kernel_Stack[2],Packed$0[1],v_propagate_invalidity),
       bnds$19=[0,[1,[0,_l2_,[0,arg$19,0]]],bnds$18],
       arg$20=sexp_of_t$31(v_adjust_heights_heap),
       bnds$20=[0,[1,[0,_l3_,[0,arg$20,0]]],bnds$19],
       arg$21=sexp_of_t$29(v_recompute_heap),
       bnds$21=[0,[1,[0,_l4_,[0,arg$21,0]]],bnds$20],
       arg$22=caml_call1(sexp_of_t$21,v_current_scope),
       bnds$22=[0,[1,[0,_l5_,[0,arg$22,0]]],bnds$21],
       arg$23=caml_call1(_s_,v_stabilization_num),
       bnds$23=[0,[1,[0,_l6_,[0,arg$23,0]]],bnds$22],
       arg$24=caml_call1(Core_kernel[289],v_bind_lhs_change_should_inval),
       bnds$24=[0,[1,[0,_l7_,[0,arg$24,0]]],bnds$23],
       arg$25=sexp_of_status(v_status),
       bnds$25=[0,[1,[0,_l8_,[0,arg$25,0]]],bnds$24];
      return [1,bnds$25]}
    function fired_alarm_values(r){return r[4]}
    function set_fired_alarm_values(r,v){r[4] = v;return 0}
    function handle_fired(r){return r[3]}
    function now$0(r){return r[2]}
    function timing_wheel(r){return r[1]}
    function _l9_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _l__=[0,set_fired_alarm_values],
     fired_alarm_values$0=
      [0,
       function(param){return 0},
       cst_fired_alarm_values,
       _l__,
       fired_alarm_values,
       _l9_];
    function _l$_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _ma_=0,
     handle_fired$0=
      [0,function(param){return 0},cst_handle_fired,_ma_,handle_fired,_l$_];
    function _mb_(r,v){return [0,r[1],v,r[3],r[4]]}
    var _mc_=0,now$1=[0,function(param){return 0},cst_now,_mc_,now$0,_mb_];
    function _md_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _me_=0,
     timing_wheel$0=
      [0,function(param){return 0},cst_timing_wheel,_me_,timing_wheel,_md_];
    function make_creator$1
     (timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      compile_acc)
     {var
       match=caml_call2(timing_wheel_fun,timing_wheel$0,compile_acc),
       compile_acc$0=match[2],
       timing_wheel_gen=match[1],
       match$0=caml_call2(now_fun,now$1,compile_acc$0),
       compile_acc$1=match$0[2],
       now_gen=match$0[1],
       match$1=caml_call2(handle_fired_fun,handle_fired$0,compile_acc$1),
       compile_acc$2=match$1[2],
       handle_fired_gen=match$1[1],
       match$2=
        caml_call2(fired_alarm_values_fun,fired_alarm_values$0,compile_acc$2),
       compile_acc$3=match$2[2],
       fired_alarm_values_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 timing_wheel=caml_call1(timing_wheel_gen,acc),
                 now=caml_call1(now_gen,acc),
                 handle_fired=caml_call1(handle_fired_gen,acc),
                 fired_alarm_values=caml_call1(fired_alarm_values_gen,acc);
                return [0,timing_wheel,now,handle_fired,fired_alarm_values]},
              compile_acc$3]}
    function create$13(timing_wheel,now,handle_fired,fired_alarm_values)
     {return [0,timing_wheel,now,handle_fired,fired_alarm_values]}
    function map$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _t7_=caml_call1(fired_alarm_values_fun,fired_alarm_values$0),
       _t8_=caml_call1(handle_fired_fun,handle_fired$0),
       _t9_=caml_call1(now_fun,now$1);
      return [0,caml_call1(timing_wheel_fun,timing_wheel$0),_t9_,_t8_,_t7_]}
    function iter$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {caml_call1(timing_wheel_fun,timing_wheel$0);
      caml_call1(now_fun,now$1);
      caml_call1(handle_fired_fun,handle_fired$0);
      return caml_call1(fired_alarm_values_fun,fired_alarm_values$0)}
    function fold$4
     (init,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {return caml_call2
              (fired_alarm_values_fun,
               caml_call2
                (handle_fired_fun,
                 caml_call2
                  (now_fun,
                   caml_call2(timing_wheel_fun,init,timing_wheel$0),
                   now$1),
                 handle_fired$0),
               fired_alarm_values$0)}
    function map_poly$1(record)
     {var
       _t4_=[0,caml_call1(record[1],fired_alarm_values$0),0],
       _t5_=[0,caml_call1(record[1],handle_fired$0),_t4_],
       _t6_=[0,caml_call1(record[1],now$1),_t5_];
      return [0,caml_call1(record[1],timing_wheel$0),_t6_]}
    function for_all$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _t1_=caml_call1(timing_wheel_fun,timing_wheel$0),
       _t2_=_t1_?caml_call1(now_fun,now$1):_t1_,
       _t3_=_t2_?caml_call1(handle_fired_fun,handle_fired$0):_t2_;
      return _t3_?caml_call1(fired_alarm_values_fun,fired_alarm_values$0):_t3_}
    function exists$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _t0_=caml_call1(timing_wheel_fun,timing_wheel$0),
       _tY_=_t0_ || caml_call1(now_fun,now$1),
       _tZ_=_tY_ || caml_call1(handle_fired_fun,handle_fired$0);
      return _tZ_?_tZ_:caml_call1(fired_alarm_values_fun,fired_alarm_values$0)}
    function to_list$4
     (timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tV_=[0,caml_call1(fired_alarm_values_fun,fired_alarm_values$0),0],
       _tW_=[0,caml_call1(handle_fired_fun,handle_fired$0),_tV_],
       _tX_=[0,caml_call1(now_fun,now$1),_tW_];
      return [0,caml_call1(timing_wheel_fun,timing_wheel$0),_tX_]}
    function iter$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]);
      caml_call3(now_fun,now$1,record,record[2]);
      caml_call3(handle_fired_fun,handle_fired$0,record,record[3]);
      return caml_call3
              (fired_alarm_values_fun,fired_alarm_values$0,record,record[4])}
    function fold$5
     (record,
      init,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun)
     {var _tS_=record[4],_tT_=record[3],_tU_=record[2];
      return caml_call4
              (fired_alarm_values_fun,
               caml_call4
                (handle_fired_fun,
                 caml_call4
                  (now_fun,
                   caml_call4
                    (timing_wheel_fun,init,timing_wheel$0,record,record[1]),
                   now$1,
                   record,
                   _tU_),
                 handle_fired$0,
                 record,
                 _tT_),
               fired_alarm_values$0,
               record,
               _tS_)}
    function for_all$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tP_=caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
       _tQ_=_tP_?caml_call3(now_fun,now$1,record,record[2]):_tP_,
       _tR_=
        _tQ_?caml_call3(handle_fired_fun,handle_fired$0,record,record[3]):_tQ_;
      return _tR_
              ?caml_call3
                (fired_alarm_values_fun,fired_alarm_values$0,record,record[4])
              :_tR_}
    function exists$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tO_=caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
       _tM_=_tO_ || caml_call3(now_fun,now$1,record,record[2]),
       _tN_=
        _tM_
        ||
        caml_call3(handle_fired_fun,handle_fired$0,record,record[3]);
      return _tN_
              ?_tN_
              :caml_call3
                (fired_alarm_values_fun,fired_alarm_values$0,record,record[4])}
    function to_list$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tJ_=
        [0,
         caml_call3
          (fired_alarm_values_fun,fired_alarm_values$0,record,record[4]),
         0],
       _tK_=
        [0,caml_call3(handle_fired_fun,handle_fired$0,record,record[3]),_tJ_],
       _tL_=[0,caml_call3(now_fun,now$1,record,record[2]),_tK_];
      return [0,
              caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
              _tL_]}
    function map$5
     (record,timing_wheel_fun,now_fun,handle_fired_fun,fired_alarm_values_fun)
     {var
       _tG_=
        caml_call3
         (fired_alarm_values_fun,fired_alarm_values$0,record,record[4]),
       _tH_=caml_call3(handle_fired_fun,handle_fired$0,record,record[3]),
       _tI_=caml_call3(now_fun,now$1,record,record[2]);
      return [0,
              caml_call3(timing_wheel_fun,timing_wheel$0,record,record[1]),
              _tI_,
              _tH_,
              _tG_]}
    function set_all_mutable_fields$1(record,fired_alarm_values)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[4] = fired_alarm_values;
      return 0}
    var
     Direct$1=
      [0,
       iter$5,
       fold$5,
       for_all$5,
       exists$5,
       to_list$5,
       map$5,
       set_all_mutable_fields$1],
     Fields$1=
      [0,
       names$1,
       fired_alarm_values$0,
       handle_fired$0,
       now$1,
       timing_wheel$0,
       make_creator$1,
       create$13,
       map$4,
       iter$4,
       fold$4,
       map_poly$1,
       for_all$4,
       exists$4,
       to_list$4,
       Direct$1];
    function sexp_of_t$40(param)
     {var
       v_now=param[2],
       v_timing_wheel=param[1],
       v_fired_alarm_values=param[4],
       arg=caml_call2(Uopt[1],sexp_of_t$32,v_fired_alarm_values),
       bnds=[0,[1,[0,_mf_,[0,arg,0]]],0];
      function _tE_(_tF_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_tE_),
       bnds$0=[0,[1,[0,_mg_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$9(Time_ns[88],v_now),
       bnds$1=[0,[1,[0,_mh_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Timing_wheel[2],sexp_of_t$32,v_timing_wheel),
       bnds$2=[0,[1,[0,_mi_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$29(t)
     {function _tx_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         _ty_=
          check
           (function(fired_alarm_values)
             {if(caml_call1(Uopt[5],fired_alarm_values))return 0;
              throw [0,Assert_failure,_mj_]});
        function _tz_(_tD_){return 0}
        var
         _tA_=
          check
           (function(now)
             {var _tC_=caml_call1(Timing_wheel[11],t[1]);
              if(caml_call2(Time_ns[21],now[1],_tC_))return 0;
              throw [0,Assert_failure,_mk_]}),
         _tB_=check(caml_call1(Timing_wheel[6],invariant$23));
        return caml_call4(Fields$1[9],_tB_,_tA_,_tz_,_ty_)}
      return caml_call4(Base_Invariant[1],_ml_,t,sexp_of_t$40,_tx_)}
    function incr_state$2(t){return incr_state(t[2])}
    var
     Clock$0=
      [0,
       fired_alarm_values,
       set_fired_alarm_values,
       handle_fired,
       now$0,
       timing_wheel,
       Fields$1,
       sexp_of_t$40,
       invariant$29,
       incr_state$2];
    function now$2(clock){return clock[2][1]}
    function timing_wheel_length(clock)
     {return caml_call1(Timing_wheel[14],clock[1])}
    function num_stabilizes(t){return caml_call1(_r_,t[3])}
    function max_height_allowed$1(t){return max_height_allowed$0(t[6])}
    function max_height_seen$1(t){return t[6][3]}
    function iter_observers(t,f)
     {var r=[0,t[9]];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var observer=caml_call1(Uopt[11],r[1]);
          r[1] = caml_call1(_kz_[3],observer);
          caml_call1(f,observer);
          continue}
        return 0}}
    function directly_observed(t)
     {var r=[0,0];
      iter_observers(t,function(param){r[1] = [0,param[2],r[1]];return 0});
      return r[1]}
    function save_dot$0(t,file)
     {var _tw_=directly_observed(t);return caml_call2(Packed$0[5],file,_tw_)}
    function iter_observer_descendants(t,f)
     {var _tv_=directly_observed(t);return caml_call2(Packed$0[4],_tv_,f)}
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       max_num_parents_field=[0,0],
       percentage_of_nodes_by_num_par=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _tk_=param[1];
          if(1 === _tk_[0])
           {var _tl_=_tk_[1];
            if(_tl_)
             {var _tm_=_tl_[1];
              if(0 === _tm_[0])
               {var _tn_=_tl_[2],_to_=_tm_[1],switch$0=0;
                if(! _tn_ || ! _tn_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_tu_)
                     {function field_sexp(param)
                       {if(_tu_)
                         {if(_tu_[2])throw [0,Assert_failure,_mm_];
                          var x=_tu_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_tn_);
                  if(caml_string_notequal(_to_,cst_max_num_parents))
                   if
                    (caml_string_notequal(_to_,cst_percentage_of_nodes_by_num))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_to_,extra[1]]}
                   else
                    if(percentage_of_nodes_by_num_par[1])
                     duplicates[1] = [0,_to_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       _tp_=
                        function(sexp)
                         {if(1 === sexp[0])
                           {var _ts_=sexp[1];
                            if(_ts_)
                             {var _tt_=_ts_[2];
                              if(_tt_ && ! _tt_[2])
                               {var
                                 v1=_tt_[1],
                                 v0=_ts_[1],
                                 v0$0=caml_call1(Core_kernel[341],v0),
                                 v1$0=caml_call1(Core_kernel_Percent[5],v1);
                                return [0,v0$0,v1$0]}}}
                          return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc,2,sexp)},
                       fvalue=caml_call2(Core_kernel[406],_tp_,field_sexp$0);
                      percentage_of_nodes_by_num_par[1] = [0,fvalue]}
                  else
                   if(max_num_parents_field[1])
                    duplicates[1] = [0,_to_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=caml_call1(Core_kernel[341],field_sexp$1);
                     max_num_parents_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_tk_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var
         _tq_=max_num_parents_field[1],
         _tr_=percentage_of_nodes_by_num_par[1];
        if(_tq_ && _tr_)
         {var
           percentage_of_nodes_by_num_par$0=_tr_[1],
           max_num_parents_value=_tq_[1];
          return [0,max_num_parents_value,percentage_of_nodes_by_num_par$0]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === max_num_parents_field[1]?1:0,cst_max_num_parents$0],
                  [0,
                   [0,
                    0 === percentage_of_nodes_by_num_par[1]?1:0,
                    cst_percentage_of_nodes_by_num$0],
                   0]])}}
    function sexp_of_t$41(param)
     {var
       v_percentage_of_nodes_by_num_p=param[2],
       v_max_num_parents=param[1],
       bnds=0;
      function _tj_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[340],v0),
         v1$0=caml_call1(Core_kernel_Percent[6],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg=caml_call2(Core_kernel[405],_tj_,v_percentage_of_nodes_by_num_p),
       bnds$0=[0,[1,[0,_mn_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[340],v_max_num_parents),
       bnds$1=[0,[1,[0,_mo_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    var Stats=[0,t_of_sexp$0,sexp_of_t$41];
    function stats(t)
     {var max_num_parents=[0,-1],num_necessary_nodes=[0,0];
      iter_observer_descendants
       (t,
        function(param)
         {num_necessary_nodes[1]++;
          max_num_parents[1]
          =
          caml_call2(include[114],max_num_parents[1],param[9]);
          return 0});
      var
       max_num_parents$0=max_num_parents[1],
       num_nodes_by_num_parents=
        caml_call2(Array[36],max_num_parents$0 + 1 | 0,0);
      iter_observer_descendants
       (t,
        function(param)
         {var
           num_parents=param[9],
           _ti_=
            caml_check_bound(num_nodes_by_num_parents,num_parents)
             [1 + num_parents]
            +
            1
            |
            0;
          caml_check_bound(num_nodes_by_num_parents,num_parents)
           [1 + num_parents]
          =
          _ti_;
          return 0});
      function _tg_(i,ac,num_nodes)
       {return caml_call2(symbol$1,num_nodes,0)
                ?ac
                :[0,
                  [0,
                   i,
                   caml_call1
                    (Core_kernel_Percent[67],num_nodes / num_necessary_nodes[1])],
                  ac]}
      var
       _th_=caml_call3(Array[56],num_nodes_by_num_parents,0,_tg_),
       percentage_of_nodes_by_num_par=caml_call1(Core_kernel_List[34],_th_);
      return [0,max_num_parents$0,percentage_of_nodes_by_num_par]}
    function am_stabilizing(t)
     {var _tf_=t[1];
      if(typeof _tf_ === "number")return 2 <= _tf_?0:1;
      var raised_exn=_tf_[1];
      return caml_call5
              (Core_kernel[221],
               0,
               _mp_,
               cst_cannot_call_am_stabilizing,
               raised_exn,
               sexp_of_t$6)}
    function invariant$30(t)
     {if(typeof t[1] === "number")
       {var
         _sq_=
          function(param)
           {function check(f){return caml_call2(Base_Invariant[2],t,f)}
            iter_observers
             (t,
              function(internal_observer)
               {var switcher=internal_observer[1] - 1 | 0;
                if(1 < switcher >>> 0)
                 {var
                   _tb_=function(param){return _mq_},
                   _tc_=
                    function(_te_){return sexp_of_internal_observer(_tb_,_te_)};
                  caml_call5
                   (Core_kernel[221],
                    0,
                    _mr_,
                    cst_member_of_all_observers_wi,
                    internal_observer,
                    _tc_)}
                return invariant$24
                        (function(_td_){return 0},internal_observer)});
            iter_observer_descendants
             (t,
              function(node)
               {invariant$18(function(_ta_){return 0},node);
                if(1 - am_stabilizing(t) && ! caml_call1(Uopt[5],node[20]))
                 throw [0,Assert_failure,_mt_];
                if(caml_call2(symbol$0,node[14],t[6][3]))return 0;
                throw [0,Assert_failure,_ms_]});
            var _sr_=max_height_allowed(t[5]);
            if(caml_call2(symbol$1,max_height_allowed$0(t[6]),_sr_))
             {var
               _ss_=function(_s$_){return 0},
               _st_=function(_s__){return 0},
               _su_=function(_s9_){return 0},
               _sv_=function(_s8_){return 0},
               _sw_=function(_s7_){return 0},
               _sx_=function(_s6_){return 0},
               _sy_=function(_s5_){return 0},
               _sz_=function(_s4_){return 0},
               _sA_=function(_s3_){return 0},
               _sB_=function(_s2_){return 0},
               _sC_=function(_s1_){return 0},
               _sD_=check(Only_in_debug$0[7]),
               _sE_=
                check
                 (caml_call1(Core_kernel_Stack[3],Run_on_update_handlers$0[2])),
               _sF_=check(caml_call1(Core_kernel_Stack[3],Packed$0[2])),
               _sG_=
                check
                 (function(set_during_stabilization)
                   {var _sZ_=t[1];
                    if(typeof _sZ_ === "number")
                     {if(_sZ_)
                       {if
                         (caml_call1(Core_kernel_Stack[6],set_during_stabilization))
                         return 0;
                        throw [0,Assert_failure,_mu_]}
                      var
                       _s0_=
                        function(param)
                         {if(caml_call1(Uopt[6],param[2]))return 0;
                          throw [0,Assert_failure,_mv_]};
                      return caml_call2
                              (Core_kernel_Stack[3],_s0_,set_during_stabilization)}
                    throw [0,Assert_failure,_mw_]}),
               _sH_=
                function(packed)
                 {caml_call1(_kz_[2],packed);
                  if(2 === packed[1])return 0;
                  throw [0,Assert_failure,_mx_]},
               _sI_=check(caml_call1(Core_kernel_Stack[3],_sH_)),
               _sJ_=
                function(packed)
                 {caml_call1(_kz_[2],packed);
                  var switcher=packed[1] - 1 | 0;
                  if(1 < switcher >>> 0)return 0;
                  throw [0,Assert_failure,_my_]},
               _sK_=check(caml_call1(Core_kernel_Stack[3],_sJ_)),
               _sL_=function(_sY_){return 0},
               _sM_=function(_sX_){return 0},
               _sN_=
                check
                 (function(num_active_observers)
                   {if(caml_call2(symbol,num_active_observers,0))return 0;
                    throw [0,Assert_failure,_mz_]}),
               _sO_=
                check
                 (function(propagate_invalidity)
                   {if(caml_call1(Core_kernel_Stack[6],propagate_invalidity))
                     return 0;
                    throw [0,Assert_failure,_mA_]}),
               _sP_=
                check
                 (function(adjust_heights_heap)
                   {if(caml_call2(symbol$1,adjust_heights_heap[1],0))
                     return invariant$22(adjust_heights_heap);
                    throw [0,Assert_failure,_mB_]}),
               _sQ_=check(invariant$20),
               _sR_=
                check
                 (function(current_scope)
                   {if(caml_call2(Core_kernel[231],current_scope,top))return 0;
                    throw [0,Assert_failure,_mC_]}),
               _sS_=check(invariant$2),
               _sT_=function(_sW_){return 0},
               _sU_=function(_sV_){return 0};
              return caml_call27
                      (Fields$0[32],
                       _sU_,
                       _sT_,
                       _sS_,
                       _sR_,
                       _sQ_,
                       _sP_,
                       _sO_,
                       _sN_,
                       _sM_,
                       _sL_,
                       _sK_,
                       _sI_,
                       _sG_,
                       _sF_,
                       _sE_,
                       _sD_,
                       _sC_,
                       _sB_,
                       _sA_,
                       _sz_,
                       _sy_,
                       _sx_,
                       _sw_,
                       _sv_,
                       _su_,
                       _st_,
                       _ss_)}
            throw [0,Assert_failure,_mD_]};
        return caml_call4(Base_Invariant[1],_mE_,t,sexp_of_t$39,_sq_)}
      return 0}
    function ensure_not_stabilizing(t,name,allow_in_update_handler)
     {var _si_=t[1];
      if(typeof _si_ === "number")
       switch(_si_)
        {case 0:
          var
           backtrace=caml_call2(Base_Backtrace[2],0,0),
           _sj_=Base_Backtrace[1],
           _sk_=caml_call2(Core_kernel[241],_mF_,name);
          return caml_call5(Core_kernel[221],0,_mG_,_sk_,backtrace,_sj_);
         case 1:
          var _sl_=1 - allow_in_update_handler;
          if(_sl_)
           {var
             backtrace$0=caml_call2(Base_Backtrace[2],0,0),
             _sm_=Base_Backtrace[1],
             _sn_=caml_call2(Core_kernel[241],_mH_,name);
            return caml_call5(Core_kernel[221],0,_mI_,_sn_,backtrace$0,_sm_)}
          return _sl_;
         default:return 0}
      var raised_exn=_si_[1],backtrace$1=caml_call2(Base_Backtrace[2],0,0);
      function _so_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=sexp_of_t$6(v0),
         v1$0=caml_call1(Base_Backtrace[1],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var _sp_=caml_call2(Core_kernel[241],_mJ_,name);
      return caml_call5
              (Core_kernel[221],0,_mK_,_sp_,[0,raised_exn,backtrace$1],_so_)}
    function set_height$1(node,height)
     {var t=node[2];return set_height$0(t[6],node,height)}
    function set_max_height_allowed$1(t,height)
     {ensure_not_stabilizing(t,cst_set_max_height_allowed,1);
      set_max_height_allowed$0(t[6],height);
      return set_max_height_allowed(t[5],height)}
    function handle_after_stabilization$1(node)
     {var _sh_=1 - node[22];
      if(_sh_)
       {var t=node[2];
        node[22] = 1;
        return caml_call2(Core_kernel_Stack[24],t[14],node)}
      return _sh_}
    function remove_child(child,parent,child_index)
     {remove_parent(child,parent,child_index);
      return check_if_unnecessary(child)}
    function check_if_unnecessary(node)
     {var _sg_=1 - caml_call1(is_necessary$1,node);
      return _sg_?became_unnecessary(node):_sg_}
    function became_unnecessary(node)
     {var t=node[2];
      t[20] = t[20] + 1 | 0;
      if(caml_call2(symbol$2,node[8],0))handle_after_stabilization$1(node);
      node[14] = -1;
      remove_children(node);
      var _se_=node[5],switch$0=0;
      if(typeof _se_ === "number")
       switch$0 = 1;
      else
       switch(_se_[0])
        {case 6:var p=_se_[1];observability_change(p,0);break;
         case 15:var u=_se_[1];force_full_compute(u);break;
         default:switch$0 = 1}
      var _sf_=is_in_recompute_heap(node);
      return _sf_?remove(t[5],node):_sf_}
    function remove_children(parent)
     {return iteri_children$0
              (parent,
               function(child_index,param)
                {return remove_child(param,parent,child_index)})}
    function remove_alarm(clock,alarm)
     {var _sd_=caml_call2(Timing_wheel[27],clock[1],alarm);
      return _sd_?caml_call2(Timing_wheel[28],clock[1],alarm):_sd_}
    function invalidate_nodes_created_on_rh(node)
     {var r=[0,node];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var match=caml_call1(Uopt[11],r[1]);
          r[1] = match[13];
          match[13] = Uopt[3];
          invalidate_node(match);
          continue}
        return 0}}
    function invalidate_node(node)
     {var _r7_=caml_call1(is_valid$2,node);
      if(_r7_)
       {var t=node[2];
        if(caml_call2(symbol$2,node[8],0))handle_after_stabilization$1(node);
        node[4] = Uopt[3];
        node[7] = t[3];
        node[3] = t[3];
        t[23] = t[23] + 1 | 0;
        if(caml_call1(is_necessary$1,node))
         {remove_children(node);node[14] = height(node[12]) + 1 | 0}
        var _r8_=node[5],switch$0=0;
        if(typeof _r8_ === "number")
         switch$0 = 1;
        else
         switch(_r8_[0])
          {case 1:var at=_r8_[1];remove_alarm(at[4],at[3]);break;
           case 2:
            var at_intervals=_r8_[1];
            remove_alarm(at_intervals[5],at_intervals[4]);
            break;
           case 4:
            var bind=_r8_[1];invalidate_nodes_created_on_rh(bind[7]);break;
           case 14:
            var match=_r8_[1],alarm=match[6],clock=match[8];
            remove_alarm(clock,alarm);
            break;
           default:switch$0 = 1}
        set_kind$0(node,0);
        var _r__=node[9] - 1 | 0,_r9_=0;
        if(! (_r__ < 0))
         {var index=_r9_;
          for(;;)
           {var _sb_=get_parent(node,index);
            caml_call2(Core_kernel_Stack[24],t[7],_sb_);
            var _sc_=index + 1 | 0;
            if(_r__ !== index){var index=_sc_;continue}
            break}}
        var _r$_=is_in_recompute_heap(node);
        if(_r$_)return remove(t[5],node);
        var _sa_=_r$_}
      else
       var _sa_=_r7_;
      return _sa_}
    function rescope_nodes_created_on_rhs(t,first_node_on_rhs,new_scope)
     {var r=[0,first_node_on_rhs];
      for(;;)
       {if(caml_call1(Uopt[6],r[1]))
         {var match=caml_call1(Uopt[11],r[1]);
          r[1] = match[13];
          match[13] = Uopt[3];
          match[12] = new_scope;
          add_node(new_scope,match);
          continue}
        return 0}}
    function propagate_invalidity$1(t)
     {for(;;)
       {if(caml_call1(Core_kernel_Stack[6],t[7]))return 0;
        var node=caml_call1(Core_kernel_Stack[26],t[7]);
        if(caml_call1(is_valid$2,node))
         if(should_be_invalidated(node))
          invalidate_node(node);
         else
          {var _r6_=node[5],switch$0=0;
           if(typeof _r6_ !== "number" && 6 === _r6_[0])
            {var expert=_r6_[1];incr_invalid_children(expert);switch$0 = 1}
           if(1 - is_in_recompute_heap(node))add$0(t[5],node)}
        continue}}
    function _mL_(node)
     {var
       _rZ_=caml_call1(is_valid$2,node),
       _r0_=_rZ_?1 - is_necessary$0(node[12]):_rZ_;
      if(_r0_)
       {var
         _r1_=function(param){return _mM_},
         _r2_=function(_r5_){return sexp_of_t$27(_r1_,_r5_)};
        caml_call5
         (Core_kernel[221],0,_mN_,cst_Trying_to_make_a_node_nece,node,_r2_)}
      var t=node[2];
      t[19] = t[19] + 1 | 0;
      if(caml_call2(symbol$2,node[8],0))handle_after_stabilization$1(node);
      set_height$1(node,height(node[12]) + 1 | 0);
      iteri_children$0
       (node,
        function(child_index,child)
         {add_parent_without_adjusting_h(child,node,child_index);
          var _r4_=caml_call2(symbol,child[14],node[14]);
          return _r4_?set_height$1(node,child[14] + 1 | 0):_r4_});
      if(is_stale(node))add$0(t[5],node);
      var _r3_=node[5];
      if(typeof _r3_ !== "number" && 6 === _r3_[0])
       {var p=_r3_[1];return observability_change(p,1)}
      return 0}
    function add_parent_without_adjusting_h(child,parent,child_index)
     {var t=child[2],was_necessary=caml_call1(is_necessary$1,child);
      add_parent(child,parent,child_index);
      if(1 - caml_call1(is_valid$2,child))
       caml_call2(Core_kernel_Stack[24],t[7],parent);
      if(1 - was_necessary)_mL_(child);
      var _rY_=parent[5];
      if(typeof _rY_ !== "number" && 6 === _rY_[0])
       {var e=_rY_[1];return run_edge_callback(e,child_index)}
      return 0}
    function became_necessary(node)
     {_mL_(node);return propagate_invalidity$1(node[2])}
    function add_parent$0(child,parent,child_index)
     {var t=parent[2];
      add_parent_without_adjusting_h(child,parent,child_index);
      if(caml_call2(symbol,child[14],parent[14]))
       adjust_heights(t[6],t[5],child,parent);
      propagate_invalidity$1(t);
      var _rV_=1 - is_in_recompute_heap(parent);
      if(_rV_)
       var _rW_=is_none(parent[3]),_rX_=_rW_ || edge_is_stale(child,parent);
      else
       var _rX_=_rV_;
      return _rX_?add$0(t[5],parent):_rX_}
    function run_with_scope(t,scope,f)
     {var saved=t[4];
      t[4] = scope;
      try
       {var v=caml_call1(f,0);t[4] = saved;return v}
      catch(exn){exn = caml_wrap_exception(exn);t[4] = saved;throw exn}}
    function within_scope(t,scope,f)
     {if(1 - is_valid$1(scope))
       caml_call5
        (Core_kernel[221],
         0,
         _mO_,
         cst_attempt_to_run_within_an_i,
         t,
         sexp_of_t$39);
      return run_with_scope(t,scope,f)}
    function change_child(parent,old_child,new_child,child_index)
     {if(caml_call1(Uopt[5],old_child))
       return add_parent$0(new_child,parent,child_index);
      var
       old_child$0=caml_call1(Uopt[11],old_child),
       _rU_=1 - caml_call2(Core_kernel[231],old_child$0,new_child);
      return _rU_
              ?(remove_parent(old_child$0,parent,child_index),
                old_child$0[26]
                =
                1,
                add_parent$0(new_child,parent,child_index),
                old_child$0[26]
                =
                0,
                check_if_unnecessary(old_child$0))
              :_rU_}
    function add_alarm(clock,at,alarm_value)
     {return caml_call3(Timing_wheel[25],clock[1],at,alarm_value)}
    function recompute(node)
     {var t=node[2];
      t[24] = t[24] + 1 | 0;
      node[3] = t[3];
      var _qd_=node[5];
      if(typeof _qd_ === "number")
       {if(0 === _qd_)throw [0,Assert_failure,_mP_];
        throw [0,Assert_failure,_mQ_]}
      else
       switch(_qd_[0])
        {case 0:
          var array_fold=_qd_[1];
          return maybe_change_value(node,compute$0(array_fold));
         case 1:return maybe_change_value(node,0);
         case 2:return maybe_change_value(node,0);
         case 3:
          var
           bind=_qd_[1],
           main=bind[1],
           f=bind[2],
           lhs=bind[3],
           old_rhs=bind[5],
           rhs_scope=bind[6],
           old_all_nodes_created_on_rhs=bind[7];
          bind[7] = Uopt[3];
          var
           rhs=
            run_with_scope
             (t,
              rhs_scope,
              function(param){return caml_call1(f,value_exn(lhs))});
          bind[5] = caml_call1(Uopt[4],rhs);
          node[7] = t[3];
          change_child(main,old_rhs,rhs,bind_rhs_child_index);
          if(caml_call1(Uopt[6],old_rhs))
           {if(t[2])
             invalidate_nodes_created_on_rh(old_all_nodes_created_on_rhs);
            else
             rescope_nodes_created_on_rhs
              (t,old_all_nodes_created_on_rhs,main[12]);
            propagate_invalidity$1(t)}
          return maybe_change_value(node,0);
         case 4:
          var match=_qd_[1],rhs$0=match[5];
          return copy_child(node,caml_call1(Uopt[7],rhs$0));
         case 5:var a=_qd_[1];return maybe_change_value(node,a);
         case 6:
          var expert=_qd_[1],match$0=before_main_computation(expert);
          return 144245463 <= match$0
                  ?(invalidate_node(node),propagate_invalidity$1(t))
                  :maybe_change_value(node,caml_call1(expert[1],0));
         case 7:
          var
           match$1=_qd_[1],
           only_freeze_when=match$1[3],
           child=match$1[2],
           value=value_exn(child);
          if(caml_call1(only_freeze_when,value))
           {remove_children(node);
            set_kind$0(node,[5,value]);
            if(caml_call1(is_necessary$1,node))
             set_height$1(node,0);
            else
             became_unnecessary(node)}
          return maybe_change_value(node,value);
         case 8:
          var
           if_then_else=_qd_[1],
           test=if_then_else[2],
           main$0=if_then_else[1],
           current_branch=if_then_else[4],
           else$0=if_then_else[6],
           then=if_then_else[5],
           desired_branch=value_exn(test)?then:else$0;
          if_then_else[4] = caml_call1(Uopt[4],desired_branch);
          node[7] = t[3];
          change_child
           (main$0,current_branch,desired_branch,if_branch_child_index);
          return maybe_change_value(node,0);
         case 9:
          var match$2=_qd_[1],current_branch$0=match$2[4];
          return copy_child(node,caml_call1(Uopt[7],current_branch$0));
         case 10:
          var
           join=_qd_[1],
           lhs$0=join[2],
           main$1=join[1],
           old_rhs$0=join[4],
           rhs$1=value_exn(lhs$0);
          join[4] = caml_call1(Uopt[4],rhs$1);
          node[7] = t[3];
          change_child(main$1,old_rhs$0,rhs$1,join_rhs_child_index);
          return maybe_change_value(node,0);
         case 11:
          var match$3=_qd_[1],rhs$2=match$3[4];
          return copy_child(node,caml_call1(Uopt[7],rhs$2));
         case 12:
          var n1=_qd_[2],f$0=_qd_[1];
          return maybe_change_value(node,caml_call1(f$0,value_exn(n1)));
         case 13:
          var match$4=_qd_[1],before=match$4[3];
          return maybe_change_value(node,before);
         case 14:
          var
           step_function_node=_qd_[1],
           child$0=step_function_node[2],
           clock=step_function_node[8];
          if(caml_call1(Uopt[6],child$0))
           {var child$1=caml_call1(Uopt[7],child$0);
            if
             (caml_call2
               (symbol$2,caml_call2(_w_,child$1[7],step_function_node[3]),0))
             {step_function_node[3] = child$1[7];
              remove_alarm(clock,step_function_node[6]);
              var
               step_function=value_exn(child$1),
               _qe_=caml_call1(Incremental_step_function[3],step_function);
              step_function_node[4] = caml_call1(Uopt[4],_qe_);
              step_function_node[5]
              =
              caml_call1(Incremental_step_function[4],step_function);
              if(is_const(child$1))
               {remove_children(node);
                step_function_node[2] = Uopt[3];
                set_height$1(node,height(node[12]) + 1 | 0)}}}
          advance(step_function_node,now$2(clock));
          var
           step_function_value=caml_call1(Uopt[7],step_function_node[4]),
           match$5=caml_call1(Core_kernel_Sequence[61],step_function_node[5]);
          if(match$5)
           {var match$6=match$5[1],at=match$6[1];
            step_function_node[6] = add_alarm(clock,at,step_function_node[7])}
          else
           if(caml_call1(Uopt[5],child$0))
            set_kind$0(node,[5,step_function_value]);
          return maybe_change_value(node,step_function_value);
         case 15:var u=_qd_[1];return maybe_change_value(node,compute(u));
         case 16:var var$0=_qd_[1];return maybe_change_value(node,var$0[1]);
         case 17:
          var n2=_qd_[3],n1$0=_qd_[2],f$1=_qd_[1],_qf_=value_exn(n2);
          return maybe_change_value(node,caml_call2(f$1,value_exn(n1$0),_qf_));
         case 18:
          var
           n3=_qd_[4],
           n2$0=_qd_[3],
           n1$1=_qd_[2],
           f$2=_qd_[1],
           _qg_=value_exn(n3),
           _qh_=value_exn(n2$0);
          return maybe_change_value
                  (node,caml_call3(f$2,value_exn(n1$1),_qh_,_qg_));
         case 19:
          var
           n4=_qd_[5],
           n3$0=_qd_[4],
           n2$1=_qd_[3],
           n1$2=_qd_[2],
           f$3=_qd_[1],
           _qi_=value_exn(n4),
           _qj_=value_exn(n3$0),
           _qk_=value_exn(n2$1);
          return maybe_change_value
                  (node,caml_call4(f$3,value_exn(n1$2),_qk_,_qj_,_qi_));
         case 20:
          var
           n5=_qd_[6],
           n4$0=_qd_[5],
           n3$1=_qd_[4],
           n2$2=_qd_[3],
           n1$3=_qd_[2],
           f$4=_qd_[1],
           _ql_=value_exn(n5),
           _qm_=value_exn(n4$0),
           _qn_=value_exn(n3$1),
           _qo_=value_exn(n2$2);
          return maybe_change_value
                  (node,caml_call5(f$4,value_exn(n1$3),_qo_,_qn_,_qm_,_ql_));
         case 21:
          var
           n6=_qd_[7],
           n5$0=_qd_[6],
           n4$1=_qd_[5],
           n3$2=_qd_[4],
           n2$3=_qd_[3],
           n1$4=_qd_[2],
           f$5=_qd_[1],
           _qp_=value_exn(n6),
           _qq_=value_exn(n5$0),
           _qr_=value_exn(n4$1),
           _qs_=value_exn(n3$2),
           _qt_=value_exn(n2$3);
          return maybe_change_value
                  (node,
                   caml_call6(f$5,value_exn(n1$4),_qt_,_qs_,_qr_,_qq_,_qp_));
         case 22:
          var
           n7=_qd_[8],
           n6$0=_qd_[7],
           n5$1=_qd_[6],
           n4$2=_qd_[5],
           n3$3=_qd_[4],
           n2$4=_qd_[3],
           n1$5=_qd_[2],
           f$6=_qd_[1],
           _qu_=value_exn(n7),
           _qv_=value_exn(n6$0),
           _qw_=value_exn(n5$1),
           _qx_=value_exn(n4$2),
           _qy_=value_exn(n3$3),
           _qz_=value_exn(n2$4);
          return maybe_change_value
                  (node,
                   caml_call7
                    (f$6,value_exn(n1$5),_qz_,_qy_,_qx_,_qw_,_qv_,_qu_));
         case 23:
          var
           n8=_qd_[9],
           n7$0=_qd_[8],
           n6$1=_qd_[7],
           n5$2=_qd_[6],
           n4$3=_qd_[5],
           n3$4=_qd_[4],
           n2$5=_qd_[3],
           n1$6=_qd_[2],
           f$7=_qd_[1],
           _qA_=value_exn(n8),
           _qB_=value_exn(n7$0),
           _qC_=value_exn(n6$1),
           _qD_=value_exn(n5$2),
           _qE_=value_exn(n4$3),
           _qF_=value_exn(n3$4),
           _qG_=value_exn(n2$5);
          return maybe_change_value
                  (node,
                   caml_call8
                    (f$7,value_exn(n1$6),_qG_,_qF_,_qE_,_qD_,_qC_,_qB_,_qA_));
         case 24:
          var
           n9=_qd_[10],
           n8$0=_qd_[9],
           n7$1=_qd_[8],
           n6$2=_qd_[7],
           n5$3=_qd_[6],
           n4$4=_qd_[5],
           n3$5=_qd_[4],
           n2$6=_qd_[3],
           n1$7=_qd_[2],
           f$8=_qd_[1],
           _qH_=value_exn(n9),
           _qI_=value_exn(n8$0),
           _qJ_=value_exn(n7$1),
           _qK_=value_exn(n6$2),
           _qL_=value_exn(n5$3),
           _qM_=value_exn(n4$4),
           _qN_=value_exn(n3$5),
           _qO_=value_exn(n2$6);
          return maybe_change_value
                  (node,
                   caml_call9
                    (f$8,
                     value_exn(n1$7),
                     _qO_,
                     _qN_,
                     _qM_,
                     _qL_,
                     _qK_,
                     _qJ_,
                     _qI_,
                     _qH_));
         case 25:
          var
           n10=_qd_[11],
           n9$0=_qd_[10],
           n8$1=_qd_[9],
           n7$2=_qd_[8],
           n6$3=_qd_[7],
           n5$4=_qd_[6],
           n4$5=_qd_[5],
           n3$6=_qd_[4],
           n2$7=_qd_[3],
           n1$8=_qd_[2],
           f$9=_qd_[1],
           _qP_=value_exn(n10),
           _qQ_=value_exn(n9$0),
           _qR_=value_exn(n8$1),
           _qS_=value_exn(n7$2),
           _qT_=value_exn(n6$3),
           _qU_=value_exn(n5$4),
           _qV_=value_exn(n4$5),
           _qW_=value_exn(n3$6),
           _qX_=value_exn(n2$7);
          return maybe_change_value
                  (node,
                   caml_call10
                    (f$9,
                     value_exn(n1$8),
                     _qX_,
                     _qW_,
                     _qV_,
                     _qU_,
                     _qT_,
                     _qS_,
                     _qR_,
                     _qQ_,
                     _qP_));
         case 26:
          var
           n11=_qd_[12],
           n10$0=_qd_[11],
           n9$1=_qd_[10],
           n8$2=_qd_[9],
           n7$3=_qd_[8],
           n6$4=_qd_[7],
           n5$5=_qd_[6],
           n4$6=_qd_[5],
           n3$7=_qd_[4],
           n2$8=_qd_[3],
           n1$9=_qd_[2],
           f$10=_qd_[1],
           _qY_=value_exn(n11),
           _qZ_=value_exn(n10$0),
           _q0_=value_exn(n9$1),
           _q1_=value_exn(n8$2),
           _q2_=value_exn(n7$3),
           _q3_=value_exn(n6$4),
           _q4_=value_exn(n5$5),
           _q5_=value_exn(n4$6),
           _q6_=value_exn(n3$7),
           _q7_=value_exn(n2$8);
          return maybe_change_value
                  (node,
                   caml_call11
                    (f$10,
                     value_exn(n1$9),
                     _q7_,
                     _q6_,
                     _q5_,
                     _q4_,
                     _q3_,
                     _q2_,
                     _q1_,
                     _q0_,
                     _qZ_,
                     _qY_));
         case 27:
          var
           n12=_qd_[13],
           n11$0=_qd_[12],
           n10$1=_qd_[11],
           n9$2=_qd_[10],
           n8$3=_qd_[9],
           n7$4=_qd_[8],
           n6$5=_qd_[7],
           n5$6=_qd_[6],
           n4$7=_qd_[5],
           n3$8=_qd_[4],
           n2$9=_qd_[3],
           n1$10=_qd_[2],
           f$11=_qd_[1],
           _q8_=value_exn(n12),
           _q9_=value_exn(n11$0),
           _q__=value_exn(n10$1),
           _q$_=value_exn(n9$2),
           _ra_=value_exn(n8$3),
           _rb_=value_exn(n7$4),
           _rc_=value_exn(n6$5),
           _rd_=value_exn(n5$6),
           _re_=value_exn(n4$7),
           _rf_=value_exn(n3$8),
           _rg_=value_exn(n2$9);
          return maybe_change_value
                  (node,
                   caml_call12
                    (f$11,
                     value_exn(n1$10),
                     _rg_,
                     _rf_,
                     _re_,
                     _rd_,
                     _rc_,
                     _rb_,
                     _ra_,
                     _q$_,
                     _q__,
                     _q9_,
                     _q8_));
         case 28:
          var
           n13=_qd_[14],
           n12$0=_qd_[13],
           n11$1=_qd_[12],
           n10$2=_qd_[11],
           n9$3=_qd_[10],
           n8$4=_qd_[9],
           n7$5=_qd_[8],
           n6$6=_qd_[7],
           n5$7=_qd_[6],
           n4$8=_qd_[5],
           n3$9=_qd_[4],
           n2$10=_qd_[3],
           n1$11=_qd_[2],
           f$12=_qd_[1],
           _rh_=value_exn(n13),
           _ri_=value_exn(n12$0),
           _rj_=value_exn(n11$1),
           _rk_=value_exn(n10$2),
           _rl_=value_exn(n9$3),
           _rm_=value_exn(n8$4),
           _rn_=value_exn(n7$5),
           _ro_=value_exn(n6$6),
           _rp_=value_exn(n5$7),
           _rq_=value_exn(n4$8),
           _rr_=value_exn(n3$9),
           _rs_=value_exn(n2$10);
          return maybe_change_value
                  (node,
                   caml_call13
                    (f$12,
                     value_exn(n1$11),
                     _rs_,
                     _rr_,
                     _rq_,
                     _rp_,
                     _ro_,
                     _rn_,
                     _rm_,
                     _rl_,
                     _rk_,
                     _rj_,
                     _ri_,
                     _rh_));
         case 29:
          var
           n14=_qd_[15],
           n13$0=_qd_[14],
           n12$1=_qd_[13],
           n11$2=_qd_[12],
           n10$3=_qd_[11],
           n9$4=_qd_[10],
           n8$5=_qd_[9],
           n7$6=_qd_[8],
           n6$7=_qd_[7],
           n5$8=_qd_[6],
           n4$9=_qd_[5],
           n3$10=_qd_[4],
           n2$11=_qd_[3],
           n1$12=_qd_[2],
           f$13=_qd_[1],
           _rt_=value_exn(n14),
           _ru_=value_exn(n13$0),
           _rv_=value_exn(n12$1),
           _rw_=value_exn(n11$2),
           _rx_=value_exn(n10$3),
           _ry_=value_exn(n9$4),
           _rz_=value_exn(n8$5),
           _rA_=value_exn(n7$6),
           _rB_=value_exn(n6$7),
           _rC_=value_exn(n5$8),
           _rD_=value_exn(n4$9),
           _rE_=value_exn(n3$10),
           _rF_=value_exn(n2$11);
          return maybe_change_value
                  (node,
                   caml_call14
                    (f$13,
                     value_exn(n1$12),
                     _rF_,
                     _rE_,
                     _rD_,
                     _rC_,
                     _rB_,
                     _rA_,
                     _rz_,
                     _ry_,
                     _rx_,
                     _rw_,
                     _rv_,
                     _ru_,
                     _rt_));
         default:
          var
           n15=_qd_[16],
           n14$0=_qd_[15],
           n13$1=_qd_[14],
           n12$2=_qd_[13],
           n11$3=_qd_[12],
           n10$4=_qd_[11],
           n9$5=_qd_[10],
           n8$6=_qd_[9],
           n7$7=_qd_[8],
           n6$8=_qd_[7],
           n5$9=_qd_[6],
           n4$10=_qd_[5],
           n3$11=_qd_[4],
           n2$12=_qd_[3],
           n1$13=_qd_[2],
           f$14=_qd_[1],
           _rG_=value_exn(n15),
           _rH_=value_exn(n14$0),
           _rI_=value_exn(n13$1),
           _rJ_=value_exn(n12$2),
           _rK_=value_exn(n11$3),
           _rL_=value_exn(n10$4),
           _rM_=value_exn(n9$5),
           _rN_=value_exn(n8$6),
           _rO_=value_exn(n7$7),
           _rP_=value_exn(n6$8),
           _rQ_=value_exn(n5$9),
           _rR_=value_exn(n4$10),
           _rS_=value_exn(n3$11),
           _rT_=value_exn(n2$12);
          return maybe_change_value
                  (node,
                   caml_call15
                    (f$14,
                     value_exn(n1$13),
                     _rT_,
                     _rS_,
                     _rR_,
                     _rQ_,
                     _rP_,
                     _rO_,
                     _rN_,
                     _rM_,
                     _rL_,
                     _rK_,
                     _rJ_,
                     _rI_,
                     _rH_,
                     _rG_))}}
    function copy_child(parent,child)
     {return caml_call1(is_valid$2,child)
              ?maybe_change_value(parent,value_exn(child))
              :(invalidate_node(parent),propagate_invalidity$1(parent[2]))}
    function maybe_change_value(node,new_value)
     {var
       t=node[2],
       old_value_opt=node[4],
       _pX_=caml_call1(Uopt[5],old_value_opt);
      if(_pX_)
       var _pY_=_pX_;
      else
       var
        _qc_=caml_call1(Uopt[11],old_value_opt),
        _pY_=1 - should_cutoff(node[6],_qc_,new_value);
      if(_pY_)
       {node[4] = caml_call1(Uopt[4],new_value);
        node[7] = t[3];
        t[21] = t[21] + 1 | 0;
        if(caml_call2(symbol$2,node[8],0))
         {node[20] = old_value_opt;handle_after_stabilization$1(node)}
        if(caml_call2(symbol,node[9],1))
         {var _p0_=node[9] - 1 | 0,_pZ_=1;
          if(! (_p0_ < 1))
           {var parent_index=_pZ_;
            for(;;)
             {var
               _p__=parent_index - 1 | 0,
               _p$_=caml_check_bound(node[10],_p__)[1 + _p__],
               parent$0=caml_call1(Uopt[7],_p$_),
               _qa_=parent$0[5],
               switch$0=0;
              if(typeof _qa_ === "number")
               switch$0 = 1;
              else
               switch(_qa_[0])
                {case 6:
                  var
                   expert=_qa_[1],
                   child_index$0=
                    caml_check_bound(node[25],parent_index)[1 + parent_index];
                  run_edge_callback(expert,child_index$0);
                  break;
                 case 15:
                  var u$0=_qa_[1];
                  child_changed
                   (u$0,
                    node,
                    caml_check_bound(node[25],parent_index)[1 + parent_index],
                    old_value_opt,
                    new_value);
                  break;
                 default:switch$0 = 1}
              if(1 - is_in_recompute_heap(parent$0))add$0(t[5],parent$0);
              var _qb_=parent_index + 1 | 0;
              if(_p0_ !== parent_index){var parent_index=_qb_;continue}
              break}}
          var parent=caml_call1(Uopt[7],node[11]),_p1_=parent[5],switch$1=0;
          if(typeof _p1_ === "number")
           switch$1 = 1;
          else
           switch(_p1_[0])
            {case 6:
              var p=_p1_[1],child_index=caml_check_bound(node[25],0)[1];
              run_edge_callback(p,child_index);
              break;
             case 15:
              var u=_p1_[1];
              child_changed
               (u,
                node,
                caml_check_bound(node[25],0)[1],
                old_value_opt,
                new_value);
              break;
             default:switch$1 = 1}
          if(1 - is_in_recompute_heap(parent))
           {var _p2_=parent[5],switch$2=0;
            if(typeof _p2_ === "number")
             {if(1 === _p2_)throw [0,Assert_failure,_mS_];switch$2 = 1}
            else
             switch(_p2_[0])
              {case 1:throw [0,Assert_failure,_mT_];
               case 2:throw [0,Assert_failure,_mU_];
               case 3:
                var
                 _p4_=height(parent[12]),
                 can_recompute_now=caml_call2(symbol$2,node[14],_p4_);
                break;
               case 4:
                var
                 b=_p2_[1],
                 can_recompute_now=caml_call2(symbol$2,node[14],b[4][14]);
                break;
               case 7:
                var
                 _p5_=height(parent[12]),
                 can_recompute_now=caml_call2(symbol$2,node[14],_p5_);
                break;
               case 8:
                var
                 _p6_=height(parent[12]),
                 can_recompute_now=caml_call2(symbol$2,node[14],_p6_);
                break;
               case 9:
                var
                 i=_p2_[1],
                 can_recompute_now=caml_call2(symbol$2,node[14],i[3][14]);
                break;
               case 10:
                var
                 _p7_=height(parent[12]),
                 can_recompute_now=caml_call2(symbol$2,node[14],_p7_);
                break;
               case 11:
                var
                 j=_p2_[1],
                 can_recompute_now=caml_call2(symbol$2,node[14],j[3][14]);
                break;
               case 12:
                var
                 _p8_=height(parent[12]),
                 can_recompute_now=caml_call2(symbol$2,node[14],_p8_);
                break;
               case 14:
                var
                 _p9_=height(parent[12]),
                 can_recompute_now=caml_call2(symbol$2,node[14],_p9_);
                break;
               case 5:
               case 13:
               case 16:switch$2 = 1;break;
               default:var can_recompute_now=0}
            if(switch$2)throw [0,Assert_failure,_mR_];
            if(can_recompute_now)
             {t[25] = t[25] + 1 | 0;recompute(parent)}
            else
             {var _p3_=min_height(t[5]);
              if(caml_call2(symbol$0,parent[14],_p3_))
               {t[26] = t[26] + 1 | 0;recompute(parent)}
              else
               add$0(t[5],parent)}}}}
      return debug}
    function recompute_everything_that_is_n(t)
     {var r=t[5];
      for(;;)
       {if(caml_call2(symbol$2,r[1],0))
         {var node=remove_min(r);recompute(node);continue}
        return debug}}
    function unlink_disallowed_observers(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Core_kernel_Stack[5],t[12]),0))
         {var internal_observer=caml_call1(Core_kernel_Stack[26],t[12]);
          internal_observer[1] = 3;
          var all_observers=caml_call1(Uopt[7],t[9]);
          if(same$2(internal_observer,all_observers))
           t[9] = internal_observer[5];
          unlink$0(internal_observer);
          check_if_unnecessary(internal_observer[2]);
          continue}
        return 0}}
    function disallow_future_use(internal_observer)
     {var t=incr_state$0(internal_observer),_pW_=internal_observer[1];
      return 1 === _pW_
              ?(t[8]
                =
                t[8]
                -
                1
                |
                0,
                internal_observer[1]
                =
                2,
                caml_call2(Core_kernel_Stack[24],t[12],internal_observer))
              :_pW_
                ?0
                :(t[8]
                  =
                  t[8]
                  -
                  1
                  |
                  0,
                  internal_observer[1]
                  =
                  3,
                  internal_observer[3]
                  =
                  0,
                  0)}
    function disallow_finalized_observers(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Thread_safe_queue[4],t[10]),0))
         {var internal_observer=caml_call1(Thread_safe_queue[6],t[10]);
          if(caml_call1(Core_kernel_List[8],internal_observer[3]))
           disallow_future_use(internal_observer);
          continue}
        return 0}}
    function observer_finalizer(t)
     {function _pV_(observer)
       {var internal_observer=observer[1];
        return caml_call2(Thread_safe_queue[5],t[10],internal_observer)}
      return caml_call1(Core_kernel[242],_pV_)}
    function observe(opt,observing)
     {if(opt)var sth=opt[1],should_finalize=sth;else var should_finalize=1;
      var
       t=observing[2],
       internal_observer=[0,0,observing,0,Uopt[3],Uopt[3],Uopt[3],Uopt[3]];
      caml_call2(Core_kernel_Stack[24],t[11],internal_observer);
      var observer=[0,internal_observer];
      if(should_finalize)
       {var _pT_=observer_finalizer(t),_pU_=caml_call1(Core_kernel[243],_pT_);
        caml_call2(Core_kernel_Gc[10][2],observer,_pU_)}
      t[8] = t[8] + 1 | 0;
      return observer}
    function add_new_observers(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Core_kernel_Stack[5],t[11]),0))
         {var
           internal_observer=caml_call1(Core_kernel_Stack[26],t[11]),
           _pO_=internal_observer[1];
          if(_pO_)
           {if(! (3 <= _pO_))throw [0,Assert_failure,_mV_]}
          else
           {internal_observer[1] = 1;
            var old_all_observers=t[9];
            if(caml_call1(Uopt[6],old_all_observers))
             {internal_observer[5] = old_all_observers;
              var
               _pP_=caml_call1(Uopt[4],internal_observer),
               _pQ_=caml_call1(Uopt[11],old_all_observers);
              caml_call2(_kz_[4],_pQ_,_pP_)}
            t[9] = caml_call1(Uopt[4],internal_observer);
            var
             observing=internal_observer[2],
             was_necessary=caml_call1(is_necessary$1,observing),
             _pR_=caml_call1(Core_kernel_List[7],internal_observer[3]);
            observing[8] = observing[8] + _pR_ | 0;
            var old_observers=observing[21];
            if(caml_call1(Uopt[6],old_observers))
             {internal_observer[7] = old_observers;
              var _pS_=caml_call1(Uopt[4],internal_observer);
              caml_call1(Uopt[11],old_observers)[6] = _pS_}
            observing[21] = caml_call1(Uopt[4],internal_observer);
            handle_after_stabilization$1(observing);
            if(1 - was_necessary)became_necessary(observing)}
          continue}
        return 0}}
    function observer_value_exn(observer)
     {var t=incr_state$1(observer),_pK_=t[1];
      if(typeof _pK_ === "number")
       {if(_pK_)return value_exn$1(observer);
        var
         _pL_=function(param){return _mW_},
         _pM_=function(_pN_){return sexp_of_t$35(_pL_,_pN_)};
        return caml_call5
                (Core_kernel[221],
                 0,
                 _mX_,
                 cst_Observer_value_exn_called_$1,
                 observer,
                 _pM_)}
      var raised_exn=_pK_[1];
      return caml_call5
              (Core_kernel[221],
               0,
               _mY_,
               cst_Observer_value_exn_called_$2,
               raised_exn,
               sexp_of_t$6)}
    function observer_value(observer)
     {try
       {var _pJ_=[0,observer_value_exn(observer)];return _pJ_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return [1,caml_call2(Core_kernel_Error[22],0,exn)]}}
    function on_update$0(node,f)
     {var t=node[2];
      on_update(node,create$1(f,t[3]));
      return handle_after_stabilization$1(node)}
    function observer_on_update_exn(observer,f)
     {var t=incr_state$1(observer);
      on_update_exn$0(observer,create$1(f,t[3]));
      return handle_after_stabilization$1(observing$1(observer))}
    function set_var_while_not_stabilizing(var$0,value)
     {var t=incr_state(var$0);
      t[27] = t[27] + 1 | 0;
      var$0[1] = value;
      var _pF_=caml_call2(symbol$3,caml_call2(_w_,var$0[3],t[3]),0);
      if(_pF_)
       {var$0[3] = t[3];
        var
         watch=var$0[4],
         _pG_=caml_call1(is_necessary$1,watch),
         _pH_=_pG_?1 - is_in_recompute_heap(watch):_pG_;
        if(_pH_)return add$0(t[5],watch);
        var _pI_=_pH_}
      else
       var _pI_=_pF_;
      return _pI_}
    function set(var$0,value)
     {var t=incr_state(var$0),_pE_=t[1];
      if(typeof _pE_ === "number")
       {if(_pE_)return set_var_while_not_stabilizing(var$0,value);
        if(caml_call1(Uopt[5],var$0[2]))
         caml_call2(Core_kernel_Stack[24],t[13],var$0);
        var$0[2] = caml_call1(Uopt[4],value);
        return 0}
      var raised_exn=_pE_[1];
      return caml_call5
              (Core_kernel[221],
               0,
               _mZ_,
               cst_cannot_set_var_stabilizati,
               raised_exn,
               sexp_of_t$6)}
    function reclaim_space_in_weak_hashtbls(t)
     {for(;;)
       {if(caml_call2(symbol$2,caml_call1(Thread_safe_queue[4],t[17]),0))
         {var
           match=caml_call1(Thread_safe_queue[6],t[17]),
           weak_hashtbl=match[1];
          caml_call1(Weak_hashtbl[11],weak_hashtbl);
          continue}
        return 0}}
    function stabilize(t)
     {ensure_not_stabilizing(t,cst_stabilize,0);
      try
       {t[1] = 0;
        disallow_finalized_observers(t);
        add_new_observers(t);
        unlink_disallowed_observers(t);
        recompute_everything_that_is_n(t);
        t[3] = add1(t[3]);
        for(;;)
         {if(caml_call1(Core_kernel_Stack[6],t[13]))
           for(;;)
            {if(caml_call1(Core_kernel_Stack[6],t[14]))
              {t[1] = 1;
               var now=t[3];
               for(;;)
                {if(caml_call1(Core_kernel_Stack[6],t[15]))
                  {t[1] = 2;
                   var _pC_=reclaim_space_in_weak_hashtbls(t);
                   return _pC_}
                 var
                  match=caml_call1(Core_kernel_Stack[26],t[15]),
                  node_update=match[2],
                  node=match[1];
                 run_on_update_handlers(node,node_update,now);
                 continue}}
             var node$0=caml_call1(Core_kernel_Stack[26],t[14]);
             node$0[22] = 0;
             var old_value=node$0[20];
             node$0[20] = Uopt[3];
             if(caml_call1(is_valid$2,node$0))
              if(caml_call1(is_necessary$1,node$0))
               var
                new_value=caml_call1(Uopt[7],node$0[4]),
                _pD_=
                 caml_call1(Uopt[5],old_value)
                  ?[0,new_value]
                  :[1,caml_call1(Uopt[11],old_value),new_value],
                node_update$0=_pD_;
              else
               var node_update$0=1;
             else
              var node_update$0=0;
             caml_call2(Core_kernel_Stack[24],t[15],[0,node$0,node_update$0]);
             continue}
          var
           var$0=caml_call1(Core_kernel_Stack[26],t[13]),
           value=caml_call1(Uopt[7],var$0[2]);
          var$0[2] = Uopt[3];
          set_var_while_not_stabilizing(var$0,value);
          continue}}
      catch(exn)
       {exn = caml_wrap_exception(exn);t[1] = [0,create$2(exn)];throw exn}}
    function create_node_in(t,created_in,kind)
     {t[22] = t[22] + 1 | 0;return create$5(t,created_in,kind)}
    function create_node(t,kind){return create_node_in(t,t[4],kind)}
    function create_node_top(t,kind){return create_node_in(t,top,kind)}
    function create$14(t,opt,value)
     {if(opt)
       var sth=opt[1],use_current_scope=sth;
      else
       var use_current_scope=0;
      var
       scope=use_current_scope?t[4]:top,
       watch=create_node_in(t,scope,1),
       var$0=[0,value,Uopt[3],t[3],watch];
      set_kind$0(watch,[16,var$0]);
      return var$0}
    function const$0(t,a){return create_node(t,[5,a])}
    function map$6(n,f){return create_node(n[2],[12,f,n])}
    function map2(n1,n2,f){return create_node(n1[2],[17,f,n1,n2])}
    function map3(n1,n2,n3,f){return create_node(n1[2],[18,f,n1,n2,n3])}
    function map4(n1,n2,n3,n4,f){return create_node(n1[2],[19,f,n1,n2,n3,n4])}
    function map5(n1,n2,n3,n4,n5,f)
     {return create_node(n1[2],[20,f,n1,n2,n3,n4,n5])}
    function map6(n1,n2,n3,n4,n5,n6,f)
     {return create_node(n1[2],[21,f,n1,n2,n3,n4,n5,n6])}
    function map7(n1,n2,n3,n4,n5,n6,n7,f)
     {return create_node(n1[2],[22,f,n1,n2,n3,n4,n5,n6,n7])}
    function map8(n1,n2,n3,n4,n5,n6,n7,n8,f)
     {return create_node(n1[2],[23,f,n1,n2,n3,n4,n5,n6,n7,n8])}
    function map9(n1,n2,n3,n4,n5,n6,n7,n8,n9,f)
     {return create_node(n1[2],[24,f,n1,n2,n3,n4,n5,n6,n7,n8,n9])}
    function map10(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,f)
     {return create_node(n1[2],[25,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10])}
    function map11(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,f)
     {return create_node(n1[2],[26,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11])}
    function map12(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,f)
     {return create_node(n1[2],[27,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12])}
    function map13(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,f)
     {return create_node
              (n1[2],[28,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13])}
    function map14(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,f)
     {return create_node
              (n1[2],[29,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14])}
    function map15(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,f)
     {return create_node
              (n1[2],
               [30,f,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15])}
    function preserve_cutoff(input,output)
     {return set_cutoff$0
              (output,
               [2,
                function(param,_pB_)
                 {return caml_call2(_v_,input[7],output[7])}])}
    function depend_on(input,depend_on)
     {var output=map2(input,depend_on,function(a,param){return a});
      preserve_cutoff(input,output);
      return output}
    function necessary_if_alive(input)
     {var
       observer=observe(0,input),
       output=
        map$6
         (input,function(a){caml_call1(Core_kernel_Gc[5],observer);return a});
      preserve_cutoff(input,output);
      return output}
    function bind(lhs,f)
     {var
       t=lhs[2],
       lhs_change=create_node(t,1),
       main=create_node(t,1),
       bind=[0,main,f,lhs,lhs_change,Uopt[3],top,Uopt[3]];
      set_cutoff$0(lhs_change,never);
      bind[6] = [0,bind];
      set_kind$0(lhs_change,[3,bind]);
      set_kind$0(main,[4,bind]);
      return main}
    function bind2(n1,n2,f)
     {function _pA_(param)
       {var v2=param[2],v1=param[1];return caml_call2(f,v1,v2)}
      return bind(map2(n1,n2,function(v1,v2){return [0,v1,v2]}),_pA_)}
    function bind3(n1,n2,n3,f)
     {function _pz_(param)
       {var v3=param[3],v2=param[2],v1=param[1];return caml_call3(f,v1,v2,v3)}
      return bind(map3(n1,n2,n3,function(v1,v2,v3){return [0,v1,v2,v3]}),_pz_)}
    function bind4(n1,n2,n3,n4,f)
     {function _py_(param)
       {var v4=param[4],v3=param[3],v2=param[2],v1=param[1];
        return caml_call4(f,v1,v2,v3,v4)}
      return bind
              (map4(n1,n2,n3,n4,function(v1,v2,v3,v4){return [0,v1,v2,v3,v4]}),
               _py_)}
    function join(lhs)
     {var
       t=lhs[2],
       lhs_change=create_node(t,1),
       main=create_node(t,1),
       join=[0,main,lhs,lhs_change,Uopt[3]];
      set_cutoff$0(lhs_change,never);
      set_kind$0(lhs_change,[10,join]);
      set_kind$0(main,[11,join]);
      return main}
    function if$0(test,then,else$0)
     {var
       t=test[2],
       test_change=create_node(t,1),
       main=create_node(t,1),
       if_then_else=[0,main,test,test_change,Uopt[3],then,else$0];
      set_cutoff$0(test_change,never);
      set_kind$0(test_change,[8,if_then_else]);
      set_kind$0(main,[9,if_then_else]);
      return main}
    function lazy_from_fun(t,f)
     {var scope=t[4];
      function _px_(param){return within_scope(t,scope,f)}
      return caml_call1(Core_kernel_Lazy[29],_px_)}
    var default_hash_table_initial_siz=4;
    function memoize_fun_by_key(opt,t,hashable,project_key,f)
     {if(opt)
       var sth=opt[1],initial_size=sth;
      else
       var initial_size=default_hash_table_initial_siz;
      var
       scope=t[4],
       table=caml_call3(Core_kernel_Hashtbl[4],0,[0,initial_size],hashable);
      function _pw_(a)
       {var
         key=caml_call1(project_key,a),
         match=caml_call2(Core_kernel_Hashtbl[52],table,key);
        if(match){var b=match[1];return b}
        var b$0=within_scope(t,scope,function(param){return caml_call1(f,a)});
        caml_call3(Core_kernel_Hashtbl[36],table,key,b$0);
        return b$0}
      return caml_call1(Core_kernel[242],_pw_)}
    function array_fold(t,children,init,f)
     {return caml_call2(symbol$1,caml_call1(Array[18],children),0)
              ?const$0(t,init)
              :create_node(t,[0,[0,init,f,children]])}
    function all(t,ts)
     {function _pv_(ac,a){return [0,a,ac]}
      return array_fold(t,caml_call1(Array[84],ts),0,_pv_)}
    function unordered_array_fold(t,opt,children,init,f,update)
     {if(opt)
       var sth=opt[1],full_compute_every_n_changes=sth;
      else
       var full_compute_every_n_changes=include[63];
      if(caml_call2(symbol$1,caml_call1(Array[18],children),0))
       return const$0(t,init);
      if(caml_call2(symbol$0,full_compute_every_n_changes,0))
       return caml_call5
               (Core_kernel[221],
                0,
                _m0_,
                cst_unordered_array_fold_got_n,
                full_compute_every_n_changes,
                Core_kernel[340]);
      var main=create_node(t,1);
      set_kind$0
       (main,
        [15,
         create$3(init,f,update,full_compute_every_n_changes,children,main)]);
      return main}
    function opt_unordered_array_fold
     (t,full_compute_every_n_changes,ts,init,f,f_inverse)
     {function f$0(param,x)
       {var num_invalid=param[2],accum=param[1];
        if(x){var x$0=x[1];return [0,caml_call2(f,accum,x$0),num_invalid]}
        return [0,accum,num_invalid + 1 | 0]}
      function f_inverse$0(param,x)
       {var num_invalid=param[2],accum=param[1];
        if(x)
         {var x$0=x[1];return [0,caml_call2(f_inverse,accum,x$0),num_invalid]}
        return [0,accum,num_invalid - 1 | 0]}
      function _pu_(param)
       {var num_invalid=param[2],accum=param[1];
        return caml_call2(symbol$1,num_invalid,0)?[0,accum]:0}
      return map$6
              (unordered_array_fold
                (t,
                 full_compute_every_n_changes,
                 ts,
                 [0,init,0],
                 f$0,
                 [0,f_inverse$0]),
               _pu_)}
    function at_least_k_of(t,nodes,k)
     {function bool_to_int(b){return b?1:0}
      function _ps_(i){return caml_call2(symbol,i,k)}
      var _pt_=[0,function(num_true,b){return num_true - bool_to_int(b) | 0}];
      return map$6
              (unordered_array_fold
                (t,
                 0,
                 nodes,
                 0,
                 function(num_true,b){return num_true + bool_to_int(b) | 0},
                 _pt_),
               _ps_)}
    function exists$6(t,nodes){return at_least_k_of(t,nodes,1)}
    function for_all$6(t,nodes)
     {return at_least_k_of(t,nodes,caml_call1(Array[18],nodes))}
    function sum$0(t,full_compute_every_n_changes,nodes,zero,add,sub)
     {return unordered_array_fold
              (t,full_compute_every_n_changes,nodes,zero,add,[0,sub])}
    function opt_sum(t,full_compute_every_n_changes,nodes,zero,add,sub)
     {return opt_unordered_array_fold
              (t,full_compute_every_n_changes,nodes,zero,add,sub)}
    function sum_int(t,nodes)
     {function _pn_(_pr_,_pq_){return _pr_ - _pq_ | 0}
      return sum$0
              (t,0,nodes,0,function(_pp_,_po_){return _pp_ + _po_ | 0},_pn_)}
    function sum_float(t,nodes)
     {function _ph_(_pm_,_pl_){return _pm_ - _pl_}
      function _pi_(_pk_,_pj_){return _pk_ + _pj_}
      return sum$0(t,[0,caml_call1(Array[18],nodes)],nodes,0.,_pi_,_ph_)}
    function set_freeze(node,child,only_freeze_when)
     {var was_necessary=caml_call1(is_necessary$1,node);
      set_kind$0(node,[7,[0,node,child,only_freeze_when]]);
      return was_necessary
              ?add_parent$0(child,node,freeze_child_index)
              :became_necessary(node)}
    function freeze(child,only_freeze_when)
     {var t=child[2],node=create_node_top(t,1);
      set_freeze(node,child,only_freeze_when);
      return node}
    function at(clock,time)
     {var t=caml_call1(Clock$0[9],clock),_pg_=now$2(clock);
      if(caml_call2(Time_ns[16],time,_pg_))return const$0(t,1);
      var main=create_node(t,1),at=[0,main,time,null$0,clock];
      set_kind$0(main,[1,at]);
      at[3] = add_alarm(clock,time,create$9([0,at]));
      return main}
    function after(clock,span)
     {var _pf_=now$2(clock);
      return at(clock,caml_call2(Time_ns[63],_pf_,span))}
    function next_interval_alarm_strict(clock,base,interval)
     {var
       after=now$2(clock),
       at=caml_call5(Time_ns[77],_m1_,base,after,interval,0);
      return at}
    function at_intervals(clock,interval)
     {var
       t=caml_call1(Clock$0[9],clock),
       _pd_=caml_call1(Timing_wheel[10],clock[1]);
      if(caml_call2(Time_ns[1][18],interval,_pd_))
       caml_call5
        (Core_kernel[221],
         0,
         _m2_,
         cst_at_intervals_got_too_small,
         interval,
         Time_ns[1][10]);
      var
       main=create_node(t,1),
       base=now$2(clock),
       at_intervals=[0,main,base,interval,null$0,clock];
      set_kind$0(main,[2,at_intervals]);
      set_cutoff$0(main,never);
      var _pe_=create$9([1,at_intervals]);
      at_intervals[4]
      =
      add_alarm(clock,next_interval_alarm_strict(clock,base,interval),_pe_);
      return main}
    function snapshot(clock,value_at,at,before)
     {var t=caml_call1(Clock$0[9],clock),_pb_=now$2(clock);
      if(caml_call2(Time_ns[16],at,_pb_))
       {var _pc_=now$2(clock);
        return caml_call2(Time_ns[19],at,_pc_)
                ?caml_call4
                  (Core_kernel_Or_error[38],
                   0,
                   cst_cannot_take_snapshot_in_th,
                   at,
                   Time_ns[88])
                :[0,freeze(value_at,caml_call1(Core_kernel_Fn[1],1))]}
      var
       main=create_node_top(t,1),
       snapshot=[0,main,at,before,value_at,clock];
      set_kind$0(main,[13,snapshot]);
      add_alarm(clock,at,create$9([2,snapshot]));
      return [0,main]}
    function incremental_step_function(clock,child)
     {var
       t=caml_call1(Clock$0[9],clock),
       main=create_node(t,1),
       _o$_=Core_kernel_Sequence[46],
       _pa_=Uopt[3],
       step_function_node=
        [0,main,caml_call1(Uopt[4],child),none,_pa_,_o$_,null$0,0,clock];
      step_function_node[7] = create$9([3,step_function_node]);
      set_kind$0(main,[14,step_function_node]);
      return main}
    function make_stale$0(node)
     {var t=node[2];
      node[3] = none;
      var
       _o9_=needs_to_be_computed(node),
       _o__=_o9_?1 - is_in_recompute_heap(node):_o9_;
      return _o__?add$0(t[5],node):_o__}
    function advance_clock(clock,to)
     {var t=caml_call1(Clock$0[9],clock);
      ensure_not_stabilizing(t,cst_advance_clock,1);
      var _o5_=now$2(clock),_o6_=caml_call2(Time_ns[18],to,_o5_);
      if(_o6_)
       {set_var_while_not_stabilizing(clock[2],to);
        caml_call3(Timing_wheel[20],clock[1],to,clock[3]);
        caml_call2(Timing_wheel[21],clock[1],clock[3]);
        for(;;)
         {if(caml_call1(Uopt[6],clock[4]))
           {var alarm_value=caml_call1(Uopt[11],clock[4]);
            clock[4] = alarm_value[2];
            alarm_value[2] = Uopt[3];
            var _o7_=alarm_value[1];
            switch(_o7_[0])
             {case 0:
               var match=_o7_[1],main=match[1];
               if(caml_call1(is_valid$2,main))
                {set_kind$0(main,_m3_);make_stale$0(main)}
               break;
              case 1:
               var
                at_intervals=_o7_[1],
                interval=at_intervals[3],
                base=at_intervals[2],
                main$0=at_intervals[1];
               if(caml_call1(is_valid$2,main$0))
                {at_intervals[4]
                 =
                 add_alarm
                  (clock,
                   next_interval_alarm_strict(clock,base,interval),
                   alarm_value);
                 make_stale$0(main$0)}
               break;
              case 2:
               var match$0=_o7_[1],value_at=match$0[4],main$1=match$0[1];
               set_freeze(main$1,value_at,function(param){return 1});
               make_stale$0(main$1);
               break;
              default:
               var match$1=_o7_[1],main$2=match$1[1];
               if(caml_call1(is_valid$2,main$2))make_stale$0(main$2)}
            continue}
          var _o8_=debug;
          break}}
      else
       var _o8_=_o6_;
      return _o8_}
    function create_clock(t,timing_wheel_config,start)
     {var
       timing_wheel=caml_call2(Timing_wheel[9],timing_wheel_config,start),
       clock=[],
       handle_fired=function _o4_(_o3_){return _o4_.fun(_o3_)},
       _o2_=Uopt[3];
      caml_update_dummy
       (clock,[0,timing_wheel,create$14(t,0,start),handle_fired,_o2_]);
      caml_update_dummy
       (handle_fired,
        function(alarm)
         {var alarm_value=caml_call2(Timing_wheel[5][5],clock[1],alarm);
          alarm_value[2] = clock[4];
          clock[4] = caml_call1(Uopt[4],alarm_value);
          return 0});
      return clock}
    function create_internal(Config,max_height_allowed)
     {var
       adjust_heights_heap=create$8(max_height_allowed),
       recompute_heap=create$6(max_height_allowed),
       _oS_=caml_call1(Thread_safe_queue[3],0),
       _oT_=caml_call1(Only_in_debug$0[8],0),
       _oU_=caml_call1(Core_kernel_Stack[22],0),
       _oV_=caml_call1(Core_kernel_Stack[22],0),
       _oW_=caml_call1(Core_kernel_Stack[22],0),
       _oX_=caml_call1(Core_kernel_Stack[22],0),
       _oY_=caml_call1(Core_kernel_Stack[22],0),
       _oZ_=caml_call1(Thread_safe_queue[3],0),
       _o0_=Uopt[3],
       _o1_=caml_call1(Core_kernel_Stack[22],0),
       t=
        [0,
         2,
         Config[1],
         _p_,
         top,
         recompute_heap,
         adjust_heights_heap,
         _o1_,
         0,
         _o0_,
         _oZ_,
         _oY_,
         _oX_,
         _oW_,
         _oV_,
         _oU_,
         _oT_,
         _oS_,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0];
      return t}
    function weak_memoize_fun_by_key(opt,t,hashable,project_key,f)
     {if(opt)
       var sth=opt[1],initial_size=sth;
      else
       var initial_size=default_hash_table_initial_siz;
      var
       scope=t[4],
       table=caml_call3(Weak_hashtbl[2],0,[0,initial_size],hashable),
       packed=[0,table];
      function _oQ_(param)
       {return caml_call2(Thread_safe_queue[5],t[17],packed)}
      caml_call2(Weak_hashtbl[12],table,_oQ_);
      function _oR_(a)
       {var
         key=caml_call1(project_key,a),
         match=caml_call2(Weak_hashtbl[5],table,key);
        if(match){var b=match[1];return b}
        var b$0=within_scope(t,scope,function(param){return caml_call1(f,a)});
        caml_call3(Weak_hashtbl[8],table,key,b$0);
        return b$0}
      return caml_call1(Core_kernel[242],_oR_)}
    function expert_kind_of_node(node)
     {var _oM_=node[5];
      if(typeof _oM_ === "number")
       {if(0 === _oM_)return Uopt[3]}
      else
       if(6 === _oM_[0]){var e=_oM_[1];return caml_call1(Uopt[4],e)}
      var
       _oN_=0,
       _oO_=[0,sexp_of_t$26(function(param){return _m4_},_oM_),_oN_],
       _oP_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_unexpected_kind_for_expert),
          _oO_]];
      return caml_call1(Core_kernel[238],_oP_)}
    function create$15(state,on_observability_change,f)
     {var e=create$4(f,on_observability_change),node=create_node(state,[6,e]);
      return node}
    function currently_running_node_exn(state,name)
     {var _oI_=state[16][1];
      if(_oI_){var current=_oI_[1];return current}
      var
       _oJ_=caml_call2(Core_kernel[15],name,cst_during_stabilization),
       _oK_=caml_call2(Core_kernel[15],cst_can_only_call,_oJ_),
       _oL_=caml_call1(Core_kernel[455],_oK_);
      return caml_call1(Core_kernel[238],_oL_)}
    function assert_currently_running_node_(state,node,name)
     {var
       current=currently_running_node_exn(state,name),
       _ox_=1 - has_child(node,current);
      if(_ox_)
       {var
         _oy_=0,
         _oz_=0,
         _oA_=current[5],
         _oB_=
          [0,
           [1,
            [0,_m6_,[0,sexp_of_t$26(function(param){return _m5_},_oA_),_oz_]]],
           _oy_],
         _oC_=0,
         _oD_=node[5],
         _oE_=
          [0,
           [1,
            [0,_m8_,[0,sexp_of_t$26(function(param){return _m7_},_oD_),_oC_]]],
           _oB_],
         _oF_=caml_call2(Core_kernel[15],name,cst_on_parent_nodes),
         _oG_=caml_call2(Core_kernel[15],cst_can_only_call$0,_oF_),
         _oH_=[1,[0,caml_call1(Core_kernel[455],_oG_),_oE_]];
        return caml_call1(Core_kernel[238],_oH_)}
      return _ox_}
    function assert_currently_running_node_$0(state,node,name)
     {var
       current=currently_running_node_exn(state,name),
       _om_=1 - has_parent(node,current);
      if(_om_)
       {var
         _on_=0,
         _oo_=0,
         _op_=current[5],
         _oq_=
          [0,
           [1,
            [0,_m__,[0,sexp_of_t$26(function(param){return _m9_},_op_),_oo_]]],
           _on_],
         _or_=0,
         _os_=node[5],
         _ot_=
          [0,
           [1,
            [0,_na_,[0,sexp_of_t$26(function(param){return _m$_},_os_),_or_]]],
           _oq_],
         _ou_=caml_call2(Core_kernel[15],name,cst_on_children_nodes),
         _ov_=caml_call2(Core_kernel[15],cst_can_only_call$1,_ou_),
         _ow_=[1,[0,caml_call1(Core_kernel[455],_ov_),_ot_]];
        return caml_call1(Core_kernel[238],_ow_)}
      return _om_}
    function make_stale$1(node)
     {var
       state=node[2],
       e_opt=expert_kind_of_node(node),
       _oi_=caml_call1(Uopt[6],e_opt);
      if(_oi_)
       {var e=caml_call1(Uopt[11],e_opt),match=make_stale(e);
        if(534011858 <= match)return 0;
        var
         _oj_=caml_call1(is_necessary$1,node),
         _ok_=_oj_?1 - is_in_recompute_heap(node):_oj_;
        if(_ok_)return add$0(state[5],node);
        var _ol_=_ok_}
      else
       var _ol_=_oi_;
      return _ol_}
    function invalidate(node)
     {var state=node[2];
      invalidate_node(node);
      return propagate_invalidity$1(state)}
    function add_dependency(node,dep)
     {var
       state=node[2],
       e_opt=expert_kind_of_node(node),
       _od_=caml_call1(Uopt[6],e_opt);
      if(_od_)
       {var
         e=caml_call1(Uopt[11],e_opt),
         new_child_index=add_child_edge(e,dep),
         _oe_=caml_call1(is_necessary$1,node);
        if(_oe_)
         {add_parent$0(dep[1],node,new_child_index);
          var _of_=1 - is_in_recompute_heap(node);
          if(_of_)return add$0(state[5],node);
          var _og_=_of_}
        else
         var _og_=_oe_;
        var _oh_=_og_}
      else
       var _oh_=_od_;
      return _oh_}
    function remove_dependency(node,edge)
     {var
       state=node[2],
       e_opt=expert_kind_of_node(node),
       _oa_=caml_call1(Uopt[6],e_opt);
      if(_oa_)
       {var e=caml_call1(Uopt[11],e_opt);
        if(! caml_call1(is_necessary$1,node))throw [0,Assert_failure,_nb_];
        var
         edge_index=caml_call1(Uopt[7],edge[3]),
         last_edge=last_child_edge_exn(e),
         last_edge_index=caml_call1(Uopt[7],last_edge[3]);
        if(caml_call2(symbol$4,edge_index,last_edge_index))
         {swap_children_except_in_kind
           (node,edge[1],edge_index,last_edge[1],last_edge_index);
          swap_children(e,edge_index,last_edge_index)}
        remove_last_child_edge_exn(e);
        remove_child(edge[1],node,last_edge_index);
        if(1 - is_in_recompute_heap(node))add$0(state[5],node);
        var _ob_=1 - caml_call1(is_valid$2,edge[1]);
        if(_ob_)return decr_invalid_children(e);
        var _oc_=_ob_}
      else
       var _oc_=_oa_;
      return _oc_}
    var
     Expert$0=
      [0,
       expert_kind_of_node,
       create$15,
       currently_running_node_exn,
       assert_currently_running_node_,
       assert_currently_running_node_$0,
       make_stale$1,
       invalidate,
       add_dependency,
       remove_dependency];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$97);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_State$0);
    var
     include$6=
      [0,
       sexp_of_status,
       Run_on_update_handlers$0,
       Only_in_debug$0,
       Packed_weak_hashtbl$0,
       num_var_sets,
       set_num_var_sets,
       num_nodes_recomputed_directly_,
       set_num_nodes_recomputed_direc,
       num_nodes_recomputed_directly_$0,
       set_num_nodes_recomputed_direc$0,
       num_nodes_recomputed,
       set_num_nodes_recomputed,
       num_nodes_invalidated,
       set_num_nodes_invalidated,
       num_nodes_created,
       set_num_nodes_created,
       num_nodes_changed,
       set_num_nodes_changed,
       num_nodes_became_unnecessary,
       set_num_nodes_became_unnecessa,
       num_nodes_became_necessary,
       set_num_nodes_became_necessary,
       keep_node_creation_backtrace,
       set_keep_node_creation_backtra,
       weak_hashtbls,
       only_in_debug,
       set_only_in_debug,
       run_on_update_handlers$0,
       set_during_stabilization,
       disallowed_observers,
       new_observers,
       finalized_observers,
       all_observers,
       set_all_observers,
       num_active_observers,
       set_num_active_observers,
       adjust_heights_heap,
       recompute_heap,
       current_scope,
       set_current_scope,
       stabilization_num,
       set_stabilization_num,
       bind_lhs_change_should_invalid,
       status,
       set_status,
       Fields$0,
       sexp_of_t$39,
       Clock$0,
       now$2,
       timing_wheel_length,
       num_stabilizes,
       max_height_allowed$1,
       max_height_seen$1,
       iter_observers,
       directly_observed,
       save_dot$0,
       iter_observer_descendants,
       Stats,
       stats,
       am_stabilizing,
       invariant$30,
       ensure_not_stabilizing,
       set_height$1,
       set_max_height_allowed$1,
       handle_after_stabilization$1,
       remove_children,
       remove_child,
       check_if_unnecessary,
       became_unnecessary,
       remove_alarm,
       invalidate_node,
       invalidate_nodes_created_on_rh,
       rescope_nodes_created_on_rhs,
       propagate_invalidity$1,
       add_parent_without_adjusting_h,
       became_necessary,
       add_parent$0,
       run_with_scope,
       within_scope,
       change_child,
       add_alarm,
       recompute,
       copy_child,
       maybe_change_value,
       recompute_everything_that_is_n,
       unlink_disallowed_observers,
       disallow_future_use,
       disallow_finalized_observers,
       observer_finalizer,
       observe,
       add_new_observers,
       observer_value_exn,
       observer_value,
       on_update$0,
       observer_on_update_exn,
       set_var_while_not_stabilizing,
       set,
       reclaim_space_in_weak_hashtbls,
       stabilize,
       create_node_in,
       create_node,
       create_node_top,
       create$14,
       const$0,
       map$6,
       map2,
       map3,
       map4,
       map5,
       map6,
       map7,
       map8,
       map9,
       map10,
       map11,
       map12,
       map13,
       map14,
       map15,
       preserve_cutoff,
       depend_on,
       necessary_if_alive,
       bind,
       bind2,
       bind3,
       bind4,
       join,
       if$0,
       lazy_from_fun,
       default_hash_table_initial_siz,
       memoize_fun_by_key,
       array_fold,
       all,
       unordered_array_fold,
       opt_unordered_array_fold,
       at_least_k_of,
       exists$6,
       for_all$6,
       sum$0,
       opt_sum,
       sum_int,
       sum_float,
       set_freeze,
       freeze,
       at,
       after,
       next_interval_alarm_strict,
       at_intervals,
       snapshot,
       incremental_step_function,
       make_stale$0,
       advance_clock,
       create_clock,
       create_internal,
       weak_memoize_fun_by_key,
       Expert$0];
    caml_register_global(1325,include$6,"Incremental__State");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Expert1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$98);
    caml_call1(Expect_test_collector[4][1],cst_src_expert1_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$99,cst$32);
    function create$16(opt,child)
     {if(opt)
       var sth=opt[1],on_change=sth;
      else
       var on_change=function(_n$_){return 0};
      return [0,child,on_change,Uopt[3]]}
    function value$3(t){return value_exn(t[1])}
    var Dependency=[0,sexp_of_t$19,create$16,value$3];
    function create$17(state,opt,f)
     {if(opt)
       var sth=opt[1],on_observability_change=sth;
      else
       var on_observability_change=function(param){return 0};
      return caml_call3(Expert$0[2],state,on_observability_change,f)}
    var make_stale$2=Expert$0[6];
    function watch$1(_n__){return _n__}
    var
     invalidate$0=Expert$0[7],
     add_dependency$0=Expert$0[8],
     remove_dependency$0=Expert$0[9];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$100);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Expert1$0);
    var
     Node$0=
      [0,
       sexp_of_t$27,
       create$17,
       watch$1,
       make_stale$2,
       invalidate$0,
       add_dependency$0,
       remove_dependency$0],
     include$7=[0,Dependency,Node$0];
    caml_register_global(1326,include$7,"Incremental__Expert1");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Reduce_balance);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$101);
    caml_call1(Expect_test_collector[4][1],cst_src_reduce_balanced_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$102,cst$33);
    function create$18(state,children,f,reduce)
     {var len=caml_call1(Array[18],children);
      if(caml_call2(symbol$1,len,0))return 0;
      var reducer=caml_call4(Balanced_reducer[3],0,0,len,reduce);
      function _n2_(param)
       {var a=caml_call1(Balanced_reducer[6],reducer);return a}
      var node=caml_call3(Node$0[2],state,0,_n2_),_n4_=len - 1 | 0,_n3_=0;
      if(! (_n4_ < 0))
       {var i=_n3_;
        for(;;)
         {var
           _n5_=caml_check_bound(children,i)[1 + i],
           _n6_=
            [0,
             function(i)
               {return function(a)
                 {var _n9_=caml_call1(f,a);
                  caml_call3(Balanced_reducer[4],reducer,i,_n9_);
                  return debug}}
              (i)],
           _n7_=caml_call2(Dependency[2],_n6_,_n5_);
          caml_call2(Node$0[6],node,_n7_);
          var _n8_=i + 1 | 0;
          if(_n4_ !== i){var i=_n8_;continue}
          break}}
      return [0,caml_call1(Node$0[3],node)]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$103);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Reduce_balance$0);
    var Incremental_Reduce_balanced=[0,create$18];
    caml_register_global
     (1328,Incremental_Reduce_balanced,"Incremental__Reduce_balanced");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental_Incremental_in);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$104);
    caml_call1(Expect_test_collector[4][1],cst_src_incremental_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$105,cst$34);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$106);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental_Incremental_in$0);
    var Incremental_Incremental_intf=[0];
    caml_register_global
     (1329,Incremental_Incremental_intf,"Incremental__Incremental_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incremental);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incremental$107);
    caml_call1(Expect_test_collector[4][1],cst_src_incremental_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental$108,cst$35);
    var default_max_height_allowed=128;
    function create$19(opt,param)
     {if(opt)
       var sth=opt[1],max_height_allowed=sth;
      else
       var max_height_allowed=default_max_height_allowed;
      function sexp_of_state_witness(v){throw [0,Assert_failure,_nc_]}
      var
       t=
        create_internal
         (caml_call1(Incremental_Config[1],[0]),max_height_allowed);
      return [0,sexp_of_state_witness,t]}
    function current(state,param){return state[4]}
    function within(state,t,f){return within_scope(state,t,f)}
    function state(t){return t[2]}
    function pack(t){return t}
    function return$0(state,a){return const$0(state,a)}
    var
     N_ary_map_and_bind=
      [0,
       map2,
       map3,
       map4,
       map5,
       map6,
       map7,
       map8,
       map9,
       map10,
       map11,
       map12,
       map13,
       map14,
       map15,
       bind2,
       bind3,
       bind4],
     map2$0=N_ary_map_and_bind[1],
     map3$0=N_ary_map_and_bind[2],
     map4$0=N_ary_map_and_bind[3],
     map5$0=N_ary_map_and_bind[4],
     map6$0=N_ary_map_and_bind[5],
     map7$0=N_ary_map_and_bind[6],
     map8$0=N_ary_map_and_bind[7],
     map9$0=N_ary_map_and_bind[8],
     map10$0=N_ary_map_and_bind[9],
     map11$0=N_ary_map_and_bind[10],
     map12$0=N_ary_map_and_bind[11],
     map13$0=N_ary_map_and_bind[12],
     map14$0=N_ary_map_and_bind[13],
     map15$0=N_ary_map_and_bind[14],
     bind2$0=N_ary_map_and_bind[15],
     bind3$0=N_ary_map_and_bind[16],
     bind4$0=N_ary_map_and_bind[17];
    function symbol_map(t,f){return map$6(t,f)}
    function symbol_bind(t,f){return bind(t,f)}
    var
     Infix=[0,symbol_map,symbol_bind],
     symbol_map$0=Infix[1],
     symbol_bind$0=Infix[2];
    function lazy_from_fun$0(state,f){return lazy_from_fun(state,f)}
    function memoize_fun(initial_size,state,hashable,f)
     {return memoize_fun_by_key
              (initial_size,state,hashable,function(_n1_){return _n1_},f)}
    function array_fold$0(state,ts,init,f){return array_fold(state,ts,init,f)}
    function reduce_balanced(state,ts,f,reduce)
     {return create$18(state,ts,f,reduce)}
    function both(t1,t2)
     {return caml_call3(map2$0,t1,t2,Core_kernel_Tuple[1][6])}
    function value$4(t){return t[1]}
    function watch$2(t){return t[4]}
    function sexp_of_t$42(sexp_of_a,t){return caml_call1(sexp_of_a,t[1])}
    function replace(t,f){return set(t,caml_call1(f,latest_value(t)))}
    function compare$3(cmp_a,a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       {if(typeof match === "number")return 0;else if(1 === match[0])return 1}
      else
       {if(0 === a_001[0])
         {var _nY_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];return caml_call2(cmp_a,_nY_,b_004)}
          return -1}
        var _nZ_=a_001[2],_n0_=a_001[1];
        if(typeof match === "number")
         return -1;
        else
         if(0 !== match[0])
          {var b_008=match[2],b_006=match[1],n=caml_call2(cmp_a,_n0_,b_006);
           return 0 === n?caml_call2(cmp_a,_nZ_,b_008):n}}
      return 1}
    function sexp_of_t$43(of_a,param)
     {if(typeof param === "number")
       return _nd_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_ne_,[0,v0$0,0]]]}
        var
         v1=param[2],
         v0$1=param[1],
         v0$2=caml_call1(of_a,v0$1),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,_nf_,[0,v0$2,[0,v1$0,0]]]]}}
    var Update=[0,compare$3,sexp_of_t$43];
    function on_update_exn$1(t,f)
     {return observer_on_update_exn
              (t,
               function(param)
                {if(typeof param === "number")
                  {if(0 === param)return caml_call1(f,0);
                   var
                    _nV_=function(param){return _ng_},
                    _nW_=function(_nX_){return sexp_of_t$35(_nV_,_nX_)};
                   return caml_call5
                           (Core_kernel[221],
                            0,
                            _nh_,
                            cst_Incremental_bug_Observer_o,
                            t,
                            _nW_)}
                 else
                  {if(0 === param[0])
                    {var a=param[1];return caml_call1(f,[0,a])}
                   var a2=param[2],a1=param[1];
                   return caml_call1(f,[1,a1,a2])}})}
    function disallow_future_use$0(t){return disallow_future_use(t[1])}
    function sexp_of_t$44(sexp_of_a,t)
     {var _nU_=t[1][1];
      if(1 === _nU_)
       {var uopt=t[1][2][4];
        return caml_call1(Uopt[5],uopt)
                ?caml_call1(Sexplib0_Sexp_conv[7],cst_invalid)
                :caml_call1(sexp_of_a,caml_call1(Uopt[11],uopt))}
      return _nU_
              ?caml_call1(Sexplib0_Sexp_conv[7],cst_disallowed)
              :caml_call1(Sexplib0_Sexp_conv[7],cst_unstabilized)}
    var
     Observer$0=
      [0,
       invariant$26,
       observing$1,
       use_is_allowed$0,
       incr_state$1,
       Update,
       on_update_exn$1,
       disallow_future_use$0,
       observer_value,
       observer_value_exn,
       sexp_of_t$44],
     fired_alarm_values$1=Clock$0[1],
     set_fired_alarm_values$0=Clock$0[2],
     handle_fired$1=Clock$0[3],
     timing_wheel$1=Clock$0[5],
     Fields$2=Clock$0[6],
     sexp_of_t$45=Clock$0[7],
     invariant$31=Clock$0[8],
     incr_state$3=Clock$0[9],
     alarm_precision=Timing_wheel[1][10],
     _nj_=[0,caml_call2(Timing_wheel[7][5],_ni_,level_bits)],
     default_timing_wheel_config=
      caml_call4(Timing_wheel[8][4],0,_nj_,alarm_precision,0);
    function create$20(state,opt,start,param)
     {if(opt)
       var sth=opt[1],timing_wheel_config=sth;
      else
       var timing_wheel_config=default_timing_wheel_config;
      var
       _nT_=caml_call1(Time_ns[83],start),
       start$0=caml_call1(Time_ns[85],_nT_);
      return create_clock(state,timing_wheel_config,start$0)}
    function alarm_precision$0(t){return caml_call1(Timing_wheel[10],t[1])}
    function watch_now(t){return t[2][4]}
    function advance_clock_by(t,span)
     {var _nS_=now$2(t);
      return advance_clock(t,caml_call2(Time_ns[63],_nS_,span))}
    function step_function(t,init,steps)
     {var _nR_=caml_call2(Incremental_step_function[7],init,steps);
      return incremental_step_function
              (t,return$0(caml_call1(incr_state$3,t),_nR_))}
    function freeze$0(opt,t)
     {if(opt)var sth=opt[1],when=sth;else var when=function(param){return 1};
      return freeze(t,when)}
    function depend_on$0(t,depend_on$0){return depend_on(t,depend_on$0)}
    function stabilize$0(state){return stabilize(state)}
    function am_stabilizing$0(state){return am_stabilizing(state)}
    function sexp_of_t$46(of_a,param)
     {if(typeof param === "number")
       return _nk_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call2(Core_kernel[438],of_a,v0);
          return [1,[0,_nl_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call2(Core_kernel[438],of_a,v0$1);
        return [1,[0,_nm_,[0,v0$2,0]]]}}
    var Node_value=[0,sexp_of_t$46];
    function node_value(t)
     {return caml_call1(is_valid$2,t)
              ?caml_call1(is_necessary$1,t)
                ?[0,caml_call1(Uopt[8],t[4])]
                :[1,caml_call1(Uopt[8],t[4])]
              :0}
    function sexp_of_t$47(sexp_of_a,t)
     {return caml_call1(is_valid$2,t)
              ?caml_call1(is_necessary$1,t)
                ?caml_call1(Uopt[5],t[4])
                  ?caml_call1(Core_kernel[455],cst_uncomputed)
                  :caml_call1(sexp_of_a,unsafe_value(t))
                :caml_call1(Core_kernel[455],cst_unnecessary)
              :caml_call1(Core_kernel[455],cst_invalid$0)}
    function both$0(t1,t2)
     {return caml_call3(map2$0,t1,t2,function(x1,x2){return [0,x1,x2]})}
    var
     map2$1=N_ary_map_and_bind[1],
     map3$1=N_ary_map_and_bind[2],
     map4$1=N_ary_map_and_bind[3],
     map5$1=N_ary_map_and_bind[4],
     map6$1=N_ary_map_and_bind[5],
     map7$1=N_ary_map_and_bind[6],
     map8$1=N_ary_map_and_bind[7],
     map9$1=N_ary_map_and_bind[8],
     map10$1=N_ary_map_and_bind[9],
     map11$1=N_ary_map_and_bind[10],
     map12$1=N_ary_map_and_bind[11],
     map13$1=N_ary_map_and_bind[12],
     map14$1=N_ary_map_and_bind[13],
     map15$1=N_ary_map_and_bind[14],
     bind2$1=N_ary_map_and_bind[15],
     bind3$1=N_ary_map_and_bind[16],
     bind4$1=N_ary_map_and_bind[17],
     Open_on_rhs=[0,watch$2],
     Let_syntax=
      [0,
       bind,
       map$6,
       both$0,
       map2$1,
       map3$1,
       map4$1,
       map5$1,
       map6$1,
       map7$1,
       map8$1,
       map9$1,
       map10$1,
       map11$1,
       map12$1,
       map13$1,
       map14$1,
       map15$1,
       bind2$1,
       bind3$1,
       bind4$1,
       Open_on_rhs];
    function weak_memoize_fun(initial_size,state,hashable,f)
     {return weak_memoize_fun_by_key
              (initial_size,state,hashable,function(_nQ_){return _nQ_},f)}
    function Make_with_config(Incremental_config,symbol)
     {function sexp_of_state_witness(v){throw [0,Assert_failure,_nn_]}
      var
       t=create_internal(Incremental_config,128),
       State=
        [0,
         sexp_of_status,
         Run_on_update_handlers$0,
         Only_in_debug$0,
         Packed_weak_hashtbl$0,
         num_var_sets,
         set_num_var_sets,
         num_nodes_recomputed_directly_,
         set_num_nodes_recomputed_direc,
         num_nodes_recomputed_directly_$0,
         set_num_nodes_recomputed_direc$0,
         num_nodes_recomputed,
         set_num_nodes_recomputed,
         num_nodes_invalidated,
         set_num_nodes_invalidated,
         num_nodes_created,
         set_num_nodes_created,
         num_nodes_changed,
         set_num_nodes_changed,
         num_nodes_became_unnecessary,
         set_num_nodes_became_unnecessa,
         num_nodes_became_necessary,
         set_num_nodes_became_necessary,
         keep_node_creation_backtrace,
         set_keep_node_creation_backtra,
         weak_hashtbls,
         only_in_debug,
         set_only_in_debug,
         run_on_update_handlers$0,
         set_during_stabilization,
         disallowed_observers,
         new_observers,
         finalized_observers,
         all_observers,
         set_all_observers,
         num_active_observers,
         set_num_active_observers,
         adjust_heights_heap,
         recompute_heap,
         current_scope,
         set_current_scope,
         stabilization_num,
         set_stabilization_num,
         bind_lhs_change_should_invalid,
         status,
         set_status,
         Fields$0,
         sexp_of_t$39,
         Clock$0,
         now$2,
         timing_wheel_length,
         num_stabilizes,
         max_height_allowed$1,
         max_height_seen$1,
         iter_observers,
         directly_observed,
         save_dot$0,
         iter_observer_descendants,
         Stats,
         stats,
         am_stabilizing,
         invariant$30,
         ensure_not_stabilizing,
         set_height$1,
         set_max_height_allowed$1,
         handle_after_stabilization$1,
         remove_children,
         remove_child,
         check_if_unnecessary,
         became_unnecessary,
         remove_alarm,
         invalidate_node,
         invalidate_nodes_created_on_rh,
         rescope_nodes_created_on_rhs,
         propagate_invalidity$1,
         add_parent_without_adjusting_h,
         became_necessary,
         add_parent$0,
         run_with_scope,
         within_scope,
         change_child,
         add_alarm,
         recompute,
         copy_child,
         maybe_change_value,
         recompute_everything_that_is_n,
         unlink_disallowed_observers,
         disallow_future_use,
         disallow_finalized_observers,
         observer_finalizer,
         observe,
         add_new_observers,
         observer_value_exn,
         observer_value,
         on_update$0,
         observer_on_update_exn,
         set_var_while_not_stabilizing,
         set,
         reclaim_space_in_weak_hashtbls,
         stabilize,
         create_node_in,
         create_node,
         create_node_top,
         create$14,
         const$0,
         map$6,
         map2,
         map3,
         map4,
         map5,
         map6,
         map7,
         map8,
         map9,
         map10,
         map11,
         map12,
         map13,
         map14,
         map15,
         preserve_cutoff,
         depend_on,
         necessary_if_alive,
         bind,
         bind2,
         bind3,
         bind4,
         join,
         if$0,
         lazy_from_fun,
         default_hash_table_initial_siz,
         memoize_fun_by_key,
         array_fold,
         all,
         unordered_array_fold,
         opt_unordered_array_fold,
         at_least_k_of,
         exists$6,
         for_all$6,
         sum$0,
         opt_sum,
         sum_int,
         sum_float,
         set_freeze,
         freeze,
         at,
         after,
         next_interval_alarm_strict,
         at_intervals,
         snapshot,
         incremental_step_function,
         make_stale$0,
         advance_clock,
         create_clock,
         weak_memoize_fun_by_key,
         Expert$0,
         create_internal,
         create$19,
         t];
      function create(timing_wheel_config,start,param)
       {return create$20(State[158],timing_wheel_config,start,0)}
      var
       Clock=
        [0,
         fired_alarm_values$1,
         set_fired_alarm_values$0,
         handle_fired$1,
         timing_wheel$1,
         Fields$2,
         sexp_of_t$45,
         invariant$31,
         incr_state$3,
         default_timing_wheel_config,
         alarm_precision$0,
         timing_wheel_length,
         now$2,
         watch_now,
         at,
         after,
         at_intervals,
         advance_clock,
         advance_clock_by,
         incremental_step_function,
         step_function,
         snapshot,
         create],
       sexp_of_t=Node$0[1],
       watch=Node$0[3],
       make_stale=Node$0[4],
       invalidate=Node$0[5],
       add_dependency=Node$0[6],
       remove_dependency=Node$0[7],
       _nP_=Node$0[2];
      function create$0(on_observability_change,f)
       {return caml_call3(_nP_,State[158],on_observability_change,f)}
      var
       Node=
        [0,
         sexp_of_t,
         watch,
         make_stale,
         invalidate,
         add_dependency,
         remove_dependency,
         create$0],
       Expert=[0,Dependency,Node];
      function return$1(a){return return$0(State[158],a)}
      var Let_syntax$0=[0,symbol_map$0,symbol_bind$0,Let_syntax,return$1];
      function current(param){return State[158][4]}
      function within$0(t,f){return within(State[158],t,f)}
      var
       Scope=
        [0,
         sexp_of_t$21,
         invariant$12,
         top,
         is_top,
         height,
         is_valid$1,
         is_necessary$0,
         add_node,
         current,
         within$0];
      function create$1(use_current_scope,value)
       {return create$14(State[158],use_current_scope,value)}
      var
       Var=
        [0,
         invariant$3,
         Packed,
         latest_value,
         incr_state,
         set,
         value$4,
         watch$2,
         sexp_of_t$42,
         replace,
         create$1];
      function const$1(a){return return$0(State[158],a)}
      function return$2(a){return return$0(State[158],a)}
      function all$0(ts){return all(State[158],ts)}
      function exists(ts){return exists$6(State[158],ts)}
      function for_all(ts){return for_all$6(State[158],ts)}
      function memoize_fun_by_key$0(initial_size,hashable,project_key,f)
       {return memoize_fun_by_key
                (initial_size,State[158],hashable,project_key,f)}
      function memoize_fun$0(initial_size,hashable,f)
       {return memoize_fun(initial_size,State[158],hashable,f)}
      function array_fold$1(ts,init,f)
       {return array_fold$0(State[158],ts,init,f)}
      function reduce_balanced$0(ts,f,reduce)
       {return reduce_balanced(State[158],ts,f,reduce)}
      function unordered_array_fold$0
       (full_compute_every_n_changes,ts,init,f,update)
       {return unordered_array_fold
                (State[158],full_compute_every_n_changes,ts,init,f,update)}
      function opt_unordered_array_fold$0
       (full_compute_every_n_changes,ts,init,f,f_inverse)
       {return opt_unordered_array_fold
                (State[158],full_compute_every_n_changes,ts,init,f,f_inverse)}
      function sum(full_compute_every_n_changes,ts,zero,add,sub)
       {return sum$0(State[158],full_compute_every_n_changes,ts,zero,add,sub)}
      function opt_sum$0(full_compute_every_n_changes,ts,zero,add,sub)
       {return opt_sum
                (State[158],full_compute_every_n_changes,ts,zero,add,sub)}
      function sum_int$0(ts){return sum_int(State[158],ts)}
      function sum_float$0(ts){return sum_float(State[158],ts)}
      function stabilize$1(param){return stabilize$0(State[158])}
      function am_stabilizing$1(param){return am_stabilizing$0(State[158])}
      function save_dot(file){return save_dot$0(State[158],file)}
      function lazy_from_fun$0(f){return caml_call2(State[129],State[158],f)}
      function weak_memoize_fun_by_key$0(initial_size,hashable,project_key,f)
       {return weak_memoize_fun_by_key
                (initial_size,State[158],hashable,project_key,f)}
      function weak_memoize_fun$0(initial_size,hashable,f)
       {return weak_memoize_fun(initial_size,State[158],hashable,f)}
      return [0,
              sexp_of_state_witness,
              Packed$0,
              type_equal_if_phys_same$0,
              invariant$18,
              create$5,
              set_kind$0,
              same$1,
              iteri_children$0,
              get_parent,
              add_parent,
              remove_parent,
              swap_children_except_in_kind,
              is_const,
              is_in_recompute_heap,
              is_necessary$1,
              is_valid$2,
              should_be_invalidated,
              edge_is_stale,
              is_stale,
              needs_to_be_computed,
              value_exn,
              unsafe_value,
              get_cutoff,
              set_cutoff$0,
              run_on_update_handlers,
              user_info,
              set_user_info,
              has_child,
              has_parent,
              state,
              pack,
              observe,
              map$6,
              bind,
              N_ary_map_and_bind,
              map2$0,
              map3$0,
              map4$0,
              map5$0,
              map6$0,
              map7$0,
              map8$0,
              map9$0,
              map10$0,
              map11$0,
              map12$0,
              map13$0,
              map14$0,
              map15$0,
              bind2$0,
              bind3$0,
              bind4$0,
              Infix,
              symbol_map$0,
              symbol_bind$0,
              join,
              if$0,
              default_hash_table_initial_siz,
              _b6_,
              both,
              Observer$0,
              freeze$0,
              depend_on$0,
              necessary_if_alive,
              on_update$0,
              Node_value,
              node_value,
              sexp_of_t$47,
              State,
              Clock,
              Expert,
              Let_syntax$0,
              Scope,
              Var,
              const$1,
              return$2,
              all$0,
              exists,
              for_all,
              memoize_fun_by_key$0,
              memoize_fun$0,
              array_fold$1,
              reduce_balanced$0,
              unordered_array_fold$0,
              opt_unordered_array_fold$0,
              sum,
              opt_sum$0,
              sum_int$0,
              sum_float$0,
              stabilize$1,
              am_stabilizing$1,
              save_dot,
              lazy_from_fun$0,
              weak_memoize_fun_by_key$0,
              weak_memoize_fun$0]}
    function Add_witness0(M)
     {function invariant(param,t){return caml_call1(M[2],t)}
      function sexp_of_t(param,t){return caml_call1(M[1],t)}
      return [0,sexp_of_t,invariant]}
    function Add_witness1(M)
     {function invariant(invariant_a,param,t)
       {return caml_call2(M[2],invariant_a,t)}
      function sexp_of_t(sexp_of_a,param,t)
       {return caml_call2(M[1],sexp_of_a,t)}
      return [0,sexp_of_t,invariant]}
    var
     include$8=Add_witness0([0,sexp_of_t$45,invariant$31]),
     sexp_of_t$48=include$8[1],
     create$21=Dependency[2],
     value$5=Dependency[3],
     sexp_of_t$49=Dependency[1];
    function invariant$32(param,_nO_){return 0}
    var
     include$9=Add_witness1([0,sexp_of_t$49,invariant$32]),
     sexp_of_t$50=include$9[1],
     create$22=Node$0[2],
     watch$3=Node$0[3],
     make_stale$3=Node$0[4],
     invalidate$1=Node$0[5],
     add_dependency$1=Node$0[6],
     remove_dependency$1=Node$0[7],
     sexp_of_t$51=Node$0[1];
    function invariant$33(param,_nN_){return 0}
    var
     include$10=Add_witness1([0,sexp_of_t$51,invariant$33]),
     sexp_of_t$52=include$10[1],
     include$11=Add_witness1([0,sexp_of_t$27,invariant$18]),
     sexp_of_t$53=include$11[1],
     invariant$34=include$11[2],
     observing$2=Observer$0[2],
     use_is_allowed$1=Observer$0[3],
     Update$0=Observer$0[5],
     on_update_exn$2=Observer$0[6],
     disallow_future_use$1=Observer$0[7],
     value$6=Observer$0[8],
     value_exn$2=Observer$0[9],
     include$12=Add_witness1([0,Observer$0[10],Observer$0[1]]),
     sexp_of_t$54=include$12[1],
     invariant$35=include$12[2],
     include$13=Add_witness0([0,sexp_of_t$39,invariant$30]),
     sexp_of_t$55=include$13[1],
     include$14=Add_witness1([0,sexp_of_t$42,invariant$3]),
     sexp_of_t$56=include$14[1],
     Private=[0,debug];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental$109);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incremental$0);
    function _no_(_nC_,_nB_)
     {var
       _nD_=Make_with_config(_nC_,_nB_),
       _nE_=_nD_[71],
       _nF_=_nE_[2],
       _nG_=_nD_[70],
       _nH_=_nD_[72],
       _nI_=_nH_[3],
       _nJ_=_nD_[61],
       _nK_=_nD_[74],
       _nL_=_nD_[73],
       _nM_=_nD_[69];
      return [0,
              _nD_[1],
              [0,
               _nM_[47],
               _nM_[61],
               _nM_[158],
               _nM_[23],
               _nM_[24],
               _nM_[52],
               _nM_[64],
               _nM_[35],
               _nM_[53],
               _nM_[21],
               _nM_[19],
               _nM_[17],
               _nM_[15],
               _nM_[13],
               _nM_[11],
               _nM_[9],
               _nM_[7],
               _nM_[51],
               _nM_[5],
               [0,_nM_[58][2]],
               _nM_[59]],
              _nD_[68],
              _nD_[4],
              _nD_[13],
              _nD_[16],
              _nD_[15],
              _nD_[75],
              _nD_[76],
              _nD_[33],
              _nD_[54],
              _nD_[36],
              _nD_[37],
              _nD_[38],
              _nD_[39],
              _nD_[40],
              _nD_[41],
              _nD_[42],
              _nD_[43],
              _nD_[44],
              _nD_[45],
              _nD_[46],
              _nD_[47],
              _nD_[48],
              _nD_[49],
              _nD_[34],
              _nD_[55],
              _nD_[50],
              _nD_[51],
              _nD_[52],
              _nD_[53],
              _nD_[56],
              _nD_[57],
              _nD_[62],
              _nD_[63],
              _nD_[64],
              _nD_[79],
              _nD_[78],
              _nD_[77],
              _nD_[60],
              _nD_[82],
              _nD_[83],
              [0],
              _nD_[84],
              _nD_[85],
              _nD_[86],
              _nD_[87],
              _nD_[88],
              _nD_[89],
              [0,_nL_[3],_nL_[9],_nL_[10]],
              [0,_nK_[8],_nK_[10],_nK_[5],_nK_[7],_nK_[6],_nK_[3],_nK_[9]],
              [0,
               _nJ_[10],
               _nJ_[1],
               _nJ_[2],
               _nJ_[3],
               _nJ_[8],
               _nJ_[9],
               _nJ_[5],
               _nJ_[6],
               _nJ_[7]],
              _nD_[32],
              Node_update,
              _nD_[65],
              _nD_[90],
              _nD_[91],
              [0,
               sexp_of_t$2,
               invariant$0,
               create$0,
               of_compare,
               of_equal,
               always,
               never,
               phys_equal,
               poly_equal,
               should_cutoff,
               equal$1],
              _nD_[24],
              _nD_[23],
              _nD_[93],
              _nD_[58],
              _nD_[81],
              _nD_[80],
              _nD_[95],
              _nD_[94],
              _nD_[26],
              _nD_[27],
              _nD_[66],
              _nD_[67],
              [0,_nD_[2][5]],
              _nD_[31],
              _nD_[92],
              [0,
               _nH_[4],
               _nH_[1],
               _nH_[2],
               [0,
                _nI_[1],
                _nI_[18],
                _nI_[19],
                _nI_[20],
                _nI_[2],
                _nI_[4],
                _nI_[5],
                _nI_[6],
                _nI_[7],
                _nI_[8],
                _nI_[9],
                _nI_[10],
                _nI_[11],
                _nI_[12],
                _nI_[13],
                _nI_[14],
                _nI_[15],
                _nI_[16],
                _nI_[17],
                _nI_[3],
                _nI_[21]]],
              Incremental_Before_or_after,
              [0,
               _nG_[6],
               _nG_[9],
               _nG_[22],
               _nG_[10],
               _nG_[11],
               _nG_[12],
               _nG_[13],
               _nG_[17],
               _nG_[18],
               _nG_[14],
               _nG_[15],
               _nG_[16],
               _nG_[20],
               _nG_[19],
               _nG_[21]],
              [0,
               _nE_[1],
               [0,_nF_[1],_nF_[7],_nF_[2],_nF_[3],_nF_[4],_nF_[5],_nF_[6]]]]}
    function _np_(_nq_)
     {var
       _nA_=Make_with_config(caml_call1(Incremental_Config[1],[0]),[0]),
       _nr_=_nA_[71],
       _ns_=_nr_[2],
       _nt_=_nA_[70],
       _nu_=_nA_[72],
       _nv_=_nu_[3],
       _nw_=_nA_[61],
       _nx_=_nA_[74],
       _ny_=_nA_[73],
       _nz_=_nA_[69];
      return [0,
              _nA_[1],
              [0,
               _nz_[47],
               _nz_[61],
               _nz_[158],
               _nz_[23],
               _nz_[24],
               _nz_[52],
               _nz_[64],
               _nz_[35],
               _nz_[53],
               _nz_[21],
               _nz_[19],
               _nz_[17],
               _nz_[15],
               _nz_[13],
               _nz_[11],
               _nz_[9],
               _nz_[7],
               _nz_[51],
               _nz_[5],
               [0,_nz_[58][2]],
               _nz_[59]],
              _nA_[68],
              _nA_[4],
              _nA_[13],
              _nA_[16],
              _nA_[15],
              _nA_[75],
              _nA_[76],
              _nA_[33],
              _nA_[54],
              _nA_[36],
              _nA_[37],
              _nA_[38],
              _nA_[39],
              _nA_[40],
              _nA_[41],
              _nA_[42],
              _nA_[43],
              _nA_[44],
              _nA_[45],
              _nA_[46],
              _nA_[47],
              _nA_[48],
              _nA_[49],
              _nA_[34],
              _nA_[55],
              _nA_[50],
              _nA_[51],
              _nA_[52],
              _nA_[53],
              _nA_[56],
              _nA_[57],
              _nA_[62],
              _nA_[63],
              _nA_[64],
              _nA_[79],
              _nA_[78],
              _nA_[77],
              _nA_[60],
              _nA_[82],
              _nA_[83],
              [0],
              _nA_[84],
              _nA_[85],
              _nA_[86],
              _nA_[87],
              _nA_[88],
              _nA_[89],
              [0,_ny_[3],_ny_[9],_ny_[10]],
              [0,_nx_[8],_nx_[10],_nx_[5],_nx_[7],_nx_[6],_nx_[3],_nx_[9]],
              [0,
               _nw_[10],
               _nw_[1],
               _nw_[2],
               _nw_[3],
               _nw_[8],
               _nw_[9],
               _nw_[5],
               _nw_[6],
               _nw_[7]],
              _nA_[32],
              Node_update,
              _nA_[65],
              _nA_[90],
              _nA_[91],
              [0,
               sexp_of_t$2,
               invariant$0,
               create$0,
               of_compare,
               of_equal,
               always,
               never,
               phys_equal,
               poly_equal,
               should_cutoff,
               equal$1],
              _nA_[24],
              _nA_[23],
              _nA_[93],
              _nA_[58],
              _nA_[81],
              _nA_[80],
              _nA_[95],
              _nA_[94],
              _nA_[26],
              _nA_[27],
              _nA_[66],
              _nA_[67],
              [0,_nA_[2][5]],
              _nA_[31],
              _nA_[92],
              [0,
               _nu_[4],
               _nu_[1],
               _nu_[2],
               [0,
                _nv_[1],
                _nv_[18],
                _nv_[19],
                _nv_[20],
                _nv_[2],
                _nv_[4],
                _nv_[5],
                _nv_[6],
                _nv_[7],
                _nv_[8],
                _nv_[9],
                _nv_[10],
                _nv_[11],
                _nv_[12],
                _nv_[13],
                _nv_[14],
                _nv_[15],
                _nv_[16],
                _nv_[17],
                _nv_[3],
                _nv_[21]]],
              Incremental_Before_or_after,
              [0,
               _nt_[6],
               _nt_[9],
               _nt_[22],
               _nt_[10],
               _nt_[11],
               _nt_[12],
               _nt_[13],
               _nt_[17],
               _nt_[18],
               _nt_[14],
               _nt_[15],
               _nt_[16],
               _nt_[20],
               _nt_[19],
               _nt_[21]],
              [0,
               _nr_[1],
               [0,_ns_[1],_ns_[7],_ns_[2],_ns_[3],_ns_[4],_ns_[5],_ns_[6]]]]}
    var
     Incremental$0=
      [0,
       [0,
        sexp_of_t$55,
        create$19,
        keep_node_creation_backtrace,
        set_keep_node_creation_backtra,
        max_height_allowed$1,
        set_max_height_allowed$1,
        num_active_observers,
        max_height_seen$1,
        num_nodes_became_necessary,
        num_nodes_became_unnecessary,
        num_nodes_changed,
        num_nodes_created,
        num_nodes_invalidated,
        num_nodes_recomputed,
        num_nodes_recomputed_directly_$0,
        num_nodes_recomputed_directly_,
        num_stabilizes,
        num_var_sets,
        [0,Stats[2]],
        stats],
       sexp_of_t$53,
       invariant$34,
       state,
       is_const,
       is_valid$2,
       is_necessary$1,
       return$0,
       return$0,
       map$6,
       symbol_map$0,
       map2$0,
       map3$0,
       map4$0,
       map5$0,
       map6$0,
       map7$0,
       map8$0,
       map9$0,
       map10$0,
       map11$0,
       map12$0,
       map13$0,
       map14$0,
       map15$0,
       bind,
       symbol_bind$0,
       bind2$0,
       bind3$0,
       bind4$0,
       Infix,
       join,
       if$0,
       freeze$0,
       depend_on$0,
       necessary_if_alive,
       for_all$6,
       exists$6,
       all,
       both,
       array_fold$0,
       reduce_balanced,
       [0],
       unordered_array_fold,
       opt_unordered_array_fold,
       sum$0,
       opt_sum,
       sum_int,
       sum_float,
       [0,top,current,within],
       [0,sexp_of_t$56,create$14,set,watch$2,value$4,latest_value,replace],
       [0,
        sexp_of_t$54,
        invariant$35,
        observing$2,
        use_is_allowed$1,
        value$6,
        value_exn$2,
        Update$0,
        on_update_exn$2,
        disallow_future_use$1],
       observe,
       Node_update,
       on_update$0,
       stabilize$0,
       am_stabilizing$0,
       [0,
        sexp_of_t$2,
        invariant$0,
        create$0,
        of_compare,
        of_equal,
        always,
        never,
        phys_equal,
        poly_equal,
        should_cutoff,
        equal$1],
       set_cutoff$0,
       get_cutoff,
       lazy_from_fun$0,
       default_hash_table_initial_siz,
       memoize_fun,
       memoize_fun_by_key,
       weak_memoize_fun,
       weak_memoize_fun_by_key,
       user_info,
       set_user_info,
       Node_value,
       node_value,
       [0,Packed$0[5]],
       pack,
       save_dot$0,
       [0,
        symbol_map$0,
        symbol_bind$0,
        [0,
         Let_syntax[1],
         Let_syntax[18],
         Let_syntax[19],
         Let_syntax[20],
         Let_syntax[2],
         Let_syntax[4],
         Let_syntax[5],
         Let_syntax[6],
         Let_syntax[7],
         Let_syntax[8],
         Let_syntax[9],
         Let_syntax[10],
         Let_syntax[11],
         Let_syntax[12],
         Let_syntax[13],
         Let_syntax[14],
         Let_syntax[15],
         Let_syntax[16],
         Let_syntax[17],
         Let_syntax[3],
         Let_syntax[21]]],
       Incremental_Before_or_after,
       [0,
        sexp_of_t$48,
        default_timing_wheel_config,
        create$20,
        alarm_precision$0,
        timing_wheel_length,
        now$2,
        watch_now,
        advance_clock,
        advance_clock_by,
        at,
        after,
        at_intervals,
        step_function,
        incremental_step_function,
        snapshot],
       [0,
        [0,sexp_of_t$50,create$21,value$5],
        [0,
         sexp_of_t$52,
         create$22,
         watch$3,
         make_stale$3,
         invalidate$1,
         add_dependency$1,
         remove_dependency$1]],
       _np_,
       Incremental_Config,
       _no_,
       Private];
    caml_register_global(1331,Incremental$0,"Incremental");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyZW1lbnRhbC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
