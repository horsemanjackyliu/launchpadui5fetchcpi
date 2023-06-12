

sap.ui.define(
    ["./BaseController" , "sap/ui/model/json/JSONModel" , "sap/base/Log"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel, Log) {
        "use strict";

        return Controller.extend("com.sap.myui5app1.controller.MainView", {
            onInit: function () {},
            sendToCpi: function () {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const raw = JSON.stringify({
                    "name": "jacky"
                  });
                  const requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  // eslint-disable-next-line prefer-template
                   const sUrl = this.getOwnerComponent().getManifestObject()._oBaseUri._string + "cpi/http/ui5/demo";
                  fetch( sUrl , requestOptions).then( response => response.json() ).then( result => {

                    const oModel = new JSONModel({ item: result });
                    this.getView().setModel(oModel);
                  }).catch( err => ( Log.info(err)));

            },
    })
});