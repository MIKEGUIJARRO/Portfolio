'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        capture_pageview: false,
        capture_pageleave: true
    })
}

export function PHProvider({ children }: { children: React.ReactNode }) {
    return (
        <PostHogProvider client={posthog}>
            {children}
        </PostHogProvider>
    )
}