export const pptFields = [
  {
    label: 'Service Area',
    key: 'Service Area',
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
    key: 'District',
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
    key: 'Facility Type',
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
    key: 'Level',
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
    key: 'Facility ID',
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
    key: 'Facility Name',
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
    key: 'CPC Target',
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
    key: 'Current # of CPC On-Board',
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
    key: 'CPC on Temp',
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
    key: 'CPC on Long Term Hold',
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
    key: 'Current # of CPC On-Board minus Temps minus LTH',
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
    key: 'Current % CPC to Target',
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
    key: 'Training Time Years',
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
    key: 'ATCS in Training',
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
    key: 'ATCS in Training on Long Term Hold',
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
    key: 'ATCS in Training minus LTH',
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
    key: 'Training Success Rate',
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
    key: 'Current ATCS in Training Expected to Cert',
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
    key: 'Committed ATCS Inbound',
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
    key: 'Placement List Inbounds',
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
    key: 'Temps Inbound',
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
    key: 'Inbounds Expected to Cert + Temps Inbound',
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
    key: 'Committed ATCS Outbound',
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
    key: 'Placement List Outbounds',
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
    key: 'Temps Outbound',
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
    key: 'Projected Retirements and Other Losses',
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
    key: 'Projected % to Target',
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
    key: 'Possible Gains to National Average',
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
    key: 'Possible Gains to Target',
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
    key: 'ERR Category',
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
    key: 'Possible Losses',
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
    key: 'Current % CPC to Trainees',
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
    key: 'TNE',
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
    key: 'AG',
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
    key: 'Dev1',
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
    key: 'Dev2',
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
    key: 'Dev3',
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
    key: 'Dev Total',
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
    key: 'CPCIT0',
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
    key: 'CPCIT1',
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
    key: 'CPCIT2',
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
    key: 'CPCIT3',
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
    key: 'CPCIT Total',
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
    key: 'EnRoute or Terminal',
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
    key: 'HRRegion',
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
    key: 'CoreAirport',
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
    key: 'Type',
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
