
const data = {
  common: {
    cc: {
      VISA: 'https://media.rideaustin.com/images/C427C2B7-A0ED-4DA0-9193-93946B4C7928_2x.png',
      AMERICANEXPRESS: 'https://media.rideaustin.com/images/EA95B130-79D6-4D3A-B1B5-D6B287CA1966_2x.png',
      DINERS_CLUB: 'https://media.rideaustin.com/images/FA838CAB-D333-493D-8EFB-C11517F54785_2x.png',
      DISCOVER: 'https://media.rideaustin.com/images/E4651B9E-C45E-4D93-AF54-DE1AFDB125EC_2x.png',
      JBC: 'https://media.rideaustin.com/images/FE4A466C-9974-4BD8-8A09-F540DDDE90CD_2x.png',
      MASTERCARD: 'https://media.rideaustin.com/images/59196C96-5EC5-4817-BAEC-AFC7A637410D_2x.png',
    },
    logo: {
      1: 'https://media.rideaustin.com/images/6E72B508-E901-4F16-86B8-73E6BE500AE4_2x.png',
      2: 'https://media.rideaustin.com/images/logoRideHoustonBlack@3x.png',
    },
    driverStatus: [
      { name: 'Active', id: 'ACTIVE' },
      { name: 'Requested', id: 'REQUESTED' },
      { name: 'Completed', id: 'COMPLETED' },
      { name: 'Assigned Driver', id: 'DRIVER_ASSIGNED' },
      { name: 'Driver Reached', id: 'DRIVER_REACHED' },
      { name: 'Rider Cancelled', id: 'RIDER_CANCELLED' },
      { name: 'Driver Cancelled', id: 'DRIVER_CANCELLED' },
      { name: 'Admin Cancelled', id: 'ADMIN_CANCELLED' },
    ],
    endedStatuses: ['COMPLETED', 'RIDER_CANCELLED', 'DRIVER_CANCELLED', 'ADMIN_CANCELLED'],
    logoWhite: {
      1: 'https://media.rideaustin.com/images/30B6994B-0913-44B5-9134-F8E4944DB9F9.png',
      2: 'https://media.rideaustin.com/images/logoRideHouston@3x.png',
    },
    cities: [
      { id: 'AUSTIN', name: 'Austin' },
      { id: 'HOUSTON', name: 'Houston' },
    ],
    cityApprovalStatus: [
      { name: 'Pending', id: 'PENDING' },
      { name: 'Not Provided', id: 'NOT_PROVIDED' },
      { name: 'Approved', id: 'APPROVED' },
      { name: 'Rejected Photo', id: 'REJECTED_PHOTO' },
      { name: 'Rejected By City', id: 'REJECTED_BY_CITY' },
      { name: 'Expired', id: 'EXPIRED' },
    ],
    TNC_status: [
      { name: 'Pending', id: 'PENDING' },
      { name: 'Approved', id: 'APPROVED' },
      { name: 'Rejected', id: 'REJECTED' },
      { name: 'Expired', id: 'EXPIRED' },
    ],
    activationStatus: [
      { id: 'ACTIVE', name: 'Active' },
      { id: 'REJECTED', name: 'Rejected' },
      { id: 'SUSPENDED', name: 'Suspended' },
      { id: 'DEACTIVATED_OTHER', name: 'Deactivated other' },
      { id: 'INACTIVE', name: 'Inactive' },
    ],
    checkr: [
      { value: 'CLEAR', name: 'Clear' },
      { value: 'PENDING', name: 'Pending' },
      { value: 'NOT_REQUESTED', name: 'Not Requested' },
      { value: 'CONSIDER', name: 'Consider' },
      { value: 'SUSPENDED', name: 'Suspended' },
      { value: 'DISPUTE', name: 'Dispute' },
      { value: 'MANUAL', name: 'Manual' },
      { value: 'CLEAR_MANUAL', name: 'Clear Manual' },
      { value: 'REJECTED_MANUAL', name: 'Rejected Manual' },
      { value: 'ERROR', name: 'Error' },
    ],
    payoneer: [
      { value: 'ACTIVE', name: 'Active' },
      { value: 'PENDING', name: 'Inactive' },
      { value: 'INITIAL', name: 'Not registered' },
    ],
    userTypes: [
      { value: 'riders', name: 'Riders' },
      { value: 'drivers', name: 'Drivers' },
    ],
    statusTypes: [
      { value: 'active', name: 'Active' },
      { value: 'notActive', name: 'Not Active' },
      { value: 'enabled', name: 'Enabled' },
      { value: 'notEnabled', name: 'Not Enabled' },
    ],
    inspectionStatus: [
      { value: 'NOT_INSPECTED', name: 'Not Inspected' },
      { value: 'PENDING', name: 'Pending' },
      { value: 'APPROVED', name: 'Approved' },
      { value: 'REJECTED', name: 'Rejected' },
    ],
    apis: [
      {id: 'api-dev', name: 'Dev API', url: 'https://api-dev.rideaustin.com/rest/'},
      {id: 'api-load-testing', name: 'LoadTesting API', url: 'https://api-load-testing.rideaustin.com/rest/'},
      {id: 'api-rc', name: 'RC API', url: 'https://api-rc.rideaustin.com/rest/'},
      {id: 'api-stage', name: 'Stage API', url: 'https://api-stage.rideaustin.com/rest/'},
      {id: 'api', name: 'Production API', url: 'https://api-console.rideaustin.com/rest/'},
      {id: 'api-feature', name: 'Feature API', url: 'https://api-feature.rideaustin.com/rest/'},
      {id: 'dev_local', name: 'Dev Local', url: 'http://localhost:8080/rest/'},
    ],
  },
  timezone: {
    texas: {
      offset: moment().isDST() ? 5 : 6,
      timezone: moment().isDST() ? '-05:00' : '-06:00',
    },
  },
  users: {
    searchTypes: [
      { value: 'name', name: 'Name' },
      { value: 'email', name: 'Email' },
      { value: 'id', name: 'Id' },
    ],
  },
  email: [
    { id: 'from', name: 'From', type: 'text', order: 10 },
    { id: 'to', name: 'To', type: 'text', order: 20 },
    { id: 'subject', name: 'Subject', type: 'text', order: 30, required: true, placeholder: 'Enter Email Subject' },
    { id: 'body', name: 'Body', type: 'textarea', order: 40, required: true, placeholder: 'Enter Email Body' },
  ],
  pushNotifications: [
    { id: 'topics', name: 'Select Topic', type: 'select', order: 10 },
    { id: 'message', name: 'Message', type: 'textarea', order: 20, required: true },
  ],
  exportPayments: [
    { id: 'paymentDate', name: 'Payment Date', type: 'date', order: 10, dateFormat: 'YYYY-MM-DD', horizontal: true, fieldSm: 9, labelSm: 3 },
    { id: 'createAfter', name: 'Start Date', type: 'date', order: 20, dateFormat: 'YYYY-MM-DD', required: true, horizontal: true, fieldSm: 9, labelSm: 3 },
    { id: 'createBefore', name: 'End Date', type: 'date', order: 30, dateFormat: 'YYYY-MM-DD', required: true, horizontal: true, fieldSm: 9, labelSm: 3 },
  ],
  newPayment: [
    { id: 'driverId', name: 'Driver ID (max 19 char.)', type: 'number', order: 10, required: true, maxLength: 19, horizontal: true, fieldSm: 8, labelSm: 4 },
    { id: 'description', name: 'Description (max 500 char)', type: 'textarea', order: 20, required: true, horizontal: true, maxLength: 500, fieldSm: 8, labelSm: 4 },
    { id: 'value', name: 'Amount', type: 'number', order: 30, required: true, horizontal: true, fieldSm: 8, labelSm: 4 },
    { id: 'paymentDate', name: 'Payment Date', type: 'date', order: 40, dateFormat: 'YYYY-MM-DD', required: true, horizontal: true, fieldSm: 8, labelSm: 4 },
    {
      id: 'type',
      name: 'Type',
      type: 'select',
      value: 'BONUS',
      allValues: [
       { id: 'BONUS', name: 'Bonus' },
       { id: 'INCENTIVE', name: 'Incentive' },
       { id: 'COMPENSATION', name: 'Componensation' },
       { id: 'REIMBURSEMENT', name: 'Reimbursment' },
       { id: 'OTHER', name: 'Other' },
      ],
      order: 50,
      horizontal: true,
      fieldSm: 8,
      labelSm: 4,
    },
  ],
  upgrades: [
    { id: 'id', name: 'ID', type: 'text', order: 10, disabled: true, upgradeType: 'edit' },
    {
      id: 'avatarType',
      name: 'Avatar',
      type: 'select',
      value: 'DRIVER',
      allValues: [
       { id: 'DRIVER', name: 'Driver' },
       { id: 'RIDER', name: 'Rider' },
      ],
      order: 20,
    },
    {
      id: 'platformType',
      name: 'Platform',
      type: 'select',
      value: 'ANDROID',
      allValues: [
       { id: 'ANDROID', name: 'Android' },
       { id: 'IOS', name: 'IOS' },
      ],
      order: 30,
    },
    {
      id: 'mandatoryUpgrade',
      name: '',
      type: 'checkbox',
      allValues: [
       { id: 'mandatoryUpgrade', name: 'Mandatory' },
      ],
      order: 35,
    },
    { id: 'version', name: 'Version', type: 'text', order: 40, required: true, maxLength: 20 },
    { id: 'userAgentHeader', name: 'User Agent Header', type: 'text', order: 50, required: true, maxLength: 20 },
  ],
  payments: [
    { id: 'createdOnAfter', name: 'Start date', type: 'date', order: 10, dateFormat: 'YYYY-MM-DD'},
    { id: 'createdOnBefore', name: 'End date', type: 'date', order: 20, dateFormat: 'YYYY-MM-DD'},
    {
      id: 'category',
      name: 'Category',
      type: 'select',
      value: 'all',
      allValues: [
       { id: 'all', name: 'All' },
       { id: 'BONUS', name: 'Bonus' },
       { id: 'INCENTIVE', name: 'Incentive' },
       { id: 'COMPENSATION', name: 'Compensation' },
       { id: 'REIMBURSEMENT', name: 'Reimbursment' },
       { id: 'OTHER', name: 'Other' },
      ],
      order: 30,
    },
    {
      id: 'searchBy',
      name: 'Search By',
      type: 'select',
      value: 'administratorId',
      allValues: [
       { id: 'administratorId', name: 'Administrator ID' },
       { id: 'description', name: 'Description' },
       { id: 'driverName', name: 'Driver Name' },
       { id: 'driverId', name: 'Driver ID' },
      ],
      order: 40,
    },
    { id: 'query', name: 'Keyword', type: 'text', order: 50, sm: 4 },
  ],
  user: {
    background: [
      // { id: 'agreementDate', name: 'Date of Creation', type: 'text',
      // order: 0, disabled: true, horizontal: false },
      { id: 'checkrStatus', name: 'Checkr Status', type: 'select', order: 10, horizontal: false },
      { id: 'checkrStatusNotes', name: 'Checkr Status Note', type: 'text', order: 20, disabled: false, horizontal: false },
      { id: 'ssn-modal', name: 'SSN', type: 'text', order: 10, disabled: false, horizontal: true, modal: true },
    ],
    finance: [
      { id: 'payoneerStatus', name: 'Payoneer Status', type: 'text', order: 10, disabled: true, horizontal: true },
      { id: 'agreementDate', name: 'Agreement Date', type: 'text', order: 20, disabled: true, horizontal: true },
    ],
    tabs: ['profile', 'carAndInsurance', 'backgroundAndCityChecks', 'financeAndLegal', 'userHistory', 'ratings'],
    activationStatus: [
      { id: 'cityApprovalStatus', type: 'select', order: 20, side: 'right', className: 'bottom5', userType: 'DRIVER', name: 'City Approval Status' },
      { id: 'activationStatus', type: 'select', order: 10, side: 'left', className: 'bottom5', userType: 'DRIVER' },
      { id: 'activationNotes', type: 'textarea', placeholder: 'Enter Notes', order: 20, side: 'left', className: 'bottom5', userType: 'DRIVER' },
      {
        id: 'flags',
        side: 'right',
        order: 10,
        type: 'checkbox',
        allValues: [
          { id: 'womenOnly', name: 'Women Only', userType: 'DRIVER' },
          { id: 'deafDriver', name: 'Deaf driver', userType: 'DRIVER' },
          { id: 'chauffeurLicense', name: 'Chauffeur license', path: 'chauffeurLicense', userType: 'DRIVER' },
          { id: 'active', name: 'Active', path: 'active', userType: 'RIDER' },
          { id: 'deviceBlocked', name: 'Device blocked', path: 'user.deviceBlocked', userType: 'RIDER'},
        ],
      },
    ],
    profile: [
      { id: 'LICENSE', name: 'License', type: 'picture', order: 20, side: 'right', horizontal: false, userType: 'DRIVER' },
      { id: 'CHAUFFEUR_LICENSE', name: 'Chauffeur permit', type: 'picture', order: 25, side: 'right', horizontal: false, userType: 'DRIVER' },
      { id: 'firstname', name: 'First Name', type: 'text', order: 10, required: true, side: 'left', horizontal: true, path: 'user.firstname' },
      { id: 'middlename', name: 'Middle Name', type: 'text', order: 15, side: 'left', horizontal: true, path: 'user.middleName' },
      { id: 'lastname', name: 'Last Name', type: 'text', order: 20, required: true, side: 'left', horizontal: true, path: 'user.lastname' },
      { id: 'nickName', name: 'Nickname', type: 'text', order: 30, side: 'left', horizontal: true, path: 'user.nickName' },
      { id: 'email', name: 'Email', type: 'text', order: 40, required: true, side: 'left', horizontal: true, path: 'user.email' },
      { id: 'phoneNumber', name: 'Phone Number', type: 'text', order: 50, required: true, side: 'left', horizontal: true, path: 'user.phoneNumber' },
      { id: 'gender', name: 'Gender', type: 'select', order: 60, required: true, side: 'left', horizontal: true, path: 'user.gender', allValues: [{ id: 'MALE', name: 'MALE' }, { id: 'FEMALE', name: 'FEMALE' }, { id: 'UNKNOWN', name: 'UNKNOWN' }] },
      { id: 'address', name: 'Address', type: 'text', order: 70, path: 'user.address.address', side: 'left', horizontal: true },
      { id: 'zipCode', name: 'Zipcode', type: 'text', order: 80, path: 'user.address.zipCode', side: 'left', horizontal: true, maxLength: 32 },
      { id: 'ssn', name: 'SSN', type: 'text', order: 90, side: 'left', horizontal: true, userType: 'DRIVER', numeric: true },
      { id: 'directConnectId', name: 'Direct Connect ID', type: 'text', order: 95, side: 'left', horizontal: true, userType: 'DRIVER', numeric: true },
      { id: 'licenseNumber', name: 'License Number', type: 'text', order: 100, side: 'left', horizontal: true, userType: 'DRIVER' },
      { id: 'licenseState', name: 'License State', type: 'text', order: 110, side: 'left', horizontal: true, dateFormat: 'YYYY-MM-DD', userType: 'DRIVER'},
      { id: 'dateOfBirth', name: 'Date of Birth', type: 'date', order: 120, required: true, side: 'left', horizontal: true, path: 'user.dateOfBirth', dateFormat: 'YYYY-MM-DD', userType: 'DRIVER', props: {maxDate: moment()} },
      { id: 'dateOfBirth', name: 'Date of Birth', type: 'date', order: 125, side: 'left', horizontal: true, path: 'user.dateOfBirth', dateFormat: 'YYYY-MM-DD', userType: 'RIDER', props: {maxDate: moment()} },
      { id: 'licenseExpiryDate', name: 'License Expiry Date', type: 'date', order: 130, side: 'left', horizontal: true, dateFormat: 'YYYY-MM-DD', userType: 'DRIVER', className: 'hidden' },
      { id: 'documentStatus', name: 'Document status', type: 'select', order: 140, side: 'left', horizontal: true, allValues: [{ id: 'APPROVED', name: 'APPROVED' }, { id: 'PENDING', name: 'PENDING' }, { id: 'EXPIRED', name: 'EXPIRED' }, { id: 'REJECTED', name: 'REJECTED' }], userType: 'DRIVER', className: 'hidden' },
    ],
    carDocuments: [
      { id: 'INSURANCE', name: 'Insurance', type: 'picture', order: 0, horizontal: false },
      { id: 'FRONT', name: 'Front', type: 'picture', order: 30, horizontal: false, carPhoto: true },
      { id: 'BACK', name: 'Back', type: 'picture', order: 40, horizontal: false, carPhoto: true },
      { id: 'INSIDE', name: 'Inside', type: 'picture', order: 50, horizontal: false, carPhoto: true },
      { id: 'TRUNK', name: 'Trunk', type: 'picture', order: 60, horizontal: false, carPhoto: true },
      { id: 'CAR_STICKER', name: 'Car Registration Sticker', type: 'picture', order: 70, horizontal: false },
    ],
    car: [
      { id: 'license', name: 'License', type: 'text', order: 30, required: true, horizontal: true, new: true },
      { id: 'color', name: 'Color', type: 'text', order: 20, required: true, horizontal: true, new: true },
      { id: 'make', name: 'Maker', type: 'text', order: 40, required: true, horizontal: true, new: true },
      { id: 'model', name: 'Model', type: 'text', order: 50, required: true, horizontal: true, new: true },
      { id: 'year', name: 'Year', type: 'number', order: 60, required: true, horizontal: true, new: true, minValue: 1950 },
      { id: 'insuranceExpiryDate', name: 'Insurance Expiry Date', type: 'date', order: 62, horizontal: true, onlyNew: true, dateFormat: 'YYYY-MM-DD' },
      { id: 'carCategories', name: 'Type', type: 'checkbox', order: 65, required: true, horizontal: true, new: true },
      { id: 'inspectionStatus', name: 'Inspection Status', type: 'select', order: 70, horizontal: true, new: false },
      { id: 'inspectionNotes', name: ' ', placeholder: 'Enter Inspection Notes', type: 'textarea', order: 80, horizontal: true, new: false },
      { id: 'photo', name: 'Photo', type: 'file', order: 90, horizontal: true, new: true, onlyNew: true },
      { id: 'insurancePhoto', name: 'Insurance', type: 'file', order: 100, horizontal: true, new: true, onlyNew: true },
    ],
  },
  driverFunnel: {
    colorMap: [
      { name: 'Active', color: 'green', id: 'active', order: 2 },
      { name: 'Approved', color: 'green' },
      { name: 'Clear', color: 'green' },
      { name: 'Clear Manual', color: 'green' },
      { name: 'Deactivated Other', color: 'grey' },
      { name: 'Final Review', color: 'yellow' },
      { name: 'Consider', color: 'yellow' },
      { name: 'Dispute', color: 'yellow' },
      { name: 'Expired', color: 'yellow' },
      { name: 'Inactive', color: 'yellow' },
      { name: 'Not Inspected', color: 'yellow' },
      { name: 'Not Provided', color: 'yellow' },
      { name: 'Manual', color: 'yellow' },
      { name: 'Error', color: 'red' },
      { name: 'Inactive', color: 'red' },
      { name: 'Not registered', color: 'red' },
      { name: 'Deactivated', color: 'red', id: 'deactivated', order: 3 },
      { name: 'Not Required', color: 'green' },
      { name: 'Pending', color: 'yellow', id: 'inactive', order: 1 },
      { name: 'Rejected', color: 'red', id: 'rejected', order: 5 },
      { name: 'Rejected By City', color: 'red'},
      { name: 'Rejected Photo', color: 'yellow' },
      { name: 'Suspended', color: 'grey', id: 'suspended', order: 4 },
      { name: 'Not provided', color: 'yellow' },
      { name: 'Not requested', color: 'yellow' },
    ],
    mapPendingFiltersToStatuses: [
      { id: 'checkr', status: 'checkrStatus' },
      { id: 'payoneer', status: 'payoneerStatus', rules: ['PENDING', 'INITIAL'] },
      { id: 'driverLicense', status: 'driverLicenseStatus', rules: [] },
      { id: 'insurance', status: 'insuranceStatus', rules: [] },
      { id: 'cityApproval', status: 'cityApprovalStatus', rules: [] },
      { id: 'carInspection', status: 'carInspectionStatus', rules: [] },
      { id: 'carPhotos', status: 'carPhotosStatus', rules: [] },
      { id: 'profilePhotos', status: 'profilePhotosStatus', rules: [] },
      { id: 'inspectionSticker', status: 'inspectionStickerStatus', rules: [] },
    ],
    filters: [
      {
        name: 'Onboarding Status',
        id: 'onboardingStatus',
        selected: [{ name: 'Pending', id: 'PENDING' }],
        showInDashboard: true,
        options: [
          { name: 'All', id: '*' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Suspended', id: 'SUSPENDED' },
          { name: 'Rejected', id: 'REJECTED' },
          { name: 'Final Review', id: 'FINAL_REVIEW' },
          { name: 'Active', id: 'ACTIVE' },
        ],
      },
      {
        name: 'Activation Status',
        id: 'activationStatus',
        selected: [{ name: 'All', id: '*' }],
        showInDashboard: true,
        options: [
          { name: 'All', id: '*' },
          { id: 'ACTIVE', name: 'Active' },
          { id: 'REJECTED', name: 'Rejected' },
          { id: 'SUSPENDED', name: 'Suspended' },
          { id: 'DEACTIVATED_OTHER', name: 'Deactivated Other' },
          { id: 'INACTIVE', name: 'Inactive' },
        ],
      },
      {
        name: 'Last Comm.',
        toolTip: 'Days since last email to driver',
        id: 'lastCommunicationLaterThan',
        selected: [{ name: 'All', id: '*' }],
        single: true,
        showInDashboard: true,
        options: [
          { name: 'All', id: '*' },
          { name: '2+ Days', id: '2' },
          { name: '3+ Days', id: '3' },
          { name: '4+ Days', id: '4' },
          { name: '5+ Days', id: '5' },
          { name: '6+ Days', id: '6' },
          { name: '1+ Weeks', id: '7' },
          { name: '2+ Weeks', id: '14' },
        ],
      },
      {
        name: 'Days in Pending',
        toolTip: 'Days in Pending Status',
        id: 'onboardingPendingLongerThan',
        selected: [{ name: 'All', id: '*' }],
        single: true,
        showInDashboard: true,
        options: [
          { name: 'All', id: '*' },
          { name: '2+ Days', id: '2' },
          { name: '3+ Days', id: '3' },
          { name: '4+ Days', id: '4' },
          { name: '5+ Days', id: '5' },
          { name: '6+ Days', id: '6' },
          { name: '1+ Weeks', id: '7' },
          { name: '2+ Weeks', id: '14' },
        ],
      },
      {
        name: 'Checkr',
        id: 'checkrStatus',
        selected: [{ name: 'All', id: '*' }],
        showInDashboard: true,
        pending: ['PENDING', 'SUSPENDED', 'CONSIDER', 'DISPUTE', 'ERROR'],
        options: [
          { name: 'All', id: '*' },
          { name: 'Clear Manual', id: 'CLEAR_MANUAL' },
          { name: 'Clear', id: 'CLEAR' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Consider', id: 'CONSIDER' },
          { name: 'Suspended', id: 'SUSPENDED' },
          { name: 'Dispute', id: 'DISPUTE' },
          { name: 'Rejected', id: 'REJECTED_MANUAL' },
          { name: 'Manual', id: 'MANUAL' },
          { name: 'Error', id: 'ERROR' },
          { name: 'Not requested', id: 'NOT_REQUESTED' },
        ],
      },
      {
        name: 'Payoneer',
        id: 'payoneerStatus',
        selected: [{ name: 'All', id: '*' }],
        showInDashboard: true,
        pending: ['PENDING', 'INITIAL'],
        options: [
          { name: 'All', id: '*' },
          { name: 'Active', id: 'ACTIVE' },
          { name: 'Inactive', id: 'PENDING' },
          { name: 'Not registered', id: 'INITIAL' },
        ],
      },
      {
        name: 'Driver License',
        id: 'driverLicenseStatus',
        showInDashboard: true,
        pending: ['PENDING', 'EXPIRED', 'REJECTED'],
        selected: [{ name: 'All', id: '*' }],
        options: [
          { name: 'All', id: '*' },
          { name: 'Approved', id: 'APPROVED' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Expired', id: 'EXPIRED' },
          { name: 'Rejected', id: 'REJECTED' },
        ],
      },
      {
        name: 'Insurance',
        id: 'insuranceStatus',
        showInDashboard: true,
        pending: ['PENDING', 'EXPIRED', 'REJECTED'],
        selected: [{ name: 'All', id: '*' }],
        options: [
          { name: 'All', id: '*' },
          { name: 'Approved', id: 'APPROVED' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Expired', id: 'EXPIRED' },
          { name: 'Rejected', id: 'REJECTED' },
        ],
      },
      {
        name: 'City Approval',
        id: 'cityApprovalStatus',
        showInDashboard: true,
        pending: ['PENDING', 'NOT_PROVIDED', 'REJECTED_PHOTO', 'REJECTED_BY_CITY', 'EXPIRED'],
        selected: [{ name: 'All', id: '*' }],
        options: [
          { name: 'All', id: '*' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Not Provided', id: 'NOT_PROVIDED' },
          { name: 'Approved', id: 'APPROVED' },
          { name: 'Rejected Photo', id: 'REJECTED_PHOTO' },
          { name: 'Rejected By City', id: 'REJECTED_BY_CITY' },
          { name: 'Expired', id: 'EXPIRED' },
        ],
      },
      {
        name: 'Car Registration',
        id: 'carInspectionStatus',
        selected: [{ name: 'All', id: '*' }],
        showInDashboard: true,
        pending: ['PENDING', 'NOT_INSPECTED'],
        options: [
          { name: 'All', id: '*' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Not Inspected', id: 'NOT_INSPECTED'},
          { name: 'Approved', id: 'APPROVED' },
          { name: 'Rejected', id: 'REJECTED' },
          { name: 'Not required', id: 'NOT_REQUIRED' },
        ],
      },
      {
        name: 'Car Photos',
        id: 'carPhotosStatus',
        showInDashboard: true,
        selected: [{ name: 'All', id: '*' }],
        pending: ['PENDING', 'REJECTED'],
        options: [
          { name: 'All', id: '*' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Approved', id: 'APPROVED' },
          { name: 'Rejected', id: 'REJECTED' },
          { name: 'Expired', id: 'EXPIRED' },
          { name: 'Not provided', id: 'NOT_PROVIDED' },
        ],
      },
      {
        name: 'Profile Photos',
        id: 'profilePhotosStatus',
        selected: [{ name: 'All', id: '*' }],
        showInDashboard: true,
        pending: ['PENDING', 'REJECTED'],
        options: [
          { name: 'All', id: '*' },
          { name: 'Pending', id: 'PENDING' },
          { name: 'Approved', id: 'APPROVED' },
          { name: 'Rejected', id: 'REJECTED' },
        ],
      },
      {
        name: 'Registration Sticker',
        id: 'inspectionStickerStatus',
        showInDashboard: true,
        pending: ['PENDING', 'REJECTED', 'EXPIRED'],
        selected: [{ name: 'All', id: '*' }],
        options: [
          { name: 'All', id: '*' },
          { name: 'Pending', id: 'PENDING' },
          // { name: 'Not Required', id: 'NOT_REQUIRED' },
          { name: 'Approved', id: 'APPROVED' },
          { name: 'Rejected', id: 'REJECTED' },
          { name: 'Expired', id: 'EXPIRED' },
          { name: 'Not required', id: 'NOT_REQUIRED' },
        ],
      },
    ],
  },
  ride: {
    leftSide: [
      {
        id: 'rideDetails',
        name: 'Ride Details',
        items: [
          { id: 'id', name: 'Ride ID' },
          { id: 'status', name: 'Status' },
          { id: 'requestedCarType', name: 'Car Category', path: 'requestedCarType.title', method: 'renderCarTypeTooltip' },
        ],
      },
      {
        id: 'distanceTime',
        name: 'Distance / Time',
        items: [
          { id: 'requestedOn', name: 'Requested On', type: 'date' },
          { id: 'driverReachedOn', name: 'Reached On', type: 'date' },
          { id: 'startedOn', name: 'Start', type: 'date' },
          { id: 'completedOn', name: 'Completed', type: 'date' },
          { id: 'cancelledOn', name: 'Cancelled', type: 'date', placeholder: 'Unavailable' },
          { id: 'totalTime', name: 'Total time', method: 'calculateTotalTime' },
          { id: 'distanceTravelled', name: 'Distance Travelled', type: 'distance' },
          { id: 'tippedOn', name: 'Tip Date', type: 'date', placeholder: 'Unavailable' },
        ],
      },
      {
        id: 'rideCostDetail',
        name: 'Ride Cost Detail',
        items: [
          { id: 'baseFare', name: 'Base Fare', type: 'amount' },
          { id: 'distanceFare', name: 'Distance Fare', type: 'amount' },
          { id: 'timeFare', name: 'Time Fare', type: 'amount' },
          { id: 'surgeFactor', name: 'Surge Factor' },
          { id: 'surgeFare', name: 'Surge Fare', type: 'amount' },
          {
            id: 'fareTotal',
            name: 'Fare Total',
            type: 'amount',
            items: [
              { id: 'bookingFee', name: 'Booking Fee', type: 'amount' },
              { id: 'airportFee', name: 'Airport Surcharge', type: 'amount' },
              { id: 'cityFee', name: 'City TNC Fee', type: 'amount' },
              { id: 'freeCreditCharged', name: 'Ride Credit', type: 'amount', negativeValue: true },
            ],
          },
          {
            id: 'rideCost',
            name: 'Ride Cost',
            type: 'amount',
            items: [
              { id: 'processingFee', name: 'Processing Fee ($1.00 min)', type: 'amount' },
              { id: 'tip', name: 'Tip Value', type: 'amount' },
              { id: 'roundUpAmount', name: 'Round Up Charge', type: 'amount' },
              { id: 'campaign', name: 'Ride is covered by', placeholder: 'No campaign'},
              { id: 'campaignCoverage', name: 'Coverage amount', type: 'amount', negativeValue: true },
            ],
          },
          {
            id: 'totalCharge',
            name: 'Total Charge',
            type: 'amount',
            items: [],
          },
          { id: 'driverPayment', name: 'Driver Payment', type: 'amount' },
        ],
      },
    ],
  },
  map: {
    markers: [
      { id: 'ACTIVE', name: 'On Trip', letter: 'T' },
      { id: 'AVAILABLE', name: 'Unassigned', letter: 'U' },
      { id: 'AWAY', name: 'Away', letter: 'X' },
      { id: 'DRIVER_ASSIGNED', name: 'Accepted', letter: 'A' },
      { id: 'DRIVER_REACHED', name: 'At House', letter: 'H' },
      { id: 'REQUESTED_DRIVER', name: 'Requested Driver', letter: 'D' },
      { id: 'REQUESTED_RIDER', name: 'Rider Request', letter: 'R' },
    ],
  },
  realTimeTrackning: {
    logo: 'https://media.rideaustin.com/images/30B6994B-0913-44B5-9134-F8E4944DB9F9.png',
    star: 'https://media.rideaustin.com/images/93BC8358-7C03-4308-8383-EB5F2DCABC19_3x.png',
    pins: {
      pinRed: 'https://media.rideaustin.com/images/pinRed.png',
      pinGreen: 'https://media.rideaustin.com/images/pinGreen.png',
      height: 33,
      width: 24,
    },
    car: {
      url: 'https://media.rideaustin.com/images/carIcon_n.png',
      height: 35,
      width: 35,
    },
    statuses: {
      REQUESTED: 'REQUESTED',
      RIDER_CANCELLED: 'Ride was canceled by rider',
      DRIVER_ASSIGNED: 'Driver has been assigned',
      DRIVER_CANCELLED: 'Ride was canceled by driver',
      DRIVER_REACHED: 'Driver has reached rider location',
      ACTIVE: 'Is en route',
      NO_AVAILABLE_DRIVER: 'NO_AVAILABLE_DRIVER',
      COMPLETED: 'Ride completed',
      ADMIN_CANCELLED: 'ADMIN_CANCELLED',
    },
  },
  menuItems: [
    {
      name: 'Users',
      path: '/users',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Map',
      path: '/map',
      rolesRequired: ['ADMIN', 'CAPMETRO_ADMIN'],
    },
    {
      name: 'Rides',
      path: '/rides',
      rolesRequired: ['ADMIN', 'CAPMETRO_ADMIN'],
    },
    {
      name: 'Online',
      path: '/online',
      rolesRequired: ['ADMIN', 'CAPMETRO_ADMIN'],
    },
    {
      name: 'Surge Pricing',
      path: '/surgepricing',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Payments',
      path: '/payments',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Operations',
      path: '/operations',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Reports',
      path: '/reports',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'App Upgrades',
      path: '/upgrades',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Promo Codes',
      path: '/promocodes',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Statistics',
      path: '/statistics',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Notifications',
      path: '/notifications',
      rolesRequired: ['ADMIN'],
    },
    {
      name: 'Onboarding',
      path: '/onboarding',
      rolesRequired: ['ADMIN'],
    },
  ],
  surgePricing: {
    polygon: {
      selectedColor: '#0000FF',
      strokeOpacity: 0.8,
      fillOpacity: 0.35,
      strokeWeight: 1,
      strokeColor: '#FF0000',
      markerOpacity: 1,
    },
    surgeFactor: {
      min: 1,
      mid: 3,
      max: 8,
      minstep: 0.1,
      midstep: 0.25,
    },
    surgeFactorLimitsDefaultClassName: 'hidden',
    surgeFactorLimits: [
      {
        min: 1.25,
        max: 2,
        className: 'marker-red1',
      },
      {
        min: 2.25,
        max: 3,
        className: 'marker-red2',
      },
      {
        min: 3.25,
        max: 4,
        className: 'marker-red3',
      },
      {
        min: 4.25,
        max: 8,
        className: 'marker-red4',
      },
    ],
  },
  rides: {
    filters: {
      status: [
        { name: 'Active', id: 'ACTIVE' },
        { name: 'Requested', id: 'REQUESTED' },
        { name: 'Completed', id: 'COMPLETED' },
        { name: 'Assigned Driver', id: 'DRIVER_ASSIGNED' },
        { name: 'Driver Reached', id: 'DRIVER_REACHED' },
        { name: 'Rider Cancelled', id: 'RIDER_CANCELLED' },
        { name: 'Driver Cancelled', id: 'DRIVER_CANCELLED' },
        { name: 'Admin Cancelled', id: 'ADMIN_CANCELLED' },
      ],
    },
    timeZones: [
      { name: 'My Timezone', id: 'mine' },
      { name: 'GMT+0', id: 'gmt' },
      { name: 'Texas', id: 'texas' },
    ],
  },
};

export default data;