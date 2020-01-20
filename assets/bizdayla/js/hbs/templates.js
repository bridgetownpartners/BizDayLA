Handlebars.registerHelper("scriptLoaderFromArray", arr => { let body = document.body; arr.forEach(url => { const script = document.createElement("script"); script.src = url; script.type="text/javascript"; body.append(script); }) });
Handlebars.registerPartial("arrow_up", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"btn back-to-top btn-primary btn-round\" data-smooth-scroll data-aos=\"fade-up\" data-aos-offset=\"2000\" data-aos-mirror=\"true\" data-aos-once=\"false\">\r\n    <img class=\"icon\" src=\"assets/img/icons/theme/navigation/arrow-up.svg\" alt=\"arrow-up icon\" data-inject-svg />\r\n</a>";
},"useData":true}));
this["Bizdayla"] = this["Bizdayla"] || {};
this["Bizdayla"]["templates"] = this["Bizdayla"]["templates"] || {};
this["Bizdayla"]["templates"]["App"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"loader"),depth0,{"name":"loader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header_home"),depth0,{"name":"header_home","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hero"),depth0,{"name":"hero","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"description"),depth0,{"name":"description","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"divider"),depth0,{"name":"divider","hash":{"hr_style":"hr_style"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"schedule"),depth0,{"name":"schedule","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"divider"),depth0,{"name":"divider","hash":{"hr_style":"hr_style"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sponsors_venue"),depth0,{"name":"sponsors_venue","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sponsors_venue_offers"),depth0,{"name":"sponsors_venue_offers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"divider"),depth0,{"name":"divider","hash":{"hr_style":"hr_style"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sponsors"),depth0,{"name":"sponsors","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"divider"),depth0,{"name":"divider","hash":{"hr_style":"hr_style"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"speakers"),depth0,{"name":"speakers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"footer"),depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"arrow_up"),depth0,{"name":"arrow_up","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + container.escapeExpression((lookupProperty(helpers,"scriptLoaderFromArray")||(depth0 && lookupProperty(depth0,"scriptLoaderFromArray"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"helper") : depth0)) != null ? lookupProperty(stack1,"scriptLoaderFromArray") : stack1)) != null ? lookupProperty(stack1,"arr") : stack1),{"name":"scriptLoaderFromArray","hash":{},"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":16,"column":58}}}));
},"usePartial":true,"useData":true});
Handlebars.registerPartial("code_of_conduct", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"has-divider bizday_code-of-conduct\">\r\n    <div class=\"divider flip-y\">\r\n        <img src=\"assets/img/dividers/divider-2.svg\" alt=\"\" data-inject-svg />\r\n    </div>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"page_title"),depth0,{"name":"page_title","hash":{"text":"Code of Conduct","class":"bizday_code-of-conduct_page_title"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div>\r\n        <h2>Summary</h2>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"summary") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":11,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div>\r\n        <h2>What Defines Harassment?</h2>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"harassmentDecription") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":17,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div>\r\n        <h2>If You Need Help</h2>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"locatingHelp") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":23,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div>\r\n        <h2>Feedback</h2>\r\n        <p>"
    + alias2(((helper = (helper = lookupProperty(helpers,"feedback") || (depth0 != null ? lookupProperty(depth0,"feedback") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"feedback","hash":{},"data":data,"loc":{"start":{"line":27,"column":11},"end":{"line":27,"column":23}}}) : helper)))
    + " <a href=\"mailto:"
    + alias2(alias3((depth0 != null ? lookupProperty(depth0,"email") : depth0), depth0))
    + "\">"
    + alias2(alias3((depth0 != null ? lookupProperty(depth0,"email") : depth0), depth0))
    + "</a>.</p>\r\n    </div>\r\n</section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <p>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"codeOfConduct") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":30,"column":9}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true}));
this["Bizdayla"]["templates"]["CodeOfConduct"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"loader"),depth0,{"name":"loader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header"),depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"code_of_conduct"),depth0,{"name":"code_of_conduct","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"footer_no_banner"),depth0,{"name":"footer_no_banner","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"arrow_up"),depth0,{"name":"arrow_up","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + container.escapeExpression((lookupProperty(helpers,"scriptLoaderFromArray")||(depth0 && lookupProperty(depth0,"scriptLoaderFromArray"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"helper") : depth0)) != null ? lookupProperty(stack1,"scriptLoaderFromArray") : stack1)) != null ? lookupProperty(stack1,"arr") : stack1),{"name":"scriptLoaderFromArray","hash":{},"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":6,"column":58}}}));
},"usePartial":true,"useData":true});
Handlebars.registerPartial("description", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"text-dark has-divider\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-between\">\r\n      <div class=\"col-md-8 mb-3 mb-md-0 mx-auto text-center\">\r\n        <h2 class=\"h1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":6,"column":23},"end":{"line":6,"column":33}}}) : helper)))
    + "</h2>\r\n        <h3 class=\"sub_header\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sub_header") || (depth0 != null ? lookupProperty(depth0,"sub_header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub_header","hash":{},"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":45}}}) : helper)))
    + "</h3>\r\n        <ul class=\"text-left\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"paragraphs") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":11,"column":17}}})) != null ? stack1 : "")
    + "        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"lead\"><strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":10,"column":37},"end":{"line":10,"column":46}}}) : helper)))
    + ":</strong> "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":57},"end":{"line":10,"column":65}}}) : helper)))
    + "</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":17,"column":9}}})) != null ? stack1 : "");
},"useData":true}));
this["Bizdayla"]["templates"]["NotFound"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"loader"),depth0,{"name":"loader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"not_found"),depth0,{"name":"not_found","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
Handlebars.registerPartial("divider", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<hr class="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"hr_style") || (depth0 != null ? lookupProperty(depth0,"hr_style") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"hr_style","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":22}}}) : helper)))
    + ">";
},"useData":true}));
this["Bizdayla"]["templates"]["Speaker"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"loader"),depth0,{"name":"loader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header"),depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"speaker"),depth0,{"name":"speaker","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"footer"),depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"arrow_up"),depth0,{"name":"arrow_up","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + container.escapeExpression((lookupProperty(helpers,"scriptLoaderFromArray")||(depth0 && lookupProperty(depth0,"scriptLoaderFromArray"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"helper") : depth0)) != null ? lookupProperty(stack1,"scriptLoaderFromArray") : stack1)) != null ? lookupProperty(stack1,"arr") : stack1),{"name":"scriptLoaderFromArray","hash":{},"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":6,"column":58}}}));
},"usePartial":true,"useData":true});
Handlebars.registerPartial("footer", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<footer class=\"pb-4 bg-primary-3 text-light\" id=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col\">\r\n        <div class=\"card card-body border-0 o-hidden mb-0 bg-primary text-light\">\r\n          <div class=\"position-relative d-flex flex-column flex-md-row justify-content-between align-items-center\">\r\n            <div class=\"h3 text-center mb-md-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tagline") || (depth0 != null ? lookupProperty(depth0,"tagline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagline","hash":{},"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":59}}}) : helper)))
    + "</div>\r\n            <a href=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"url_cta") : depths[1]), depth0))
    + "\" class=\"btn btn-lg btn-white\">"
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"ctaText") : depths[1]), depth0))
    + "</a>\r\n          </div>\r\n          <div class=\"decoration layer-0\">\r\n            <img class=\"bg-primary-2\" src=\"assets/img/decorations/deco-blob-1.svg\" alt=\"\" data-inject-svg />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-lg text-center\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"codeOfConduct") : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":23,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n    <div class=\"row mb-4\">\r\n      <div class=\"col-lg text-center\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"email") : depth0),{"name":"with","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center mb-2\">\r\n      <div class=\"col-auto\">\r\n        <ul class=\"nav\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://instagram.com/bizdayla\" class=\"nav-link\">\r\n              <img class=\"icon undefined\" src=\"assets/img/icons/social/instagram.svg\" alt=\"instagram social icon\" data-inject-svg />\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://twitter.com/bizdayla\" class=\"nav-link\">\r\n              <img class=\"icon undefined\" src=\"assets/img/icons/social/twitter.svg\" alt=\"twitter social icon\" data-inject-svg />\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://facebook.com/bizdayla\" class=\"nav-link\">\r\n              <img class=\"icon undefined\" src=\"assets/img/icons/social/facebook.svg\" alt=\"facebook social icon\" data-inject-svg />\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col col-md-auto text-center\">\r\n        <small class=\"text-muted\"><a href=\"/\">BizDay.LA</a> &copy;"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":57,"column":66},"end":{"line":57,"column":74}}}) : helper)))
    + "</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":20,"column":17},"end":{"line":20,"column":24}}}) : helper)))
    + "\">\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":19}}}) : helper)))
    + "\r\n        </a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\"mailto:"
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":31}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":29,"column":33},"end":{"line":29,"column":42}}}) : helper)))
    + "</a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footer") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":62,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));
Handlebars.registerPartial("footer_no_banner", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<footer class=\"pb-4 bg-primary-3 text-light\" id=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row mb-1\">\r\n      <div class=\"col-6 col-lg text-center\">\r\n        <h5>Contact</h5>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"mb-3 d-flex justify-content-center\">\r\n            <img class=\"icon\" src=\"assets/img/icons/theme/communication/mail.svg\" alt=\"\" data-inject-svg />\r\n            <div class=\"ml-3\">\r\n              <a href=\"mailto:"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":11,"column":30},"end":{"line":11,"column":39}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":11,"column":41},"end":{"line":11,"column":50}}}) : helper)))
    + "</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center mb-2\">\r\n      <div class=\"col-auto\">\r\n        <ul class=\"nav\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://instagram.com/bizdayla\" class=\"nav-link\">\r\n              <img class=\"icon undefined\" src=\"assets/img/icons/social/instagram.svg\" alt=\"instagram social icon\" data-inject-svg />\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://twitter.com/bizdayla\" class=\"nav-link\">\r\n              <img class=\"icon undefined\" src=\"assets/img/icons/social/twitter.svg\" alt=\"twitter social icon\" data-inject-svg />\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://facebook.com/bizdayla\" class=\"nav-link\">\r\n              <img class=\"icon undefined\" src=\"assets/img/icons/social/facebook.svg\" alt=\"facebook social icon\" data-inject-svg />\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col col-md-auto text-center\">\r\n        <small class=\"text-muted\"><a href=\"/\">BizDay.LA</a> &copy;"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":40,"column":66},"end":{"line":40,"column":74}}}) : helper)))
    + "</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footer") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":45,"column":9}}})) != null ? stack1 : "");
},"useData":true}));
Handlebars.registerPartial("header", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"navbar-container\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bizday_header_nav\" data-overlay data-sticky=\"top\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand fade-page\" href=\"index.html\">\r\n        <img class=\"bizday_header_logo--black\" src=\"assets/bizdayla/img/BizDay_Logo_Color_Black.svg\" alt=\"BizDay.LA Logo\"/>\r\n        <img class=\"bizday_header_logo--white\" src=\"assets/bizdayla/img/BizDay_Logo_Color_White.svg\" alt=\"BizDay.LA Logo\"/>\r\n      </a>\r\n      <div class=\"collapse navbar-collapse justify-content-end\">\r\n        <a href=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"url_cta") : depths[1]), depth0))
    + "\" class=\"btn btn-white ml-lg-3\">"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"ctaText") : depths[1]), depth0))
    + "</a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"header") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));
