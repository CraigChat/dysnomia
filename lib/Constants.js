"use strict";

/* eslint @stylistic/key-spacing: ["error", {align: "value"}] */

module.exports.GATEWAY_VERSION = 10;
module.exports.REST_VERSION = 10;
module.exports.VOICE_VERSION = 8;

module.exports.ActivityFlags = {
    INSTANCE:                    1 << 0,
    JOIN:                        1 << 1,
    SPECTATE:                    1 << 2,
    JOIN_REQUEST:                1 << 3,
    SYNC:                        1 << 4,
    PLAY:                        1 << 5,
    PARTY_PRIVACY_FRIENDS:       1 << 6,
    PARTY_PRIVACY_VOICE_CHANNEL: 1 << 7,
    EMBEDDED:                    1 << 8
};

module.exports.ActivityTypes = {
    GAME:      0,
    STREAMING: 1,
    LISTENING: 2,
    WATCHING:  3,
    CUSTOM:    4,
    COMPETING: 5
};

module.exports.ApplicationCommandEntryPointHandlerTypes = {
    APP_HANDLER:             1,
    DISCORD_LAUNCH_ACTIVITY: 2
};

module.exports.ApplicationCommandOptionTypes = {
    SUB_COMMAND:       1,
    SUB_COMMAND_GROUP: 2,
    STRING:            3,
    INTEGER:           4,
    BOOLEAN:           5,
    USER:              6,
    CHANNEL:           7,
    ROLE:              8,
    MENTIONABLE:       9,
    NUMBER:            10,
    ATTACHMENT:        11
};

module.exports.ApplicationCommandPermissionTypes = {
    ROLE:    1,
    USER:    2,
    CHANNEL: 3
};

module.exports.ApplicationCommandTypes = {
    CHAT_INPUT:          1,
    USER:                2,
    MESSAGE:             3,
    PRIMARY_ENTRY_POINT: 4
};

module.exports.ApplicationEventWebhookStatus = {
    DISABLED:            1,
    ENABLED:             2,
    DISABLED_BY_DISCORD: 3
};

module.exports.ApplicationFlags = {
    APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE: 1 << 6,
    GATEWAY_PRESENCE:                              1 << 12,
    GATEWAY_PRESENCE_LIMITED:                      1 << 13,
    GATEWAY_GUILD_MEMBERS:                         1 << 14,
    GATEWAY_GUILD_MEMBERS_LIMITED:                 1 << 15,
    VERIFICATION_PENDING_GUILD_LIMIT:              1 << 16,
    EMBEDDED:                                      1 << 17,
    GATEWAY_MESSAGE_CONTENT:                       1 << 18,
    GATEWAY_MESSAGE_CONTENT_LIMITED:               1 << 19,
    APPLICATION_COMMAND_BADGE:                     1 << 23
};

module.exports.ApplicationIntegrationTypes = {
    GUILD_INSTALL: 0,
    USER_INSTALL:  1
};

module.exports.AttachmentFlags = {
    IS_REMIX: 1 << 2
};

