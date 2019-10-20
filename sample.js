let json = {
    "d": {
    "ESUserName": "es",
    "ESPassword": "es",
    "Operation": "getContractEntitlement",
    "ClientAppID": "es",
    "DataEntrySite": "2060",
    "ActiveContractsOnly": true,
    "ActiveServicesOnly": true,
    "IncludeAddresses": true,
    "IncludeContacts": true,
    "IncludeOffers": true,
    "IncludeDeliverables": true,
    "IncludeModifiers": true,
    "IncludeWorkings": true,
    "EntitlementCheckDate": "2019-09-16",
    "MNContractSourceDoc": "N",
    "IncludeManufacturerInfo": true,
    "ContractIdentifier": "4000000782",
    "IncludeUniqueOffers": false,
    "IncludeUniqueDeliverables": true,
    "IncludeOOSes": true,
    "StandAloneOffersOnly": false,
    "IncludeSoftwareServiceLevelCategory": true,
    "IncludeSpecialInstructions": true,
    "IncludeCustomerIndicator": true,
    "IncludeCustomerIdentificationInformation": false,
    "IncludePartners": false,
    "TransactionID": "75138948",
    "AtnEIAError": null,
    "AtnResponseHeadToContractEntitlement": {
    "results": [
    {
    "ActiveContractEntitlement": true,
    "OverallContractStartDate": "2019-01-06",
    "OverallContractEndDate": "2020-01-05",
    "AtnContractEntitlementToWorking": {
    "results": [
    {
    "WorkingName": "S4",
    "WorkingValue": "Success"
    }
    ]
    }
    }
    ]
    },
    "AtnResponseHeadToWarningsEIAError": {
    "results": [
    {
    "TimeStamp": "2019-09-20T09:28:41.847",
    "ErrorLevel": "FUNCTIONAL",
    "ErrorID": "300",
    "ErrorText": "Legacy: No data found",
    "ErrorClass": "DataNotFound",
    "DataPayLoad": "[TXID 856765109]"
    }
    ]
    }
    }
    } 
     
    

let sortByArr = function(obj){
    let arr = [];
    for(let props in obj){
        if(obj.hasOwnProperty(props)){
            arr.push({
                'key' : props,
                'value' : obj[props]
            })
        }
    }
   
    let temp = arr[29];
    arr[29] = arr[28];
    arr[29] = temp;
    return arr
}

let createObjFromArr = function(arr){
    let obj = {};
    for(let arrObj of arr){
        obj[arrObj.key] = arrObj.value;
    }
    return obj;
}

let arr = sortByArr(json.d);
console.log(arr);
let obj = createObjFromArr(arr);
console.log(obj);