Handlebars.registerPartial("header_home", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"navbar-container\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bizday_header_nav\" data-overlay data-sticky=\"top\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand fade-page bizday_header_logo--transparent\" href=\"index.html\">\r\n        <img src=\"assets/bizdayla/img/BizDay_Logo_Color_White.svg\" alt=\"BizDay.LA logo\"/>\r\n      </a>\r\n      <div class=\"collapse navbar-collapse justify-content-end\">\r\n        <a href=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"url_cta") : depths[1]), depth0))
    + "\" class=\"btn btn-white ml-lg-3\">"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"ctaText") : depths[1]), depth0))
    + "</a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"header") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));
Handlebars.registerPartial("hero", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"bizday_hero bg-primary-2 text-light p-0 o-hidden\">\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":23}}}) : helper)))
    + "\" alt=\"\" class=\"bg-image blend-mode-multiply\">\r\n    <div class=\"container layer-2\">\r\n        <div class=\"row py-6 min-vh-80 align-items-center aos-init aos-animate\" data-aos=\"fade-up\">\r\n            <div class=\"col-lg-9 col-xl-8\">\r\n                <h5 class=\"bizday_hero_date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"eventDate") || (depth0 != null ? lookupProperty(depth0,"eventDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eventDate","hash":{},"data":data,"loc":{"start":{"line":7,"column":45},"end":{"line":7,"column":58}}}) : helper)))
    + "</h5>\r\n                <h1 class=\"display-1\">\r\n                    <img class=\"bizday_hero_logo\" src="
    + alias4(((helper = (helper = lookupProperty(helpers,"logoPath") || (depth0 != null ? lookupProperty(depth0,"logoPath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logoPath","hash":{},"data":data,"loc":{"start":{"line":9,"column":54},"end":{"line":9,"column":66}}}) : helper)))
    + " alt=\"BizDay.LA logo\" />\r\n                </h1>\r\n                <p class=\"lead mb-4\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":11,"column":37},"end":{"line":11,"column":49}}}) : helper)))
    + "</p>\r\n                <a href=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"url_cta") : depths[1]), depth0))
    + "\" class=\"btn btn-primary btn-lg bizday_btn-primary\">"
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"ctaText") : depths[1]), depth0))
    + "</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"decoration-wrapper\">\r\n        <div class=\"decoration middle-y left scale-4 aos-init aos-animate\" data-aos=\"fade-right\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"184\" height=\"81\" viewBox=\"0 0 184 81\" fill=\"none\"\r\n                class=\"injected-svg bg-primary-2 bizday_hero_svg_left\" data-src=\"assets/img/decorations/deco-lines-5.svg\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                <path\r\n                    d=\"M106.27 57.509C107.217 57.164 108.159 56.534 109.112 56.514C131.21 56.053 153.307 55.655 175.405 55.26C176.436 55.241 177.485 55.2749 178.501 55.4339C181.522 55.9059 183.179 57.506 183.296 59.944C183.441 62.993 181.905 65.768 179.353 66.506C177.207 67.125 174.972 67.5199 172.748 67.7829C165.721 68.6189 158.678 69.3429 151.643 70.1189C150.801 70.2129 149.967 70.369 148.973 70.519C148.42 71.853 148.049 73.185 147.356 74.32C146.35 75.97 145.002 76.9309 142.811 77.1789C129.262 78.7099 115.709 79.878 102.051 79.743C94.852 79.673 87.647 80.113 80.442 80.155C78.249 80.168 76.051 79.3679 73.854 79.3699C58.645 79.3799 43.624 77.3949 28.614 75.2739C21.452 74.2619 14.298 73.169 7.16705 71.962C2.85304 71.233 0.98504 69.2959 0.67704 65.7789C0.41504 62.8019 1.99504 60.763 4.96604 60.406C5.98404 60.283 7.03203 60.427 8.06803 60.463C15.099 60.706 22.132 60.9529 29.246 60.7839C26.967 60.4059 24.685 60.049 22.412 59.644C20.898 59.373 19.318 59.238 17.906 58.687C14.812 57.48 14.162 55.958 14.906 52.528C15.541 49.603 16.82 48.607 20.008 48.556C24.824 48.48 29.643 48.404 34.315 48.329C34.555 47.587 34.848 47.089 34.737 46.97C31.716 43.749 30.706 39.074 26.985 36.35C25.243 35.074 24.897 33.1589 25.481 31.2279C26.059 29.3219 27.395 27.9259 29.452 27.5409C31.118 27.2289 32.815 27.0829 34.556 26.8559C35.038 24.1809 33.949 22.627 31.806 21.777C24.55 18.896 23.81 16.9359 24.931 10.3129C23.88 9.36394 22.745 8.33794 21.464 7.17994C21.505 6.28094 21.585 5.25796 21.593 4.23396C21.611 2.26896 22.779 1.44394 24.54 1.34294C29.702 1.04794 34.888 0.391959 40.028 0.638959C51.753 1.20096 63.444 2.41096 75.167 2.99696C89.489 3.71296 103.829 4.05895 118.161 4.56395C126.96 4.87495 135.763 5.10595 144.556 5.55995C146.368 5.65295 148.41 6.18895 149.867 7.20695C152.109 8.77295 154.41 9.34295 157.053 9.66395C159.352 9.94295 161.547 11.075 164.133 11.946C163.488 15.223 162.938 18.025 162.309 21.234C163.909 21.448 165.395 21.697 166.891 21.829C167.918 21.92 168.969 21.7809 169.998 21.8649C173.602 22.1599 175.807 23.5679 176.049 25.6579C176.416 28.8279 174.061 31.74 170.502 32.515C165.959 33.504 165.959 33.504 164.998 38.858C166.56 38.929 168.082 38.9539 169.598 39.0759C172.922 39.3429 174.436 40.5219 174.766 43.0159C175.245 46.6299 173.711 49.55 170.557 50.302C167.039 51.142 163.461 51.9369 159.866 52.2179C143.854 53.4649 127.827 54.5169 111.807 55.6539C109.809 55.7969 107.543 55.223 106.27 57.523C104.791 55.748 103.09 56.222 101.452 56.902C103.002 57.101 104.635 57.305 106.27 57.509ZM152.543 38.5669C152.533 38.9539 152.522 39.3399 152.512 39.7269C154.104 39.6279 155.696 39.529 157.287 39.431C157.291 39.304 157.295 39.176 157.299 39.048C155.715 38.888 154.129 38.7279 152.543 38.5669ZM162.824 38.9179C162.697 38.8329 162.572 38.685 162.443 38.681C162.298 38.677 162.152 38.806 162.005 38.876C162.193 39.021 162.38 39.1649 162.567 39.3089C162.652 39.1789 162.738 39.0489 162.824 38.9179ZM113.043 20.75L112.957 20.466L112.6 20.627L113.043 20.75Z\"\r\n                    fill=\"black\"></path>\r\n            </svg>\r\n        </div>\r\n        <div class=\"decoration bottom right scale-2\" data-jarallax-element=\"20\"\r\n            style=\"z-index: 0; transform: translate3d(0px, -43.5346px, 0px);\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"164\" height=\"179\" viewBox=\"0 0 164 179\" fill=\"none\"\r\n                class=\"injected-svg bg-primary bizday_hero_svg_right\" data-src=\"assets/img/decorations/deco-blob-4.svg\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                <path\r\n                    d=\"M163.549 87.288C163.994 91.559 163.58 95.773 163.129 99.99C162.9 102.135 162.93 104.322 162.525 106.429C161.322 112.704 160 118.958 158.65 125.204C157.656 129.811 156.554 134.395 155.482 138.987C155.027 140.932 154.529 142.866 154.046 144.805C152.794 149.85 151.591 154.909 150.265 159.934C149.654 162.248 148.911 164.543 148.029 166.768C146.922 169.563 145.058 171.887 142.802 173.846C141.974 174.565 140.95 175.227 139.909 175.502C136.128 176.5 132.311 177.371 128.483 178.176C127.413 178.401 126.256 178.209 125.139 178.237C123.637 178.274 122.135 178.374 120.633 178.382C119.278 178.39 117.922 178.251 116.569 178.286C112.09 178.401 107.624 178.432 103.206 177.464C102.44 177.296 101.606 177.308 100.821 177.398C99.5319 177.544 98.3209 177.359 97.0439 177.138C94.9439 176.775 92.7689 176.878 90.6419 176.64C85.7179 176.085 80.7589 175.695 75.9019 174.773C70.1659 173.683 64.5059 172.019 59.5539 168.818C55.6089 166.269 52.5809 162.695 50.8099 158.279C48.8939 153.502 48.1109 148.41 47.2649 143.371C46.2489 137.309 45.4989 131.201 44.6909 125.105C44.1989 121.382 43.9939 117.615 43.3409 113.923C42.5479 109.443 41.5399 104.991 40.4019 100.585C39.4219 96.796 38.2689 93.038 36.9269 89.361C35.8079 86.292 34.3699 83.329 32.9579 80.375C30.8229 75.908 28.6569 71.455 26.3739 67.063C24.8639 64.157 23.1609 61.349 21.4809 58.536C19.1039 54.56 16.7059 50.598 14.2489 46.673C12.1749 43.358 9.93488 40.145 7.89488 36.809C5.84788 33.459 4.26588 29.865 3.06488 26.133C2.15888 23.32 1.29189 20.466 0.765885 17.566C-0.168115 12.406 0.775877 7.64902 4.91988 4.03802C7.21688 2.03802 10.0999 1.13203 13.0779 0.897028C16.5759 0.622028 20.0989 0.663015 23.6109 0.559015C24.7299 0.526015 25.8469 0.434018 26.9659 0.430018C31.1159 0.412018 35.2669 0.453031 39.4169 0.406031C41.6509 0.380031 43.8859 0.227015 46.1179 0.115015C51.0929 -0.133985 56.0129 0.390013 60.9189 1.11901C64.5519 1.65901 68.1889 2.16104 71.8149 2.73004C73.4689 2.98904 75.0979 3.41101 76.7529 3.67501C78.0909 3.88901 79.4459 4.07103 80.7959 4.10003C82.3099 4.13203 83.8169 3.86701 85.0519 5.16201C85.3269 5.45101 86.1029 5.38301 86.6179 5.29601C87.9579 5.07301 89.2759 4.72701 90.6099 4.46801C92.5509 4.09101 94.2509 4.55204 95.6589 5.99304C97.1099 7.47904 98.6079 8.92202 100.046 10.422C104.025 14.575 107.849 18.888 111.985 22.877C117.036 27.749 122.268 32.443 127.569 37.043C130.52 39.602 133.807 41.767 136.872 44.199C138.681 45.636 140.356 47.243 142.081 48.788C142.733 49.374 143.311 50.051 143.991 50.604C148.378 54.179 151.79 58.587 154.946 63.231C158.069 67.829 160.684 72.684 162.016 78.098C162.76 81.105 163.055 84.221 163.549 87.288ZM88.3849 25.021C89.2389 25.402 89.8909 25.693 90.5409 25.984C90.6819 25.863 90.8199 25.742 90.9589 25.621C90.7789 25.102 90.7499 24.392 90.3869 24.104C89.6969 23.557 89.1049 24.066 88.3849 25.021ZM124.295 81.648C124.119 81.871 123.893 82.035 123.883 82.212C123.875 82.339 124.254 82.623 124.289 82.598C124.504 82.443 124.672 82.22 124.855 82.019C124.684 81.907 124.514 81.793 124.295 81.648ZM70.0289 163.215C69.9469 163.336 69.8649 163.457 69.7829 163.578C70.1249 163.808 70.4669 164.039 70.8079 164.269C70.8899 164.148 70.9719 164.027 71.0539 163.906C70.7129 163.676 70.3709 163.445 70.0289 163.215ZM78.8279 54.925C78.7539 55.035 78.6189 55.15 78.6249 55.255C78.6329 55.375 78.7679 55.487 78.8479 55.603C78.9529 55.455 79.0569 55.306 79.1619 55.157C79.0509 55.08 78.9389 55.002 78.8279 54.925ZM116.932 164.01C116.821 163.922 116.709 163.832 116.596 163.744C116.522 163.904 116.446 164.066 116.369 164.226C116.502 164.273 116.648 164.372 116.764 164.345C116.842 164.328 116.879 164.129 116.932 164.01Z\"\r\n                    fill=\"black\"></path>\r\n            </svg>\r\n            <div id=\"jarallax-container-0\"\r\n                style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;\">\r\n                <div style=\"position: fixed;\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"decoration bottom right\" data-jarallax-element=\"-50\"\r\n            style=\"z-index: 0; transform: translate3d(0px, 91.6874px, 0px);\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"193\" height=\"262\" viewBox=\"0 0 193 262\" fill=\"none\"\r\n                class=\"injected-svg bg-white\" data-src=\"assets/img/decorations/deco-dots-1.svg\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                <path\r\n                    d=\"M12.5043 34.1189C11.9323 32.8069 12.5433 32.2089 13.4243 32.0389C14.7033 31.7929 16.0243 31.7339 17.3303 31.6679C21.3653 31.4609 25.4063 31.0839 29.4353 31.6949C30.4843 31.8549 31.5113 32.1789 32.5353 32.4779C34.1293 32.9449 34.8463 34.0519 34.7543 35.8669C34.2213 35.8669 33.6253 36.0149 33.1413 35.8439C30.4093 34.8789 27.6103 34.5259 24.7213 34.4979C20.6893 34.4569 16.6603 34.2559 12.5043 34.1189Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M37.8091 4.28699C39.3601 3.37899 40.1161 2.66001 40.9911 2.46701C45.8841 1.38101 50.8291 0.67999 55.8681 0.93399C56.7781 0.98099 57.4701 1.288 57.8881 2.147C58.3001 2.997 57.818 4.02601 56.943 3.99701C51.216 3.81101 45.5451 4.597 39.8491 4.948C39.4511 4.971 39.0351 4.69699 37.8091 4.28699Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M33.0607 21.543C30.9257 21.543 28.7907 21.561 26.6587 21.529C26.0787 21.521 25.4887 21.404 24.9247 21.256C24.3677 21.11 24.1707 20.096 24.6537 19.805C25.2477 19.444 25.8877 19.041 26.5517 18.932C30.5557 18.27 34.5907 17.916 38.6477 18.243C39.5717 18.317 40.5307 18.585 41.3547 18.997C41.7707 19.204 42.1207 19.925 42.1497 20.433C42.1867 21.101 41.5757 21.394 40.9157 21.396C38.2987 21.4 35.6797 21.396 33.0617 21.396C33.0607 21.445 33.0607 21.494 33.0607 21.543Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M113.391 190.953C113.391 191.92 113.391 192.715 113.391 193.435C113.008 193.597 112.787 193.785 112.594 193.759C108.352 193.224 104.106 192.695 99.9317 191.739C99.1507 191.559 98.3727 191.18 97.7107 190.725C97.2147 190.383 96.9917 189.678 97.4277 189.145C97.6857 188.827 98.2517 188.551 98.6467 188.592C99.9417 188.721 101.215 189.041 102.508 189.217C105.227 189.586 107.957 189.883 110.674 190.27C111.596 190.404 112.492 190.723 113.391 190.953Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M20.3047 166.006C20.3397 164.66 20.8087 163.992 21.5647 164.037C24.8697 164.24 28.2037 162.975 31.4907 164.273C32.0027 164.476 32.6407 164.337 33.2197 164.394C34.2667 164.496 35.3117 164.626 36.2277 164.732C36.9287 165.836 37.6337 166.681 36.8917 168.082C31.4407 167.4 25.9317 166.711 20.3047 166.006Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M9.80322 44.908C10.9752 44.617 11.7722 44.1931 12.5142 44.2731C16.6432 44.7161 20.7622 45.2731 24.8792 45.8201C25.3342 45.8811 25.8442 46.027 26.1912 46.306C26.7752 46.771 27.0272 47.441 26.7302 48.202C26.4762 48.847 25.9532 49.097 25.3122 48.975C20.6502 48.09 15.9882 47.2091 11.3392 46.2521C10.8792 46.1581 10.5232 45.559 9.80322 44.908Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M30.9082 261.238C28.1032 260.871 25.1372 260.486 22.1722 260.09C20.6352 259.885 19.0922 259.699 17.5702 259.406C17.1952 259.334 16.8922 258.879 16.5562 258.597C16.8492 258.261 17.0812 257.742 17.4472 257.622C18.3362 257.329 19.3042 256.997 20.2052 257.079C24.1392 257.436 28.0592 257.923 31.9802 258.397C32.4332 258.452 32.9602 258.618 33.2752 258.918C33.5782 259.207 33.8322 259.772 33.7652 260.156C33.7042 260.506 33.2342 260.924 32.8572 261.049C32.3072 261.232 31.6802 261.178 30.9082 261.238Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M96.5059 205.322C97.4199 203.849 98.3259 203.453 99.4959 203.752C102.957 204.637 106.449 205.262 110.043 205.209C110.598 205.201 111.238 205.424 111.688 205.75C111.997 205.975 112.209 206.588 112.149 206.98C112.094 207.345 111.659 207.886 111.327 207.937C110.044 208.136 108.716 208.369 107.44 208.23C104.042 207.861 100.682 207.212 97.4629 206C97.1449 205.881 96.8869 205.6 96.5059 205.322Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M145.586 86.619C141.428 86.431 137.268 86.267 133.113 86.039C132.287 85.994 131.467 85.736 130.66 85.523C129.777 85.289 129.293 84.679 129.463 84.043C129.656 83.322 130.227 83.232 130.867 83.287C131.582 83.348 132.299 83.412 133.013 83.432C134.562 83.473 136.109 83.498 137.658 83.506C139.558 83.516 141.465 83.412 143.359 83.526C145.215 83.639 145.854 84.635 145.586 86.619Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M118.27 119.072C117.411 119.205 116.84 119.351 116.266 119.369C112.217 119.498 108.186 119.24 104.215 118.463C102.858 118.199 101.574 117.494 100.309 116.881C100.073 116.766 100.094 116.125 99.9443 115.516C102.786 115.795 105.36 115.987 107.917 116.317C110.384 116.635 112.812 117.198 115.343 116.893C116.105 116.803 116.995 117.118 117.697 117.489C118.025 117.662 118.051 118.414 118.27 119.072Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M133.695 117.254C133.361 115.541 133.931 114.736 135.222 114.621C137.124 114.451 139.036 114.42 140.945 114.328C142.129 114.269 143.314 114.131 144.494 114.168C145.797 114.207 147.129 114.27 148.377 114.598C148.936 114.744 149.42 115.5 149.758 116.086C150.141 116.748 149.529 117.654 148.795 117.594C145.461 117.319 142.106 117.164 138.807 116.658C137.064 116.391 135.527 116.916 133.695 117.254Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M24.2108 239.361C23.9408 238.166 24.7698 237.683 25.5528 237.625C29.7008 237.316 33.8458 237.32 37.9258 238.313C38.1528 238.368 38.3828 238.456 38.5798 238.581C39.1208 238.921 39.5098 239.431 39.2258 240.046C39.0658 240.394 38.5599 240.804 38.2099 240.802C36.3169 240.798 34.4208 240.734 32.5358 240.579C30.0558 240.376 27.5808 240.087 25.1078 239.796C24.7868 239.758 24.4898 239.502 24.2108 239.361Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M4.02708 185.873C7.21508 186.008 9.68508 186.07 12.1481 186.24C12.9641 186.297 13.7731 186.594 14.5641 186.844C15.7651 187.225 16.1481 188.19 16.2031 189.34C16.2381 190.094 15.4671 190.764 14.7691 190.467C11.2031 188.951 7.34308 189.022 3.62408 188.342C3.05008 188.237 2.48309 188.047 1.94009 187.832C1.75609 187.76 1.51808 187.459 1.54508 187.305C1.59808 186.987 1.74809 186.512 1.97709 186.432C2.86509 186.117 3.79908 185.932 4.02708 185.873Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M94.7891 219.41C97.0781 218.035 99.082 217.969 101.291 218.488C103.371 218.978 105.561 218.974 107.684 219.312C109.526 219.605 109.686 219.929 109.776 222.283C106.445 222.646 97.9841 221.08 94.7891 219.41Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M105.479 258.533C100.325 259.467 95.2289 258.387 89.8149 259.236C90.1199 258.408 90.1699 257.793 90.5029 257.484C90.9989 257.023 91.683 256.517 92.308 256.488C96.226 256.302 100.148 256.211 104.07 256.185C104.539 256.183 105.127 256.691 105.439 257.121C105.65 257.414 105.479 257.986 105.479 258.533Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M13.4198 132.031C9.34175 131.353 5.46075 130.728 1.59175 130.043C1.19175 129.971 0.636743 129.602 0.550743 129.268C0.464743 128.938 0.786752 128.356 1.10376 128.106C1.55076 127.751 2.17775 127.358 2.69775 127.399C5.78975 127.635 8.87975 127.954 11.9558 128.346C12.4808 128.412 13.0438 128.883 13.4128 129.317C14.0818 130.105 14.2788 131.018 13.4198 132.031Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M95.9939 175.424C100.695 174.828 104.971 176.781 109.349 177.834C109.974 179.416 109.974 179.416 109.646 180.836C109.431 180.889 109.185 181.039 109.003 180.981C106.091 180.053 103.011 179.69 100.271 178.139C99.2999 177.59 97.9509 177.76 96.8119 177.455C95.8909 177.207 95.4449 176.555 95.9939 175.424Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M20.3222 105.275C21.5932 104.572 23.0722 104.556 24.4162 104.781C26.7542 105.17 29.0312 105.908 31.3462 106.453C32.4162 106.707 32.9032 107.519 33.2852 108.383C33.4472 108.75 33.4282 109.389 33.2032 109.684C32.9822 109.973 32.3612 110.163 31.9742 110.088C30.6912 109.842 29.4292 109.481 28.1712 109.121C26.1102 108.533 24.0542 107.928 22.0052 107.299C21.0722 107.012 20.1822 106.631 20.3222 105.275Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M51.6641 70.967C52.1721 69.502 53.4491 69.529 54.3961 69.371C57.1341 68.916 59.8691 69.402 62.5331 70.027C63.2031 70.185 63.775 71.05 64.244 71.699C64.662 72.275 64.0661 73.256 63.3141 73.226C61.5291 73.162 59.7321 73.0989 57.9661 72.8469C56.1981 72.5929 54.454 72.144 52.718 71.708C52.324 71.609 52.0021 71.215 51.6641 70.967Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M97.8091 157.562C99.1841 157.681 100.579 157.707 101.938 157.937C104.622 158.394 107.29 158.951 109.958 159.494C110.409 159.586 110.929 159.715 111.241 160.01C111.54 160.291 111.8 160.85 111.731 161.223C111.663 161.592 111.211 161.957 110.842 162.186C110.565 162.356 110.147 162.37 109.801 162.346C105.877 162.073 102.031 161.438 98.4511 159.696C97.6371 159.299 97.6501 159.27 97.8091 157.562Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M4.69493 201.521C6.87693 202.087 9.77492 202.796 12.6459 203.603C13.9449 203.968 15.0479 204.74 15.5989 206.027C15.7449 206.369 15.5739 206.947 15.3589 207.302C15.2339 207.511 14.6789 207.654 14.4139 207.558C10.7189 206.232 7.03892 204.863 3.35892 203.49C3.14592 203.412 2.91593 203.25 2.79793 203.062C2.62793 202.791 2.40292 202.41 2.47992 202.164C2.56392 201.898 2.94293 201.684 3.23993 201.539C3.43393 201.447 3.70693 201.521 4.69493 201.521Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M41.4259 130.395C42.6169 130.395 43.8109 130.362 44.9999 130.405C46.0139 130.44 46.8649 130.882 47.3649 131.782C47.5759 132.165 47.7219 132.684 47.6559 133.102C47.5349 133.832 46.8549 133.93 46.2559 133.883C43.8829 133.695 41.5159 133.461 39.1449 133.254C37.8399 133.139 36.5239 133.096 35.2329 132.897C34.8889 132.844 34.5099 132.379 34.3579 132.016C34.2819 131.836 34.6259 131.278 34.8809 131.194C36.6559 130.608 38.3629 129.604 40.3629 130.132C40.7049 130.222 41.0719 130.22 41.4269 130.261C41.4279 130.305 41.4259 130.35 41.4259 130.395Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M56.6558 253.836C56.8978 251.44 57.8118 250.256 59.3448 249.77C62.7858 248.676 66.3508 248.536 69.9308 248.846C70.3668 248.883 70.8718 249.131 71.1748 249.446C71.4658 249.751 71.7258 250.301 71.6538 250.678C71.5878 251.032 71.1168 251.424 70.7358 251.571C70.3198 251.731 69.8018 251.635 69.3298 251.637C67.5488 251.645 65.7658 251.631 63.9818 251.657C61.5798 251.691 59.2678 252.119 56.6558 253.836Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M60.691 239.217C60.644 238.789 60.515 238.483 60.613 238.369C62.203 236.508 64.095 235.098 66.609 234.853C68.498 234.669 70.4 234.619 72.298 234.564C72.759 234.55 73.234 234.728 73.687 234.871C74.685 235.187 75.21 235.857 75.119 236.641C75.035 237.381 74.336 237.76 73.178 237.579C69.313 236.972 65.602 237.518 61.99 238.96C61.594 239.117 61.137 239.131 60.691 239.217Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M118.623 21.479C119.576 21.405 120.535 21.377 121.48 21.245C122.601 21.087 123.281 21.737 123.918 22.464C124.529 23.163 124.137 24.212 123.18 24.349C120.815 24.683 118.45 25.042 116.043 24.73C114.512 24.531 112.963 24.474 111.439 24.232C111.068 24.173 110.564 23.673 110.505 23.314C110.452 23.002 110.886 22.351 111.204 22.277C112.821 21.898 114.464 21.611 116.11 21.386C116.932 21.273 117.782 21.366 118.62 21.366C118.621 21.402 118.623 21.441 118.623 21.479Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M147.104 103C144.204 102.354 141.684 101.707 139.131 101.246C136.705 100.808 134.244 100.568 131.854 100.248C131.483 99.2499 131.961 98.654 132.7 98.531C133.862 98.338 135.085 98.226 136.247 98.371C139.196 98.736 142.142 99.1799 145.056 99.7579C146.695 100.084 146.795 100.414 147.104 103Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M110.34 128.545C111.024 129.723 111.031 130.203 110.379 130.578C108.682 131.555 106.764 131.746 104.893 132.004C103.493 132.197 102.043 132.158 100.627 132.057C99.9589 132.01 99.2459 131.676 98.6929 131.278C98.4059 131.071 98.3119 130.436 98.3389 130.008C98.3569 129.752 98.7449 129.36 99.0209 129.307C100.298 129.065 101.589 128.828 102.886 128.76C105.367 128.627 107.855 128.609 110.34 128.545Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M32.8589 194.584C34.4309 193.139 35.7129 192.869 37.0189 192.922C40.0969 193.045 43.1749 193.221 46.2419 193.506C46.8419 193.563 47.4959 194.111 47.9299 194.606C48.3769 195.116 48.8049 195.911 48.1589 196.508C47.7999 196.84 47.0709 196.985 46.5609 196.901C44.9259 196.631 43.2909 196.301 41.7059 195.833C39.5149 195.183 37.3019 194.895 35.0259 194.944C34.4919 194.953 33.9529 194.773 32.8589 194.584Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M77.8257 187.73C76.8787 187.591 75.5857 187.447 74.3097 187.209C72.4527 186.865 70.6067 186.455 68.7567 186.068C68.6437 186.045 68.5397 185.976 68.4287 185.943C67.7487 185.74 67.2467 185.101 67.5307 184.689C67.7747 184.335 68.2127 183.878 68.5637 183.877C69.8567 183.873 71.1987 183.859 72.4347 184.18C74.7647 184.778 77.1007 184.875 79.4717 184.799C79.9387 184.783 80.4327 184.783 80.8697 184.92C81.4827 185.111 81.8837 185.623 81.7387 186.27C81.6487 186.674 81.3207 187.249 80.9927 187.332C80.0897 187.568 79.1267 187.586 77.8257 187.73Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M126.467 67.6349C122.076 67.3399 117.873 66.8519 113.526 65.2089C113.965 64.6189 114.202 64.0039 114.467 63.9899C117.91 63.8199 121.358 63.5879 124.795 64.1229C126.024 64.3139 126.699 65.0779 126.863 66.2419C126.92 66.6459 126.631 67.0979 126.467 67.6349Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M126.869 174.398C127.851 173.154 129.346 173.238 130.521 173.281C133.226 173.379 135.923 173.842 138.607 174.261C139.744 174.439 139.898 174.896 139.849 176.724C137.537 177.603 135.169 176.976 132.865 176.708C131.01 176.491 129.207 175.794 127.402 175.239C127.156 175.166 127.037 174.68 126.869 174.398Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M32.857 224.74C29.494 225.193 26.304 225.041 23.128 224.41C22.198 224.226 21.288 223.939 20.36 223.742C19.708 223.605 19.149 223.289 19.288 222.605C19.358 222.259 19.915 221.921 20.323 221.759C20.749 221.591 21.264 221.571 21.733 221.605C24.946 221.835 28.157 222.084 31.364 222.359C32.473 222.453 33.086 223.025 32.857 224.74Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M151.867 35.76C149.629 36.049 147.314 36.385 144.992 36.635C143.115 36.838 141.228 36.965 139.342 37.063C139.061 37.077 138.557 36.79 138.512 36.569C138.43 36.167 138.465 35.559 138.717 35.307C139.108 34.92 139.697 34.643 140.248 34.528C142.682 34.024 145.117 33.485 147.58 33.188C148.703 33.051 149.928 33.317 151.039 33.635C151.904 33.881 152.332 34.637 151.867 35.76Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M48.7769 59.684C47.6809 60.002 47.0289 60.381 46.3999 60.344C43.0739 60.145 39.7499 59.864 36.4289 59.561C35.5849 59.483 35.0659 58.786 35.1869 58.118C35.3369 57.278 35.9579 56.905 36.6969 56.856C37.8769 56.776 39.0879 56.676 40.2439 56.856C42.4649 57.202 44.6679 57.68 46.8459 58.233C47.4259 58.379 47.8889 58.994 48.7769 59.684Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M159.936 60.176C159.366 61.694 157.977 62.285 156.602 62.455C152.977 62.9 149.325 63.148 145.678 63.404C144.522 63.486 143.41 63.144 141.768 62.347C142.805 62.091 143.2 61.915 143.598 61.908C148.496 61.806 153.244 60.869 157.901 59.396C158.77 59.123 159.541 59.061 159.936 60.176Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M165.689 89.529C164.679 90.013 163.492 89.945 162.326 89.929C160.299 89.9 158.269 89.884 156.25 89.747C155.447 89.694 154.645 89.39 153.891 89.081C153.641 88.979 153.393 88.493 153.416 88.206C153.437 87.946 153.811 87.526 154.062 87.501C157.019 87.204 159.978 86.903 162.945 86.761C163.707 86.724 164.554 87.132 165.25 87.531C165.91 87.91 166.148 88.617 165.689 89.529Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M33.0332 216.92C34.4842 215.449 35.9041 215.693 37.1331 215.672C40.4441 215.615 43.7561 215.776 47.0671 215.885C47.5181 215.901 48.0551 216.012 48.3871 216.283C48.7071 216.545 49.0002 217.09 48.9612 217.474C48.9262 217.82 48.4362 218.376 48.1212 218.394C46.4672 218.482 44.7971 218.531 43.1481 218.4C40.3121 218.171 37.4862 217.812 34.6602 217.476C34.2382 217.426 33.8382 217.201 33.0332 216.92Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M62.6932 167.449C61.5782 169.181 59.6951 169.82 57.8861 170.084C54.5171 170.574 51.0792 170.836 47.8652 169.504C47.6832 168.471 48.2712 168.283 48.8632 168.254C50.1642 168.186 51.4782 168.287 52.7732 168.168C55.3692 167.926 57.9862 167.732 60.3782 166.51C61.4102 165.982 62.1762 166.266 62.6932 167.449Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M60.4179 46.572C56.7749 46.252 53.3559 45.976 49.9409 45.633C49.0109 45.539 47.9959 45.397 47.7319 43.99C48.1679 43.742 48.6439 43.242 49.1379 43.222C51.9879 43.113 54.8409 43.083 57.6929 43.097C58.9449 43.103 60.0969 43.515 60.5329 44.835C60.6879 45.309 60.4749 45.9 60.4179 46.572Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M110.531 9.23401C112.201 9.37901 113.527 9.40399 114.814 9.63599C115.73 9.79999 116.668 10.13 117.459 10.613C117.861 10.857 118.168 11.603 118.15 12.109C118.129 12.742 117.498 13.058 116.843 13.078C116.366 13.092 115.876 13.121 115.413 13.031C112.606 12.486 109.8 11.939 107.011 11.31C106.657 11.232 106.21 10.705 106.156 10.333C106.041 9.56901 106.767 9.403 107.33 9.263C107.783 9.152 108.273 9.154 108.748 9.159C109.463 9.166 110.178 9.21701 110.531 9.23401Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M78.6407 146.537C74.2737 146.828 69.9217 146.939 65.6677 145.543C65.2067 145.391 64.6797 145.143 64.8747 144.615C64.9997 144.279 65.5287 143.927 65.9097 143.885C66.8477 143.78 67.8138 143.756 68.7518 143.867C71.4688 144.185 74.1658 144.517 76.9198 144.185C78.3748 144.01 78.7247 144.582 78.6407 146.537Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M133.164 127.447C133.262 126.758 133.174 126.187 133.406 125.984C133.82 125.625 134.422 125.306 134.957 125.287C137.209 125.203 139.465 125.195 141.717 125.244C142.889 125.267 144.067 125.41 145.225 125.603C145.782 125.697 146.389 125.931 146.799 126.296C147.084 126.55 147.186 127.144 147.154 127.569C147.136 127.811 146.715 128.147 146.424 128.215C145.856 128.352 145.244 128.408 144.664 128.356C143.244 128.227 141.793 128.165 140.426 127.807C138.117 127.203 135.822 126.82 133.164 127.447Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M68.9321 122.133C69.1781 120.733 70.2151 120.518 71.1211 120.428C73.2521 120.215 75.4001 120.151 77.5431 120.069C78.7011 120.026 79.6171 120.538 80.2601 121.507C80.7231 122.204 80.2581 123.382 79.4461 123.495C78.8621 123.577 78.2601 123.577 77.6671 123.556C74.6891 123.449 71.8111 122.791 68.9321 122.133Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M101.545 76.5291C104.262 76.6481 106.977 76.7501 109.691 76.9001C110.279 76.9331 110.921 77.0271 111.423 77.3021C111.884 77.5541 112.441 78.0541 112.507 78.5091C112.612 79.2611 111.882 79.3941 111.267 79.3661C108.068 79.2291 104.888 78.8251 101.675 78.8581C100.64 78.8701 99.5871 78.4581 98.5701 78.1451C98.3281 78.0691 98.0411 77.6061 98.0621 77.3461C98.0831 77.0881 98.4551 76.6721 98.6991 76.6511C99.6401 76.5711 100.594 76.6201 101.543 76.6201C101.543 76.5901 101.545 76.5611 101.545 76.5291Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M29.332 152.154C29.615 151.461 29.686 150.672 30.051 150.494C33.112 149.006 36.19 149.226 39.215 150.674C39.414 150.77 39.613 150.967 39.707 151.166C39.852 151.477 40.076 151.92 39.959 152.141C39.768 152.5 39.33 152.963 38.99 152.971C36.982 153.008 34.969 152.998 32.969 152.86C31.822 152.779 30.693 152.428 29.332 152.154Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M121.75 2.96102C122.938 2.26802 123.516 1.63703 124.07 1.65603C126.787 1.74603 129.476 1.51103 132.174 1.29903C132.631 1.26403 133.168 1.29103 133.545 1.50603C133.9 1.70703 134.268 2.17403 134.311 2.56103C134.354 2.93003 134.088 3.48103 133.78 3.71303C133.323 4.05303 132.708 4.36701 132.161 4.36501C129.561 4.35501 126.96 4.28703 124.366 4.11703C123.723 4.07603 123.109 3.58202 121.75 2.96102Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M13.0659 120.301C14.2769 120.225 14.9569 120.071 15.6009 120.162C18.2889 120.547 20.9659 120.994 23.6439 121.447C24.0989 121.523 24.6209 121.633 24.9509 121.916C25.2619 122.182 25.5449 122.721 25.4959 123.096C25.4469 123.467 24.9779 123.789 24.6739 124.114C24.6059 124.186 24.4489 124.214 24.3379 124.206C20.5589 123.947 16.6129 123.982 13.0659 120.301Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M83.334 60.2251C84.869 58.8771 85.996 58.5261 87.215 58.6121C90.063 58.8111 92.906 59.0811 95.752 59.3071C96.502 59.3681 97.184 59.5711 97.555 60.2601C97.705 60.5391 97.76 60.9811 97.645 61.2601C97.538 61.5221 97.137 61.8481 96.885 61.8321C95.231 61.7301 93.578 61.5781 91.934 61.3751C89.258 61.0451 86.59 60.6621 83.334 60.2251Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M103.873 151.232C101.978 151.084 100.781 151.043 99.598 150.88C98.901 150.782 98.2001 150.566 97.5531 150.282C95.9511 149.579 95.225 148.684 95.707 148.1C96.525 147.112 97.459 147.848 98.326 148.036C99.754 148.345 101.14 148.282 102.588 148.081C103.731 147.921 104.961 148.093 106.1 148.354C106.479 148.44 106.829 149.223 106.95 149.745C107.1 150.39 106.669 150.86 106.016 151.036C105.672 151.128 105.315 151.204 104.961 151.224C104.365 151.254 103.768 151.232 103.873 151.232Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M128.447 202.484C129.037 201.98 129.424 201.363 129.873 201.312C132.943 200.966 136.025 200.695 139.109 200.525C139.529 200.502 140.121 201.084 140.392 201.531C140.726 202.08 140.511 202.875 139.902 203.015C138.644 203.308 137.318 203.548 136.043 203.468C133.6 203.316 131.055 203.768 128.447 202.484Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M96.6577 33.248C97.2787 33.299 97.8847 33.2891 98.4607 33.4081C99.7557 33.6741 101.004 33.6831 102.34 33.5041C103.445 33.3561 104.678 33.7661 105.772 34.1581C106.139 34.2911 106.403 35.1291 106.418 35.6521C106.426 35.9411 105.783 36.5411 105.5 36.5041C102.215 36.0631 98.8357 36.442 95.6227 35.399C95.3997 35.327 95.1267 35.2541 94.9937 35.0881C94.7887 34.8321 94.5247 34.465 94.5777 34.205C94.6387 33.912 94.9797 33.5721 95.2767 33.4571C95.7067 33.2911 96.2087 33.309 96.6577 33.248Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M57.0313 21.033C59.9413 21.133 62.0603 22.869 64.4843 23.746C65.5763 24.141 66.5662 24.881 67.5072 25.59C67.7672 25.787 67.8002 26.457 67.7182 26.865C67.6732 27.092 67.1712 27.386 66.8862 27.377C66.1832 27.352 65.4113 27.32 64.7983 27.022C62.4483 25.876 60.1262 24.661 57.8412 23.385C57.1272 22.986 56.5183 22.34 57.0313 21.033Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M179.396 92.0231C180.71 91.1991 181.943 91.5681 183.103 91.4121C184.628 91.2071 186.191 91.1371 187.669 90.7521C189.155 90.3651 190.48 90.9281 191.868 91.0941C192.098 91.1211 192.464 91.6491 192.427 91.8951C192.37 92.2781 192.101 92.7391 191.779 92.9481C191.406 93.1881 190.879 93.2801 190.416 93.2861C187.436 93.3251 184.453 93.3331 181.473 93.3331C180.629 93.3301 179.834 93.1781 179.396 92.0231Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M94.2441 238.471C94.8691 237.266 95.6831 236.645 96.5391 236.559C99.8591 236.223 103.201 236.098 106.371 237.455C107.291 237.85 107.98 238.488 107.652 239.881C105.494 239.508 103.324 239.117 101.15 238.76C98.9801 238.404 96.7481 238.848 94.2441 238.471Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M131.484 158.6C131.211 157.582 131.502 157.002 132.355 156.854C132.933 156.754 133.543 156.764 134.13 156.819C136.958 157.079 139.782 157.366 142.607 157.657C142.834 157.68 143.146 157.731 143.252 157.886C143.506 158.253 143.846 158.71 143.799 159.089C143.758 159.427 143.225 159.993 142.947 159.972C140 159.743 137.058 159.439 134.121 159.109C133.207 159.006 132.309 158.764 131.484 158.6Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M123.271 258.295C123.126 256.994 123.914 256.602 124.632 256.256C125.036 256.061 125.562 256.088 126.034 256.068C128.884 255.947 131.733 255.834 134.583 255.738C135.05 255.722 135.612 255.672 135.97 255.894C136.413 256.169 136.868 256.669 136.995 257.156C137.165 257.808 136.647 258.22 135.993 258.355C135.763 258.404 135.524 258.449 135.288 258.445C131.275 258.4 127.262 258.346 123.271 258.295Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M68.301 101.959C67.916 101.096 68.246 100.441 69.016 100.258C70.495 99.906 71.946 99.408 73.541 99.6C75.055 99.78 76.602 99.674 78.131 99.735C78.588 99.753 79.092 99.811 79.483 100.022C80.014 100.309 80.44 100.846 80.178 101.477C80.024 101.846 79.557 102.321 79.211 102.336C77.207 102.428 75.193 102.457 73.19 102.387C71.551 102.33 69.918 102.107 68.301 101.959Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M127.131 219C127.397 218.471 127.488 217.918 127.787 217.76C129.168 217.033 130.658 216.637 132.225 217.014C133.491 217.319 134.75 217.678 135.973 218.121C136.498 218.31 137.051 218.689 137.36 219.139C137.659 219.575 137.856 220.26 137.739 220.75C137.577 221.438 136.809 221.4 136.243 221.299C135.671 221.195 135.138 220.901 134.579 220.719C132.661 220.102 130.765 219.405 128.704 219.399C128.264 219.396 127.826 219.184 127.131 219Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M75.7441 24.383C76.2051 23.406 76.2871 22.807 76.5901 22.658C79.3171 21.322 82.2051 20.685 85.2381 21.088C85.6931 21.149 86.2111 21.729 86.4431 22.197C86.7301 22.769 86.0891 23.541 85.2951 23.676C83.7661 23.938 82.2341 24.233 80.6911 24.358C79.2731 24.473 77.8401 24.383 75.7441 24.383Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M175.686 140.355C174.305 141.46 172.887 141.496 171.471 141.306C169.498 141.044 167.532 140.71 165.584 140.304C165.273 140.24 164.813 139.581 164.883 139.318C164.975 138.968 165.498 138.705 165.877 138.472C166.059 138.363 166.365 138.333 166.565 138.404C167.85 138.855 169.163 138.283 170.383 138.465C171.58 138.643 172.651 138.606 173.826 138.434C174.869 138.281 175.51 139.078 175.686 140.355Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M157.014 54.381C154.787 54.221 152.559 54.082 150.338 53.871C150.102 53.85 149.756 53.42 149.734 53.156C149.711 52.886 149.961 52.42 150.201 52.332C152.902 51.328 155.689 51 158.5 51.721C159.098 51.873 159.607 52.532 160.055 53.045C160.414 53.457 159.994 54.424 159.481 54.451C158.661 54.496 157.836 54.463 157.012 54.463C157.012 54.436 157.014 54.408 157.014 54.381Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M136.078 17.74C137.154 16.974 138.474 16.644 139.889 16.416C141.264 16.195 142.705 16.344 144.01 15.586C144.684 15.193 145.383 15.606 145.893 16.18C146.639 17.024 146.37 18.2 145.327 18.412C143.821 18.721 142.304 19.012 140.776 19.17C139.495 19.303 138.19 19.311 136.905 19.219C136.293 19.176 135.895 18.654 136.078 17.74Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M110.469 100.918C110.985 102.205 110.948 102.83 110.235 103.064C106.807 104.193 103.358 104.839 99.9483 103.007C99.6983 102.872 99.3843 102.347 99.4623 102.21C99.6693 101.853 100.066 101.599 100.405 101.329C100.481 101.268 100.639 101.272 100.749 101.298C104.029 102.082 107.281 101.738 110.469 100.918Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M144.092 146.182C142.221 145.618 140.647 145.108 139.053 144.67C137.225 144.17 135.385 143.594 133.639 144.621C132.551 143.75 132.951 143.025 133.67 142.482C134.117 142.146 134.764 141.884 135.311 141.904C137.332 141.968 139.358 142.107 141.368 142.334C142.618 142.475 143.559 143.305 144.214 144.313C144.439 144.664 144.164 145.344 144.092 146.182Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M126.902 245.607C127.283 245.162 127.5 244.662 127.843 244.548C130.804 243.579 133.888 243.396 136.972 243.271C137.288 243.259 137.63 243.49 137.933 243.66C138.542 244 138.537 245.142 137.921 245.465C137.616 245.625 137.275 245.801 136.944 245.815C133.981 245.934 131.014 246.032 128.049 246.094C127.754 246.102 127.453 245.85 126.902 245.607Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M129.209 190.822C132.238 190.377 134.766 189.855 137.316 189.681C139.14 189.556 139.378 190.042 139.519 192.55C136.376 192.925 133.257 192.79 130.16 192.116C129.926 192.064 129.777 191.617 129.209 190.822Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M72.502 76.393C72.865 75.778 72.9959 75.239 73.3109 75.094C73.9359 74.803 74.6629 74.584 75.3439 74.592C77.1349 74.61 78.936 74.688 80.713 74.901C81.498 74.997 82.2929 75.389 82.9729 75.821C83.2559 76.003 83.44 76.708 83.321 77.053C83.198 77.405 82.6689 77.647 82.2739 77.86C82.0879 77.962 81.8009 77.922 81.5689 77.885C78.6539 77.412 75.742 76.928 72.502 76.393Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M46.277 149.529C47.103 149.482 47.9531 149.537 48.7521 149.365C50.1351 149.064 51.008 149.816 51.826 150.685C52.025 150.896 52.109 151.378 52.014 151.656C51.918 151.935 51.557 152.156 51.266 152.326C51.077 152.435 50.809 152.424 50.573 152.433C47.831 152.554 45.223 151.703 42.561 151.255C42.264 151.206 41.85 150.56 41.881 150.226C41.912 149.894 42.414 149.374 42.748 149.343C43.914 149.234 45.098 149.302 46.275 149.302C46.275 149.377 46.277 149.453 46.277 149.529Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M75.1603 164.926C76.4593 164.926 77.7623 164.869 79.0563 164.942C80.3373 165.012 80.8413 165.948 81.1033 167.061C81.2423 167.655 80.7223 168.387 80.1773 168.28C77.5113 167.751 74.8473 167.212 72.2023 166.589C71.9193 166.521 71.6733 165.888 71.6123 165.485C71.5873 165.307 72.0512 164.885 72.3172 164.864C73.2582 164.786 74.2123 164.835 75.1593 164.835C75.1603 164.863 75.1603 164.895 75.1603 164.926Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M87.5449 6.66199C86.7379 6.59799 86.0219 6.57801 85.3159 6.47601C84.4959 6.35701 83.7649 5.57601 84.0599 5.07001C84.3199 4.62101 84.8759 4.11899 85.3509 4.06399C86.8819 3.88599 88.4369 3.94499 89.9759 3.82999C90.9209 3.75999 91.8509 3.46501 92.7959 3.42001C93.1789 3.40201 93.7489 3.68201 93.9369 4.00201C94.2889 4.60401 93.9329 5.23401 93.3569 5.47101C92.3749 5.87101 91.3409 6.17801 90.3019 6.38901C89.3729 6.57601 88.4079 6.58199 87.5449 6.66199Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M26.877 87.592C27.299 86.293 28.065 86.039 28.895 85.86C31.194 85.362 33.331 86.178 35.5 86.69C35.795 86.76 36.096 87.098 36.248 87.391C36.394 87.67 36.4629 88.088 36.3589 88.371C36.2569 88.646 35.877 89.037 35.654 89.016C32.746 88.742 29.766 88.857 26.877 87.592Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M120.842 48.486C121.809 48.111 122.42 47.623 122.867 47.742C124.863 48.283 126.894 47.834 128.879 48.129C129.408 48.209 130.027 48.525 130.348 48.934C130.666 49.344 130.905 50.11 130.729 50.53C130.565 50.917 129.811 51.245 129.305 51.264C127.012 51.354 123.34 50.164 120.842 48.486Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M44.715 83.504C46.569 83.697 48.227 83.779 49.844 84.086C50.448 84.199 51.051 84.752 51.463 85.26C51.682 85.53 51.598 86.172 51.445 86.565C51.357 86.786 50.83 86.989 50.535 86.95C48.086 86.622 45.64 86.264 43.209 85.827C42.9 85.77 42.475 85.186 42.482 84.856C42.492 84.483 42.851 83.956 43.199 83.79C43.707 83.547 44.34 83.564 44.715 83.504Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M55.5897 116.66C53.3967 116.053 51.4628 115.541 49.5488 114.969C49.1128 114.838 48.6798 114.555 48.3578 114.231C48.1568 114.028 48.0457 113.583 48.1197 113.307C48.1977 113.018 48.5108 112.643 48.7818 112.58C50.8228 112.109 52.7757 112.711 54.7057 113.244C55.6427 113.504 55.9177 114.604 55.5897 116.66Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M83.0287 47.4859C83.0467 47.1309 82.9668 46.8219 83.0838 46.6949C85.1558 44.4549 87.9767 44.5519 90.6797 44.3729C90.9977 44.3519 91.5648 44.8909 91.6348 45.2459C91.6988 45.5759 91.3237 46.2729 91.0237 46.3499C88.4097 47.0229 85.7947 47.8069 83.0287 47.4859Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M56.3609 203.174C56.5429 203.033 56.736 202.762 56.894 202.779C59.23 203.05 61.5699 203.308 63.8859 203.701C64.3899 203.785 64.909 204.31 65.226 204.767C65.425 205.054 65.263 205.593 65.263 206.29C62.474 205.733 59.9449 205.274 57.4389 204.702C56.7709 204.551 56.1149 204.105 56.3609 203.174Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M163.09 115.295C163.227 114.869 163.236 114.533 163.373 114.469C163.785 114.278 164.238 114.151 164.687 114.073C166.531 113.753 168.373 113.399 170.228 113.194C170.734 113.137 171.431 113.415 171.785 113.786C172.129 114.147 172.299 114.839 172.246 115.354C172.219 115.625 171.553 116.032 171.17 116.036C168.824 116.061 166.477 116.016 164.133 115.917C163.762 115.9 163.406 115.492 163.09 115.295Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M119.494 138.58C118.189 138.58 116.885 138.617 115.586 138.545C115.359 138.531 115.012 138.068 114.986 137.789C114.959 137.506 115.236 136.945 115.42 136.928C117.781 136.699 120.149 136.49 122.518 136.438C122.868 136.43 123.334 137.213 123.565 137.713C123.807 138.233 123.241 139.029 122.704 139.008C121.634 138.963 120.565 138.85 119.495 138.764C119.494 138.701 119.494 138.641 119.494 138.58Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M56.188 218.084C56.993 217.82 57.743 217.354 58.481 217.373C60.606 217.434 62.727 217.672 64.846 217.887C65.168 217.92 65.612 218.127 65.742 218.383C65.931 218.76 65.996 219.278 65.906 219.69C65.853 219.936 65.338 220.317 65.138 220.26C62.31 219.457 59.288 219.655 56.519 218.586C56.43 218.551 56.387 218.395 56.188 218.084Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M179.783 77.059C178.168 76.752 176.193 76.401 174.234 75.971C174.004 75.92 173.718 75.426 173.73 75.151C173.742 74.87 174.052 74.407 174.296 74.36C176.62 73.924 178.974 73.35 181.095 75.049C181.599 75.451 182.031 75.914 181.657 76.514C181.464 76.828 180.903 76.924 180.499 77.098C180.402 77.139 180.266 77.09 179.783 77.059Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M85.7707 208.861C83.2547 208.664 81.0347 208.531 78.8297 208.283C78.3337 208.228 77.8827 207.769 77.4097 207.494C77.6267 207.115 77.7127 206.767 77.8567 206.742C80.2767 206.304 82.7107 206.025 85.1577 206.537C85.3627 206.58 85.5617 206.785 85.7007 206.963C85.8377 207.141 85.9627 207.377 85.9687 207.592C85.9747 207.918 85.8747 208.246 85.7707 208.861Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M168.498 106.27C168.857 105.936 169.002 105.688 169.189 105.647C170.98 105.266 172.72 105.727 174.455 106.079C174.695 106.128 174.976 106.618 174.996 106.921C175.016 107.202 174.732 107.737 174.541 107.757C173.488 107.866 172.418 107.933 171.365 107.855C170.299 107.775 169.295 107.416 168.498 106.27Z\"\r\n                    fill=\"black\"></path>\r\n                <path\r\n                    d=\"M154.52 130.07C155.01 129.617 155.329 129.088 155.596 129.113C156.969 129.238 158.338 129.47 159.688 129.759C159.92 129.808 160.268 130.388 160.194 130.577C160.048 130.948 159.678 131.434 159.337 131.489C157.637 131.768 156.18 131.111 154.52 130.07Z\"\r\n                    fill=\"black\"></path>\r\n            </svg>\r\n            <div id=\"jarallax-container-1\"\r\n                style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;\">\r\n                <div style=\"position: fixed;\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"divider flip-x\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\"\r\n            height=\"96px\" viewBox=\"0 0 100 100\" version=\"1.1\" preserveAspectRatio=\"none\"\r\n            class=\"injected-svg bg-primary-3\" data-src=\"assets/img/dividers/divider-3.svg\">\r\n            <path\r\n                d=\"M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100\">\r\n            </path>\r\n        </svg>\r\n    </div>\r\n</section>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hero") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":311,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));
