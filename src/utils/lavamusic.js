const { Structure } = require('erela.js');

module.exports = Structure.extend('Player', Player => {
    class lavaplayer extends Player {
        constructor(...args) {
            super(...args);
            this.speed = 1;
            this.pitch = 1;
            this.rate = 1;
            this._8d = false;
            this.nightcore = false;
            this.vaporwave = false;
            this.bassboost = false;
            this.distortion = false;


        }

        set8D(value) {
            if (typeof value !== "boolean") { throw new RangeError(`[ set8D Function Error ]: Please provide a valid value (true/false).`); }

            if (!this.filters) this.filters = true;
            this._8d = value;

            if (this._8d) {
                this.node.send({
                    op: "filters",
                    guildId: this.guild,
                    rotation: {
                        rotationHz: 0.2
                    }
                });
            } else {
                this.node.send({
                    op: "filters",
                    guildId: this.guild,
                    rotation: {
                        rotationHz: 0.0
                    }
                });
            };

            return this;
        }

        setSpeed(speed) {
            if (isNaN(speed)) { throw new RangeError('Player#setSpeed() Speed must be a number.'); }
            this.speed = Math.max(Math.min(speed, 5), 0.05);
            this.setTimescale(speed);
            return this;
        }

        setPitch(pitch) {
            if (isNaN(pitch)) { throw new RangeError('Player#setPitch() Pitch must be a number.'); }
            this.pitch = Math.max(Math.min(pitch, 5), 0.05);
            this.setTimescale(this.speed, pitch);
            return this;
        }

        setNightcore(nightcore) {
            if (typeof nightcore !== 'boolean') { throw new RangeError('Player#setNightcore() Nightcore can only be "true" or "false".'); }

            this.nightcore = nightcore;
            if (nightcore) {
                this.bassboost = false;
                this.distortion = false;
                this.vaporwave = false;
                this.setVaporwave(false);
                this.setBassboost(false);
                this.setDistortion(false);
                this.setTimescale(1.2999999523162842, 1.2999999523162842, 1);
            } else {
                this.setTimescale(1, 1, 1);
            }
            return this;
        }

        setVaporwave(vaporwave) {
            if (typeof vaporwave !== 'boolean') { throw new RangeError('Player#setVaporwave() Vaporwave can only be "true" or "false".'); }

            this.vaporwave = vaporwave;
            if (vaporwave) {
                this.nightcore = false;
                this.bassboost = false;
                this.distortion = false;
                this.setBassboost(false);
                this.setNightcore(false);
                this.setDistortion(false);
                this.setTimescale(0.8500000238418579, 0.800000011920929, 1);
            } else {
                this.setTimescale(1, 1, 1);
            }
            return this;
        }

        setDistortion(distortion) {
            if (typeof distortion !== 'boolean') { throw new RangeError('Player#setDistortion() Distortion can only be "true" or "false"'); }

            this.distortion = distortion;
            if (distortion) {
                this.nightcore = false;
                this.vaporwave = false;
                this.bassboost = false;
                this.setBassboost(false);
                this.setNightcore(false);
                this.setVaporwave(false);
                this.setDistort(0.5);
            } else {
                this.clearEffects();
            }
            return this;
        }

        setBassboost(bassboost) {
            if (typeof bassboost !== 'boolean') { throw new RangeError('Player#setBassboost() Bassboost can only be "true" or "false".'); }

            this.bassboost = bassboost;
            if (bassboost) {
                this.nightcore = false;
                this.vaporwave = false;
                this.setVaporwave(false);
                this.setNightcore(false);
                this.setEqualizer(1, 0.85);
            } else {
                this.clearEffects();
            }
            return this;
        }

        setDistort(value) {
            this.value = value || this.value;

            this.node.send({
                op: 'filters',
                guildId: this.guild,
                distortion: {
                    distortion: this.value,
                },
            });
            return this;
        }

        setEqualizer(band, gain) {
            this.band = band || this.band;
            this.gain = gain || this.gain;

            this.node.send({
                op: 'filters',
                guildId: this.guild,
                equalizer: [
                    {
                        band: this.band,
                        gain: this.gain,
                    },
                    {
                        band: this.band,
                        gain: this.gain,
                    },
                    {
                        band: this.band,
                        gain: this.gain,
                    },
                    {
                        band: this.band,
                        gain: this.gain,
                    },
                    {
                        band: this.band,
                        gain: this.gain,
                    },
                    {
                        band: this.band,
                        gain: this.gain,
                    },
                ],
            });
            return this;
        }

        setTimescale(speed, pitch, rate) {
            this.speed = speed || this.speed;
            this.pitch = pitch || this.pitch;
            this.rate = rate || this.rate;

            this.node.send({
                op: 'filters',
                guildId: this.guild,
                timescale: {
                    speed: this.speed,
                    pitch: this.pitch,
                    rate: this.rate,
                },
            });
            return this;
        }

        clearEffects() {
            this.speed = 1;
            this.pitch = 1;
            this.rate = 1;
            this.bassboost = false;
            this.nightcore = false;
            this.vaporwave = false;
            this.distortion = false;
            this.clearEQ();

            this.node.send({
                op: 'filters',
                guildId: this.guild,
            });
            return this;
        }
    }
    return lavaplayer;
});
