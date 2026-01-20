// AJCC 8th Edition Head and Neck Cancer Staging Data

export const stagingData = {
  oralCavity: {
    name: 'Oral Cavity',
    tStaging: [
      {
        id: 'oc-t1',
        category: 'T1',
        criteria: 'Tumor ≤2 cm with depth of invasion (DOI) ≤5 mm',
        explanation: 'T1 oral cavity tumors are small (≤2 cm) with minimal invasion (≤5 mm DOI). DOI is measured from the basement membrane of the closest adjacent normal mucosa.'
      },
      {
        id: 'oc-t2',
        category: 'T2',
        criteria: 'Tumor ≤2 cm with DOI >5 mm and ≤10 mm, OR tumor >2 cm but ≤4 cm with DOI ≤10 mm',
        explanation: 'T2 includes moderately sized tumors. Either small tumors (≤2 cm) with deeper invasion (5-10 mm), or larger tumors (2-4 cm) with shallow invasion (≤10 mm).'
      },
      {
        id: 'oc-t3',
        category: 'T3',
        criteria: 'Tumor >4 cm OR any tumor with DOI >10 mm',
        explanation: 'T3 tumors are either large (>4 cm) regardless of DOI, or any size tumor with significant invasion (>10 mm DOI). DOI is a key prognostic factor.'
      },
      {
        id: 'oc-t4a',
        category: 'T4a',
        criteria: 'Tumor invades through cortical bone of mandible or maxilla, or involves maxillary sinus, or invades skin of face',
        explanation: 'T4a (moderately advanced) involves invasion through cortical bone, maxillary sinus involvement, or skin invasion. These are resectable but advanced tumors.'
      },
      {
        id: 'oc-t4b',
        category: 'T4b',
        criteria: 'Tumor invades masticator space, pterygoid plates, skull base, or encases internal carotid artery',
        explanation: 'T4b (very advanced) tumors involve deep structures: masticator space, pterygoid plates, skull base, or carotid encasement. Often considered unresectable.'
      }
    ],
    nStaging: [
      {
        id: 'oc-n0',
        category: 'N0',
        criteria: 'No regional lymph node metastasis',
        explanation: 'N0 indicates no clinical or radiologic evidence of lymph node involvement.'
      },
      {
        id: 'oc-n1',
        category: 'N1',
        criteria: 'Single ipsilateral lymph node ≤3 cm without extranodal extension (ENE)',
        explanation: 'N1 is a single small node on the same side as the tumor, without extension through the node capsule.'
      },
      {
        id: 'oc-n2a',
        category: 'N2a',
        criteria: 'Single ipsilateral lymph node >3 cm but ≤6 cm without ENE',
        explanation: 'N2a represents a single larger node (3-6 cm) on the same side, still without extranodal extension.'
      },
      {
        id: 'oc-n2b',
        category: 'N2b',
        criteria: 'Multiple ipsilateral lymph nodes ≤6 cm without ENE',
        explanation: 'N2b indicates multiple nodes on the same side as the tumor, all ≤6 cm and without ENE.'
      },
      {
        id: 'oc-n2c',
        category: 'N2c',
        criteria: 'Bilateral or contralateral lymph nodes ≤6 cm without ENE',
        explanation: 'N2c involves nodes on both sides or only on the opposite side from the primary tumor, all ≤6 cm without ENE.'
      },
      {
        id: 'oc-n3a',
        category: 'N3a',
        criteria: 'Any lymph node >6 cm without ENE',
        explanation: 'N3a is any node larger than 6 cm, regardless of laterality, but still contained within the capsule.'
      },
      {
        id: 'oc-n3b',
        category: 'N3b',
        criteria: 'Any lymph node with clinically overt extranodal extension (ENE+)',
        explanation: 'N3b applies when there is clinical evidence of tumor extending through the lymph node capsule. ENE is a major adverse prognostic factor.'
      }
    ]
  },

  larynx: {
    name: 'Larynx',
    supraglottic: {
      name: 'Supraglottic',
      tStaging: [
        {
          id: 'sg-t1',
          category: 'T1',
          criteria: 'Tumor limited to one subsite of supraglottis with normal vocal cord mobility',
          explanation: 'T1 supraglottic tumors are confined to a single anatomic subsite (epiglottis, aryepiglottic fold, arytenoid, or false cord) with mobile true cords.'
        },
        {
          id: 'sg-t2',
          category: 'T2',
          criteria: 'Tumor invades mucosa of more than one adjacent supraglottic subsite, glottis, or region outside supraglottis without larynx fixation',
          explanation: 'T2 tumors extend beyond one subsite but maintain laryngeal mobility. May involve adjacent areas like tongue base mucosa or medial pyriform wall.'
        },
        {
          id: 'sg-t3',
          category: 'T3',
          criteria: 'Tumor limited to larynx with vocal cord fixation, OR invades postcricoid area, pre-epiglottic space, paraglottic space, or inner cortex of thyroid cartilage',
          explanation: 'T3 indicates cord fixation or invasion of deep spaces (pre-epiglottic, paraglottic) or inner thyroid cartilage cortex. Still potentially organ-preserving.'
        },
        {
          id: 'sg-t4a',
          category: 'T4a',
          criteria: 'Tumor invades through thyroid cartilage, or invades tissues beyond larynx (trachea, deep tongue muscles, strap muscles, thyroid, esophagus)',
          explanation: 'T4a (moderately advanced) tumors extend through cartilage or beyond the larynx to adjacent structures. Often requires total laryngectomy.'
        },
        {
          id: 'sg-t4b',
          category: 'T4b',
          criteria: 'Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures',
          explanation: 'T4b (very advanced) tumors involve prevertebral fascia, carotid encasement, or mediastinum. Generally considered unresectable.'
        }
      ]
    },
    glottic: {
      name: 'Glottic',
      tStaging: [
        {
          id: 'gl-t1a',
          category: 'T1a',
          criteria: 'Tumor limited to one vocal cord (may involve anterior or posterior commissure) with normal mobility',
          explanation: 'T1a glottic tumors involve only one true vocal cord with normal mobility. Excellent prognosis with treatment.'
        },
        {
          id: 'gl-t1b',
          category: 'T1b',
          criteria: 'Tumor involves both vocal cords with normal mobility',
          explanation: 'T1b tumors involve both vocal cords but maintain normal mobility. Commissure involvement is common.'
        },
        {
          id: 'gl-t2',
          category: 'T2',
          criteria: 'Tumor extends to supraglottis and/or subglottis, OR with impaired vocal cord mobility',
          explanation: 'T2 glottic tumors extend beyond the true cords or show impaired (but not fixed) cord mobility.'
        },
        {
          id: 'gl-t3',
          category: 'T3',
          criteria: 'Tumor limited to larynx with vocal cord fixation, OR invasion of paraglottic space, OR inner cortex of thyroid cartilage',
          explanation: 'T3 indicates vocal cord fixation, paraglottic space invasion, or inner thyroid cartilage involvement. Cord fixation is the key feature.'
        },
        {
          id: 'gl-t4a',
          category: 'T4a',
          criteria: 'Tumor invades through outer cortex of thyroid cartilage, or invades tissues beyond larynx',
          explanation: 'T4a tumors penetrate through thyroid cartilage or extend to trachea, soft tissues of neck, thyroid gland, or esophagus.'
        },
        {
          id: 'gl-t4b',
          category: 'T4b',
          criteria: 'Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures',
          explanation: 'T4b (very advanced) involves prevertebral space, carotid encasement, or mediastinum. Usually unresectable.'
        }
      ]
    },
    subglottic: {
      name: 'Subglottic',
      tStaging: [
        {
          id: 'sub-t1',
          category: 'T1',
          criteria: 'Tumor limited to subglottis',
          explanation: 'T1 subglottic tumors are confined to the subglottic region (from lower boundary of glottis to lower edge of cricoid cartilage).'
        },
        {
          id: 'sub-t2',
          category: 'T2',
          criteria: 'Tumor extends to vocal cord(s) with normal or impaired mobility',
          explanation: 'T2 subglottic tumors extend upward to involve the vocal cord(s), with normal or impaired (not fixed) mobility.'
        },
        {
          id: 'sub-t3',
          category: 'T3',
          criteria: 'Tumor limited to larynx with vocal cord fixation, OR invasion of paraglottic space, OR inner cortex of thyroid cartilage',
          explanation: 'T3 indicates cord fixation, paraglottic invasion, or inner thyroid cartilage cortex involvement while still confined to larynx.'
        },
        {
          id: 'sub-t4a',
          category: 'T4a',
          criteria: 'Tumor invades cricoid or thyroid cartilage, or invades tissues beyond larynx',
          explanation: 'T4a tumors invade through cartilage or extend to trachea, soft tissues of neck, thyroid, or esophagus.'
        },
        {
          id: 'sub-t4b',
          category: 'T4b',
          criteria: 'Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures',
          explanation: 'T4b subglottic tumors extend to prevertebral space, encase the carotid, or involve mediastinum.'
        }
      ]
    },
    nStaging: [
      {
        id: 'lar-n0',
        category: 'N0',
        criteria: 'No regional lymph node metastasis',
        explanation: 'N0 indicates no evidence of lymph node involvement. Glottic tumors have low nodal metastasis rates due to sparse lymphatics.'
      },
      {
        id: 'lar-n1',
        category: 'N1',
        criteria: 'Single ipsilateral lymph node ≤3 cm without ENE',
        explanation: 'N1 is a single small ipsilateral node without extranodal extension.'
      },
      {
        id: 'lar-n2a',
        category: 'N2a',
        criteria: 'Single ipsilateral lymph node >3 cm but ≤6 cm without ENE',
        explanation: 'N2a is a single larger ipsilateral node (3-6 cm) without ENE.'
      },
      {
        id: 'lar-n2b',
        category: 'N2b',
        criteria: 'Multiple ipsilateral lymph nodes ≤6 cm without ENE',
        explanation: 'N2b indicates multiple ipsilateral nodes, all ≤6 cm without ENE.'
      },
      {
        id: 'lar-n2c',
        category: 'N2c',
        criteria: 'Bilateral or contralateral lymph nodes ≤6 cm without ENE',
        explanation: 'N2c involves bilateral or contralateral nodal disease, all ≤6 cm without ENE.'
      },
      {
        id: 'lar-n3a',
        category: 'N3a',
        criteria: 'Any lymph node >6 cm without ENE',
        explanation: 'N3a is any node >6 cm regardless of location, but without ENE.'
      },
      {
        id: 'lar-n3b',
        category: 'N3b',
        criteria: 'Any lymph node with clinical extranodal extension (ENE+)',
        explanation: 'N3b indicates clinically evident ENE, a major adverse prognostic factor in head and neck cancer.'
      }
    ]
  },

  oropharynx: {
    name: 'Oropharynx (p16-negative)',
    tStaging: [
      {
        id: 'op-t1',
        category: 'T1',
        criteria: 'Tumor ≤2 cm in greatest dimension',
        explanation: 'T1 p16-negative oropharyngeal tumors are ≤2 cm. Note: p16-positive tumors use a different staging system.'
      },
      {
        id: 'op-t2',
        category: 'T2',
        criteria: 'Tumor >2 cm but ≤4 cm in greatest dimension',
        explanation: 'T2 tumors are between 2-4 cm. Size is the primary determinant for T1-T2 staging in oropharynx.'
      },
      {
        id: 'op-t3',
        category: 'T3',
        criteria: 'Tumor >4 cm OR extension to lingual surface of epiglottis',
        explanation: 'T3 includes large tumors (>4 cm) or those extending to the lingual epiglottis regardless of size.'
      },
      {
        id: 'op-t4a',
        category: 'T4a',
        criteria: 'Tumor invades larynx, deep/extrinsic tongue muscle, medial pterygoid, hard palate, or mandible',
        explanation: 'T4a (moderately advanced) tumors invade beyond the oropharynx to adjacent structures. Still potentially resectable.'
      },
      {
        id: 'op-t4b',
        category: 'T4b',
        criteria: 'Tumor invades lateral pterygoid muscle, pterygoid plates, lateral nasopharynx, skull base, or encases carotid artery',
        explanation: 'T4b (very advanced) involves deep structures including skull base or carotid encasement. Often unresectable.'
      }
    ]
  },

  hypopharynx: {
    name: 'Hypopharynx',
    tStaging: [
      {
        id: 'hp-t1',
        category: 'T1',
        criteria: 'Tumor limited to one subsite of hypopharynx AND/OR ≤2 cm in greatest dimension',
        explanation: 'T1 hypopharyngeal tumors are confined to one subsite (pyriform sinus, posterior pharyngeal wall, or postcricoid) and ≤2 cm.'
      },
      {
        id: 'hp-t2',
        category: 'T2',
        criteria: 'Tumor invades more than one subsite of hypopharynx or adjacent site, OR >2 cm but ≤4 cm, without hemilarynx fixation',
        explanation: 'T2 tumors extend beyond one subsite or are 2-4 cm, but hemilarynx mobility is preserved.'
      },
      {
        id: 'hp-t3',
        category: 'T3',
        criteria: 'Tumor >4 cm OR with hemilarynx fixation OR extension to esophageal mucosa',
        explanation: 'T3 includes large tumors (>4 cm), those causing hemilarynx fixation, or those extending to esophageal mucosa.'
      },
      {
        id: 'hp-t4a',
        category: 'T4a',
        criteria: 'Tumor invades thyroid/cricoid cartilage, hyoid bone, thyroid gland, or central compartment soft tissue',
        explanation: 'T4a tumors invade cartilage, hyoid bone, thyroid gland, or central compartment structures.'
      },
      {
        id: 'hp-t4b',
        category: 'T4b',
        criteria: 'Tumor invades prevertebral fascia, encases carotid artery, or invades mediastinal structures',
        explanation: 'T4b tumors involve prevertebral fascia, carotid encasement, or mediastinum. Generally unresectable.'
      }
    ]
  },

  nasopharynx: {
    name: 'Nasopharynx',
    tStaging: [
      {
        id: 'np-t1',
        category: 'T1',
        criteria: 'Tumor confined to nasopharynx, or extension to oropharynx and/or nasal cavity without parapharyngeal involvement',
        explanation: 'T1 nasopharyngeal tumors may extend to oropharynx or nasal cavity but without parapharyngeal space involvement.'
      },
      {
        id: 'np-t2',
        category: 'T2',
        criteria: 'Tumor with extension to parapharyngeal space, and/or adjacent soft tissue involvement (medial pterygoid, lateral pterygoid, prevertebral muscles)',
        explanation: 'T2 involves parapharyngeal extension or soft tissue involvement of specific muscles.'
      },
      {
        id: 'np-t3',
        category: 'T3',
        criteria: 'Tumor invades bony structures of skull base, cervical vertebra, pterygoid structures, and/or paranasal sinuses',
        explanation: 'T3 tumors invade bone structures: skull base, vertebrae, pterygoid bones, or paranasal sinuses.'
      },
      {
        id: 'np-t4',
        category: 'T4',
        criteria: 'Tumor with intracranial extension, cranial nerve involvement, hypopharynx, orbit, parotid gland, or extensive soft tissue infiltration beyond lateral surface of lateral pterygoid muscle',
        explanation: 'T4 indicates intracranial extension, cranial nerve involvement, or extensive soft tissue infiltration.'
      }
    ]
  },

  stageGroups: {
    nonNasopharynx: [
      { id: 'sg-1', tnm: 'T1 N0 M0', stage: 'I', explanation: 'Stage I: Early, localized disease with small primary tumor and no nodal or distant metastasis.' },
      { id: 'sg-2', tnm: 'T2 N0 M0', stage: 'II', explanation: 'Stage II: Locally advanced primary tumor without nodal involvement.' },
      { id: 'sg-3a', tnm: 'T3 N0 M0', stage: 'III', explanation: 'Stage III: Large primary tumor without nodal metastasis.' },
      { id: 'sg-3b', tnm: 'T1-3 N1 M0', stage: 'III', explanation: 'Stage III: T1-T3 primary with single small ipsilateral node.' },
      { id: 'sg-4a-1', tnm: 'T4a N0-1 M0', stage: 'IVA', explanation: 'Stage IVA: Moderately advanced local disease (T4a) with N0 or N1 nodal status.' },
      { id: 'sg-4a-2', tnm: 'T1-4a N2 M0', stage: 'IVA', explanation: 'Stage IVA: Any T1-T4a with N2 nodal disease.' },
      { id: 'sg-4b-1', tnm: 'T4b any N M0', stage: 'IVB', explanation: 'Stage IVB: Very advanced local disease (T4b) regardless of nodal status.' },
      { id: 'sg-4b-2', tnm: 'Any T N3 M0', stage: 'IVB', explanation: 'Stage IVB: Any primary tumor with N3 nodal disease (>6 cm or ENE+).' },
      { id: 'sg-4c', tnm: 'Any T any N M1', stage: 'IVC', explanation: 'Stage IVC: Presence of distant metastasis regardless of T or N status.' }
    ],
    nasopharynx: [
      { id: 'np-sg-1', tnm: 'T1 N0 M0', stage: 'I', explanation: 'Stage I NPC: Localized tumor without parapharyngeal involvement and no nodal disease.' },
      { id: 'np-sg-2', tnm: 'T1 N1 M0, T2 N0-1 M0', stage: 'II', explanation: 'Stage II NPC: T1N1 or T2 with up to N1 nodal disease.' },
      { id: 'np-sg-3', tnm: 'T1-2 N2 M0, T3 N0-2 M0', stage: 'III', explanation: 'Stage III NPC: T1-2N2 or T3 with up to N2 nodal disease.' },
      { id: 'np-sg-4a', tnm: 'T4 N0-2 M0, Any T N3 M0', stage: 'IVA', explanation: 'Stage IVA NPC: T4 primary or any T with N3 nodal disease.' },
      { id: 'np-sg-4b', tnm: 'Any T any N M1', stage: 'IVB', explanation: 'Stage IVB NPC: Distant metastatic disease.' }
    ]
  }
};