module.exports.AuditLogActions = {
    GUILD_UPDATE: 1,

    CHANNEL_CREATE:           10,
    CHANNEL_UPDATE:           11,
    CHANNEL_DELETE:           12,
    CHANNEL_OVERWRITE_CREATE: 13,
    CHANNEL_OVERWRITE_UPDATE: 14,
    CHANNEL_OVERWRITE_DELETE: 15,

    MEMBER_KICK:        20,
    MEMBER_PRUNE:       21,
    MEMBER_BAN_ADD:     22,
    MEMBER_BAN_REMOVE:  23,
    MEMBER_UPDATE:      24,
    MEMBER_ROLE_UPDATE: 25,
    MEMBER_MOVE:        26,
    MEMBER_DISCONNECT:  27,
    BOT_ADD:            28,

    ROLE_CREATE: 30,
    ROLE_UPDATE: 31,
    ROLE_DELETE: 32,

    INVITE_CREATE: 40,
    INVITE_UPDATE: 41,
    INVITE_DELETE: 42,

    WEBHOOK_CREATE: 50,
    WEBHOOK_UPDATE: 51,
    WEBHOOK_DELETE: 52,

    EMOJI_CREATE: 60,
    EMOJI_UPDATE: 61,
    EMOJI_DELETE: 62,

    MESSAGE_DELETE:      72,
    MESSAGE_BULK_DELETE: 73,
    MESSAGE_PIN:         74,
    MESSAGE_UNPIN:       75,

    INTEGRATION_CREATE: 80,
    INTEGRATION_UPDATE: 81,
    INTEGRATION_DELETE: 82,

    STAGE_INSTANCE_CREATE: 83,
    STAGE_INSTANCE_UPDATE: 84,
    STAGE_INSTANCE_DELETE: 85,

    STICKER_CREATE: 90,
    STICKER_UPDATE: 91,
    STICKER_DELETE: 92,

    GUILD_SCHEDULED_EVENT_CREATE: 100,
    GUILD_SCHEDULED_EVENT_UPDATE: 101,
    GUILD_SCHEDULED_EVENT_DELETE: 102,

    THREAD_CREATE: 110,
    THREAD_UPDATE: 111,
    THREAD_DELETE: 112,

    APPLICATION_COMMAND_PERMISSION_UPDATE: 121,

    AUTO_MODERATION_RULE_CREATE:                 140,
    AUTO_MODERATION_RULE_UPDATE:                 141,
    AUTO_MODERATION_RULE_DELETE:                 142,
    AUTO_MODERATION_BLOCK_MESSAGE:               143,
    AUTO_MODERATION_FLAG_TO_CHANNEL:             144,
    AUTO_MODERATION_USER_COMMUNICATION_DISABLED: 145,

    CREATOR_MONETIZATION_REQUEST_CREATED: 150,
    CREATOR_MONETIZATION_TERMS_ACCEPTED:  151,

    ROLE_PROMPT_CREATE: 160,
    ROLE_PROMPT_UPDATE: 161,
    ROLE_PROMPT_DELETE: 162,

    ONBOARDING_PROMPT_CREATE: 163,
    ONBOARDING_PROMPT_UPDATE: 164,
    ONBOARDING_PROMPT_DELETE: 165,

    ONBOARDING_CREATE: 166,
    ONBOARDING_UPDATE: 167,

    HOME_SETTINGS_CREATE: 190,
    HOME_SETTINGS_UPDATE: 191
};

module.exports.AutoModerationActionTypes = {
    BLOCK_MESSAGE:            1,
    SEND_ALERT_MESSAGE:       2,
    TIMEOUT:                  3,
    BLOCK_MEMBER_INTERACTION: 4
};

module.exports.AutoModerationEventTypes = {
    MESSAGE_SEND:  1,
    MEMBER_UPDATE: 2
};

module.exports.AutoModerationKeywordPresetTypes = {
    PROFANITY:      1,
    SEXUAL_CONTENT: 2,
    SLURS:          3
};

module.exports.AutoModerationTriggerTypes = {
    KEYWORD:        1,
    SPAM:           3,
    KEYWORD_PRESET: 4,
    MENTION_SPAM:   5,
    MEMBER_PROFILE: 6
};

module.exports.ButtonStyles = {
    PRIMARY:   1,
    SECONDARY: 2,
    SUCCESS:   3,
    DANGER:    4,
    LINK:      5,
    PREMIUM:   6
};

module.exports.ChannelFlags = {
    PINNED:                      1 << 1,
    REQUIRE_TAG:                 1 << 4,
    HIDE_MEDIA_DOWNLOAD_OPTIONS: 1 << 15
};

module.exports.ChannelTypes = {
    GUILD_TEXT:          0,
    DM:                  1,
    GUILD_VOICE:         2,
    GROUP_DM:            3,
    GUILD_CATEGORY:      4,
    GUILD_ANNOUNCEMENT:  5,
    // (undocumented types skipped)
    ANNOUNCEMENT_THREAD: 10,
    PUBLIC_THREAD:       11,
    PRIVATE_THREAD:      12,
    GUILD_STAGE_VOICE:   13,
    GUILD_DIRECTORY:     14,
    GUILD_FORUM:         15,
    GUILD_MEDIA:         16
};

module.exports.ComponentTypes = {
    ACTION_ROW:         1,
    BUTTON:             2,
    STRING_SELECT:      3,
    TEXT_INPUT:         4,
    USER_SELECT:        5,
    ROLE_SELECT:        6,
    MENTIONABLE_SELECT: 7,
    CHANNEL_SELECT:     8
};

module.exports.ConnectionVisibilityTypes = {
    NONE:     0,
    EVERYONE: 1
};

