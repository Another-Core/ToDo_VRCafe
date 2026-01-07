export const footerTop = {
    location: {
        titleKey: "footer_location_title",
        title: "LOCATION",
        lines: ["Stationsplein 68", "2011 LM Haarlem"],
    },

    contact: {
        titleKey: "footer_contact_title",
        title: "CONTACT",
        items: [
            { key: "footer_contact_phone", label: "+31 (0)23 234 0606", href: "tel:+31232340606" },
            { key: "footer_contact_email", label: "info@vrcafehaarlem.nl", href: "mailto:info@vrcafehaarlem.nl" },
        ],
    },

    socials: {
        titleKey: "footer_social_title",
        title: "SEE MORE?",
        subtitleKey: "footer_social_subtitle",
        subtitle: "Follow us on social media",
        links: [
            { key: "footer_social_facebook", label: "Facebook", href: "#", icon: "facebook" },
            { key: "footer_social_instagram", label: "Instagram", href: "#", icon: "instagram" },
            { key: "footer_social_x", label: "X", href: "#", icon: "x" },
            { key: "footer_social_linkedin", label: "LinkedIn", href: "#", icon: "linkedin" },

            { key: "footer_social_youtube", label: "YouTube", href: "#", icon: "youtube" },
            { key: "footer_social_tiktok", label: "TikTok", href: "#", icon: "tiktok" },
            { key: "footer_social_discord", label: "Discord", href: "#", icon: "discord" },
            { key: "footer_social_twitch", label: "Twitch", href: "#", icon: "twitch" },
        ],
    },

    hours: {
        titleKey: "footer_hours_title",
        title: "OPENING HOURS",
        days: [
            { key: "footer_day_monday", label: "Monday:", valueKey: "footer_hours_monday", value: "On request" },
            { key: "footer_day_tuesday", label: "Tuesday:", valueKey: "footer_hours_tuesday", value: "10:00 - 22:00" },
            { key: "footer_day_wednesday", label: "Wednesday:", valueKey: "footer_hours_wednesday", value: "10:00 - 22:00" },
            { key: "footer_day_thursday", label: "Thursday:", valueKey: "footer_hours_thursday", value: "10:00 - 22:00" },
            { key: "footer_day_friday", label: "Friday:", valueKey: "footer_hours_friday", value: "10:00 - 22:00" },
            { key: "footer_day_saturday", label: "Saturday:", valueKey: "footer_hours_saturday", value: "10:00 - 22:00" },
            { key: "footer_day_sunday", label: "Sunday:", valueKey: "footer_hours_sunday", value: "10:00 - 20:00" },
        ],
    },

    newsletter: {
        titleKey: "footer_news_title",
        title: "BLIJF OP DE HOOGTE",
        placeholderKey: "footer_news_placeholder",
        placeholder: "E-mail",
        buttonKey: "footer_news_button",
        button: "ABONNEREN",

        ratingPrefixKey: "footer_rating_prefix",
        ratingPrefix: "Google",
        ratingValue: "4,8",
        stars: 5,
    },
};