// Challenge configurations for different game modes
export const challengeTypes = {
  tStaging: {
    name: 'T-Stage Matching',
    description: 'Match tumor descriptions to the correct T category',
    categories: ['T1', 'T2', 'T3', 'T4a', 'T4b']
  },
  nStaging: {
    name: 'N-Stage Matching',
    description: 'Match nodal descriptions to the correct N category',
    categories: ['N0', 'N1', 'N2a', 'N2b', 'N2c', 'N3a', 'N3b']
  },
  siteIdentification: {
    name: 'Site Identification',
    description: 'Match staging criteria to the correct anatomic site',
    categories: ['Oral Cavity', 'Supraglottic', 'Glottic', 'Subglottic', 'Oropharynx', 'Hypopharynx', 'Nasopharynx']
  },
  stageGrouping: {
    name: 'Stage Grouping',
    description: 'Match TNM combinations to the overall stage',
    categories: ['I', 'II', 'III', 'IVA', 'IVB', 'IVC']
  }
};

// Difficulty settings
export const difficultySettings = {
  easy: {
    name: 'Easy',
    itemCount: 3,
    timeLimit: null,
    showHints: true
  },
  medium: {
    name: 'Medium',
    itemCount: 5,
    timeLimit: 120,
    showHints: false
  },
  hard: {
    name: 'Hard',
    itemCount: 7,
    timeLimit: 90,
    showHints: false
  }
};

