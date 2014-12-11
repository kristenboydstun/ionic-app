angular.module('starter.services', []).factory 'Events', ($http, $q) ->
  EVENT_API_ENDPOINT = 'http://localhost:3000/api/v1/events/'

  convertHTTPtoEventPromise = (promise, event) ->
    d = $q.defer()
    promise.then (response, event) ->
      event = {} if !event
      for key of response.data
        event[key] = response.data[key]
      d.resolve event
    , (response) ->
      d.reject response.data
    return d.promise

  return eventService = {
    adminKey: null

    currentEvent: {}

    saveEvent: (event, adminKey) ->
      if event.key
        return eventService.updateEvent(event, adminKey)
      else
        return eventService.createEvent(event)

    createEvent: (event) ->
      return convertHTTPtoEventPromise($http.post(EVENT_API_ENDPOINT, event))

    updateEvent: (event, adminKey) ->
      return convertHTTPtoEventPromise($http.put(EVENT_API_ENDPOINT+event.key+"?admin_key="+adminKey, event))
  
    getEvent: (key, adminKey) ->
      if key
        return eventService.getExistingEvent(key, adminKey)
      else
        return eventService.getNewEvent()

    getExistingEvent: (key, adminKey) ->
      if adminKey
        return convertHTTPtoEventPromise($http.get(EVENT_API_ENDPOINT+key + "?admin_key="+adminKey))
      else
        return convertHTTPtoEventPromise($http.get(EVENT_API_ENDPOINT+key))

    getNewEvent: () ->
      d = $q.defer()
      currentDate = new Date()
      roundedDate = currentDate.setMinutes(0)
      d.resolve {"title":null,"host_name":null,"host_email":null,"description":null,"start_date":roundedDate,"guest_count":null}
      return d.promise
  }