module.exports.DefaultMessageNotificationLevels = {
    ALL_MESSAGES:  0,
    ONLY_MENTIONS: 1
};

module.exports.EntitlementOwnerTypes = {
    GUILD: 1,
    USER:  2
};

module.exports.EntitlementTypes = {
    PURCHASE:                 1,
    PREMIUM_SUBSCRIPTION:     2,
    DEVELOPER_GIFT:           3,
    TEST_MODE_PURCHASE:       4,
    FREE_PURCHASE:            5,
    USER_GIFT:                6,
    PREMIUM_PURCHASE:         7,
    APPLICATION_SUBSCRIPTION: 8
};

module.exports.ExplicitContentFilterLevels = {
    DISABLED:              0,
    MEMBERS_WITHOUT_ROLES: 1,
    ALL_MEMBERS:           2
};

module.exports.ForumLayoutTypes = {
    NOT_SET:      0,
    LIST_VIEW:    1,
    GALLERY_VIEW: 2
};

module.exports.GatewayOPCodes = {
    DISPATCH:                  0,
    HEARTBEAT:                 1,
    IDENTIFY:                  2,
    PRESENCE_UPDATE:           3,
    VOICE_STATE_UPDATE:        4,
    VOICE_SERVER_PING:         5,
    RESUME:                    6,
    RECONNECT:                 7,
    REQUEST_GUILD_MEMBERS:     8,
    INVALID_SESSION:           9,
    HELLO:                     10,
    HEARTBEAT_ACK:             11,
    // (undocumented op codes skipped)
    REQUEST_SOUNDBOARD_SOUNDS: 31
};

module.exports.GuildFeatures = [
    "ANIMATED_BANNER",
    "ANIMATED_ICON",
    "APPLICATION_COMMAND_PERMISSIONS_V2",
    "AUTO_MODERATION",
    "BANNER",
    "COMMUNITY",
    "CREATOR_MONETIZABLE_PROVISIONAL",
    "CREATOR_STORE_PAGE",
    "DEVELOPER_SUPPORT_SERVER",
    "DISCOVERABLE",
    "FEATURABLE",
    "INVITES_DISABLED",
    "INVITE_SPLASH",
    "MEMBER_VERIFICATION_GATE_ENABLED",
    "MORE_STICKERS",
    "NEWS",
    "PARTNERED",
    "PREVIEW_ENABLED",
    "RAID_ALERTS_DISABLED",
    "ROLE_ICONS",
    "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
    "ROLE_SUBSCRIPTIONS_ENABLED",
    "TICKETED_EVENTS_ENABLED",
    "VANITY_URL",
    "VERIFIED",
    "VIP_REGIONS",
    "WELCOME_SCREEN_ENABLED"
];

module.exports.GuildIntegrationExpireBehavior = {
    REMOVE_ROLE: 0,
    KICK:        1
};
module.exports.GuildIntegrationTypes = [
    "twitch",
    "youtube",
    "discord",
    "guild_subscription"
];

module.exports.GuildNSFWLevels = {
    DEFAULT:        0,
    EXPLICIT:       1,
    SAFE:           2,
    AGE_RESTRICTED: 3
};

module.exports.GuildScheduledEventEntityTypes = {
    STAGE_INSTANCE: 1,
    VOICE:          2,
    EXTERNAL:       3
};

module.exports.GuildScheduledEventPrivacyLevel = {
    GUILD_ONLY: 2
};

module.exports.GuildScheduledEventRecurrenceRuleFrequency = {
    YEARLY:  0,
    MONTHLY: 1,
    WEEKLY:  2,
    DAILY:   3
};

module.exports.GuildScheduledEventRecurrenceRuleWeekday = {
    MONDAY:    0,
    TUESDAY:   1,
    WEDNESDAY: 2,
    THURSDAY:  3,
    FRIDAY:    4,
    SATURDAY:  5,
    SUNDAY:    6
};

module.exports.GuildScheduledEventRecurrenceRuleMonth = {
    JANUARY:   1,
    FEBRUARY:  2,
    MARCH:     3,
    APRIL:     4,
    MAY:       5,
    JUNE:      6,
    JULY:      7,
    AUGUST:    8,
    SEPTEMBER: 9,
    OCTOBER:   10,
    NOVEMBER:  11,
    DECEMBER:  12
};

module.exports.GuildScheduledEventStatus = {
    SCHEDULED: 1,
    ACTIVE:    2,
    COMPLETED: 3,
    CANCELED:  4
};

