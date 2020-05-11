"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @since 2.2.3
 */
var t = require("./index");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @since 2.2.3
 */
function literal() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return t.union(values.map(function (v) { return t.literal(v); }));
}
exports.literal = literal;
// -------------------------------------------------------------------------------------
// primitives
// -------------------------------------------------------------------------------------
/**
 * @since 2.2.3
 */
exports.string = t.string;
/**
 * @since 2.2.3
 */
exports.number = t.number;
/**
 * @since 2.2.3
 */
exports.boolean = t.boolean;
/**
 * @since 2.2.3
 */
exports.UnknownArray = t.UnknownArray;
/**
 * @since 2.2.3
 */
exports.UnknownRecord = t.UnknownRecord;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @since 2.2.3
 */
function refinement(from, refinement, expected) {
    // tslint:disable-next-line: deprecation
    return t.refinement(from, refinement, expected);
}
exports.refinement = refinement;
/**
 * @since 2.2.3
 */
function nullable(or) {
    return t.union([t.null, or]);
}
exports.nullable = nullable;
/**
 * @since 2.2.3
 */
function type(properties) {
    return t.type(properties);
}
exports.type = type;
/**
 * @since 2.2.3
 */
function partial(properties) {
    return t.partial(properties);
}
exports.partial = partial;
/**
 * @since 2.2.3
 */
function record(codomain) {
    return t.record(t.string, codomain);
}
exports.record = record;
/**
 * @since 2.2.3
 */
function array(items) {
    return t.array(items);
}
exports.array = array;
/**
 * @since 2.2.3
 */
function tuple() {
    var components = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        components[_i] = arguments[_i];
    }
    return t.tuple(components);
}
exports.tuple = tuple;
/**
 * @since 2.2.3
 */
function intersection(left, right) {
    return t.intersection([left, right]);
}
exports.intersection = intersection;
/**
 * @since 2.2.3
 */
function lazy(id, f) {
    return t.recursion(id, f);
}
exports.lazy = lazy;
/**
 * @since 2.2.3
 */
function sum(_tag) {
    return function (members) { return t.union(Object.values(members)); };
}
exports.sum = sum;
/**
 * @since 2.2.3
 */
function union() {
    var members = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        members[_i] = arguments[_i];
    }
    return t.union(members);
}
exports.union = union;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @since 2.2.3
 */
exports.URI = 'Type';
/**
 * @since 2.2.3
 */
exports.instance = {
    URI: exports.URI,
    literal: literal,
    string: exports.string,
    number: exports.number,
    boolean: exports.boolean,
    UnknownArray: exports.UnknownArray,
    UnknownRecord: exports.UnknownRecord,
    nullable: nullable,
    type: type,
    partial: partial,
    record: record,
    array: array,
    tuple: tuple,
    intersection: intersection,
    sum: sum,
    lazy: lazy,
    union: union,
    refinement: refinement
};