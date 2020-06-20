export class ENDPOINTSMANAGER {

    // public static HTTP_PREFIX = 'http://localhost:9090';
    public static HTTP_PREFIX = '';

    public static ENDPOINTS = {

        // createCustomer: {
        //     mockUrl: false,
        //     headerParam: {
        //         showLoading: true,
        //         showToast: true
        //     },
        //     url: ENDPOINTSMANAGER.HTTP_PREFIX + '/api/customer/create',
        //     type: 'POST'
        // },
        createTask: {
            // mockUrl: false,
            // headerParam: {
            //     showLoading: true,
            //     showToast: true
            // },
            url: ENDPOINTSMANAGER.HTTP_PREFIX + '/api/task/create',
            type: 'POST'
        },
        createpaymenttype: {
            mockUrl: false,
            headerParam: {
                showLoading: true,
                showToast: true
            },

            url: ENDPOINTSMANAGER.HTTP_PREFIX + '/api/bank/create-payment-type',
            type: 'POST'
        }


    }

}
