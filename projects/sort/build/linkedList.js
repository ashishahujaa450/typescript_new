"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sort_1 = require("./Sort");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var linkedList = /** @class */ (function (_super) {
    __extends(linkedList, _super);
    function linkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    //add new item to list
    linkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        //set pointer of last node to newly created node
        tail.next = node;
    };
    Object.defineProperty(linkedList.prototype, "length", {
        //get length of list
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    //get value of speceifc index
    linkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('index out of bound');
    };
    //compare two values in list
    linkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('no items to compare');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    //swap item into list
    linkedList.prototype.swap = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('no items in the list to swap');
        }
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        //instead of swapping nodes just swapping values in the node
        var leftValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftValue;
    };
    //print values in linked list
    linkedList.prototype.print = function () {
        if (!this.head) {
            throw new Error('No items in the list to view');
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return linkedList;
}(Sort_1.Sorter));
exports.linkedList = linkedList;
