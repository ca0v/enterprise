/**
* Pager Control
*/

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  $.fn.pager = function(options) {

    // Settings and Options
    var pluginName = 'pager',
        defaults = {
          type: 'list', //Differet types of pagers: list, table and more
          position: 'bottom',  //Can be on top as well.
          activePage: 1, //Start on this page
          pagesize: 5, //Can be calculate or a specific number
          source: null  //Call Back Function for Pager Data Source
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Plugin(element) {
      this.settings = settings;
      this.element = $(element);
      this.init();
    }

    // Actual Plugin Code
    Plugin.prototype = {

      init: function() {
        this.activePage = this.settings.activePage;
        this.isTable = this.element.is('tbody');
        this.buttonExpr = 'li:not(.pager-prev):not(.pager-next):not(.pager-first):not(.pager-last)';
        this.createPagerBar();
        this.elements = this.element.children();
        this.renderBar();
        this.renderPages();
        this.handleEvents();
        this.currentPage(this.settings.activePage); //Get First Page
      },

      createPagerBar: function () {
        this.pagerBar = this.element.prev('.pager-toolbar');

        if (this.pagerBar.length === 0) {
          this.pagerBar = $('<ul class="pager-toolbar"> <li class="pager-prev"> <a href="#" rel="prev"> <svg class="icon" focusable="false" aria-hidden="true" role="presentation"><use xlink:href="#icon-previous-page"></use></svg> <span class="audible">Previous</span> </a> </li> <li class="pager-next"> <a href="#" rel="next"> <span class="audible">Next</span> <svg class="icon" focusable="false" aria-hidden="true" role="presentation"><use xlink:href="#icon-next-page"></use></svg> </a> </li> </ul>');

          if (this.isTable && this.settings.type === 'list') {
            this.settings.type = 'table';
          }

          if (this.settings.type === 'table') {
            //Add More Buttons
            this.pagerBar.prepend('<li class="pager-first"> <a href="#" rel="prev"> <svg class="icon" focusable="false" aria-hidden="true" role="presentation"><use xlink:href="#icon-first-page"></use></svg> <span class="audible">First</span> </a> </li>');
            this.pagerBar.append('<li class="pager-last"> <a href="#" rel="prev"> <svg class="icon" focusable="false" aria-hidden="true" role="presentation"><use xlink:href="#icon-last-page"></use></svg> <span class="audible">Last</span> </a> </li>');
          }

          if (this.isTable) {
            this.element.parent('table').after(this.pagerBar);
          } else {
            if (this.settings.position ==='bottom') {
              this.element.after(this.pagerBar);
            } else {
              this.element.before(this.pagerBar);
            }
          }
        }
      },

      // Attach All relevant events
      handleEvents: function () {
        var self = this;

        //Adjust buttons on resize
        $(window).on('resize.pager', function () {
          self.renderBar();
        });

        //Attach button click and touch
        this.pagerBar.onTouchClick('pager', 'a').on('click.pager', 'a', function (e) {
          var li = $(this).parent();
          e.preventDefault();

          if (li.is('.pager-prev')) {
            self.currentPage(self.activePage - 1);
            return false;
          }

          if (li.is('.pager-next')) {
            self.currentPage(self.activePage + 1);
            return false;
          }

          if (li.is('.pager-first')) {
            self.currentPage(self.activePage = 1);
            return false;
          }

         if (li.is('.pager-last')) {
            self.currentPage(self.pageCount());  //TODO Calculate Last Page?
            return false;
          }

          //Go to the page via the index of the button
          self.currentPage($(this).parent().index() + (self.settings.type === 'table' ? -1 : 0));

          return false;
        });

        //Toolbar functionality
        this.pagerBar.find('a').on('keydown.pager', function (e) {
          e = (e) ? e : window.event;
          var charCode = (e.which) ? e.which : ((e.keyCode) ? e.keyCode : false),
            btn = (charCode === 37) ? $('a', $(this).parent().prev()) : (charCode === 39) ? $('a', $(this).parent().next()) : false;

          if (!!btn) {
            if(!btn.attr('disabled')) {
              btn.focus();
            }
          }
        });
      },

      //Set or Get Current Page
      currentPage: function(pageNum) {

        var lis = this.pagerBar.find(this.buttonExpr);

        if (pageNum === 0 || pageNum > this.pageCount()) {
          return;
        }

        if (pageNum === undefined) {
          return this.activePage;
        }

        if (pageNum === this.activePage) {
          return this.activePage;
        }

        this.activePage = pageNum;

        //Remove selected
        lis.filter('.selected').removeClass('selected').removeAttr('aria-selected')
          .find('a').removeAttr('aria-disabled')
            .find('.audible').html(Locale.translate('Page'));

        //Set selected Page
        lis.eq(pageNum-1).addClass('selected').attr('aria-selected', true)
          .find('a').attr('aria-disabled', true)
            .find('.audible').html(Locale.translate('PageOn'));

        this.renderBar();
        this.renderPages();
        return pageNum;
      },

      _pageCount: 0,

      //Get/Set Total Number of pages
      pageCount: function(pages) {
        if (!pages && !this.settings.source) {
          return this._pageCount;
        }

        if (pages) {
          this._pageCount = pages;
        }

        //Add in fake pages
        if (!this.isTable) {
          this.pagerBar.find(this.buttonExpr).remove();
        }

        var i, thisClass, thisText, isAriaSelected, isAriaDisabled;

        for (i = pages; i > 0; i--) {
          if (i === 1) {
            thisClass = 'class="selected"';
            thisText = Locale.translate('PageOn');
            isAriaSelected = 'aria-selected="true"';
            isAriaDisabled = 'aria-disabled="true"';
          } else {
            thisClass = '';
            thisText = Locale.translate('Page');
            isAriaSelected = '';
            isAriaDisabled = '';
          }

<<<<<<< Updated upstream
          if (!this.isTable) {
            $('<li '+ thisClass + isAriaSelected +'><a '+ isAriaDisabled +'><span class="audible">'+ thisText +' </span>'+ i +'</a></li>').insertAfter(this.pagerBar.find('.pager-prev'));
=======
          if (this.isTable && this.pagerBar.find('.btn-group').length === 0) {
            var pageSize = '<li class="pager-pagesize"><div class="btn-group"> <button type="button" class="btn-menu"> <span>Records Per Page</span> <svg class="icon" focusable="false" aria-hidden="true" role="presentation"> <use xlink:href="#icon-arrow-down"></use> </svg> </button> <ul class="popupmenu is-padded"> <li><a href="#">25</a></li> <li><a href="#">50</a></li> <li><a href="#">100</a></li> <li><a href="#">250</a></li> </ul> </div></li>';
            $(pageSize).insertAfter(this.pagerBar.find('.pager-last'));
>>>>>>> Stashed changes
          }
        }

        if (this.isTable && this.pagerBar.find('.pager-count').length === 0) {
          var text =  '<span>' + Locale.translate('PageOf') + '</span>';
          text = text = text.replace('{0}', '<input data-mask="###" value="' + this.activePage + '">');
          text = text.replace('{1}', '<span class="pager-total-pages">' + (pages ? pages : '-') + '</span>');

          $('<label class="pager-count">'+ text +' </label>').insertAfter(this.pagerBar.find('.pager-prev'));
          this.pagerBar.find('.pager-count input').mask();
        }

        if (this.isTable && this.pagerBar.find('.btn-menu').length === 0) {
          var pageSize = '<li class="pager-pagesize"><div class="btn-group"> <button type="button" class="btn-menu"> <span>' + Locale.translate('RecordsPerPage').replace('{0}', this.settings.pagesize) +'</span> <svg class="icon" focusable="false" aria-hidden="true"> <use xlink:href="#icon-dropdown"></use> </svg> </button> <ul class="popupmenu is-padded"> <li><a href="#25">25</a></li> <li><a href="#50">50</a></li> <li><a href="#100">100</a></li> <li><a href="#250">250</a></li> </ul> </div></li>';
          $(pageSize).insertAfter(this.pagerBar.find('.pager-last'));
          this.pagerBar.find('.btn-menu').popupmenu();

          $('[href="#25"]').parent().addClass('is-checked');
        }

        return this._pageCount;
      },

      // Render Pages
      renderBar: function() {
        //How many can fit?
        var pb = this.pagerBar,
          elems, pc,
          width = (this.element.parent().width() / pb.find('li:first').width()),
          howMany = Math.floor(width-3);   //Take out the ones that should be visible (buttons and selected)

        //Check Data Attr
        if (this.element.attr('data-pagesize')) {
          settings.pagesize = this.element.attr('data-pagesize');
        }

        //Adjust Page count numbers
        pc = Math.ceil(this.elements.length/settings.pagesize);
        if (this.pageCount() !== pc) {
          this.pageCount(pc);
        }

        //Refresh Disabled
        var prev = pb.find('.pager-prev a'), next = pb.find('.pager-next a'),
          first = pb.find('.pager-first a'), last = pb.find('.pager-last a');

        prev.removeAttr('disabled');
        next.removeAttr('disabled');
        first.removeAttr('disabled');
        last.removeAttr('disabled');

        if (this.activePage === 1) {
          prev.attr('disabled','disabled');
          first.attr('disabled','disabled');
        }
        if (this.activePage === this.pageCount()) {
          next.attr('disabled','disabled');
          last.attr('disabled','disabled');
        }

        //Remove from the front until selected is visible and we have at least howMany showing
        elems = pb.find(this.buttonExpr);
        elems.show();
        if (elems.length < howMany) {
          return;
        }

        elems.each(function () {
          var li = $(this);
          if (pb.find('.pager-next').offset().top - pb.offset().top > 1 && !li.is('.selected')) {
            $(this).hide();
          }
        });

      },

      // Render Paged Items
      renderPages: function() {
        var expr,
          self = this,
          pageInfo = {current: this.currentPage(), pagesize: this.settings.pagesize, total: -1};

        //Make an ajax call and wait
        setTimeout(function () {
          var table = self.element.closest('.datagrid-container'),
            doPaging = table.triggerHandler('beforePaging', pageInfo);

          if (doPaging === false) {
            return;
          }

          if (self.settings.source) {
            var response = function (data, pagingInfo) {
              //Render Data
              var api = table.data('datagrid');
              api.loadData(data);

              //Update Paging Info
              self.updatePagingInfo(pagingInfo);
              return;
            };

            self.settings.source(pageInfo, response);
          }

          //Make an ajax call and wait
          self.element.trigger('paging', pageInfo);

          //Render page objects
          self.elements.hide();
          expr = (self.currentPage() === 1 ? ':lt('+ settings.pagesize +')' : ':lt('+ ((self.currentPage()) * settings.pagesize) +'):gt('+ (((self.currentPage()-1) *settings.pagesize) -1) +')');
          self.elements.filter(expr).show();
          self.element.trigger('afterpaging', pageInfo);
        }, 0);
      },

      updatePagingInfo: function(pagingInfo) {
        this.settings.pagesize = pagingInfo.pagesize;
        this.pagerBar.find('.btn-menu span').text(Locale.translate('RecordsPerPage').replace('{0}', this.settings.pagesize));

        //this._pageCount = pagingInfo.total/this.settings.pagesize);
        this._pageCount = Math.ceil(pagingInfo.total/this.settings.pagesize);
        this.activePage = pagingInfo.current;
        this.currentPage(this.activePage);

        //Update the UI
        this.pagerBar.find('.pager-count input').val(this.activePage);
        this.pagerBar.find('.pager-total-pages').text(this._pageCount);
      },

      //Teardown
      destroy: function() {
        $.removeData(this.element[0], pluginName);
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, defaults, options);
      } else {
        instance = $.data(this, pluginName, new Plugin(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
