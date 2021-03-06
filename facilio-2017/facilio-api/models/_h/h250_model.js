/**
 * H250_MODEL
 * @author Linhnc - 28/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class H250_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * @param pnFH000
   * @param pnFH200
   */
  _listOfTabH250(params, callback) {

    const procName = this.SYNONYM.H2017_CUR + 'ListOfTabH250',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   *  -- nhap cac mieu ta ve cau hinh quan ly cho tung cty
   *
   * @param pnPH250
   * @param pnFH000 -- FH000: phan he quan ly
   * @param pnFH200 -- FH200: Cty, chi nhanh
   * @param pvHV251 -- HV251: ky tu viet tat
   * @param pvHV252 -- HV252: dien giai dday ddu
   * @param pvHV253
   * @param pvLOGIN
   */
  _insertTabH250(params, callback) {

    const funcName = this.SYNONYM.H2017_FACI + 'InsertTabH250',
      pnPH250 = !!params.pnPH250 ? +params.pnPH250 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvHV251 = !!params.pvHV251 ? params.pvHV251 : null,
      pvHV252 = !!params.pvHV252 ? params.pvHV252 : null,
      pvHV253 = !!params.pvHV253 ? params.pvHV253 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPH250, pnFH000, pnFH200, pvHV251, pvHV252, pvHV253, pvLOGIN], callback)
  
  }

  /**
   *  -- HUY MUC QUAN LY 
   *
   * @param pnPH250
   * @param pvLOGIN
   */
  _stornoTabH250(params, callback) {

    const funcName = this.SYNONYM.H2017_FACI + 'StornoTabH250',
      pnPH250 = !!params.pnPH250 ? +params.pnPH250 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPH250, pvLOGIN], callback)
  
  }

}