module.exports.ImageFormats = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "gif"
];

module.exports.ImageSizeBoundaries = {
    MINIMUM: 16,
    MAXIMUM: 4096
};

const Intents = {
    guilds:                      1 << 0,
    guildMembers:                1 << 1,
    guildModeration:             1 << 2,
    guildExpressions:            1 << 3,
    /** @deprecated */
    guildEmojisAndStickers:      1 << 3,
    guildIntegrations:           1 << 4,
    guildWebhooks:               1 << 5,
    guildInvites:                1 << 6,
    guildVoiceStates:            1 << 7,
    guildPresences:              1 << 8,
    guildMessages:               1 << 9,
    guildMessageReactions:       1 << 10,
    guildMessageTyping:          1 << 11,
    directMessages:              1 << 12,
    directMessageReactions:      1 << 13,
    directMessageTyping:         1 << 14,
    messageContent:              1 << 15,
    guildScheduledEvents:        1 << 16,
    autoModerationConfiguration: 1 << 20,
    autoModerationExecution:     1 << 21,
    guildMessagePolls:           1 << 24,
    directMessagePolls:          1 << 25
};

Intents.allNonPrivileged
    = Intents.guilds
    | Intents.guildModeration
    | Intents.guildExpressions
    | Intents.guildIntegrations
    | Intents.guildWebhooks
    | Intents.guildInvites
    | Intents.guildVoiceStates
    | Intents.guildMessages
    | Intents.guildMessageReactions
    | Intents.guildMessageTyping
    | Intents.directMessages
    | Intents.directMessageReactions
    | Intents.directMessageTyping
    | Intents.guildScheduledEvents
    | Intents.autoModerationConfiguration
    | Intents.autoModerationExecution
    | Intents.guildMessagePolls
    | Intents.directMessagePolls;
Intents.allPrivileged
    = Intents.guildMembers
    | Intents.guildPresences
    | Intents.messageContent;
Intents.all = Intents.allNonPrivileged | Intents.allPrivileged;
module.exports.Intents = Intents;

module.exports.InteractionContextTypes = {
    GUILD:           0,
    BOT_DM:          1,
    PRIVATE_CHANNEL: 2
};

module.exports.InteractionResponseTypes = {
    PONG:                                    1,
    CHANNEL_MESSAGE_WITH_SOURCE:             4,
    DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE:    5,
    DEFERRED_UPDATE_MESSAGE:                 6,
    UPDATE_MESSAGE:                          7,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESULT: 8,
    MODAL:                                   9,
    PREMIUM_REQUIRED:                        10, // [DEPRECATED]
    LAUNCH_ACTIVITY:                         12
};

module.exports.InteractionTypes = {
    PING:                             1,
    APPLICATION_COMMAND:              2,
    MESSAGE_COMPONENT:                3,
    APPLICATION_COMMAND_AUTOCOMPLETE: 4,
    MODAL_SUBMIT:                     5
};

module.exports.InviteTargetTypes = {
    STREAM:               1,
    EMBEDDED_APPLICATION: 2
};

module.exports.InviteTypes = {
    GUILD:    0,
    GROUP_DM: 1,
    FRIEND:   2
};

module.exports.MFALevels = {
    NONE:     0,
    ELEVATED: 1
};

module.exports.MemberFlags = {
    DID_REJOIN:                      1 << 0,
    COMPLETED_ONBOARDING:            1 << 1,
    BYPASSES_VERIFICATION:           1 << 2,
    STARTED_ONBOARDING:              1 << 3,
    IS_GUEST:                        1 << 4,
    STARTED_HOME_ACTIONS:            1 << 5,
    COMPLETED_HOME_ACTIONS:          1 << 6,
    AUTOMOD_QUARANTINED_USERNAME:    1 << 7,
    DM_SETTINGS_UPSELL_ACKNOWLEDGED: 1 << 9
};

module.exports.MessageActivityTypes = {
    JOIN:         1,
    SPECTATE:     2,
    LISTEN:       3,
    JOIN_REQUEST: 5
};