// Helper function to get all T-staging items for a specific site
export function getTStagingItems(site) {
  if (site === 'larynx') {
    return [
      ...stagingData.larynx.supraglottic.tStaging.map(item => ({ ...item, subsite: 'Supraglottic' })),
      ...stagingData.larynx.glottic.tStaging.map(item => ({ ...item, subsite: 'Glottic' })),
      ...stagingData.larynx.subglottic.tStaging.map(item => ({ ...item, subsite: 'Subglottic' }))
    ];
  }

  const siteData = stagingData[site];
  if (siteData?.tStaging) {
    return siteData.tStaging;
  }
  return [];
}

// Helper function to get N-staging items
export function getNStagingItems(site) {
  if (site === 'larynx') {
    return stagingData.larynx.nStaging;
  }

  const siteData = stagingData[site];
  if (siteData?.nStaging) {
    return siteData.nStaging;
  }
  return [];
}

// Helper function to get all items for mixed challenges
export function getAllTStagingItems() {
  return [
    ...stagingData.oralCavity.tStaging.map(item => ({ ...item, site: 'Oral Cavity' })),
    ...stagingData.larynx.supraglottic.tStaging.map(item => ({ ...item, site: 'Larynx', subsite: 'Supraglottic' })),
    ...stagingData.larynx.glottic.tStaging.map(item => ({ ...item, site: 'Larynx', subsite: 'Glottic' })),
    ...stagingData.larynx.subglottic.tStaging.map(item => ({ ...item, site: 'Larynx', subsite: 'Subglottic' })),
    ...stagingData.oropharynx.tStaging.map(item => ({ ...item, site: 'Oropharynx' })),
    ...stagingData.hypopharynx.tStaging.map(item => ({ ...item, site: 'Hypopharynx' })),
    ...stagingData.nasopharynx.tStaging.map(item => ({ ...item, site: 'Nasopharynx' }))
  ];
}

