export const pptFields = [
  {
    label: 'Service Area',
    key: 'serviceArea',
    alternateMatches: ['Service Area'],
    fieldType: {
      type: 'input',
    },
    example: 'Central',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'District',
    key: 'district',
    alternateMatches: ['District'],
    fieldType: {
      type: 'input',
    },
    example: 'Houston',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Facility Type',
    key: 'facilityType',
    alternateMatches: ['Facility Type'],
    fieldType: {
      type: 'input',
    },
    example: 'Tower and Approach Control',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Level',
    key: 'level',
    alternateMatches: ['Level'],
    fieldType: {
      type: 'input',
    },
    example: '9',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Facility ID',
    key: 'facilityId',
    alternateMatches: ['Facility ID'],
    fieldType: {
      type: 'input',
    },
    example: 'AUS',
    validations: [
      {
        rule: ['required', 'unique'],
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Facility Name',
    key: 'facilityName',
    alternateMatches: ['Facility Name'],
    fieldType: {
      type: 'input',
    },
    example: 'Austin Tower',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPC Target',
    key: 'cpcTarget',
    alternateMatches: ['CPC Target'],
    fieldType: {
      type: 'input',
    },
    example: '45',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Current # CPC On Board',
    key: 'currentCpcOnBoard',
    alternateMatches: ['Current # of CPC On-Board (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '20',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPC on Temp',
    key: 'cpcOnTemp',
    alternateMatches: ['CPC on Temp (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPC on Long Term Hold',
    key: 'cpcOnLongTermHold',
    alternateMatches: ['CPC on Long Term Hold (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Current # CPC minus Temps & LTH',
    key: 'currentCpcMinusTempsLth',
    alternateMatches: ['Current # of CPC On-Board minus Temps minus LTH (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Current % CPC Target',
    key: 'currentPercentCpcTarget',
    alternateMatches: ['Current % CPC to Target (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '83.5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Training Time',
    key: 'trainingTime',
    alternateMatches: ['Training Time Years (NTD)'],
    fieldType: {
      type: 'input',
    },
    example: '1.45',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'ATCS in Training',
    key: 'atcsInTraining',
    alternateMatches: ['ATCS in Training (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '4',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'ATCS in Training on LTH',
    key: 'atcsInTrainingOnLth',
    alternateMatches: ['ATCS in Training on Long Term Hold (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'ATCS in Training Minus LTH',
    key: 'atcsInTrainingMinusLth',
    alternateMatches: ['ATCS in Training minus LTH (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '0',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Training Success Rate',
    key: 'trainingSuccessRate',
    alternateMatches: ['Training Success Rate      (NTD)'],
    fieldType: {
      type: 'input',
    },
    example: '90.5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'ATCS Expected to Cert',
    key: 'atcsExpectedToCert',
    alternateMatches: ['Current ATCS in Training Expected to Cert (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '4.5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Committed Inbound',
    key: 'committedInbound',
    alternateMatches: ['Committed ATCS Inbound (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Placement List Inbounds',
    key: 'placementListInbounds',
    alternateMatches: ['Placement List Inbounds'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Temps Inbound',
    key: 'tempsInbound',
    alternateMatches: ['Temps Inbound (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '0',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Inbounds Expected to Cert + Temps',
    key: 'inboundsExpectedToCertPlusTempsInbound',
    alternateMatches: ['Inbounds Expected to Cert + Temps Inbound (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '3',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Committed ATCS Outbound',
    key: 'committedAtcsOutbound',
    alternateMatches: ['Committed ATCS Outbound (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '1',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Placement List Outbounds',
    key: 'placementListOutbounds',
    alternateMatches: ['Placement List Outbounds (ERR, Hardship)'],
    fieldType: {
      type: 'input',
    },
    example: '1',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Temps Outbound',
    key: 'tempsOutbound',
    alternateMatches: ['Temps Outbound (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '0',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Projected Retirements and Other Losses',
    key: 'projectedRetirementsAndOtherLosses',
    alternateMatches: ['Projected Retirements and Other Losses (Finance)'],
    fieldType: {
      type: 'input',
    },
    example: '5.5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Projected % to Target',
    key: 'projectedPercentToTarget',
    alternateMatches: ['Projected % to Target (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '85.5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Possible Gains to National Average',
    key: 'possibleGainsToNationalAverage',
    alternateMatches: ['Possible Gains to National Average (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '6',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Possible Gains to Target',
    key: 'possibleGainsToTarget',
    alternateMatches: ['Possible Gains to Target (Calculation)'],
    fieldType: {
      type: 'input',
    },
    example: '5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'ERR Category',
    key: 'errCategory',
    alternateMatches: ['ERR Category'],
    fieldType: {
      type: 'input',
    },
    example: '1',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Possible Losses',
    key: 'possibleLosses',
    alternateMatches: ['Possible Losses'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Current % Trainees to ATCS',
    key: 'currentPercentTraineesToAtcs',
    alternateMatches: ['Current % Trainees to ATCS'],
    fieldType: {
      type: 'input',
    },
    example: '20.5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'TNE',
    key: 'tne',
    alternateMatches: ['TNE (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '0',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'AG',
    key: 'ag',
    alternateMatches: ['AG (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Dev1',
    key: 'dev1',
    alternateMatches: ['Dev1 (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '1',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Dev2',
    key: 'dev2',
    alternateMatches: ['Dev2 (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '1',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Dev3',
    key: 'dev3',
    alternateMatches: ['Dev3 (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '1',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Dev Total',
    key: 'devTotal',
    alternateMatches: ['Dev Total (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPCIT0',
    key: 'cpcit0',
    alternateMatches: ['CPCIT0 (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPCIT1',
    key: 'cpcit1',
    alternateMatches: ['CPCIT1 (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPCIT2',
    key: 'cpcit2',
    alternateMatches: ['CPCIT2 (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPCIT3',
    key: 'cpcit3',
    alternateMatches: ['CPCIT3 (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '2',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'CPCIT Total',
    key: 'cpcitTotal',
    alternateMatches: ['CPCIT Total (SWB)'],
    fieldType: {
      type: 'input',
    },
    example: '5',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'EnRoute or Terminal',
    key: 'enrouteOrTerminal',
    alternateMatches: ['EnRoute or Terminal'],
    fieldType: {
      type: 'input',
    },
    example: 'TR',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'HR Region',
    key: 'hrRegion',
    alternateMatches: ['HRRegion'],
    fieldType: {
      type: 'input',
    },
    example: 'SO',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Core Airport',
    key: 'coreAirport',
    alternateMatches: ['CoreAirport'],
    fieldType: {
      type: 'input',
    },
    example: 'No',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
  {
    label: 'Type',
    key: 'type',
    alternateMatches: ['Type'],
    fieldType: {
      type: 'input',
    },
    example: '3',
    validations: [
      {
        rule: 'required',
        errorMessage: 'Required',
        level: 'error',
      },
    ],
  },
];