module.exports.MessageFlags = {
    CROSSPOSTED:                            1 << 0,
    IS_CROSSPOST:                           1 << 1,
    SUPPRESS_EMBEDS:                        1 << 2,
    SOURCE_MESSAGE_DELETED:                 1 << 3,
    URGENT:                                 1 << 4,
    HAS_THREAD:                             1 << 5,
    EPHEMERAL:                              1 << 6,
    LOADING:                                1 << 7,
    FAILED_TO_MENTION_SOME_ROLES_IN_THREAD: 1 << 8,
    SUPPRESS_NOTIFICATIONS:                 1 << 12,
    IS_VOICE_MESSAGE:                       1 << 13
};

module.exports.MessageReferenceTypes = {
    DEFAULT: 0,
    FORWARD: 1
};

module.exports.MessageTypes = {
    DEFAULT:                                      0,
    RECIPIENT_ADD:                                1,
    RECIPIENT_REMOVE:                             2,
    CALL:                                         3,
    CHANNEL_NAME_CHANGE:                          4,
    CHANNEL_ICON_CHANGE:                          5,
    CHANNEL_PINNED_MESSAGE:                       6,
    USER_JOIN:                                    7,
    GUILD_BOOST:                                  8,
    GUILD_BOOST_TIER_1:                           9,
    GUILD_BOOST_TIER_2:                           10,
    GUILD_BOOST_TIER_3:                           11,
    CHANNEL_FOLLOW_ADD:                           12,
    GUILD_DISCOVERY_DISQUALIFIED:                 14,
    GUILD_DISCOVERY_REQUALIFIED:                  15,
    GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING: 16,
    GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING:   17,
    THREAD_CREATED:                               18,
    REPLY:                                        19,
    CHAT_INPUT_COMMAND:                           20,
    THREAD_STARTER_MESSAGE:                       21,
    GUILD_INVITE_REMINDER:                        22,
    CONTEXT_MENU_COMMAND:                         23,
    AUTO_MODERATION_ACTION:                       24,
    ROLE_SUBSCRIPTION_PURCHASE:                   25,
    INTERACTION_PREMIUM_UPSELL:                   26,
    STAGE_START:                                  27,
    STAGE_END:                                    28,
    STAGE_SPEAKER:                                29,
    STAGE_TOPIC:                                  31,
    GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:       32,
    GUILD_INCIDENT_ALERT_MODE_ENABLED:            36,
    GUILD_INCIDENT_ALERT_MODE_DISABLED:           37,
    GUILD_INCIDENT_REPORT_RAID:                   38,
    GUILD_INCIDENT_REPORT_FALSE_ALARM:            39,
    PURCHASE_NOTIFICATION:                        44,
    POLL_RESULT:                                  46
};

module.exports.MembershipState = {
    INVITED:  1,
    ACCEPTED: 2
};

module.exports.OnboardingModes = {
    ONBOARDING_DEFAULT:  0,
    ONBOARDING_ADVANCED: 1
};

module.exports.OnboardingPromptTypes = {
    MULTIPLE_CHOICE: 0,
    DROPDOWN:        1
};

module.exports.PermissionOverwriteTypes = {
    ROLE: 0,
    USER: 1
};

const Permissions = {
    createInstantInvite:              1n << 0n,
    kickMembers:                      1n << 1n,
    banMembers:                       1n << 2n,
    administrator:                    1n << 3n,
    manageChannels:                   1n << 4n,
    manageGuild:                      1n << 5n,
    addReactions:                     1n << 6n,
    viewAuditLog:                     1n << 7n,
    voicePrioritySpeaker:             1n << 8n,
    voiceStream:                      1n << 9n,
    viewChannel:                      1n << 10n,
    sendMessages:                     1n << 11n,
    sendTTSMessages:                  1n << 12n,
    manageMessages:                   1n << 13n,
    embedLinks:                       1n << 14n,
    attachFiles:                      1n << 15n,
    readMessageHistory:               1n << 16n,
    mentionEveryone:                  1n << 17n,
    useExternalEmojis:                1n << 18n,
    viewGuildInsights:                1n << 19n,
    voiceConnect:                     1n << 20n,
    voiceSpeak:                       1n << 21n,
    voiceMuteMembers:                 1n << 22n,
    voiceDeafenMembers:               1n << 23n,
    voiceMoveMembers:                 1n << 24n,
    voiceUseVAD:                      1n << 25n,
    changeNickname:                   1n << 26n,
    manageNicknames:                  1n << 27n,
    manageRoles:                      1n << 28n,
    manageWebhooks:                   1n << 29n,
    manageGuildExpressions:           1n << 30n, manageEmojisAndStickers:          1n << 30n, // [DEPRECATED]
    useApplicationCommands:           1n << 31n,
    voiceRequestToSpeak:              1n << 32n,
    manageEvents:                     1n << 33n,
    manageThreads:                    1n << 34n,
    createPublicThreads:              1n << 35n,
    createPrivateThreads:             1n << 36n,
    useExternalStickers:              1n << 37n,
    sendMessagesInThreads:            1n << 38n,
    startEmbeddedActivities:          1n << 39n,
    moderateMembers:                  1n << 40n,
    viewCreatorMonetizationAnalytics: 1n << 41n,
    useSoundboard:                    1n << 42n,
    createGuildExpressions:           1n << 43n,
    createEvents:                     1n << 44n,
    useExternalSounds:                1n << 45n,
    sendVoiceMessages:                1n << 46n,
    sendPolls:                        1n << 49n,
    useExternalApps:                  1n << 50n
};
Permissions.allGuild
    = Permissions.kickMembers
    | Permissions.banMembers
    | Permissions.administrator
    | Permissions.manageChannels
    | Permissions.manageGuild
    | Permissions.viewAuditLog
    | Permissions.viewGuildInsights
    | Permissions.changeNickname
    | Permissions.manageNicknames
    | Permissions.manageRoles
    | Permissions.manageWebhooks
    | Permissions.manageGuildExpressions
    | Permissions.manageEvents
    | Permissions.moderateMembers
    | Permissions.viewCreatorMonetizationAnalytics
    | Permissions.createGuildExpressions
    | Permissions.createEvents;