Handlebars.registerPartial("loader", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loader\">\r\n  <div class=\"loading-animation\"></div>\r\n</div>";
},"useData":true}));
Handlebars.registerPartial("not_found", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"row justify-content-center\">\r\n      <div class=\"col-auto bizday_not-found_header\">\r\n        <a class=\" mb-5 bizday_not-found_header_link\" href=\"./\">\r\n          <img class=\"bizday_not-found_header_logo\" src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"logoPath") || (depth0 != null ? lookupProperty(depth0,"logoPath") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"logoPath","hash":{},"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":68}}}) : helper)))
    + " alt=\"BizDay.LA logo\" />\r\n        </a>\r\n      </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"min-vh-100 bg-primary-3 text-light py-5 o-hidden\">\r\n  <div class=\"container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"hero") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + "    <div class=\"row text-center\">\r\n      <div class=\"col layer-2\">\r\n        <h1 class=\"display-1 mb-0\">404</h1>\r\n        <h2 class=\"h1\">Page not found</h2>\r\n        <div class=\"lead mb-4\">It appears the page you were looking for couldn’t be found.</div>\r\n        <div class=\"bizday_not-found_actions\">\r\n            <a class=\"btn btn-primary btn-lg bizday_btn-secondary\" href=\"./\">Go back to home</a>\r\n            <span>OR</span>\r\n            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url_cta") || (depth0 != null ? lookupProperty(depth0,"url_cta") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url_cta","hash":{},"data":data,"loc":{"start":{"line":20,"column":21},"end":{"line":20,"column":32}}}) : helper)))
    + "\" class=\"btn btn-primary btn-lg bizday_btn-primary\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ctaText") || (depth0 != null ? lookupProperty(depth0,"ctaText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ctaText","hash":{},"data":data,"loc":{"start":{"line":20,"column":84},"end":{"line":20,"column":95}}}) : helper)))
    + "</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"decoration-wrapper d-none d-md-block\">\r\n    <div class=\"decoration right middle-y scale-2\" data-jarallax-element=\"200\">\r\n      <img class=\"bg-primary-2\" src=\"assets/img/decorations/deco-blob-3.svg\" alt=\"deco-blob-3 decoration\" data-inject-svg />\r\n    </div>\r\n    <div class=\"decoration right middle-y\" data-jarallax-element=\"100\">\r\n      <img class=\"bg-primary\" src=\"assets/img/decorations/deco-lines-3.svg\" alt=\"deco-lines-3 decoration\" data-inject-svg />\r\n    </div>\r\n    <div class=\"decoration top left scale-3\" data-jarallax-element=\"50\">\r\n      <img class=\"bg-white\" src=\"assets/img/decorations/deco-blob-9.svg\" alt=\"deco-blob-9 decoration\" data-inject-svg />\r\n    </div>\r\n    <div class=\"decoration top left scale-2 scale-3 blend-mode-multiply\" data-jarallax-element=\"150 50\">\r\n      <img class=\"bg-primary-2\" src=\"assets/img/decorations/deco-dots-2.svg\" alt=\"deco-dots-2 decoration\" data-inject-svg />\r\n    </div>\r\n  </div>\r\n</section>";
},"useData":true}));
Handlebars.registerPartial("page_title", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":20}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":30}}}) : helper)))
    + "</h1>";
},"useData":true}));
Handlebars.registerPartial("schedule", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section>\r\n  <div class=\"container\">\r\n    <div class=\"row aling-items-center mb-4\">\r\n      <div class=\"col\">\r\n        <h2 class=\"h1 mb-sm-0\">Schedule</h2>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters d-none d-md-flex bg-white py-3\">\r\n      <div class=\"col\">\r\n        <span class=\"h6 mb-0 text-muted\">Time</span>\r\n      </div>\r\n      <div class=\"col-xl-7 col-md-6\">\r\n        <span class=\"h6 mb-0 text-muted\">Topic & Description</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"tab-content\" data-aos=\"fade-up\">\r\n      <div id=\"in_person\" class=\"list-group list-group-flush tab-pane fade show active\" role=\"tabpanel\" aria-labelledby=\"day-one-tab\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"events") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":47,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? lookupProperty(stack1,"has_link") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":46,"column":15}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"list-group-item list-group-item-action row no-gutters align-items-center py-3\">\r\n          <div class=\"col\">\r\n            <span>"
    + alias1(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":25,"column":18},"end":{"line":25,"column":26}}}) : helper)))
    + "</span>\r\n          </div>\r\n          <div class=\"col-xl-7 col-md-6\">\r\n            <div class=\"mt-2 mt-md-0\">\r\n              <h5>"
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":29,"column":18},"end":{"line":29,"column":26}}}) : helper)))
    + "</h5>\r\n              <p class=\"mb-0\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":30,"column":30},"end":{"line":30,"column":47}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n            </div>\r\n          </div>\r\n        </a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"list-group-item list-group-item-action row no-gutters align-items-center py-3\">\r\n          <div class=\"col\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":37,"column":18},"end":{"line":37,"column":26}}}) : helper)))
    + "</span>\r\n          </div>\r\n          <div class=\"col-xl-7 col-md-6\">\r\n            <div class=\"mt-2 mt-md-0\">\r\n              <h5 class=\"mb-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":41,"column":31},"end":{"line":41,"column":39}}}) : helper)))
    + "</h5>\r\n              <p class=\"mb-0\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":42,"column":30},"end":{"line":42,"column":47}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"schedule") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":52,"column":9}}})) != null ? stack1 : "");
},"useData":true}));
Handlebars.registerPartial("scriptTags", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Required vendor scripts (Do not remove) -->\r\n<script type=\"text/javascript\" src=\"assets/js/jquery.min.js\"></script>\r\n<script type=\"text/javascript\" src=\"assets/js/popper.min.js\"></script>\r\n<script type=\"text/javascript\" src=\"assets/js/bootstrap.js\"></script>\r\n<!-- Optional Vendor Scripts (Remove the plugin script here and comment initializer script out of index.js if site does not use that feature) -->\r\n<!-- AOS (Animate On Scroll - animates elements into view while scrolling down) -->\r\n<script type=\"text/javascript\" src=\"assets/js/aos.js\"></script>\r\n<!-- Clipboard (copies content from browser into OS clipboard) -->\r\n<script type=\"text/javascript\" src=\"assets/js/clipboard.js\"></script>\r\n<!-- Fancybox (handles image and video lightbox and galleries) -->\r\n<script type=\"text/javascript\" src=\"assets/js/jquery.fancybox.min.js\"></script>\r\n<!-- Flatpickr (calendar/date/time picker UI) -->\r\n<script type=\"text/javascript\" src=\"assets/js/flatpickr.min.js\"></script>\r\n<!-- Flickity (handles touch enabled carousels and sliders) -->\r\n<script type=\"text/javascript\" src=\"assets/js/flickity.pkgd.min.js\"></script>\r\n<!-- Ion rangeSlider (flexible and pretty range slider elements) -->\r\n<script type=\"text/javascript\" src=\"assets/js/ion.rangeSlider.min.js\"></script>\r\n<!-- Isotope (masonry layouts and filtering) -->\r\n<script type=\"text/javascript\" src=\"assets/js/isotope.pkgd.min.js\"></script>\r\n<!-- jarallax (parallax effect and video backgrounds) -->\r\n<script type=\"text/javascript\" src=\"assets/js/jarallax.min.js\"></script>\r\n<script type=\"text/javascript\" src=\"assets/js/jarallax-video.min.js\"></script>\r\n<script type=\"text/javascript\" src=\"assets/js/jarallax-element.min.js\"></script>\r\n<!-- jQuery Countdown (displays countdown text to a specified date) -->\r\n<script type=\"text/javascript\" src=\"assets/js/jquery.countdown.min.js\"></script>\r\n<!-- jQuery smartWizard facilitates steppable wizard content -->\r\n<script type=\"text/javascript\" src=\"assets/js/jquery.smartWizard.min.js\"></script>\r\n<!-- Plyr (unified player for Video, Audio, Vimeo and Youtube) -->\r\n<script type=\"text/javascript\" src=\"assets/js/plyr.polyfilled.min.js\"></script>\r\n<!-- Prism (displays formatted code boxes) -->\r\n<script type=\"text/javascript\" src=\"assets/js/prism.js\"></script>\r\n<!-- ScrollMonitor (manages events for elements scrolling in and out of view) -->\r\n<script type=\"text/javascript\" src=\"assets/js/scrollMonitor.js\"></script>\r\n<!-- Smooth scroll (animation to links in-page)-->\r\n<script type=\"text/javascript\" src=\"assets/js/smooth-scroll.polyfills.min.js\"></script>\r\n<!-- SVGInjector (replaces img tags with SVG code to allow easy inclusion of SVGs with the benefit of inheriting colors and styles)-->\r\n<script async=\"false\" type=\"text/javascript\" src=\"assets/js/svg-injector.umd.production.js\"></script>\r\n<!-- TwitterFetcher (displays a feed of tweets from a specified account)-->\r\n<script type=\"text/javascript\" src=\"assets/js/twitterFetcher_min.js\"></script>\r\n<!-- Typed text (animated typing effect)-->\r\n<script type=\"text/javascript\" src=\"assets/js/typed.min.js\"></script>\r\n<!-- Required theme scripts (Do not remove) -->\r\n<script type=\"text/javascript\" src=\"assets/js/theme.js\"></script>";
},"useData":true}));
Handlebars.registerPartial("socials", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a alt=\"LinkedIn Profile\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url_linkedin") : depth0)) != null ? lookupProperty(stack1,"site") : stack1), depth0))
    + "\" target=\"_blank\">\r\n    <img class=\"icon undefined\" src=\"assets/img/icons/social/linkedin.svg\" alt=\"instagram social icon\" data-inject-svg />\r\n</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a alt=\"Twitter Profile\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url_twitter") : depth0)) != null ? lookupProperty(stack1,"site") : stack1), depth0))
    + "\" target=\"_blank\">\r\n    <img class=\"icon undefined\" src=\"assets/img/icons/social/twitter.svg\" alt=\"twitter social icon\" data-inject-svg />\r\n</a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a alt=\"Github Profile\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url_github") : depth0)) != null ? lookupProperty(stack1,"site") : stack1), depth0))
    + "\" target=\"_blank\">\r\n    <img class=\"icon undefined\" src=\"assets/img/icons/social/github.svg\" alt=\"github social icon\" data-inject-svg />\r\n</a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a alt=\"Instagram Profile\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url_instagram") : depth0)) != null ? lookupProperty(stack1,"site") : stack1), depth0))
    + "\" target=\"_blank\">\r\n    <img class=\"icon undefined\" src=\"assets/img/icons/social/instagram.svg\" alt=\"instagram social icon\" data-inject-svg />\r\n</a>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a alt=\"Facebook Profile\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url_facebook") : depth0)) != null ? lookupProperty(stack1,"site") : stack1), depth0))
    + "\" target=\"_blank\">\r\n    <img class=\"icon undefined\" src=\"assets/img/icons/social/facebook.svg\" alt=\"facebook social icon\" data-inject-svg />\r\n</a>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a alt=\"Youtube Profile\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url_youtube") : depth0)) != null ? lookupProperty(stack1,"site") : stack1), depth0))
    + "\" target=\"_blank\">\r\n    <img class=\"icon undefined\" src=\"assets/img/icons/social/youtube.svg\" alt=\"youtube social icon\" data-inject-svg />\r\n</a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_linkedin") : depth0)) != null ? lookupProperty(stack1,"has") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_twitter") : depth0)) != null ? lookupProperty(stack1,"has") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_github") : depth0)) != null ? lookupProperty(stack1,"has") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_instagram") : depth0)) != null ? lookupProperty(stack1,"has") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_facebook") : depth0)) != null ? lookupProperty(stack1,"has") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_youtube") : depth0)) != null ? lookupProperty(stack1,"has") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "");
},"useData":true}));
Handlebars.registerPartial("speaker", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"has-divider\">\r\n  <div class=\"divider flip-y\">\r\n    <img src=\"assets/img/dividers/divider-2.svg\" alt=\"\" data-inject-svg />\r\n  </div>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"page_title"),depth0,{"name":"page_title","hash":{"text":"Organizers and Speakers","class":"bizday_speaker_page_title"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"speakers") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":37,"column":11}}})) != null ? stack1 : "")
    + "</section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div id="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":10},"end":{"line":8,"column":16}}}) : helper)))
    + " class=\"container bizday_speaker_container\" data-aos=\"fade-up\">\r\n    <div class=\"row align-items-center justify-content-around\">\r\n      <div class=\"col-md-5\">\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":11,"column":18},"end":{"line":11,"column":27}}}) : helper)))
    + "\" alt=\"Image of "
    + alias4(((helper = (helper = lookupProperty(helpers,"firstName") || (depth0 != null ? lookupProperty(depth0,"firstName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":56}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"lastName") || (depth0 != null ? lookupProperty(depth0,"lastName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data,"loc":{"start":{"line":11,"column":57},"end":{"line":11,"column":69}}}) : helper)))
    + "\" class=\"rounded-circle layer-2\">\r\n        <div class=\"decoration bottom left\" data-aos=\"fade-up\">\r\n          <img class=\"bg-primary\" src=\"assets/img/decorations/deco-blob-10.svg\" alt=\"\" data-inject-svg />\r\n        </div>\r\n        <div class=\"decoration bottom left\" data-aos=\"fade-right\">\r\n          <img class=\"bg-primary-2\" src=\"assets/img/decorations/deco-lines-4.svg\" alt=\"\" data-inject-svg />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-5 col-md-6\">\r\n        <div class=\"bizday_speaker_header\">\r\n          <div>"
    + alias4(((helper = (helper = lookupProperty(helpers,"firstName") || (depth0 != null ? lookupProperty(depth0,"firstName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":21,"column":15},"end":{"line":21,"column":28}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"lastName") || (depth0 != null ? lookupProperty(depth0,"lastName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data,"loc":{"start":{"line":21,"column":29},"end":{"line":21,"column":41}}}) : helper)))
    + "</div>\r\n        </div>\r\n        <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"personalDescription") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":26,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n        <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"talkDescription") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":31,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"socials"),depth0,{"name":"socials","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <p class=\"lead bizday_speaker_description\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"speaker") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":39,"column":9}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("speakers", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section>\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"row mb-4\">\r\n      <div class=\"col\">\r\n        <h2 class=\"h1\">Featuring talks from</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"speakers") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url_speakers") || (depth0 != null ? lookupProperty(depth0,"url_speakers") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"url_speakers","hash":{},"data":data,"loc":{"start":{"line":34,"column":17},"end":{"line":34,"column":33}}}) : helper)))
    + "\" class=\"hover-arrow\">View all Speakers</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"col-sm-6 col-lg-4 d-flex align-items-center mb-5\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n        <a alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"firstName") || (depth0 != null ? lookupProperty(depth0,"firstName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":29}}}) : helper)))
    + " bio\" href=\""
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"url_speakers") : depths[1]), depth0))
    + "#"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":61},"end":{"line":12,"column":67}}}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":12,"column":79},"end":{"line":12,"column":88}}}) : helper)))
    + "\" alt=\"Image of "
    + alias4(((helper = (helper = lookupProperty(helpers,"firstName") || (depth0 != null ? lookupProperty(depth0,"firstName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":12,"column":104},"end":{"line":12,"column":117}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"lastName") || (depth0 != null ? lookupProperty(depth0,"lastName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data,"loc":{"start":{"line":12,"column":118},"end":{"line":12,"column":130}}}) : helper)))
    + "\" class=\"avatar avatar-xlg mr-3\"></a>\r\n        <div>\r\n            <h5 class=\"mb-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"firstName") || (depth0 != null ? lookupProperty(depth0,"firstName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":14,"column":29},"end":{"line":14,"column":42}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"lastName") || (depth0 != null ? lookupProperty(depth0,"lastName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data,"loc":{"start":{"line":14,"column":43},"end":{"line":14,"column":55}}}) : helper)))
    + "</h5>\r\n              <h6 class=\"mb-1\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"company") : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":25,"column":25}}})) != null ? stack1 : "")
    + "              </h6>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"socials"),depth0,{"name":"socials","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"has_site") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":24,"column":25}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a class=\"bizday_speakers_company_website_icon\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"site") || (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"site","hash":{},"data":data,"loc":{"start":{"line":18,"column":74},"end":{"line":18,"column":82}}}) : helper)))
    + "\">\r\n                      <img class=\"icon bg-primary\" src=\"assets/img/icons/theme/general/attachment-1.svg\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":19,"column":110},"end":{"line":19,"column":118}}}) : helper)))
    + " website\" data-inject-svg />"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":22},"end":{"line":20,"column":32}}}) : helper)))
    + "</a>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":34}}}) : helper)))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"speaker") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":39,"column":9}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));
