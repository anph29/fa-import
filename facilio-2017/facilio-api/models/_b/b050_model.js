/**
 * B050_MODEL
 * @author Anph - 21/11/2017
*/
'use strict'
const Model = require('./../model')

module.exports = class B050_MODEL extends Model {
  constructor() {
    super()
  }


  /**
  * danh sach may, du an dung cho bang ddo google map
  *  @param pnFH200  -- khu vuc
  *  @param pnFS200 -- san pham / may moc
  *  @param pvSV202 -- Machine Code
  *  @param pvSV204 -- Serial No
  *  @param pvBV052 -- Serial No
  *  @param pnFLAG -- 1: ap dung tddieu kien tgian ddinh kem, 0: ko ap dung
  *  @param pdUpdateTime -- thoi gian can ap dung
  *  @param pnFH000
  */
  _listOfTabB050(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB050',
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvSV202 = !!params.pvSV202 ? params.pvSV202 : null,
      pvSV204 = !!params.pvSV204 ? params.pvSV204 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pnFLAG = !!params.pnFLAG ? +params.pnFLAG : 0,
      pdUpdateTime = !!params.pdUpdateTime ? new Date(params.pdUpdateTime) : new Date(),
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pnFS200, pvSV202, pvSV204, pvBV052, pnFLAG, pdUpdateTime, pnFH000], callback)
  }
  /**
  * Danh sach may (vi tri) can tim
  *  @param pnFH000 -- phan he
  *  @param pnFH200 
  *  @param pnFS200 
  *  @param pdFRDAT 
  *  @param pdTODAT 
  *  @param pvSEARC 
  *  @param pnOFFSET 
  *  @param pnLIMIT
  *  @param pvLOGIN
  */
  _listOfTabB050S(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB050S',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pdFRDAT = !!params.pdFRDAT ? new Date(params.pdFRDAT) : new Date(),
      pdTODAT = !!params.pdTODAT ? new Date(params.pdTODAT) : new Date(),
      pvSEARC = !!params.pvSEARC ? params.pvSEARC : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pdFRDAT, pdTODAT, pvSEARC, pnOFFSET, pnLIMIT, pvLOGIN], callback)
  }
  /**
  * Danh sach may (vi tri) hoac danh sach du an: Merian-Admin
  *  @param pnFH000 -- phan he
  *  @param pnFH200 
  *  @param pnFS200 
  *  @param pvBV051 --ten may
  *  @param pvBV052 
  *  @param pvBV068 
  *  @param pnFN850 
  *  @param pnFK100
  *  @param pnOFFSET -- record bat ddau
  *  @param pnLIMIT -- so luong records hien thi
  *  @param pnSORT  -- sort theo danh muc gi
  *  @param pnDIRECTION -- thu tu tang dan hay giam dan
  *  @param pvLOGIN
  *  @param pnB050TYP
  */
  _listOfTabB050HT(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB050HT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvBV068 = !!params.pvBV068 ? params.pvBV068 : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFK100 = !!params.pnFK100 ? +params.pnFK100 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnB050TYP = !!params.pnB050TYP ? +params.pnB050TYP : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvBV051, pvBV052, pvBV068, pnFN850, pnFK100, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN, pnB050TYP], callback)
  }
  /**
  * DANH SACH VI TRI MAY 
  *  @param pvBV051 -- ten may
  *  @param pvBV052 -- Ma TB
  *  @param pvBV060 -- Ma TS
  *  @param pnFN850 -- NHOm to
  *  @param pnFS200 -- Loai tb
  *  @param pnFH200 -- Cong doan
  *  @param pnOFFSET -- record bat ddau
  *  @param pnLIMIT -- so luong records hien thi
  *  @param pnSORT -- sort theo danh muc gi
  *  @param pnDIRECTION -- thu tu tang dan hay giam dan
  *  @param pvLOGIN
  */
  _listOfTabB050BS(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB050BS',
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvBV060 = !!params.pvBV060 ? params.pvBV060 : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvBV051, pvBV052, pvBV060, pnFN850, pnFS200, pnFH200, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * THEM Vi Tri May
  * @param pnFH150                      
  * @param pnFH200 -- FH200: phan he quan ly     
  * @param pnFS200 -- FS200: ID may moc
  * @param pnFN850 
  * @param pnCOUNT -- COUNT: so luong may can ddua vao             
  * @param pvFC550 -- FC550: M,E or T,O
  * @param pvLOGIN
  */
  _insertTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050',
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnCOUNT = !!params.pnCOUNT ? +params.pnCOUNT : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH150, pnFH200, pnFS200, pnFN850, pnCOUNT, pvFC550, pvLOGIN], callback)
  }
  /**
  * GetTypOfTabB050
  * @param pnFB050      -- phan he                 
  * @param pvLOGIN
  */
  _getTypOfTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_CUR + 'GetTypOfTabB050',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pvLOGIN], callback)
  }
  /**
  * CheckStatOfTabB050
  * @param pnFB050      -- phan he                 
  * @param pvLOGIN
  */
  _checkStatOfTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_CUR + 'CheckStatOfTabB050',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pvLOGIN], callback)
  }
  /**
  * CheckLimiOfTabB050
  * @param pnFB050      -- phan he                 
  * @param pvLOGIN
  */
  _checkLimiOfTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_CUR + 'CheckLimiOfTabB050',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pvLOGIN], callback)
  }
  /**
  * Neu phan he quan ly du an thi xem danh sach du an truc thuoc FH200
  * @param pnFH000       
  * @param pnFH200           
  * @param pvLOGIN
  */
  _getProjectList(params, callback) {

    const funcName = this.SYNONYM.B2017_CUR + 'GetProjectList',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
  * -- Kiem tra tasks lien quan dden du an B050
  * -- dung cho treeView Avanti / Merian
  * @param pnFH000       
  * @param pnFH200           
  * @param pnFB050
  * @param pvLOGIN
  */
  _tasksOfTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_CUR + 'TasksOfTabB050',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB050, pvLOGIN], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * CreatePMTab050BT
  * @param pnFH000                      
  * @param pnFH200
  * @param pvHV201  -- Khu vuc
  * @param pvSV201  -- Thiet bi
  * @param pvSV251  -- Bo phan
  * @param pvBV052  -- MTS
  * @param pvNV851  -- NHOM TO
  * @param pvBV001  -- MA CHU KY
  * @param pnBN102  -- so ngay
  * @param pvBV108  -- ngay trong tuan MO
  * @param pnBN112  -- Nhot (1), Mo (2) > Co (1), Dien (2)
  * @param pnBN113  -- han muc LIM
  * @param pvBV151  -- ten cong viec
  * @param pnBN152  -- so thu tu
  * @param pvBV153  -- chung loai su dung > CV trong yeu (1)
  * @param pvBV157  --B150.BN157%TYPE -- SL = 0
  * @param pnBN158  -- Vi tri >> trang thai 1: may chay, 0: may dung 
  * @param pvBV203  -- ngay BT cuoi
  * @param pvVV501  -- Ma tai san
  * @param pvVV502  -- Chung loai goc > yeu cau ky thuat
  * @param pvBV003
  */
  _createPMTab050BT(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'CreatePMTab050BT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvHV201 = !!params.pvHV201 ? params.pvHV201 : null,
      pvSV201 = !!params.pvSV201 ? params.pvSV201 : null,
      pvSV251 = !!params.pvSV251 ? params.pvSV251 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvNV851 = !!params.pvNV851 ? params.pvNV851 : null,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : null,
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : null,
      pnBN112 = !!params.pnBN112 ? +params.pnBN112 : 0,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pvBV151 = !!params.pvBV151 ? params.pvBV151 : null,
      pnBN152 = !!params.pnBN152 ? +params.pnBN152 : 0,
      pvBV153 = !!params.pvBV153 ? params.pvBV153 : null,
      pvBV157 = !!params.pvBV157 ? params.pvBV157 : null,
      pnBN158 = !!params.pnBN158 ? +params.pnBN158 : 0,
      pvBV203 = !!params.pvBV203 ? params.pvBV203 : null,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvVV502 = !!params.pvVV502 ? params.pvVV502 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvHV201, pvSV201, pvSV251, pvBV052, pvNV851, pvBV001, pnBN102, pvBV108,
      pnBN112, pnBN113, pvBV151, pnBN152, pvBV153, pvBV157, pnBN158, pvBV203, pvVV501, pvVV502, pvBV003, pvLOGIN], callback)
  }

  /**
    * Kiem tra MTS ton tai hay chua 
    * @param pvMATSA                      
    * @param pvLOGIN 
    */
  _checkExTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'CheckExTabB050',
      pvMATSA = !!params.pvMATSA ? params.pvMATSA : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvMATSA, pvLOGIN], callback)
  }

  /**
    * cap nhat budget / du thu cua du an :: chuyen muc tai chinh 
    * @param pnFH150   
    * @param pnFH200   
    * @param pnFS200   
    * @param pnFN850   
    * @param pnCOUNT                      
    * @param pvFC550 
    */
  _insertTabB050_p7(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050',
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnCOUNT = !!params.pnCOUNT ? +params.pnCOUNT : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH150, pnFH200, pnFS200, pnFN850, pnCOUNT, pvFC550, pvLOGIN], callback)
  }

  /**
    * nhap, chinh sua thong tin may qua mot vi tri nao ddo trong Cty, chi nhanh
    * @param pnPB050  --ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ...   
    * @param pnFS200  --may moc (san pham, dich vu) 
    * @param pnFH150   
    * @param pnFH200  --Cty, chi nhanh, phan xuong, lau line
    * @param pvBV051  -- dien giai                  
    * @param pvBV052 
    * @param pdBD053  -- nam san xuat
    * @param pvBV054  -- position
    * @param pnBN055  -- x 
    * @param pnBN056  -- y  
    * @param pnBN057  -- z                    
    * @param pnBN058  -- width
    * @param pnBN059  -- high 
    * @param pvBV060  -- Filename 
    * @param pnBN061  -- LAT 
    * @param pnBN062  -- LONG 
    */
  _insertTabB050_p17(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pdBD053 = !!params.pdBD053 ? new Date(params.pdBD053) : new Date(),
      pvBV054 = !!params.pvBV054 ? params.pvBV054 : null,
      pnBN055 = !!params.pnBN055 ? +params.pnBN055 : 0,
      pnBN056 = !!params.pnBN056 ? +params.pnBN056 : 0,
      pnBN057 = !!params.pnBN057 ? +params.pnBN057 : 0,
      pnBN058 = !!params.pnBN058 ? +params.pnBN058 : 0,
      pnBN059 = !!params.pnBN059 ? +params.pnBN059 : 0,
      pvBV060 = !!params.pvBV060 ? params.pvBV060 : null,
      pnBN061 = !!params.pnBN061 ? +params.pnBN061 : 0,
      pnBN062 = !!params.pnBN062 ? +params.pnBN062 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pnFS200, pnFH150, pnFH200, pvBV051, pvBV052, pdBD053,
      pvBV054, pnBN055, pnBN056, pnBN057, pnBN058, pnBN059, pvBV060, pnBN061, pnBN062, pvLOGIN], callback)
  }

  /**
    * nhap, chinh sua thong tin may qua mot vi tri nao ddo trong Cty, chi nhanh
    * @param pnPB050  --ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ...   
    * @param pnFS200  --may moc (san pham, dich vu) 
    * @param pnFH075  -- KOSTENSTELLE   
    * @param pnFH150   
    * @param pnFH200  --Cty, chi nhanh, phan xuong, lau line
    * @param pvBV051  -- dien giai                  
    * @param pvBV052 
    * @param pdBD053  -- nam san xuat
    * @param pvBV054  -- position
    * @param pnBN055  -- x 
    * @param pnBN056  -- y  
    * @param pnBN057  -- z                    
    * @param pnBN058  -- width
    * @param pnBN059  -- high 
    * @param pvBV060  -- Filename 
    * @param pnBN061  -- LAT 
    * @param pnBN062  -- LONG 
    */
  _insertTabB050_p18(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH075 = !!params.pnFH075 ? +params.pnFH075 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pdBD053 = !!params.pdBD053 ? new Date(params.pdBD053) : new Date(),
      pvBV054 = !!params.pvBV054 ? params.pvBV054 : null,
      pnBN055 = !!params.pnBN055 ? +params.pnBN055 : 0,
      pnBN056 = !!params.pnBN056 ? +params.pnBN056 : 0,
      pnBN057 = !!params.pnBN057 ? +params.pnBN057 : 0,
      pnBN058 = !!params.pnBN058 ? +params.pnBN058 : 0,
      pnBN059 = !!params.pnBN059 ? +params.pnBN059 : 0,
      pvBV060 = !!params.pvBV060 ? params.pvBV060 : null,
      pnBN061 = !!params.pnBN061 ? +params.pnBN061 : 0,
      pnBN062 = !!params.pnBN062 ? +params.pnBN062 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pnFS200, pnFH075, pnFH150, pnFH200, pvBV051, pvBV052, pdBD053,
      pvBV054, pnBN055, pnBN056, pnBN057, pnBN058, pnBN059, pvBV060, pnBN061, pnBN062, pvLOGIN], callback)
  }

  /**
    * BO SUNG PABT CHO MOT THIET BI DA TON TAI (THIET BI KHAC) 
    * @param pnFH200  -- nhanh MOI (thay cho han muc Vi tri Khac)    
    * @param pnFB050  -- thiet bi / vi tri may
    * @param pnFS200  -- loai thiet bi  
    * @param pnFN850  -- nhom to phu trach 
    * @param pvFC550  -- loai bao tri                    
    * @param pvLOGIN 
    */
  _insertTabB050ADD(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050ADD',
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH200, pnFB050, pnFS200, pnFN850, pvFC550, pvLOGIN], callback)
  }

  /**
    * them may vao LINE voi so luong co the > 1 
    * @param pnFB050     
    * @param pnFH000  
    * @param pnFH200  
    * @param pnFH150  
    * @param pnFS200                      
    * @param pnFS250 
    * @param pnFN850  -- NHOM TO    
    * @param pvHV451  -- KHU VUC
    * @param pvBV052  -- MA TAI SAN
    * @param pvLOGIN  
    */
  _insertTabB050BT_p10(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050BT',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvHV451 = !!params.pvHV451 ? params.pvHV451 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pnFH000, pnFH200, pnFH150, pnFS200, pnFS250,
      pnFN850, pvHV451, pvBV052, pvLOGIN], callback)
  }

  /**
    * nhap, chinh sua thong tin may qua mot vi tri nao ddo trong Cty, chi nhanh
    * @param pnPB050     
    * @param pnFS200
    * @param pnFH075  -- KOSTENSTELLE    
    * @param pnFH150
    * @param pnFH200
    * @param pvBV051
    * @param pvBV052
    * @param pdBD053
    * @param pvBV054
    * @param pnBN055
    * @param pnBN056
    * @param pnBN057
    * @param pnBN058
    * @param pnBN059
    * @param pvBV060
    * @param pnBN061
    * @param pnBN062
    * @param pvBV068
    * @param pvLOGIN
    */
  _insertTabB050BT_p19(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050BT',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH075 = !!params.pnFH075 ? +params.pnFH075 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pdBD053 = !!params.pdBD053 ? new Date(params.pdBD053) : new Date(),
      pvBV054 = !!params.pvBV054 ? params.pvBV054 : null,
      pnBN055 = !!params.pnBN055 ? +params.pnBN055 : 0,
      pnBN056 = !!params.pnBN056 ? +params.pnBN056 : 0,
      pnBN057 = !!params.pnBN057 ? +params.pnBN057 : 0,
      pnBN058 = !!params.pnBN058 ? +params.pnBN058 : 0,
      pnBN059 = !!params.pnBN059 ? +params.pnBN059 : 0,
      pvBV060 = !!params.pvBV060 ? params.pvBV060 : null,
      pnBN061 = !!params.pnBN061 ? +params.pnBN061 : 0,
      pnBN062 = !!params.pnBN062 ? +params.pnBN062 : 0,
      pvBV068 = !!params.pvBV068 ? params.pvBV068 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pnFS200, pnFH075, pnFH150, pnFH200, pvBV051, pvBV052,
      pdBD053, pvBV054, pnBN055, pnBN056, pnBN057, pnBN058, pnBN059, pvBV060, pnBN061, pnBN062, pvBV068, pvLOGIN], callback)
  }

  /**
    * chinh sua cac thong tin ve vi tri va kich co cua may tren giao dien dashboard
    * @param pnFH000   
    * @param pnFH200  
    * @param pvBV052  -- ma tai san 
    * @param pvBV051  -- ten thiet bi
    * @param pvBV054  -- Ma thiet bi                    
    * @param pvLOGIN 
    */
  _updateTabB050HT(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB050HT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV054 = !!params.pvBV054 ? params.pvBV054 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvBV052, pvBV051, pvBV054, pvLOGIN], callback)
  }

  /**
    * chinh sua cac thong tin ve vi tri va kich co cua may tren giao dien dashboard
    * @param pnFB050   
    * @param pvBV051  -- ten thiet bi
    * @param pvBV052  -- ma tai san 
    * @param pvBV054  -- NOTES
    * @param pvBV060  -- Ma thiet bi
    * @param pnBN061   
    * @param pnBN062                      
    * @param pvLOGIN 
    */
  _updateTabB050BS(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB050BS',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvBV054 = !!params.pvBV054 ? params.pvBV054 : null,
      pvBV060 = !!params.pvBV060 ? params.pvBV060 : null,
      pnBN061 = !!params.pnBN061 ? +params.pnBN061 : 0,
      pnBN062 = !!params.pnBN062 ? +params.pnBN062 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pvBV051, pvBV052, pvBV054, pvBV060, pnBN062, pnBN061, pvLOGIN], callback)
  }

  /**
    * thay ddoi trang thai thiet bi
    * @param pnPB050   
    * @param pvBV066  
    * @param pvLOGIN 
    */
  _updateStatTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateStatTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pvBV066 = !!params.pvBV066 ? params.pvBV066 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pvBV066, pvLOGIN], callback)
  }

  /**
    * chinh sua cac thong tin ve vi tri va kich co cua may tren giao dien dashboard
    * @param pnPB050  ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ... 
    * @param pnBN055  -- x, lat
    * @param pnBN056  -- y, long
    * @param pnBN057  -- z
    * @param pnBN058  -- width
    * @param pnBN059  -- high
    * @param pvBV060                      
    * @param pvLOGIN 
    */
  _updateTabB050_p8(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pnBN055 = !!params.pnBN055 ? +params.pnBN055 : 0,
      pnBN056 = !!params.pnBN056 ? +params.pnBN056 : 0,
      pnBN057 = !!params.pnBN057 ? +params.pnBN057 : 0,
      pnBN058 = !!params.pnBN058 ? +params.pnBN058 : 0,
      pnBN059 = !!params.pnBN059 ? +params.pnBN059 : 0,
      pvBV060 = !!params.pvBV060 ? params.pvBV060 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pnBN055, pnBN056, pnBN057, pnBN058, pnBN059, pvBV060, pvLOGIN], callback)
  }

  /**
    * chinh sua cac thong tin ve vi tri va kich co cua may theo lat long cho MAP
    * @param pnPB050  ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ... 
    * @param pvBV061  -- LAT  
    * @param pvBV062  -- LONG                  
    * @param pvLOGIN 
    */
  _updateTabB050_p4(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pvBV061 = !!params.pvBV061 ? params.pvBV061 : null,
      pvBV062 = !!params.pvBV062 ? params.pvBV062 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pvBV061, pvBV062, pvLOGIN], callback)
  }

  /**
    * cap nhat budget / du thu cua du an :: chuyen muc tai chinh
    * @param pnPB050  ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ... 
    * @param pvBV051  
    * @param pnBN064  
    * @param pnBN065  
    * @param pvBV066  -- status
    * @param pdBD067  -- ngay thu tien
    * @param pvBV068  -- tien te                     
    * @param pvLOGIN 
    */
  _insertTabB050T(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050T',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pnBN064 = !!params.pnBN064 ? +params.pnBN064 : 0,
      pnBN065 = !!params.pnBN065 ? +params.pnBN065 : 0,
      pvBV066 = !!params.pvBV066 ? params.pvBV066 : null,
      pdBD067 = !!params.pdBD067 ? new Date(params.pdBD067) : new Date(),
      pvBV068 = !!params.pvBV068 ? params.pvBV068 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pvBV051, pnBN064, pnBN065, pvBV066, pdBD067, pvBV068, pvLOGIN], callback)
  }

  /**
    * thay ddoi khu vuc, nguoi quan ddam trach cong viec bao tri
    * @param pnPB050  ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ... 
    * @param pnFH000 
    * @param pnFH200  
    * @param pnFN850  
    * @param pvFQ101                      
    * @param pvLOGIN 
    */
  _updateTabB050_p6(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvFQ101 = !!params.pvFQ101 ? params.pvFQ101 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pnFH000, pnFH200, pnFN850, pvFQ101, pvLOGIN], callback)
  }

  /**
    * chinh sua cac thong tin ve vi tri va kich co cua may tren giao dien dashboard
    * @param pnFB050  
    * @param pvBV052 -- ma tai san
    * @param pvBV051 -- ten thiet bi 
    * @param pvBV060 -- Ma thiet bi 
    * @param pnBN061                      
    * @param pnBN062 
    */
  _updateTabB050LL(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB050LL',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvBV051 = !!params.pvBV051 ? params.pvBV051 : null,
      pvBV060 = !!params.pvBV060 ? params.pvBV060 : null,
      pnBN061 = !!params.pnBN061 ? +params.pnBN061 : 0,
      pnBN062 = !!params.pnBN062 ? +params.pnBN062 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pvBV052, pvBV051, pvBV060, pnBN061, pnBN062, pvLOGIN], callback)
  }

  /**
    * xoa bo thong tin tung san pham cua tung khu vuc
    * @param pnPB050  ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ...
    */
  _stornoTabB050(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'StornoTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pvLOGIN], callback)
  }

  /**
    * -- May dduoc ddat o mot vi tri nao ddo, roi bi xoa (stornostmp = date)
    *-- Chuc nang nay co the ddua may ve lai trang thai binh thuong thay vi phai 
    *-- tao moi du lieu
    *-- dua cong viec dda huy vao lai qui trinh lam viec
    * @param pnPB050  ID thuoc vi tri ddat may trong cty, chi nhanh, phan xuong, ...
    * @param pnFH200  Cty, chi nhanh, phan xuong, lau line
    */
  _reactiTabB050_p3(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'ReactiTabB050',
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB050, pnFH200, pvLOGIN], callback)
  }

  /**
    * them TB vao LINE voi so luong co the > 1 
    * @param pnFH000    
    * @param pnFH200 
    * @param pnFN850 
    * @param pnFS200  ID may moc
    * @param pnFH150                      
    * @param pvFC550 
    * @param pnCOUNT so luong may can ddua vao 
    */
  _insertTabB050PMPOS(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050PMPOS',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pnCOUNT = !!params.pnCOUNT ? +params.pnCOUNT : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFN850, pnFS200, pnFH150, pvFC550, pnCOUNT, pvLOGIN], callback)
  }

  /**
    * them may vao LINE voi so luong co the > 1 
    * @param pnFH000  
    * @param pnFH200 
    * @param pnFN850 
    * @param pnFS200  ID may moc
    * @param pnFH150                      
    * @param pnCOUNT so luong may can ddua vao 
    */
  _insertTabB050BTPOS(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB050BTPOS',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnCOUNT = !!params.pnCOUNT ? +params.pnCOUNT : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFN850, pnFS200, pnFH150, pnCOUNT, pvLOGIN], callback)
  }
}
