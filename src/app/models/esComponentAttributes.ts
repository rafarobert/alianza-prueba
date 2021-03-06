/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:22 GMT-0400 (Bolivia Time)
 * Time: 1:7:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:22 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:22
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsComponents} from "./esComponents";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsComponentAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  com_id:string;
  
  com_att_name:string;
  
  com_att_description:string;
  
  com_att_group:string;
  
  com_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esComponentAttributeCom:EsComponents;
  
  esComponentAttributeComAttParStatus:EsParams;
  
  esComponentAttributeCreatedBy:EsUsers;
  
  esComponentAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