export function getAllNStagingItems() {
  return [
    ...stagingData.oralCavity.nStaging.map(item => ({ ...item, site: 'Oral Cavity' })),
    ...stagingData.larynx.nStaging.map(item => ({ ...item, site: 'Larynx' }))
  ];
}

export function getStageGroupItems(type = 'nonNasopharynx') {
  return stagingData.stageGroups[type];
}

// Shuffle array helper
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate a challenge set based on type and difficulty
export function generateChallenge(challengeType, difficulty, site = null) {
  const settings = difficultySettings[difficulty];
  let items = [];
  let categories = [];

  switch (challengeType) {
    case 'tStaging':
      if (site) {
        items = getTStagingItems(site);
      } else {
        items = getAllTStagingItems();
      }
      categories = challengeTypes.tStaging.categories;
      break;

    case 'nStaging':
      if (site) {
        items = getNStagingItems(site);
      } else {
        items = getAllNStagingItems();
      }
      categories = challengeTypes.nStaging.categories;
      break;

    case 'stageGrouping':
      items = getStageGroupItems(site === 'nasopharynx' ? 'nasopharynx' : 'nonNasopharynx');
      categories = site === 'nasopharynx'
        ? ['I', 'II', 'III', 'IVA', 'IVB']
        : challengeTypes.stageGrouping.categories;
      break;

    case 'siteIdentification':
      items = getAllTStagingItems();
      categories = challengeTypes.siteIdentification.categories;
      break;

    default:
      items = getAllTStagingItems();
      categories = challengeTypes.tStaging.categories;
  }

  // Select random items up to the difficulty count
  const shuffledItems = shuffleArray(items);
  const selectedItems = shuffledItems.slice(0, Math.min(settings.itemCount, items.length));

  return {
    items: shuffleArray(selectedItems),
    categories: categories,
    timeLimit: settings.timeLimit,
    showHints: settings.showHints,
    challengeType,
    difficulty
  };
}