Handlebars.registerPartial("sponsors", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"mt-5 mr-4 mb-5 ml-4 col-lg-3 col-md-4\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n                <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":9,"column":25},"end":{"line":9,"column":32}}}) : helper)))
    + "\">\r\n                    <img class=\"bg-white icon icon-logo bizday_sponsors_icon "
    + alias4(((helper = (helper = lookupProperty(helpers,"heightAdjust") || (depth0 != null ? lookupProperty(depth0,"heightAdjust") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"heightAdjust","hash":{},"data":data,"loc":{"start":{"line":10,"column":77},"end":{"line":10,"column":93}}}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":10,"column":100},"end":{"line":10,"column":109}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":116},"end":{"line":10,"column":124}}}) : helper)))
    + " logo\" />\r\n                </a>\r\n            </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"text-dark has-divider\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-between\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <h4 class=\"text-uppercase mb-4 bizday_sponsors_by_text\">Sponsors</h4>\r\n        <ul class=\"d-flex flex-wrap list-unstyled justify-content-start\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"sponsors") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":13,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";
},"useData":true}));
Handlebars.registerPartial("sponsors_venue", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"has_text_logo") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":16,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"has_image_logo") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":23,"column":19}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"mr-3 mb-5 col-md-5 align-self-center\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n                <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":10,"column":25},"end":{"line":10,"column":32}}}) : helper)))
    + "\">\r\n                    <svg` class=\"bg-white icon icon-logo bizday_sponsors_venue_icon\">\r\n                      <text class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"font_style") || (depth0 != null ? lookupProperty(depth0,"font_style") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"font_style","hash":{},"data":data,"loc":{"start":{"line":12,"column":35},"end":{"line":12,"column":49}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":12,"column":51},"end":{"line":12,"column":59}}}) : helper)))
    + "</text>\r\n                    </svg`>\r\n                </a>\r\n            </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"mr-3 mb-5 col-md-5 bizday_sponsors_venue_list_item\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n                <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":19,"column":25},"end":{"line":19,"column":32}}}) : helper)))
    + "\">\r\n                    <img class=\"bg-white icon icon-logo bizday_sponsors_venue_icon\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":20,"column":89},"end":{"line":20,"column":98}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":105},"end":{"line":20,"column":113}}}) : helper)))
    + " logo\" />\r\n                </a>\r\n            </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"text-dark has-divider\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"row justify-content-between\">\r\n      <div class=\"col-md-10 mx-auto\">\r\n        <h3 class=\"text-uppercase mb-4 bizday_sponsors_by_text\">Venue Sponsors</h3>\r\n        <ul class=\"d-flex flex-wrap list-unstyled justify-content-center\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"sponsors_venue") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";
},"useData":true}));
Handlebars.registerPartial("sponsors_venue_offers", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"text-dark has-divider\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-between\">\r\n      <div class=\"col-md-8 mb-3 mb-md-0 mx-auto text-center\">\r\n        <h3>Special Offer</h3>\r\n        <p>Contact <strong>The Metaphor Club</strong> for a tour of their outstanding co-working  space, and use the <a href=\"https://themetaphorclub.gymmasteronline.com/portal/signup/details/1240fa1ba05770b8efb75fb02a22a618\">BizDay.LA Discount Link</a> for a 10% discount on your membership fee.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";
},"useData":true}));