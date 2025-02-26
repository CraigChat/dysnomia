"use strict";

const Collection = require("../util/Collection");
const GuildChannel = require("./GuildChannel");
const Member = require("./Member");
const PermissionOverwrite = require("./PermissionOverwrite");

/**
 * Represents a guild voice channel. See GuildChannel for more properties and methods.
 * @extends GuildChannel
 */
class VoiceChannel extends GuildChannel {
    #client;
    constructor(data, client) {
        super(data, client);
        this.#client = client;
        /**
         * Collection of Members in this channel
         * @type {Collection<Member>}
         */
        this.voiceMembers = new Collection(Member);
    }

    update(data, client) {
        super.update(data, client);

        if(data.bitrate !== undefined) {
            /**
             * The bitrate of the channel
             * @type {Number?}
             */
            this.bitrate = data.bitrate;
        }
        if(data.rtc_region !== undefined) {
            /**
             * The RTC region ID of the channel (automatic when `null`)
             * @type {String?}
             */
            this.rtcRegion = data.rtc_region;
        }
        if(data.permission_overwrites) {
            /**
             * Collection of PermissionOverwrites in this channel
             * @type {Collection<PermissionOverwrite>}
             */
            this.permissionOverwrites = new Collection(PermissionOverwrite);
            data.permission_overwrites.forEach((overwrite) => {
                this.permissionOverwrites.add(overwrite);
            });
        }
        if(data.position !== undefined) {
            /**
             * The position of the channel
             * @type {Number}
             */
            this.position = data.position;
        }
        if(data.nsfw !== undefined) {
            /**
             * Whether the channel is an NSFW channel or not
             * @type {Boolean}
             */
            this.nsfw = data.nsfw;
        }
    }

    /**
     * Create an invite for the channel
     * @param {Object} [options] Invite generation options
     * @param {Number} [options.maxAge] How long the invite should last in seconds
     * @param {Number} [options.maxUses] How many uses the invite should last for
     * @param {Boolean} [options.temporary] Whether the invite grants temporary membership or not
     * @param {Boolean} [options.unique] Whether the invite is unique or not
     * @param {String} [reason] The reason to be displayed in audit logs
     * @returns {Promise<Invite>}
     */
    createInvite(options, reason) {
        return this.#client.createChannelInvite.call(this.#client, this.id, options, reason);
    }

    /**
     * Get all invites in the channel
     * @returns {Promise<Array<Invite>>}
     */
    getInvites() {
        return this.#client.getChannelInvites.call(this.#client, this.id);
    }

    /**
     * Joins the channel.
     * @param {Object} [options] VoiceConnection constructor options
     * @param {Object} [options.opusOnly] Skip opus encoder initialization. You should not enable this unless you know what you are doing
     * @param {Object} [options.shared] Whether the VoiceConnection will be part of a SharedStream or not
     * @param {Boolean} [options.selfMute] Whether the bot joins the channel muted or not
     * @param {Boolean} [options.selfDeaf] Whether the bot joins the channel deafened or not
     * @returns {Promise<VoiceConnection>} Resolves with a VoiceConnection
     */
    join(options) {
        return this.#client.joinVoiceChannel.call(this.#client, this.id, options);
    }

    /**
     * Leaves the channel.
     */
    leave() {
        return this.#client.leaveVoiceChannel.call(this.#client, this.id);
    }

    /**
     * Send a soundboard sound to the voice channel
     * @param {Object} options The soundboard sound options
     * @param {String} options.soundID The ID of the soundboard sound
     * @param {String} [options.sourceGuildID] The ID of the guild where the soundboard sound was created, if not in the same guild
     * @returns {Promise}
     */
    sendSoundboardSound(options) {
        return this.#client.sendSoundboardSound.call(this.#client, this.id, options);
    }

    toJSON(props = []) {
        return super.toJSON([
            "bitrate",
            "permissionOverwrites",
            "position",
            "rtcRegion",
            "voiceMembers",
            ...props
        ]);
    }
}

module.exports = VoiceChannel;