Permissions.allText
    = Permissions.createInstantInvite
    | Permissions.manageChannels
    | Permissions.addReactions
    | Permissions.viewChannel
    | Permissions.sendMessages
    | Permissions.sendTTSMessages
    | Permissions.manageMessages
    | Permissions.embedLinks
    | Permissions.attachFiles
    | Permissions.readMessageHistory
    | Permissions.mentionEveryone
    | Permissions.useExternalEmojis
    | Permissions.manageRoles
    | Permissions.manageWebhooks
    | Permissions.useApplicationCommands
    | Permissions.manageThreads
    | Permissions.createPublicThreads
    | Permissions.createPrivateThreads
    | Permissions.useExternalStickers
    | Permissions.sendMessagesInThreads
    | Permissions.sendVoiceMessages
    | Permissions.sendPolls
    | Permissions.useExternalApps;
Permissions.allVoice
    = Permissions.createInstantInvite
    | Permissions.manageChannels
    | Permissions.voicePrioritySpeaker
    | Permissions.voiceStream
    | Permissions.viewChannel
    | Permissions.voiceConnect
    | Permissions.voiceSpeak
    | Permissions.voiceMuteMembers
    | Permissions.voiceDeafenMembers
    | Permissions.voiceMoveMembers
    | Permissions.voiceUseVAD
    | Permissions.manageRoles
    | Permissions.voiceRequestToSpeak
    | Permissions.startEmbeddedActivities
    | Permissions.useExternalSounds
    | Permissions.useSoundboard;
Permissions.all = Permissions.allGuild | Permissions.allText | Permissions.allVoice;
module.exports.Permissions = Permissions;

module.exports.PollLayoutTypes = {
    DEFAULT: 1
};

module.exports.PremiumTiers = {
    NONE:   0,
    TIER_1: 1,
    TIER_2: 2,
    TIER_3: 3
};

module.exports.PremiumTypes = {
    NONE:          0,
    NITRO_CLASSIC: 1,
    NITRO:         2
};

module.exports.ReactionTypes = {
    NORMAL: 0,
    BURST:  1
};

module.exports.RoleConnectionMetadataTypes = {
    INTEGER_LESS_THAN_OR_EQUAL:     1,
    INTEGER_GREATER_THAN_OR_EQUAL:  2,
    INTEGER_EQUAL:                  3,
    INTEGER_NOT_EQUAL:              4,
    DATETIME_LESS_THAN_OR_EQUAL:    5,
    DATETIME_GREATER_THAN_OR_EQUAL: 6,
    BOOLEAN_EQUAL:                  7,
    BOOLEAN_NOT_EQUAL:              8
};

module.exports.RoleFlags = {
    IN_PROMPT: 1 << 0
};

module.exports.SKUFlags = {
    AVAILABLE:          1 << 2,
    GUILD_SUBSCRIPTION: 1 << 7,
    USER_SUBSRCIPTION:  1 << 8
};

