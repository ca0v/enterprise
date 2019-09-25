/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('el-GR', {
  // layout/language
  language: 'el',
  englishName: 'Greek (Greece)',
  nativeName: 'Ελληνικά (Ελλάδα)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'd/M/yyyy', // use four digit year
      medium: 'd MMM yyyy',
      long: 'd MMMM yyyy',
      full: 'EEEE, d MMMM yyyy',
      month: 'd MMMM',
      year: 'MMMM yyyy',
      timestamp: 'h:mm:ss a',
      datetime: 'd/M/yyyy h:mm a',
      timezone: 'd/M/yyyy h:mm a zz',
      timezoneLong: 'd/M/yyyy h:mm a zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
      abbreviated: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'],
      narrow: ['Κ', 'Δ', 'Τ', 'Τ', 'Π', 'Π', 'Σ']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'],
      abbreviated: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαΐ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'h:mm a',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['π.μ.', 'μ.μ.']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '€',
  currencyFormat: '### ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    percentSuffix: ' %',
    percentPrefix: undefined,
    minusSign: '-',
    decimal: ',',
    group: '.',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Πνευματικά δικαιώματα &copy; {0} Infor. Με επιφύλαξη κάθε νόμιμου δικαιώματος. Τα λεκτικά και σχεδιαστικά σήματα που παρατίθενται στο παρόν είναι εμπορικά και/ή κατατεθέντα σήματα της Infor και/ή των θυγατρικών της. Με επιφύλαξη κάθε νόμιμου δικαιώματος. Όλα τα υπόλοιπα εμπορικά σήματα που παρατίθενται στο παρόν ανήκουν στους αντίστοιχους ιδιοκτήτες τους' },
    Actions: { id: 'Actions', value: 'Ενέργειες', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Πρόσθετα στοιχεία', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Προσθήκη', comment: 'Add' },
    AddComments: { id: 'AddComments', value: 'Προσθήκη σχολίων', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: 'Προσθήκη νέας καρτέλας', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: 'Διαχειριστική άδεια', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Δημιουργία σύνθετου φίλτρου', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Προειδοποίηση', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Μήνυμα(τα) ειδοποίησης στη σελίδα', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Όλα', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Όλα τα αποτελέσματα για', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Στοίχιση στο κάτω μέρος', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Κέντρο οριζόντιας στοίχισης', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Φαιοκίτρινο', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Αμέθυστος', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Εφαρμογή', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: 'Μενού', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: 'Επισύναψη', comment: 'Attach' },
    Available: { id: 'Available', value: 'Διαθέσιμο', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Γαλάζιο', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Χρώμα φόντου', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Μεταξύ', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Αποκλεισμός προσφοράς', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Έντονη γραφή', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Με σελιδοδείκτη', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Δημιουργία σελιδοδείκτη', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Δυναμική διαδρομή', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Πρόγραμμα περιήγησης', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Λίστα με κουκκίδες', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Ημερολόγιο', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Κάμερα', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Άκυρο', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Κλείδωμα κεφαλαίων ενεργοποιημένο', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Καλάθι', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Κέντρο', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Χαρακτήρες αριστερά {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Μέγιστος αριθμός χαρακτήρων των ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Για να αλλάξετε την επιλογή, χρησιμοποιήστε τα πλήκτρα βέλους.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: 'Αλλαγή προβολής', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: 'Πλαίσιο ελέγχου', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Επιλεγμένο', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Απαλοιφή', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Απαλοιφή φίλτρου', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: 'Απαλοιφή μορφοποίησης', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(Απαλοιφή επιλογής)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Ρολόι', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Κλείσιμο', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Με δυνατότητα κλικ στο πρόγραμμα επεξεργασίας', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Αντιγραφή', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Σύμπτυξη', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Σύμπτυξη περιοχής εφαρμογών', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Στήλες', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: 'Σχόλια', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: 'Εταιρική αργία', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: 'Στοιχείο', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Σύνθεση', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Ολοκληρώθηκε', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Επιβεβαίωση', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Επιβεβαίωση μηνύματος(των) στη σελίδα', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Ενεργοποιημένα Cookie', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Περιέχει', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Css Class', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Αποκοπή', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Ημερομηνία', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: 'Ημέρα', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: 'Ημέρες ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} Ημέρες εκπρόθεσμο', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} Ημέρες απομένουν', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Διαγραφή', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: 'Συσκευή', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Διανομή οριζοντίως', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Έγγραφο', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: 'Επιλεκτικό ρεπό', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: 'Η γραμμή άλλαξε', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Ανάλυση', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Γενίκευση', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Αναπτυσσόμενο', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Δεν περιέχει', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Δεν τελειώνει με', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Δεν ισούται με', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Δεν αρχίζει με', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Κάτω', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Λήψη', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Διπλότυπο', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Είτε Επιλεγμένο είτε Μη επιλεγμένο', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Τελειώνει με', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Καταχωρίστε σχόλια εδώ...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Σφάλμα', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Ο τύπος αρχείου δεν επιτρέπεται', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Υπέρβαση ορίου μεγέθους αρχείου', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Υπέρβαση ανώτατου επιτρεπόμενου ορίου αριθμού αρχείων', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Μήνυμα(τα) σφάλματος στη σελίδα', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Μη έγκυρη διεύθυνση email', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Σμαραγδί', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Ανάπτυξη', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Ανάπτυξη περιοχής εφαρμογών', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Ανάπτυξη / Σύμπτυξη', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Εξαγωγή ως υπολογιστικό φύλλο', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Επεξεργασία', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Ισούται με', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: 'Συμβάν', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: 'Έξοδος από την Πλήρη προβολή', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Εξαγωγή ', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Εξαγωγή στο Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Αγαπημένο', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Αποστολή αρχείου. Πατήστε το Enter για να αναζητήσετε κάποιο αρχείο', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: 'Πεδίο φίλτρου', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: 'Φίλτρο', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Πρώτη σελίδα', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Φάκελος', comment: 'Folder tooltip' },
    From: { id: 'From', value: 'Από', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: 'Πλήρης προβολή', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Μετακίνηση προς τα εμπρός', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Μετακίνηση προς τα πίσω', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Μετακίνηση προς τα κάτω', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Μετακίνηση προς τα πάνω', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Μετάβαση', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Γραφίτης', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Μεγαλύτερο από ή ίσο με', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Μεγαλύτερο από', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Πλέγμα', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: 'Ώρα', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: 'Ώρες', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: 'Επικεφαλίδα τρία', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Επικεφαλίδα τέσσερα', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Ανώτατο', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Αρχική', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Προβολή html', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Εικόνα', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Εισαγωγή', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Πληροφορίες', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Μήνυμα(τα) ενημέρωσης στη σελίδα', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Σε εξέλιξη', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Εισαγωγή', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Εισαγωγή αγκύρωσης', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Εισαγωγή εικόνας', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Εισαγωγή σύνδεσης', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Εισαγωγή Url', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Πλάγια γραφή', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Μη έγκυρη ημερομηνία', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Μη έγκυρη ώρα', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Αποθέματα', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: 'Εντός εύρους', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: 'Είναι κενό', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Δεν είναι κενό', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Επιλεγμένα στοιχεία', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Κέντρο', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Στοίχιση αριστερά', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Στοίχιση δεξιά', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Λέξη-κλειδί', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Εκκίνηση', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Τελευταία σελίδα', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Αριστερά', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: 'Υπόμνημα', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Μικρότερο από ή ίσο με', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Μικρότερο από', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Σύνδεση', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Φόρτωση', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Γίνεται φόρτωση', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Τοπικές ρυθμίσεις', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Κλειδωμένο', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Έξοδος', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Αναζήτηση', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Κατώτατο', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Αλληλογραφία', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Καρφίτσωμα', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Μεγιστοποίηση', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Διάμεσος', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Μεσαίο', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Μενού', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Κοινή χρήση με Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Λεπτά', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Ελαχιστοποίηση', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Μείον', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Κινητό', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Μήνας', comment: 'As in a date month' },
    More: { id: 'More', value: 'Περισσότερα...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Περισσότερες ενέργειες', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Μετακίνηση προς τα αριστερά', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Μετακίνηση προς τα δεξιά', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Τροποποιήθηκε', comment: 'for modified form fields' },
    New: { id: 'New', value: 'Νέο', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: 'Νέο έγγραφο', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Νέο στοιχείο', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: 'Νέο παράθυρο', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: 'Επόμενο', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Επόμενη σελίδα', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Επόμενος μήνας', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Όχι', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Δεν υπάρχουν διαθέσιμα δεδομένα', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Δεν υπάρχουν διαθέσιμα δεδομένα, κάντε μια νέα επιλογή φίλτρου για να δείτε περισσότερα αποτελέσματα.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Δεν υπάρχουν διαθέσιμα δεδομένα, κάντε μια επιλογή στην παραπάνω λίστα για να δείτε περισσότερα αποτελέσματα.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: 'Κανένα', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: 'Κανένα αποτέλεσμα', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Κανονική', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Σημειώσεις', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Μη επιλεγμένο', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Λίστα αριθμών', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'ΟΚ', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Άνοιγμα / Πίσω / Κλείσιμο', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Άνοιγμα / Κλείσιμο', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: 'Λειτουργικό σύστημα', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: 'Εισαγωγή/Κατάργηση λίστας με αρίθμηση', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'σελίδα ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Σελίδα {0} από {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Αυτήν τη στιγμή βρίσκεστε στη σελίδα ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: 'Αμειβόμενο ρεπό', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: 'Επικόλληση', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Ο κωδικός πρόσβασης πρέπει:</strong><br>Να έχει τουλάχιστον 10 χαρακτήρες<br>Να έχει τουλάχιστον έναν κεφαλαίο χαρακτήρα<br>Να έχει τουλάχιστον έναν πεζό χαρακτήρα<br>Να περιέχει έναν ειδικό χαρακτήρα<br>Να μην περιέχει το όνομα χρήστη σας<br>Να μην είναι κωδικός πρόσβασης που έχετε χρησιμοποιήσει ήδη<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Ο κωδικός πρόσβασης πρέπει να συμφωνεί', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Κορύφωση', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: 'Σε εκκρεμότητα', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Εξατομίκευση στηλών', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: 'Σχέδιο', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: 'Πλατφόρμα', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Περίοδος', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Πιέστε το Κάτω βέλος για να επιλέξετε μια ημερομηνία', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Πιέστε Shift+F10 για να ανοίξετε το μενού περιβάλλοντος.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Προηγούμενο', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Προηγούμενος μήνας', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Προηγούμενη σελίδα', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Εκτύπωση', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Περιοχή', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} Εγγραφές ανά σελίδα', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Επανάληψη', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Αναδιάταξη γραμμών', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Ανανέωση', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: 'Αίτημα ρεπό', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: 'Απαιτείται', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Επαναφορά', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Επαναφορά των προεπιλογών', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Αποτέλεσμα', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Αποτελέσματα', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Στοίχιση δεξιά', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Στοίχιση δεξιά', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Δεξιά', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Ρόλοι', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Ύψος γραμμής', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Κερασί', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Εκτέλεση φίλτρου', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: 'Ίδιο παράθυρο', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: 'Αποθήκευση', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Αποθήκευση τρέχουσας προβολής', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Αποθηκευμένες προβολές', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: 'Χρονοδιάγραμμα', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: 'Δευτερόλεπτα', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Αναζήτηση', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Αναζήτηση ονόματος στήλης', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Αναζήτηση στο φάκελο', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Λίστα αναζήτησης', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Επιλογή', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: 'Επιλέξτε ημέρα', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: 'Επιλεγμένο', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Επιλογή όλων', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Αποστολή', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Ρύθμιση ώρας', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Ρυθμίσεις', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Σύντομο', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Εμφάνιση σειράς φίλτρου', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Εμφάνιση λιγότερων', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Εμφάνιση περισσότερων', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: 'Άδεια ασθενείας', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: 'Σχιστόλιθος', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Διαφάνεια {0} από {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Διαφάνειες {0} και {1} από {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Χειρισμός για', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Χειρισμός μέγιστου εύρους για', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Χειρισμός ελάχιστου εύρους για', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Μεταπήδηση στο Κύριο περιεχόμενο', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: 'Κατάσταση', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: 'Αρχίζει με', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} από {1} βήματα ολοκληρώθηκαν', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Διακριτή διαγραφή', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Αύξουσα ταξινόμηση', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Φθίνουσα ταξινόμηση', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Φθίνουσα ταξινόμηση', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Αύξουσα ταξινόμηση', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Δείκτης', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Εκθέτης', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Καρτέλες...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Καρφίτσωμα', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Ψηλό', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Προορισμός', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: 'Συμβάν ομάδας', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Δοκιμή προεπιλογών τοπικών ρυθμίσεων', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Χρώμα κειμένου', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Μεταφορά και απόθεση αρχείων για αποστολή', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Μεταφορά και απόθεση ή <span class="hyperlink">Επιλογή αρχείων</span> για αποστολή', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Ακύρωση αποστολής αυτού του αρχείου', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Κλείσιμο αυτού του σφάλματος', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Κλείσιμο αυτού του σφάλματος', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Χρονόμετρο', comment: 'Timer tooltip' },
    To: { id: 'To', value: 'Έως', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: 'Σήμερα', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Εναλλαγή έντονης γραφής κειμένου', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Εναλλαγή επικεφαλίδας 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Εναλλαγή επικεφαλίδας 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Εναλλαγή πλάγιας γραφής κειμένου', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Εναλλαγή υπογράμμισης κειμένου', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Γραμμή εργαλείων', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Στοίχιση επάνω', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Σύνολο', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Σύνολα', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Σύμπτυξη δέντρου', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Ανάπτυξη δέντρου', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Τυρκουάζ', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Πάνω', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: 'Επερχόμενα συμβάντα', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: 'Επερχόμενο ρεπό', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: 'Αποστολή', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Μη διαθέσιμη ημερομηνία', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Υπογράμμιση', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Αναίρεση', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Ξεκλείδωτο', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Εισαγωγή/Κατάργηση λίστας με κουκκίδες', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Το περιεχόμενο αυτό δεν είναι διαθέσιμο επειδή χρησιμοποιεί λειτουργίες που δεν υποστηρίζονται στην τρέχουσα έκδοση του προγράμματος περιήγησης.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Url', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Χρησιμοποιήστε τα πλήκτρα βέλους για πραγματοποίηση επιλογής.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Χρησιμοποιήστε το Enter ή το βέλος προς τα κάτω για αναζήτηση.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Χρήστης', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Προφίλ χρήστη', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'Έκδοση IDS', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Κέντρο κατακόρυφης στοίχισης', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Προβολή πηγής', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Προβολή οπτικών στοιχείων', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: 'Εβδομάδα', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: 'Έτος', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Ναι', comment: 'On a dialog button' }
  }
});
