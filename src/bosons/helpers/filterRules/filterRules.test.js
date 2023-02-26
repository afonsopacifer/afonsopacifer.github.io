import filterRules from './filterRules.js';

describe('filterRules', () => {

  it('Should dont filter a list with empty filters params', () => {

    const mockData = [
      { name: 'Demo A', lang: 'en' },
      { name: 'Demo B', lang: 'esp' },
      { name: 'Demo C', lang: 'en' },
      { name: 'Demo D', lang: 'esp' },
      { name: 'Demo E', lang: 'pt-br' },
      { name: 'Demo F', lang: 'cz' },
      { name: 'Demo G', lang: 'pt-br' },
    ];

    const mockFilters = [];

    const mockProperty = 'lang';

    const result = mockData.filter(filterRules(mockFilters, mockProperty));
  
    const mockExpect = [
      { name: 'Demo A', lang: 'en' },
      { name: 'Demo B', lang: 'esp' },
      { name: 'Demo C', lang: 'en' },
      { name: 'Demo D', lang: 'esp' },
      { name: 'Demo E', lang: 'pt-br' },
      { name: 'Demo F', lang: 'cz' },
      { name: 'Demo G', lang: 'pt-br' },
    ]

    expect(result).toEqual(mockExpect);

  });

  it('Should filter a list with populated filters params', () => {

    const mockData = [
      { name: 'Demo A', lang: 'en' },
      { name: 'Demo B', lang: 'esp' },
      { name: 'Demo C', lang: 'en' },
      { name: 'Demo D', lang: 'esp' },
      { name: 'Demo E', lang: 'pt-br' },
      { name: 'Demo F', lang: 'cz' },
      { name: 'Demo G', lang: 'pt-br' },
    ];

    const mockFilters = [ 'en', 'pt-br' ];

    const mockProperty = 'lang';

    const result = mockData.filter(filterRules(mockFilters, mockProperty));
  
    const mockExpect = [
      { name: 'Demo A', lang: 'en' },
      { name: 'Demo C', lang: 'en' },
      { name: 'Demo E', lang: 'pt-br' },
      { name: 'Demo G', lang: 'pt-br' },
    ]

    expect(result).toEqual(mockExpect);
  
  });

  it('Should filter a list with non-existent filter param', () => {

    const mockData = [
      { name: 'Demo A', lang: 'en' },
      { name: 'Demo B', lang: 'esp' },
      { name: 'Demo C', lang: 'en' },
      { name: 'Demo D', lang: 'esp' },
      { name: 'Demo E', lang: 'pt-br' },
      { name: 'Demo F', lang: 'cz' },
      { name: 'Demo G', lang: 'pt-br' },
    ];

    const mockFilters = [ 'Demo A', 'Demo X' ];

    const mockProperty = 'name';

    const result = mockData.filter(filterRules(mockFilters, mockProperty));
  
    const mockExpect = [
      { name: 'Demo A', lang: 'en' },
    ]

    expect(result).toEqual(mockExpect);
  
  });

  it('Should filter a list with non-existent property param', () => {

    const mockData = [
      { name: 'Demo A', lang: 'en' },
      { name: 'Demo B', lang: 'esp' },
      { name: 'Demo C', lang: 'en' },
      { name: 'Demo D', lang: 'esp' },
      { name: 'Demo E', lang: 'pt-br' },
      { name: 'Demo F', lang: 'cz' },
      { name: 'Demo G', lang: 'pt-br' },
    ];

    const mockFilters = [ 'en', 'pt-br' ];

    const mockProperty = 'value';

    const result = mockData.filter(filterRules(mockFilters, mockProperty));
  
    const mockExpect = []

    expect(result).toEqual(mockExpect);
  
  });

});