// / workAs
const getWorkAsList = (list = []) =>
  list.map(({ id = 0, name = '' }) => ({
    label: name,
    value: id,
  }));

const getWorkAsData = (list = []) => ({
  current: getWorkAsList(list),
});

// mainSkills
const getSkillsData = (list = []) =>
  list.map(({ skill = {}, order = 0, yearOfExperience = 0 }) => ({
    current: {
      label: skill.name || '',
      value: skill.id || 0,
    },
    order,
    yearOfExperience: {
      label: yearOfExperience,
      value: yearOfExperience,
    },
  }));

const getSkillsList = (list = []) =>
  list.map(({ skill = {} }) => ({
    label: skill.name || '',
    value: skill.id || 0,
  }));

const getYearsList = years => {
  const items = [];
  for (let i = 1; i <= years; i += 1) {
    const text = i === 1 ? 'year' : 'years';
    items.push({ label: `${i} ${text}`, value: i });
  }
  return items;
};

const parseResponse = response => {
  const {
    openedPosition = false,
    yearOfExperience = 0,
    position = {},
    workAs,
    mainSkills,
  } = response;

  const result = {
    openedPosition,
    position: {
      current: {
        label: position.name || '',
        value: position.id || 0,
      },
      yearOfExperience: {
        label: yearOfExperience,
        value: yearOfExperience,
      },
    },
    positionList: getWorkAsList(workAs),
    workAs: getWorkAsData(workAs),
    workAsList: getWorkAsList(workAs),
    mainSkills: getSkillsData(mainSkills),
    mainSkillsList: getSkillsList(mainSkills),
    yearsList: getYearsList(yearOfExperience),
  };

  return result;
};

export default parseResponse;
