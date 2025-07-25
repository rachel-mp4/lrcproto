// @generated by protobuf-ts 2.10.0 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "lrc.proto" (package "lrc.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message lrc.v1.Event
 */
export interface Event {
    /**
     * @generated from protobuf oneof: msg
     */
    msg: {
        oneofKind: "ping";
        /**
         * @generated from protobuf field: lrc.v1.Ping ping = 1;
         */
        ping: Ping;
    } | {
        oneofKind: "pong";
        /**
         * @generated from protobuf field: lrc.v1.Pong pong = 2;
         */
        pong: Pong;
    } | {
        oneofKind: "init";
        /**
         * @generated from protobuf field: lrc.v1.Init init = 3;
         */
        init: Init;
    } | {
        oneofKind: "pub";
        /**
         * @generated from protobuf field: lrc.v1.Pub pub = 4;
         */
        pub: Pub;
    } | {
        oneofKind: "insert";
        /**
         * @generated from protobuf field: lrc.v1.Insert insert = 5;
         */
        insert: Insert;
    } | {
        oneofKind: "delete";
        /**
         * @generated from protobuf field: lrc.v1.Delete delete = 6;
         */
        delete: Delete;
    } | {
        oneofKind: "mute";
        /**
         * @generated from protobuf field: lrc.v1.Mute mute = 7;
         */
        mute: Mute;
    } | {
        oneofKind: "unmute";
        /**
         * @generated from protobuf field: lrc.v1.Unmute unmute = 8;
         */
        unmute: Unmute;
    } | {
        oneofKind: "set";
        /**
         * @generated from protobuf field: lrc.v1.Set set = 9;
         */
        set: Set;
    } | {
        oneofKind: "get";
        /**
         * @generated from protobuf field: lrc.v1.Get get = 10;
         */
        get: Get;
    } | {
        oneofKind: "kick";
        /**
         * @generated from protobuf field: lrc.v1.Kick kick = 11;
         */
        kick: Kick;
    } | {
        oneofKind: "hug";
        /**
         * @generated from protobuf field: lrc.v1.Hug hug = 12;
         */
        hug: Hug;
    } | {
        oneofKind: "ban";
        /**
         * @generated from protobuf field: lrc.v1.Ban ban = 13;
         */
        ban: Ban;
    } | {
        oneofKind: "unban";
        /**
         * @generated from protobuf field: lrc.v1.Unban unban = 14;
         */
        unban: Unban;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message lrc.v1.Ping
 */
export interface Ping {
}
/**
 * @generated from protobuf message lrc.v1.Pong
 */
export interface Pong {
}
/**
 * @generated from protobuf message lrc.v1.Init
 */
export interface Init {
    /**
     * @generated from protobuf field: optional uint32 id = 1;
     */
    id?: number;
    /**
     * @generated from protobuf field: optional string nick = 2;
     */
    nick?: string;
    /**
     * @generated from protobuf field: optional string externalID = 3;
     */
    externalID?: string;
    /**
     * @generated from protobuf field: optional uint32 color = 4;
     */
    color?: number;
    /**
     * @generated from protobuf field: optional bool echoed = 5;
     */
    echoed?: boolean;
    /**
     * @generated from protobuf field: optional bytes nonce = 6;
     */
    nonce?: Uint8Array;
}
/**
 * @generated from protobuf message lrc.v1.Pub
 */
export interface Pub {
    /**
     * @generated from protobuf field: optional uint32 id = 1;
     */
    id?: number;
}
/**
 * @generated from protobuf message lrc.v1.Insert
 */
export interface Insert {
    /**
     * @generated from protobuf field: optional uint32 id = 1;
     */
    id?: number;
    /**
     * @generated from protobuf field: string body = 2;
     */
    body: string;
    /**
     * @generated from protobuf field: uint32 utf16Index = 3;
     */
    utf16Index: number;
}
/**
 * @generated from protobuf message lrc.v1.Delete
 */
export interface Delete {
    /**
     * @generated from protobuf field: optional uint32 id = 1;
     */
    id?: number;
    /**
     * @generated from protobuf field: uint32 utf16Start = 2;
     */
    utf16Start: number;
    /**
     * @generated from protobuf field: uint32 utf16End = 3;
     */
    utf16End: number;
}
/**
 * @generated from protobuf message lrc.v1.Mute
 */
export interface Mute {
    /**
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
}
/**
 * @generated from protobuf message lrc.v1.Unmute
 */
export interface Unmute {
    /**
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
}
/**
 * @generated from protobuf message lrc.v1.Set
 */
export interface Set {
    /**
     * @generated from protobuf field: optional string nick = 1;
     */
    nick?: string;
    /**
     * @generated from protobuf field: optional string externalID = 2;
     */
    externalID?: string;
    /**
     * @generated from protobuf field: optional uint32 color = 3;
     */
    color?: number;
}
/**
 * @generated from protobuf message lrc.v1.Get
 */
export interface Get {
    /**
     * @generated from protobuf field: optional string topic = 1;
     */
    topic?: string;
    /**
     * @generated from protobuf field: optional uint32 connected = 2;
     */
    connected?: number;
}
/**
 * @generated from protobuf message lrc.v1.Sudo
 */
export interface Sudo {
    /**
     * @generated from protobuf field: string externalID = 1;
     */
    externalID: string;
    /**
     * @generated from protobuf field: string secret = 2;
     */
    secret: string;
}
/**
 * @generated from protobuf message lrc.v1.Kick
 */
export interface Kick {
    /**
     * @generated from protobuf field: lrc.v1.Sudo privileges = 1;
     */
    privileges?: Sudo;
    /**
     * @generated from protobuf field: uint32 id = 2;
     */
    id: number;
}
/**
 * @generated from protobuf message lrc.v1.Hug
 */
export interface Hug {
    /**
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
}
/**
 * @generated from protobuf message lrc.v1.Ban
 */
export interface Ban {
    /**
     * @generated from protobuf field: lrc.v1.Sudo privileges = 1;
     */
    privileges?: Sudo;
    /**
     * @generated from protobuf field: uint32 id = 2;
     */
    id: number;
}
/**
 * @generated from protobuf message lrc.v1.Unban
 */
export interface Unban {
    /**
     * @generated from protobuf field: lrc.v1.Sudo privileges = 1;
     */
    privileges?: Sudo;
    /**
     * @generated from protobuf field: uint32 id = 2;
     */
    id: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Event$Type extends MessageType<Event> {
    constructor() {
        super("lrc.v1.Event", [
            { no: 1, name: "ping", kind: "message", oneof: "msg", T: () => Ping },
            { no: 2, name: "pong", kind: "message", oneof: "msg", T: () => Pong },
            { no: 3, name: "init", kind: "message", oneof: "msg", T: () => Init },
            { no: 4, name: "pub", kind: "message", oneof: "msg", T: () => Pub },
            { no: 5, name: "insert", kind: "message", oneof: "msg", T: () => Insert },
            { no: 6, name: "delete", kind: "message", oneof: "msg", T: () => Delete },
            { no: 7, name: "mute", kind: "message", oneof: "msg", T: () => Mute },
            { no: 8, name: "unmute", kind: "message", oneof: "msg", T: () => Unmute },
            { no: 9, name: "set", kind: "message", oneof: "msg", T: () => Set },
            { no: 10, name: "get", kind: "message", oneof: "msg", T: () => Get },
            { no: 11, name: "kick", kind: "message", oneof: "msg", T: () => Kick },
            { no: 12, name: "hug", kind: "message", oneof: "msg", T: () => Hug },
            { no: 13, name: "ban", kind: "message", oneof: "msg", T: () => Ban },
            { no: 14, name: "unban", kind: "message", oneof: "msg", T: () => Unban }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Event
 */
export const Event = new Event$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Ping$Type extends MessageType<Ping> {
    constructor() {
        super("lrc.v1.Ping", []);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Ping
 */
export const Ping = new Ping$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Pong$Type extends MessageType<Pong> {
    constructor() {
        super("lrc.v1.Pong", []);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Pong
 */
export const Pong = new Pong$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Init$Type extends MessageType<Init> {
    constructor() {
        super("lrc.v1.Init", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nick", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "externalID", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "color", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "echoed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "nonce", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Init
 */
export const Init = new Init$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Pub$Type extends MessageType<Pub> {
    constructor() {
        super("lrc.v1.Pub", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Pub
 */
export const Pub = new Pub$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Insert$Type extends MessageType<Insert> {
    constructor() {
        super("lrc.v1.Insert", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "body", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "utf16Index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Insert
 */
export const Insert = new Insert$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Delete$Type extends MessageType<Delete> {
    constructor() {
        super("lrc.v1.Delete", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "utf16Start", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "utf16End", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Delete
 */
export const Delete = new Delete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Mute$Type extends MessageType<Mute> {
    constructor() {
        super("lrc.v1.Mute", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Mute
 */
export const Mute = new Mute$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Unmute$Type extends MessageType<Unmute> {
    constructor() {
        super("lrc.v1.Unmute", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Unmute
 */
export const Unmute = new Unmute$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Set$Type extends MessageType<Set> {
    constructor() {
        super("lrc.v1.Set", [
            { no: 1, name: "nick", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "externalID", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "color", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Set
 */
export const Set = new Set$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Get$Type extends MessageType<Get> {
    constructor() {
        super("lrc.v1.Get", [
            { no: 1, name: "topic", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "connected", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Get
 */
export const Get = new Get$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Sudo$Type extends MessageType<Sudo> {
    constructor() {
        super("lrc.v1.Sudo", [
            { no: 1, name: "externalID", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "secret", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Sudo
 */
export const Sudo = new Sudo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Kick$Type extends MessageType<Kick> {
    constructor() {
        super("lrc.v1.Kick", [
            { no: 1, name: "privileges", kind: "message", T: () => Sudo },
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Kick
 */
export const Kick = new Kick$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hug$Type extends MessageType<Hug> {
    constructor() {
        super("lrc.v1.Hug", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Hug
 */
export const Hug = new Hug$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Ban$Type extends MessageType<Ban> {
    constructor() {
        super("lrc.v1.Ban", [
            { no: 1, name: "privileges", kind: "message", T: () => Sudo },
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Ban
 */
export const Ban = new Ban$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Unban$Type extends MessageType<Unban> {
    constructor() {
        super("lrc.v1.Unban", [
            { no: 1, name: "privileges", kind: "message", T: () => Sudo },
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message lrc.v1.Unban
 */
export const Unban = new Unban$Type();
