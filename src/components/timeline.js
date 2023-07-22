import React from 'react'
import { Timeline } from 'flowbite-react';
import { TIcon } from '../../static/timelineicon.jpg'

export default function StepperTimeline() {
    return (
        <Timeline horizontal>
            <Timeline.Item>
                <Timeline.Point icon={TIcon} />
                <Timeline.Content>
                <Timeline.Title>
                    Flowbite Library v1.0.0
                </Timeline.Title>
                <Timeline.Time>
                    Released on December 2, 2021
                </Timeline.Time>
                <Timeline.Body>
                    Get started with dozens of web components and interactive elements.
                </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={TIcon} />
                <Timeline.Content>
                <Timeline.Title>
                    Flowbite Library v1.2.0
                </Timeline.Title>
                <Timeline.Time>
                    Released on December 23, 2021
                </Timeline.Time>
                <Timeline.Body>
                    Get started with dozens of web components and interactive elements.
                </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
  }