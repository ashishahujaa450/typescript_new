"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
var HtmlReports_1 = require("./ReportTargets/HtmlReports");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (match) {
        var output = this.analyzer.run(match);
        this.outputTarget.print(output);
    };
    Summary.winAnalysisWithHtmlReport = function (TeamName) {
        return new Summary(new WinsAnalysis_1.WinAnalysis(TeamName), new HtmlReports_1.HtmlReport());
    };
    return Summary;
}());
exports.Summary = Summary;