module.exports.SKUTypes = {
    DURABLE:            2,
    CONSUMABLE:         3,
    SUBSCRIPTION:       5,
    SUBSCRIPTION_GROUP: 6
};

module.exports.StageInstancePrivacyLevel = {
    PUBLIC:     1, // [DEPRECATED]
    GUILD_ONLY: 2
};

module.exports.StickerFormats = {
    PNG:    1,
    APNG:   2,
    LOTTIE: 3,
    GIF:    4
};

module.exports.StickerTypes = {
    STANDARD: 1,
    GUILD:    2
};

module.exports.SubscriptionStatus = {
    ACTIVE:   0,
    ENDING:   1,
    INACTIVE: 2
};

module.exports.SystemChannelFlags = {
    SUPPRESS_JOIN_NOTIFICATIONS:                              1 << 0,
    SUPPRESS_PREMIUM_SUBSCRIPTIONS:                           1 << 1,
    SUPPRESS_GUILD_REMINDER_NOTIFICATIONS:                    1 << 2,
    SUPPRESS_JOIN_NOTIFICATION_REPLIES:                       1 << 3,
    SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS:        1 << 4,
    SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES: 1 << 5
};

module.exports.SystemJoinMessages = [
    "%user% joined the party.",
    "%user% is here.",
    "Welcome, %user%. We hope you brought pizza.",
    "A wild %user% appeared.",
    "%user% just landed.",
    "%user% just slid into the server.",
    "%user% just showed up!",
    "Welcome %user%. Say hi!",
    "%user% hopped into the server.",
    "Everyone welcome %user%!",
    "Glad you're here, %user%.",
    "Good to see you, %user%.",
    "Yay you made it, %user%!"
];

module.exports.TextComponentStyle = {
    SMALL:     1,
    PARAGRAPH: 2
};

module.exports.ThreadMemberFlags = {
    HAS_INTERACTED: 1 << 0,
    ALL_MESSAGES:   1 << 1,
    ONLY_MENTIONS:  1 << 2,
    NO_MESSAGES:    1 << 3
};

module.exports.ThreadSortingOrders = {
    LATEST_ACTIVITY: 0,
    CREATION_DATE:   1
};

module.exports.TextInputStyles = {
    SHORT:     1,
    PARAGRAPH: 2
};

module.exports.UserFlags = {
    NONE:                     0,
    STAFF:                    1 << 0,
    PARTNER:                  1 << 1,
    HYPESQUAD:                1 << 2,
    BUG_HUNTER_LEVEL_1:       1 << 3,
    HYPESQUAD_ONLINE_HOUSE_1: 1 << 6,
    HYPESQUAD_ONLINE_HOUSE_2: 1 << 7,
    HYPESQUAD_ONLINE_HOUSE_3: 1 << 8,
    PREMIUM_EARLY_SUPPORTER:  1 << 9,
    TEAM_PSEUDO_USER:         1 << 10,
    SYSTEM:                   1 << 12,
    BUG_HUNTER_LEVEL_2:       1 << 14,
    VERIFIED_BOT:             1 << 16,
    VERIFIED_DEVELOPER:       1 << 17,
    CERTIFIED_MODERATOR:      1 << 18,
    BOT_HTTP_INTERACTIONS:    1 << 19,
    SPAMMER:                  1 << 20,
    ACTIVE_DEVELOPER:         1 << 22
};

module.exports.VerificationLevels = {
    NONE:      0,
    LOW:       1,
    MEDIUM:    2,
    HIGH:      3,
    VERY_HIGH: 4
};

module.exports.VideoQualityModes = {
    AUTO: 1,
    FULL: 2
};

module.exports.VoiceChannelEffectAnimationTypes = {
    PREMIUM: 0,
    BASIC:   1
};

module.exports.VoiceOPCodes = {
    IDENTIFY:            0,
    SELECT_PROTOCOL:     1,
    READY:               2,
    HEARTBEAT:           3,
    SESSION_DESCRIPTION: 4,
    SPEAKING:            5,
    HEARTBEAT_ACK:       6,
    RESUME:              7,
    HELLO:               8,
    RESUMED:             9,
    CLIENTS_CONNECT:     11,
    CLIENT_DISCONNECT:   13
};

module.exports.WebhookTypes = {
    INCOMING:         1,
    CHANNEL_FOLLOWER: 2,
    APPLICATION:      3
};
