/* eslint-disable no-bitwise, no-undef */
// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('bg-BG', {
  // https://blazingbulgaria.wordpress.com/2012/06/15/time-in-bulgarian/
  // layout/language
  language: 'bg',
  englishName: 'Bulgarian (Bulgaria)',
  nativeName: 'български (България)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: ':',
      short: 'd.MM.yyyy', // use four digit year
      medium: 'd.MM.yyyy г.',
      long: 'd MMMM yyyy г.',
      full: 'EEEEE, d MMMM yyyy г.',
      month: 'd MMMM',
      year: 'MMMM yyyy г.',
      timestamp: 'H:mm:ss',
      datetime: 'd.MM.yyyy H:mm',
      timezone: 'd.MM.yyyy H:mm zz',
      timezoneLong: 'd.MM.yyyy H:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'],
      abbreviated: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
      narrow: ['н', 'п', 'в', 'с', 'ч', 'п', 'с']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'],
      abbreviated: ['ян', 'февр', 'март', 'апр', 'май', 'юни', 'юли', 'авг', 'септ', 'окт', 'ноем', 'дек']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'H:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['пр.об', 'сл.об']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'лв',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    percentSuffix: ' %',
    percentPrefix: undefined,
    minusSign: '-',
    decimal: ',',
    group: ' ',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Авторско право&copy; {0} Infor. Всички права запазени. Наименованието и дизайнът на логата, представени в този документ, представляват търговски марки и/или регистрирани търговски марки на Infor и/или свързани с тях партньори и подразделения. Всички права запазени. Всички други търговски марки изброени по-долу са собственост на съответните им собственици' },
    Actions: { id: 'Actions', value: 'Действия', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Допълнителни елементи', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Добавяне', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Добавяне на коментари', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Добави нов раздел', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Административен отпуск', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Създаване на разширен филтър', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Известяване', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Известие(я) на страница', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Всички', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Всички резултати за', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Най-долна част на подравняване', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Центриране за хоризонтално подравняване', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Amber (Кехлибарен)', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Amethyst (Аметистов)', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Прилагане', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Меню', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Прикачване', comment: 'Attach' },
    Available: { id: 'Available', value: 'Налично', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azure (Небесносиньо)', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Цвят на фона', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Между', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Блокиране на оферта', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Получер', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Отметнато', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Отметнете това', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Трасиране', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Браузър', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Списък с водещи символи', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Календар ', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Камера', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Отмяна', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Включване на Caps Lock ', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Количка', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Центриране', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Оставащи знаци{0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Максимален брой знаци ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. За да промените селекцията, използвайте стрелките за придвижване нагоре и надолу.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Промяна на изгледа', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Квадратче отметка', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Проверено', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Изчистване', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Изчисти филтър', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Изчистване на форматирането', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Изчистване на избор)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Часовник', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Затваряне', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Достъпно за щракване в редактора', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Копиране', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Свиване', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Свиване на приложението на тавата', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Колони', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Коментари', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Неработен ден за компанията', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Компонент', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Съставяне', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Изпълнено', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Потвърждение', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Потвърждение на съобщение(я) на страница', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: '„Бисквитките“ са разрешени', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Съдържа', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Css клас', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Изрязване', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Дата', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Ден', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Дни ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} Просрочени дни', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} Оставащи дни', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Изтриване', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Устройство', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Хоризонтално разпространение', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Документ', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Време за почивка по лично усмотрение', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Променен ред', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Детайлизиране', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Навигиране навътре', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Падащ списък', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Не съдържа', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Не завършва с', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Не се равнява на', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Не започва с', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Надолу', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Изтегляне', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Дублиране', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Избраните или тези, които не са избрани', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Свършва с', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Въведете коментари тук...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Грешка', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Видът на файла не е разрешен', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Превишен лимит за размер на файла', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Превишен лимит за максимално разрешени файлове', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Съобщение(я) за грешка на страница', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Невалиден имейл адрес ', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Emerald (Смарагдов)', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Разширяване', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Разширяване на приложението на тавата', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Разширяване/Свиване', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Експортиране като електронна таблица', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Редактиране', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Равнява се на', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Събитие', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Излизане от пълен изглед', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Експортиране', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Експортирай в Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Предпочитание', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Качване на файл. Натиснете Въвеждане за Преглед на файл', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Филтър за поле', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Филтър', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Първа страница', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Папка', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'От', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Пълен изглед', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Отидете напред', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Върнете се към предишна версия', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Отидете надолу', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Отидете нагоре', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Отиди', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Графит', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'По-голямо от или равно на', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'По-голямо от', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Решетка', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Час', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Часове', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Три заглавни части', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Четири заглавни части', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Най-високо ', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Начална страница', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Html изглед', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Изображение', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Импортиране', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Информация', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Информационно(и) съобщение(я) на страница', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'В ход...', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Вмъкване', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Вмъкване на котва', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Вмъкване на изображение', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Вмъкване на връзка', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Вмъкване на Url', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Курсив', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Грешна дата', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Грешен час', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Материални запаси', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'В обхват', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Е празно', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Не е празно', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Избрани елементи', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Центриране', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Ляво подравняване', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Дясно подравняване', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Ключова дума', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Стартиране', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Последна страница', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Ляво', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Легенда', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'По-голямо от или равно на', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'По-малко от', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Връзка', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Зареди', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Зареждане', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Език', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Заключено', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Излизане', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Справка', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Най-ниско', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Имейл', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Закачване', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Увеличаване', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Медиана', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Средно', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Меню', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Споделяне с Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Минути', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Намаляване', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Минус', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Мобилен', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Месец', comment: 'As in a date month' },
    More: { id: 'More', value: 'Още...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Още действия', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Придвижване наляво', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Придвижване надясно', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Променен ', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Нов', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Нов Документ', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Нов елемент', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Нов прозорец', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Следващ', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Следваща страница', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Следващия месец', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Не', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Няма налични данни', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Няма налични данни, изберете нов филтър, за да видите повече резултати.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Няма налични данни, изберете в списъка по-горе, за да видите повече резултати.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Няма', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Няма резултати', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Нормално', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Забележки', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Не е избран', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Списък числа', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OК', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Отваряне / Назад / Затваряне', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Отваряне / Затваряне', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Операционна система', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Вмъкване/премахване на Числов списък', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'страница ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Страница {0} от {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'В момента сте на страница ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Платено време за почивка', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Поставяне', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Паролата трябва:</strong><br>Да бъде дълга най-малко 10 символа<br>Да има най-малко една главна буква<br>Да има най-малко една малка буква<br>Да съдържа един специален символ<br>Да не съдържа потребителското Ви име<br>Не може да бъде предишно използвана парола<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Паролата трябва да съвпада', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Най-висока', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Чакащ', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Персонализиране на колони', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'План', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Платформа', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Период', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Натиснете стрелката Надолу, за да изберете дата', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Натиснете Shift+F10, за да отворите контекстуалното меню.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Предишен', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Предишният месец', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Предишна страница', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Печат', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Обхват', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} Записи на страница', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Връщане', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Пренареждане на редове', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Опресняване', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Заявяване на време за почивка', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Необходимо', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Възстановяване', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Възстановяване до подразбиране', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Резултат', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Резултати', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Дясно подравняване', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Дясно подравняване', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Дясно', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Роли', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Височина на ред', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Рубиненочервен (Ruby)', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Изпълни филтър', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Същия прозорец', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Запис', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Запис на настоящия изглед', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Записани изгледи', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'График', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Секунди', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Търсене', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Търсене на наименование на колона', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Търсене в папка', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Списък за търсене', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Избор', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Избиране на ден', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Избрани', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Избор на всички', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Изпращане', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Настройка на час', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Настройки', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Кратко', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Покажи ред от филтър', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Скрий', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Покажи', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Отпуск по болест', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Тъмносив (Slate)', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Слайд {0} от {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Слайдове {0} и {1} от {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Манипулатор за', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Максимален обхват на Манипулатор за', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Минимален обхват на Манипулатор за', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Пропусни към Основното съдържание', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Състояние', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Започва с', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: 'Изпълнени стъпки {0} от {1}', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Зачеркнато', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Сортирай възходящо', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Сортирай низходящо', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Сортиране Надолу', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Сортиране Нагоре', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Долен индекс', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Горен индекс', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Раздели...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Закачване', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Височина', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Цел', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Събитие, свързано с екипа', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Настройки по подразбиране на тестов език', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Цвят на текста', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Плъзване и поставяне на файлове за качване', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Плъзване и поставяне или <span class="hyperlink">Избор на файлове</span> за качване', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Отказ на качването на този файл', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Затваряне на тази грешка', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Затваряне на тази грешка', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Таймер', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'До', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Днес', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Превключване на Получер текст', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Превключване на Заглавна част 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Превключване на Заглавна част 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Превключване на Курсив текст', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Превключване на Подчертан текст', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Лента с инструменти', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Горно подравняване', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Общо', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Общи', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Дърво на Свиване', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Дърво на Разширяване', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Тюркоазен (Turquoise)', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Нагоре', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Предстоящи събития', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Предстоящо време за почивка', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Качване', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Неналична дата', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Подчертаване', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Отмяна', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Отключено', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Вмъкване/премахване на списък с водещи символи', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Съдържанието не е налично, защото използва функции, които не са поддържани от настоящата версия на браузъра.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Url', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Използване на клавиши със стрелка за избор.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Използване на въвеждане или стрелка надолу за справка.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Потребител', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Потребителски профил', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Версия на IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Центриране за вертикално подравняване', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Преглед на източник', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Преглед Визуално', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Седмица', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Година', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Да', comment: 'On a dialog button' }
  }
});
