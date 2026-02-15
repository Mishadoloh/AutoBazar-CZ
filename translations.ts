
export type Language = 'ua' | 'cz';

export const translations = {
  ua: {
    nav: {
      menu: 'Меню',
      catalog: 'Каталог авто',
      vinCheck: 'Перевірка VIN',
      favorites: 'Обране',
      sellCar: 'Продати авто',
      insurance: 'Страхування',
      customs: 'Розмитнення',
      stats: 'Аналітика',
      advertising: 'Реклама'
    },
    hero: {
      title: 'Знайди своє ідеальне авто',
      subtitle: 'Найбільший вибір перевірених автомобілів у Чехії. Тільки актуальні пропозиції з гарантією прозорості.',
      searchPlaceholder: 'Марка, модель або місто...',
      searchBtn: 'Пошук'
    },
    filters: {
      title: 'Фільтри',
      brand: 'Марка',
      allBrands: 'Всі марки',
      price: 'Ціна (EUR)',
      from: 'Від',
      to: 'До',
      yearFrom: 'Рік від',
      reset: 'Скинути'
    },
    common: {
      mileage: 'км',
      currency: 'EUR',
      price: 'Ціна',
      results: 'Знайдено',
      sort: 'Сортування',
      newest: 'Нові за роком',
      cheapest: 'Найдешевші',
      expensive: 'Найдорожчі',
      mileage_sort: 'За пробігом',
      notFound: 'Нічого не знайдено',
      notFoundDesc: 'Спробуйте змінити параметри пошуку.',
      view: 'Перегляд',
      call: 'Подзвонити',
      message: 'Написати',
      save: 'Зберегти',
      saved: 'У вибраному'
    },
    vin: {
      title: 'Перевірка за VIN-кодом',
      subtitle: 'Дізнайтеся історію авто перед покупкою за 17 символами.',
      placeholder: 'Введіть VIN-код...',
      checkBtn: 'Перевірити',
      found: 'Автомобіль знайдено в базі',
      techData: 'Технічні дані',
      history: 'Історія ДТП та пробігу',
      accidents: 'Кількість зафіксованих ДТП'
    },
    insurance: {
      title: 'Страхування авто в Чехії',
      subtitle: 'Оформіть обов\'язкове або повне страхування за вигідними тарифами.',
      mandatory: 'Обов\'язкове (Povinné)',
      full: 'Каско (Havarijní)',
      cta: 'Отримати пропозицію',
      ctaDesc: 'Наш спеціаліст підбере найкращий варіант під ваші потреби.'
    },
    customs: {
      title: 'Калькулятор розмитнення',
      subtitle: 'Попередній розрахунок вартості ввезення авто в Україну.',
      priceLabel: 'Вартість авто (EUR)',
      yearLabel: 'Рік випуску',
      engineLabel: 'Об\'єм (см³)',
      fuelLabel: 'Тип палива',
      resultTitle: 'Орієнтовне мито',
      resultDesc: 'Реальна вартість залежить від оцінки митної служби.'
    },
    stats: {
      title: 'Аналітика ринку',
      subtitle: 'Динаміка цін та популярні сегменти на ринку Чехії сьогодні.',
      trend: 'Ринок сьогодні',
      trendUp: 'ріст',
      realTime: 'Оновлення в реальному часі'
    },
    footer: {
      about: 'AutoBazar CZ — провідна платформа для українців у Чехії. Ми робимо процес купівлі авто прозорим та безпечним.',
      services: 'Послуги',
      forSellers: 'Для продавців',
      contacts: 'Контакти'
    }
  },
  cz: {
    nav: {
      menu: 'Menu',
      catalog: 'Katalog vozů',
      vinCheck: 'Prověřit VIN',
      favorites: 'Moje auta',
      sellCar: 'Prodat vůz',
      insurance: 'Pojištění',
      customs: 'Clo',
      stats: 'Statistiky',
      advertising: 'Inzerce'
    },
    hero: {
      title: 'Najděte své ideální auto',
      subtitle: 'Největší výběr prověřených vozů v ČR. Aktuální nabídky s jasnou historií.',
      searchPlaceholder: 'Značka, model nebo město...',
      searchBtn: 'Hledat'
    },
    filters: {
      title: 'Filtry',
      brand: 'Značka',
      allBrands: 'Všechny značky',
      price: 'Cena (EUR)',
      from: 'Od',
      to: 'Do',
      yearFrom: 'Rok od',
      reset: 'Smazat'
    },
    common: {
      mileage: 'km',
      currency: 'EUR',
      price: 'Cena',
      results: 'Nalezeno',
      sort: 'Řazení',
      newest: 'Nejnovější',
      cheapest: 'Nejlevnější',
      expensive: 'Nejdražší',
      mileage_sort: 'Dle km',
      notFound: 'Nenalezeno',
      notFoundDesc: 'Zkuste změnit filtry vyhledávání.',
      view: 'Detail',
      call: 'Volat',
      message: 'Napsat',
      save: 'Uložit',
      saved: 'Uloženo'
    },
    vin: {
      title: 'Prověření VIN kódu',
      subtitle: 'Zjistěte historii vozu před koupí pomocí 17 znaků.',
      placeholder: 'Zadejte VIN kód...',
      checkBtn: 'Prověřit',
      found: 'Vůz nalezen v databázi',
      techData: 'Technické údaje',
      history: 'Historie nehod a nájezdu',
      accidents: 'Počet evidovaných nehod'
    },
    insurance: {
      title: 'Pojištění vozu v ČR',
      subtitle: 'Sjednejte si povinné ručení nebo havarijní pojištění za nejlepší ceny.',
      mandatory: 'Povinné ručení',
      full: 'Havarijní pojištění',
      cta: 'Získat nabídku',
      ctaDesc: 'Náš specialista vám pomůže vybrat tu nejlepší variantu.'
    },
    customs: {
      title: 'Kalkulačka cla',
      subtitle: 'Odhad nákladů na dovoz vozu na Ukrajinu.',
      priceLabel: 'Cena vozu (EUR)',
      yearLabel: 'Rok výroby',
      engineLabel: 'Objem (ccm)',
      fuelLabel: 'Typ paliva',
      resultTitle: 'Odhadované clo',
      resultDesc: 'Skutečná hodnota závisí na celním ohodnocení.'
    },
    stats: {
      title: 'Tržní statistiky',
      subtitle: 'Dynamika cen a nejoblíbenější segmenty v ČR právě teď.',
      trend: 'Trh dnes',
      trendUp: 'růst',
      realTime: 'Aktualizace v reálném čase'
    },
    footer: {
      about: 'AutoBazar CZ je přední platforma pro Ukrajince v ČR. Děláme proces nákupu vozu transparentním a bezpečným.',
      services: 'Služby',
      forSellers: 'Pro prodejce',
      contacts: 'Kontakty'
    }
  }
};
